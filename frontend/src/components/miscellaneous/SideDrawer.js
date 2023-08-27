import React, { useState } from "react";
import { Box } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <>
      <Box>
        <Tooltip label="Search Users to chat with" hasArrow placement="bottom">
          <Button variant={"ghost"}></Button>
        </Tooltip>
      </Box>
    </>
  );
};

export default SideDrawer;
