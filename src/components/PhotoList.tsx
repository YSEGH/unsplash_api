import { Box, Grid } from "@mui/material";
import PhotoItem from "./Photo";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import PhotoBackdrop from "./PhotoBackdrop";

type Props = {
  photos: any[];
  favorites: any[];
  addToFavorite: (q: string, cb?: () => void) => void;
  setActivePhoto: (q: string) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PhotoList: React.FC<Props> = ({
  photos,
  favorites,
  addToFavorite,
  setActivePhoto,
  setOpen,
}) => {
  return (
    <Box paddingX={{ md: 4, sm: 2, xs: 1 }} paddingBottom={2}>
      <Grid
        container
        spacing={{ md: 2, sm: 2, xs: 1 }}
        sx={{ paddingLeft: { md: 0, sm: 0, xs: 0 }, width: 1 }}
      >
        <AnimatePresence>
          {photos.map((photo: any, i: number) => {
            return (
              <Grid
                key={`${photo.id}-${i}}`}
                item
                md={4}
                sm={6}
                xs={12}
                height={350}
              >
                <motion.div
                  style={{ height: "100%", backgroundColor: "grey" }}
                  transition={{
                    type: "spring",
                    duration: 0.5,
                    damping: 50,
                    stiffness: 300,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <PhotoItem
                    photo={photo}
                    setOpen={setOpen}
                    addToFavorite={addToFavorite}
                    setActivePhoto={setActivePhoto}
                    isActive={favorites.some(
                      (favorite: any) => favorite.id === photo.id
                    )}
                  />
                </motion.div>
              </Grid>
            );
          })}
        </AnimatePresence>
      </Grid>
      <ScrollToTop smooth />
      <PhotoBackdrop />
    </Box>
  );
};

export default PhotoList;
