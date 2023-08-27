import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/layout";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const Chatpage = () => {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box>
        {/* {user && <MyChats />} */}
        {/* {user && <ChatBox />}    */}
      </Box>
    </div>
  );
};

export default Chatpage;
