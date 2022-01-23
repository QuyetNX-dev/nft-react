import { Box, makeStyles, Typography } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import styles from "./style.module.scss";
import cn from "classnames/bind";
import _ from "lodash";

const cx = cn.bind(styles);

const useStyles = makeStyles((them) => ({
  titleTag: {
    width: 185,
    marginRight: 28,
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: "29px",
  },
}));

function Tag() {
  const tags = [
    "All",
    "Ethereum",
    "Solana",
    "Immutable X",
    "BSC",
    "Terra",
    "Arbitrum",
  ];
  const classes = useStyles();
  const history = useHistory();
  let activeTags = new URLSearchParams(useLocation().search).get("tags");

  if (activeTags) {
    activeTags = activeTags.split(",");
    activeTags = _.intersection(activeTags, tags);
    console.log(activeTags, "check");
  } else {
    activeTags = ["All"];
  }
  const handleChangeActive = (tag) => {
    if (tag === "All" && activeTags.includes("All")) return;

    if (tag !== "All" && activeTags.includes("All"))
      return history.push(`/?tags=${tag}`);

    let newActiveTags = [];

    if (activeTags.includes(tag)) {
      newActiveTags = activeTags.filter((i) => i !== tag);
    } else {
      newActiveTags = [...activeTags, tag];
    }
    if (newActiveTags.includes("All") || !newActiveTags.length) {
      return history.push("/");
    }
    history.push(`/?tags=${newActiveTags.join(",")}`);
  };

  return (
    <Box className={cx("block-tag")}>
      <Typography className={classes.titleTag}>NFT Ranking</Typography>
      <Box className={cx("block-tag__list")}>
        {tags.map((tag) => (
          <Box
            className={cx("item", activeTags.includes(tag) && "active")}
            key={tag}
            onClick={() => handleChangeActive(tag)}
          >
            {tag}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Tag;
