import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
dotenv.config();

const basePath = "https://api.unsplash.com/search/photos";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    console.log("req SEARCH", req.query);

    try {
      const result = await axios.get(basePath, {
        params: {
          ...req.query,
          per_page: 30,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
      });

      if (result.data) {
        res.status(200).json(result.data);
      }
    } catch (e) {
      res
        .status(500)
        .send("Une erreur est survenue lors de la récupération des images.");
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
