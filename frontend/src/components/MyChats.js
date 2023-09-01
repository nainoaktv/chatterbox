import React, { useState } from "react";
import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import { useToast } from "@chakra-ui/react";

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

  return <div>MyChats</div>;
};

export default MyChats;
