import { Box, SvgIcon } from "@material-ui/core";
import Moon from "assets/icons/Moon";
import Sun from "assets/icons/Sun";
import "./styles.scss";

export default function ThemeSwitch({ theme, toggleTheme }) {
  return (
    <Box className="Switch-icon" onClick={(e) => toggleTheme(e)}>
      {theme === "light" ? (
        <SvgIcon component={Moon} />
      ) : (
        <SvgIcon component={Sun} />
      )}
    </Box>
  );
}
