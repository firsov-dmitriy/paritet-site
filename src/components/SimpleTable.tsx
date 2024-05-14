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
  brand?: string;
  concreteClass?: string;
  frostResistance?: string;
  waterResistance?: string;
  name?: string;
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
    <Box
      bgcolor="#f5f5f5"
      sx={{
        borderRadius: { xs: "12px", md: "20px" },
      }}
    >
      <Typography py={5} variant="h6" align="center">
        {title}
      </Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: { md: 650, xs: 320 }, bgcolor: "#f5f5f5" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              {!rows[0].waterResistance && <TableCell>Наименование</TableCell>}
              {rows[0].waterResistance && (
                <>
                  <TableCell>Марка бетона</TableCell>
                  <TableCell>Класс бетона</TableCell>
                  <TableCell>Морозостойкость</TableCell>
                  <TableCell>Водонепроницаемость</TableCell>
                </>
              )}
              <TableCell align="left">Единица измерения</TableCell>
              <TableCell align="left">Цена (руб.) с НДС</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name || row.brand}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {row.name && (
                  <TableCell
                    sx={{
                      padding: { xs: "8px", md: "16px" },
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                )}
                {row.brand && (
                  <TableCell
                    sx={{
                      padding: { xs: "8px", md: "16px" },
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.brand}
                  </TableCell>
                )}
                {row.concreteClass && (
                  <TableCell
                    sx={{
                      padding: { xs: "8px", md: "16px" },
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.concreteClass}
                  </TableCell>
                )}
                {row.frostResistance && (
                  <TableCell
                    sx={{
                      padding: { xs: "8px", md: "16px" },
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.frostResistance}
                  </TableCell>
                )}
                {row.waterResistance && (
                  <TableCell
                    sx={{
                      padding: { xs: "8px", md: "16px" },
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.waterResistance}
                  </TableCell>
                )}
                <TableCell
                  sx={{
                    width: { xs: "10px", md: "33%" },
                    padding: { xs: "8px", md: "16px" },
                  }}
                  align="left"
                >
                  {row.unit}
                </TableCell>
                <TableCell
                  sx={{
                    padding: { xs: "8px", md: "16px" },
                  }}
                  align="left"
                >
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
