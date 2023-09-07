import { useState, useEffect } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import { Box, Button, Stack, Text, useToast } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ChatLoading from "./ChatLoading";
import { getSender } from "../config/ChatLogics";

const primaryColor = "#0B0C10";
const secondaryColor = "#1F2833";
const greyColor = "#C5C6C7";
const blueOne = "#66FCF1";
const blueTwo = "#45A29E";

const MyChats = () => {
  const [loggedUser, setLoggedUser] = useState();
  const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      console.log(data);
      setChats(data);
    } catch (err) {
      toast({
        title: "Error Occured!",
        description: "Failed to load chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, []);

  return (
    <Box
      display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir={"column"}
      alignItems={"center"}
      p={3}
      bg={secondaryColor}
      w={{ base: "100%", md: "31%" }}
      borderRadius={"lg"}
      borderWidth={"1px"}
      borderColor={blueTwo}
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily={"Montserrat"}
        display={"flex"}
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        My Chats
        <Button
          display={"flex"}
          fontSize={{ base: "17px", md: "10px", lg: "17px" }}
          rightIcon={<AddIcon />}
          _hover={{ bg: blueOne }}
        >
          New Group Chat
        </Button>
      </Box>

      <Box
        display={"flex"}
        flexDir={"column"}
        p={3}
        bg={primaryColor}
        w={"100%"}
        h={"100%"}
        borderRadius={"lg"}
        overflowY={"hidden"}
        fontFamily={"Montserrat"}
      >
        {chats ? (
          <Stack overflowY={"scroll"}>
            {chats.map((chat) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                cursor={"pointer"}
                bg={selectedChat === chat ? "white" : secondaryColor}
                color={selectedChat === chat ? primaryColor : blueOne}
                px={3}
                py={2}
                borderRadius={"lg"}
                key={chat._id}
              >
                <Text>
                  {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName}
                </Text>
              </Box>
            ))}
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  );
};

export default MyChats;
