import { TableCell, TableHead, TableRow } from "@mui/material";

export const Item表单头 = ({
  table_head_list,
}: {
  table_head_list: string[];
}) => {
  return (
    <TableHead sx={{ textTransform: "uppercase" }}>
      <TableRow>
        {table_head_list.map((item) => {
          return <TableCell key={item}>{item}</TableCell>;
        })}
      </TableRow>
    </TableHead>
  );
};
