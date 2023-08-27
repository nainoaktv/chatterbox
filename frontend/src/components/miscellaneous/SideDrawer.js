import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";

const primaryColor = "#0B0C10";
const secondaryColor = "#1F2833";
const greyColor = "#C5C6C7";
const blueOne = "#66FCF1";
const blueTwo = "#45A29E";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={secondaryColor}
        w={"100%"}
        p={"5px 10px 5px 10px"}
        borderWidth={"2px"}
        borderRadius={"3px"}
        borderColor={blueOne}
      >
        <Tooltip label="Search Users to Chat With" hasArrow placement="bottom">
          <Button variant={"ghost"} bg={blueOne} margin={"5px"}>
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ color: secondaryColor }}
            ></i>
            <Text
              display={{ base: "none", md: "flex" }}
              px={"4"}
              color={secondaryColor}
            >
              Search User
            </Text>
          </Button>
        </Tooltip>
      </Box>
    </>
  );
};

export default SideDrawer;
