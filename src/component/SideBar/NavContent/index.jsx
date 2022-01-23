import { Box, Link, SvgIcon, Typography } from "@material-ui/core";
import styles from "./style.scss";
import cn from "classnames/bind";
import logo from "../../../assets/logo.svg";

import { NavLink, useLocation } from "react-router-dom";
import Artsvg from "assets/icons/icon_nav/ArtSvg";
import CollectibleSvg from "assets/icons/icon_nav/CollectibleSvg";
import GameSvg from "assets/icons/icon_nav/GameSvg";
import OverviewSvg from "assets/icons/icon_nav/OverviewSvg";
import MetaverseSvg from "assets/icons/icon_nav/MetaverseSvg";
import UntilitySvg from "assets/icons/icon_nav/UtilitySvg";
import LogoSvg from "assets/LogoSvg";
import ThemeSwitch from "../ThemeSwitch";

const cx = cn.bind(styles);

const links = [
  {
    name: "Overview",
    icon: OverviewSvg,
    link: "/",
  },
  {
    name: "Collectible",
    icon: CollectibleSvg,
    link: "/collectible",
  },
  {
    name: "Metaverse",
    icon: MetaverseSvg,
    link: "/metaverse",
  },
  {
    name: "Game",
    icon: GameSvg,
    link: "/game",
  },
  {
    name: "Art",
    icon: Artsvg,
    link: "/art",
  },
  {
    name: "Utility",
    icon: UntilitySvg,
    link: "/utility",
  },
];

function NavContent({ theme, toggleTheme }) {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <Box className={cx("nav-content")}>
      <Box className={cx("nav-content__logo")}>
        <Box className={cx("logo")}>
          <SvgIcon component={LogoSvg} />
          <h1>TEADAO</h1>
        </Box>
      </Box>
      <Box className={cx("nav-content__group")}>
        <Box className={cx("nav-content__group__link")}>
          {links.map((item) => (
            <Link
              component={NavLink}
              to={item.link}
              className={cx(
                `button-dapp-menu ${item.link === currentUrl && "isActive"}`
              )}
              key={item.name}
            >
              <SvgIcon
                component={item.icon}
                stroke={item.link === currentUrl ? "#a91eff" : "white"}
              />
              <Typography variant="h6">{item.name}</Typography>
            </Link>
          ))}
        </Box>
        <Box className={cx("nav-content__group--social")}>
          <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
          <Box component={"a"} href="/#">
            Governance
          </Box>
          <Box component={"a"} href="/#">
            Docs
          </Box>
          <Box component={"a"} href="/#">
            Feedback
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NavContent;
