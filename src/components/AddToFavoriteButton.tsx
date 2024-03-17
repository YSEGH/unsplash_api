import { PhotoContext } from "@/contexts/PhotoContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useContext, useState } from "react";

type Props = {
  isActive: boolean;
};

const AddToFavoriteButton: React.FC<Props> = ({ isActive }) => {
  const { photo, addToFavorite } = useContext(PhotoContext);
  const [inTransition, setInTransition] = useState(false);

  const addToFavoriteHandler = (e: React.MouseEvent) => {
    setInTransition(true);
    addToFavorite(photo, () => setInTransition(false));
    e.stopPropagation();
  };

  return (
    <IconButton
      aria-label="add to favorites"
      onClick={addToFavoriteHandler}
      sx={{ outline: "none", "&:focus": { outline: "none" } }}
    >
      <FavoriteIcon sx={{ color: isActive ? "red" : "#fff" }} />
      {inTransition ? (
        <span className="fas fa-circle-notch fa-spin"></span>
      ) : null}
    </IconButton>
  );
};

export default AddToFavoriteButton;
