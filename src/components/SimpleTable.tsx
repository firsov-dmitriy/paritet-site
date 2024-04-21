import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@mui/material";

export type RowItem = {
  name: string;
  unit: string;
  price: number;
};

export interface IBasicTable {
  rows: RowItem[];
  title: string;
}
const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
});
function SimpleTable(props: IBasicTable) {
  const { rows, title } = props;
  return (
    <Box bgcolor="#f5f5f5" borderRadius="20px">
      <Typography py={5} variant="h6" align="center">
        {title}
      </Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, bgcolor: "#f5f5f5" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Наименование продукции</TableCell>
              <TableCell align="left">Единица измерения</TableCell>
              <TableCell align="left">Цена (руб.) с НДС</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.unit}</TableCell>
                <TableCell align="left">
                  {formatter.format(row.price)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default SimpleTable;
