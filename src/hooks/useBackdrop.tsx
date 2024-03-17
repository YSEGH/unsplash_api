import { useState } from "react";

export const useBackdrop = () => {
  const [activePhoto, setActivePhoto] = useState(null);
  const [open, setOpen] = useState(false);

  return {
    activePhoto,
    open,
    setActivePhoto,
    setOpen,
  };
};
