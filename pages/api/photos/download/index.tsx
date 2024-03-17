import { NextApiRequest, NextApiResponse } from "next";
import archiver from "archiver";
import fs from "fs";
import axios from "axios";
import path from "path";

export const config = {
  api: {
    responseLimit: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log(req.body);

    try {
      // Créer un nouvel objet archiver
      const archive = archiver("zip", {
        zlib: { level: 9 }, // Niveau de compression maximal
      });

      // Liens de téléchargement des images
      const photos = req.body.map((photo: any) => photo);

      // Ajouter les images téléchargées à l'archive
      for (const photo of photos) {
        const response = await axios.get(photo.download, {
          responseType: "arraybuffer",
        });
        archive.append(response.data, { name: `${photo.id}.jpg` }); // Utilisez l'ID ou un nom unique pour chaque image
      }

      // Finaliser l'archive
      archive.finalize();

      // Créer un flux de sortie pour écrire le fichier ZIP
      const output = fs.createWriteStream(
        path.resolve(process.cwd(), "photos.zip")
      );

      // Écrire l'archive dans le fichier de sortie
      archive.pipe(output);

      // Gérer les événements de l'archive
      archive.on("warning", (err) => {
        if (err.code === "ENOENT") {
          console.warn("Warning: ", err);
        } else {
          throw err;
        }
      });

      archive.on("error", (err) => {
        throw err;
      });

      // Attendre la fin de l'écriture du fichier ZIP
      await new Promise<void>((resolve) => {
        output.on("close", () => {
          console.log("Archive créée avec succès");
          resolve();
        });
      });

      // Envoyer la réponse avec le fichier ZIP à télécharger
      const zipFilePath = path.resolve(process.cwd(), "photos.zip");
      console.log(zipFilePath);

      res.setHeader("Content-Disposition", 'attachment; filename="photos.zip"');
      res.setHeader("Content-Type", "application/zip");
      fs.createReadStream(zipFilePath).pipe(res);
    } catch (error) {
      console.error("Erreur lors de la création du fichier ZIP :", error);
      res.status(500).end("Erreur lors de la création du fichier ZIP");
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
