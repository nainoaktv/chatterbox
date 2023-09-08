import React from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";

const primaryColor = "#0B0C10";
const secondaryColor = "#1F2833";
const greyColor = "#C5C6C7";
const blueOne = "#66FCF1";
const blueTwo = "#45A29E";

const ChatBox = () => {
  const { selectedChat } = ChatState();
  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems={"center"}
      flexDir={"column"}
      p={3}
      bg={secondaryColor}
      w={{ base: "100%", md: "68%" }}
      borderRadius={"lg"}
      borderWidth={"1px"}
      borderColor={blueTwo}
    >
      Single Chat
    </Box>
  );
};

export default ChatBox;
