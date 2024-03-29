import ThemeSwitcherButton from "./ThemeSwitcherButton";
import { Grid } from "@mui/material";
import HomeButton from "./HomePageButton";
import FavoritesPageButton from "./FavoritesPageButton";

const Header = () => {
  return (
    <Grid
      container
      paddingX={{ md: 4, sm: 2, xs: 1 }}
      paddingY={2}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Grid item>
        <ThemeSwitcherButton />
      </Grid>
      <Grid
        item
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        gap={2}
      >
        <Grid item>
          <HomeButton />
        </Grid>
        <Grid item>
          <FavoritesPageButton />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
