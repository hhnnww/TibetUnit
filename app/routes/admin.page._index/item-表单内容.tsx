import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { IconButton, TableBody, TableCell, TableRow } from "@mui/material";
import { Link } from "@remix-run/react";

export const Item表单内容 = ({
  table_list,
}: {
  table_list: {
    id: number;
    title: string;
  }[];
}) => {
  return (
    <TableBody>
      {table_list.map((item) => {
        return (
          <TableRow key={item.id}>
            {Object.entries(item).map(([k, v]) => {
              return (
                <TableCell sx={{ width: k !== "title" ? 80 : "100%" }} key={k}>
                  {v}
                </TableCell>
              );
            })}
            <TableCell>
              <IconButton
                title="编辑"
                component={Link}
                to={`/admin/page/edit/${item.id}`}
              >
                <ModeEditIcon />
              </IconButton>
            </TableCell>
            <TableCell>
              <IconButton component={Link} to={`/maotuying/${item.id}`}>
                <VisibilityIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};
