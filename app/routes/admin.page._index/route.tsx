import { Table, Unstable_Grid2 } from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import { action } from "./action";
import { Item新建页面 } from "./item-新建页面";
import { Item表单内容 } from "./item-表单内容";
import { Item表单头 } from "./item-表单头";
import { Item页面标题 } from "./item-页面标题";
import { loader } from "./loader";
export { action, loader };

export default function Page() {
  const { all_page } = useLoaderData<typeof loader>();
  const tab_head_list = Object.keys(all_page[0]);
  tab_head_list.push("edit");
  tab_head_list.push("view");
  return (
    <Unstable_Grid2 container spacing={2}>
      <Item页面标题 />
      <Item新建页面 />

      <Unstable_Grid2 xs={12}>
        <Table>
          <Item表单头 table_head_list={tab_head_list} />
          <Item表单内容 table_list={all_page} />
        </Table>
      </Unstable_Grid2>
    </Unstable_Grid2>
  );
}
