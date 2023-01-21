import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function Cart({ title, desc, date, i, id, x, type }) {
  function Deletefun(e) {
    let alldta = JSON.parse(localStorage.getItem(type)) || [];
    alldta.splice(e, 1);
    localStorage.setItem(type, JSON.stringify(alldta));
    alert("Delite Successful");
    window.location.reload();
  }

  function BookmarkData(x) {
    let dbookmark = JSON.parse(localStorage.getItem("dbookmark")) || [];
    localStorage.setItem("dbookmark", JSON.stringify([...dbookmark, x]));
    alert("Added to bookmark");
  }
  return (
    <Box
      boxShadow={"xl"}
      borderRadius={"10px"}
      bg={i % 2 === 0 ? "yellow.100" : "green.100"}
      padding={"10px"}
      width={"283px"}
      border={"1px solid black"}
    >
      <Text fontWeight={"500"} fontSize={"21px"} textAlign={"center"}>
        Title :- {title}
      </Text>
      <Text>Description :- {desc}</Text>
      <Text fontSize={"15px"} fontWeight={"500"}>
        Date :- {date}
      </Text>
      <Flex mt={"10px"} alignItems={"center"} justifyContent={"space-between"}>
        {type === "dbookmark" ? null : (
          <Text
            onClick={() => BookmarkData(x)}
            cursor={"pointer"}
            color={"blue"}
          >
            Bookmark
          </Text>
        )}

        <DeleteIcon onClick={() => Deletefun(i)} cursor={"pointer"} />
      </Flex>
    </Box>
  );
}
