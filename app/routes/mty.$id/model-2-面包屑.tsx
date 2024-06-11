import { Breadcrumbs, Container, Link } from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
export const Model面包屑 = (props: { title: string }) => {
  const bread_crumbs_list = ["home", "asia", "china", "tibet"];
  bread_crumbs_list.push(props.title);
  const bread_crumbs_element = bread_crumbs_list.map((item) => (
    <Link
      sx={{
        cursor: "pointer",
        fontWeight: 600,
        textTransform: "capitalize",
        fontSize: 13,
        color: "#000",
      }}
      color={"inherit"}
      underline="hover"
      key={item}
    >
      {item}
    </Link>
  ));
  return (
    <Container sx={{ py: 2 }}>
      <Breadcrumbs
        separator={
          <KeyboardArrowRightIcon sx={{ color: "#000", fontSize: 15 }} />
        }
      >
        {bread_crumbs_element}
      </Breadcrumbs>
    </Container>
  );
};
