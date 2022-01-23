import {
  Box,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "./component/SideBar/SideBar";
import "./style.scss";
import Notfound from "./views/Nodfound";
import Overview from "./views/Overview";
import { dark as darkTheme } from "./themes/dark.js";
import { light as lightTheme } from "./themes/light.js";

import useTheme from "hooks/useTheme";

function App() {
  // const isSmallerScreen = useMediaQuery("(max-width: 980px)");
  // const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [theme, toggleTheme, mounted] = useTheme();

  let themeMode = theme === "light" ? lightTheme : darkTheme;

  // useEffect(() => {
  //   themeMode = theme === "light" ? lightTheme : darkTheme;
  // }, [theme]);
  return (
    <ThemeProvider theme={themeMode}>
      {console.log("rerender")}
      <CssBaseline />
      <Box component="div" className="page-main">
        <Box component={"nav"} className="page-main__nav">
          <SideBar theme={theme} toggleTheme={toggleTheme} />
        </Box>
        <Box component={"main"} className="page-main__main">
          <Switch>
            <Route exact component={Overview} path="/" />
            <Route component={Notfound} path="*" />
          </Switch>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
