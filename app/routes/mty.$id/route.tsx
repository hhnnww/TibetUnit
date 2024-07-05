import { Container, Stack } from "@mui/material";
import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { action } from "./action";
import { loader } from "./loader";
import { Model_顶部菜单 } from "./model-1-顶部菜单";
import { Model_面包屑 } from "./model-2-面包屑";
import { Model_问题模块 } from "./model-3-问题模块";
import { Model_回答模块 } from "./model-4-回答模块";
import { Model_底部模块 } from "./model-5-底部模块";
export { action, loader };

export default function Component() {
  const { ask_obj, comments_obj } = useLoaderData<typeof loader>();
  const saler = {
    name: "Gloria",
    erweima:
      "https://www.journey2tibet.com/wp-content/uploads/2024/07/01e715da4a776fd.jpg",
    whatapp: "+86 19980572645",
    email: " changhaowang911@gmail.com ",
  };
  return (
    <>
      <Model_顶部菜单 />

      <Container>
        <Stack spacing={4} py={4}>
          {ask_obj && (
            <>
              <Model_面包屑 title={ask_obj.title} />
              <Model_问题模块
                title={ask_obj.title}
                content={ask_obj.content}
                id={ask_obj.id}
                address={ask_obj.address}
                avatar={ask_obj.avatar}
                name={ask_obj.name}
                publish_date={ask_obj.publish_date}
              />
            </>
          )}

          {comments_obj && (
            <>
              {comments_obj.map((item) => (
                <Model_回答模块
                  {...item}
                  saler={saler.name}
                  whatapp={saler.whatapp}
                  key={item.id}
                />
              ))}
            </>
          )}
        </Stack>
      </Container>

      <Model_底部模块 />
    </>
  );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${data?.ask_obj && data.ask_obj.title} - tripadvisor` }];
};
