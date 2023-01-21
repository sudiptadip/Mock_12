import { Box, Flex, Grid, Link } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import AddNote from "../Components/AddNote";
import Cart from "../Components/Cart";

export default function Homepage() {
    const [data,setData] = useState(JSON.parse(localStorage.getItem("datatask")) || [])
  return (
    <Box>
      <Flex
        w={"100%"}
        h={"80px"}
        bg={"blue.400"}
        fontSize={"22px"}
        color={"white"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Link href="/">Home</Link>
        <Link href="/bookmark">Bookmark</Link>
      </Flex>
      <AddNote />
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={6}
        w={"100%"}
        // border={"1px solid black"}
        margin={"auto"}
        mt={"20px"}
        pl={"50px"}
        pr={"50px"}
      >
        {data.map((e, i) => (
          <Cart
            title={e.title}
            id={e.id}
            type={"datatask"}
            desc={e.description}
            x={e}
            date={e.date}
            i={i}
          />
        ))}
      </Grid>
    </Box>
  );
}
