import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { SvgIcon } from "@material-ui/core";
import AvataIcon from "assets/icons/AvataIcon";
import ChainIcon from "assets/icons/ChainIcon";
import cn from "classnames/bind";
import styles from "./styles.module.scss";

const cx = cn.bind(styles);

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, chain, sales, averageSale, lo) {
  return { name, chain, sales, averageSale, lo };
}

const rows = [
  createData(
    { text: "Axie Infinity Project", avata: AvataIcon },
    ChainIcon,
    "$80.587",
    "$6.00",
    "3.717"
  ),
];
function TableComponent({ data }) {
  const classes = useStyles();
  return (
    <>
      <TableContainer className={cx("table")}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Chain</TableCell>
              <TableCell>Sales (24h)</TableCell>
              <TableCell>Average Sale (7day)</TableCell>
              <TableCell>Lo (7day)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} className={cx("row")}>
                <TableCell component="th" scope="row" className={cx("name")}>
                  <SvgIcon component={row.name.avata} />
                  {row.name.text}
                </TableCell>
                <TableCell>
                  <SvgIcon component={row.chain} />
                </TableCell>
                <TableCell>{row.sales}</TableCell>
                <TableCell>{row.averageSale}</TableCell>
                <TableCell>{row.lo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TableComponent;
