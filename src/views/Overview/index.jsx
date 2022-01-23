import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  makeStyles,
  SvgIcon,
} from "@material-ui/core";

import { format } from "date-fns";

import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import cn from "classnames/bind";

import catchAsync from "../../utlist/catchAsyn";
import { bigNumber } from "../../utlist/formatNumber";
import styles from "./index-style.scss";
import Chart from "./component/Chart";
import Slide from "./component/Slide";
import { ImgOverview } from "contants/Image";
import Tag from "./component/Tag";
import TableComponent from "./component/Table";

const cx = cn.bind(styles);

const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
  },
  input: {
    background: "#211A2A",
    borderRadius: "16px",
    maxWidth: "528px",
    width: "100%",
    height: "48px",
    color: "#fff",
  },
  colorIcon: {
    fill: "#fff",
  },
}));

function Overview() {
  const [loading, setLoading] = useState();
  const chartData = useRef();
  const stats = useRef();
  const classes = useStyles();
  useEffect(() => {
    getDataOverview();
  }, []);
  const getDataOverview = () => {
    catchAsync(async () => {
      const res = await axios.get("http://128.199.110.144:9000/v1/overview");

      chartData.current = res.data.history.map((item) => {
        return {
          name: format(new Date(item[0] * 1000), "MMM dd"),
          value: item[1],
        };
      });
      stats.current = {
        totalVolume: res.data.totalVolume,
        dailyVolume: res.data.dailyVolume,
        change24h: res.data.change24h,
      };
      setLoading(true);
    });
  };
  return (
    <Box component={"div"} className="overview">
      <Box className="overview__header">
        <h2 className="overview__header--title">GameFi Pulse</h2>
        <TextField
          variant="outlined"
          className={classes.input}
          placeholder="Search NFTs, GameFI projects, ..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={classes.colorIcon} />
              </InputAdornment>
            ),
            classes: { notchedOutline: classes.noBorder },
            style: {
              height: 48,
              color: "#fff",
            },
          }}
        />
      </Box>
      <Box className="overview__chart">
        <Box className={cx("left")}>
          <Box className={cx("text")}>
            <Typography variant="h6">Daily volume USD</Typography>
            <Typography variant="h2">
              {stats.current && `$${bigNumber(stats.current.dailyVolume)}`}
            </Typography>
            <Typography variant="h6">
              {format(new Date(), "MMM dd,yyyy")}
            </Typography>
          </Box>
          <Box className={cx("block-chart")}>
            {chartData.current && <Chart data={chartData.current} />}
          </Box>
        </Box>
        <Box className={cx("right-stats")}>
          <Box className={cx("card")}>
            <Typography variant="h6">Total volume</Typography>
            <Typography variant="h2" className={cx("number")}>
              {stats.current && `$${bigNumber(stats.current.totalVolume)}`}
            </Typography>
          </Box>
          <Box className={cx("card")}>
            <Typography variant="h6">Daily volume</Typography>
            <Typography variant="h2" className={cx("number")}>
              {stats.current && `$${bigNumber(stats.current.dailyVolume)}`}
            </Typography>
          </Box>
          <Box className={cx("card")}>
            <Typography variant="h6">Change 24h</Typography>
            <Typography variant="h2" className={cx("number")}>
              {stats.current && `$${bigNumber(stats.current.change24h)}`}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="overview__slide">
        <Box className="left">
          <img src={ImgOverview.IconArrow} alt="" />
          <Typography variant="h3">Highest 7-days sales</Typography>
        </Box>
        <Box className="right">
          <Slide />
        </Box>
      </Box>
      <Tag />
      <TableComponent />
    </Box>
  );
}

export default Overview;
