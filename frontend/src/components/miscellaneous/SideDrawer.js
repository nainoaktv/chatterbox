import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/layout";
import {
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { ChatState } from "../../Context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useDisclosure } from "@chakra-ui/hooks";

const montSub = "Montserrat Subrayada";
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

  const { user } = ChatState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={primaryColor}
        w={"100%"}
        p={"5px 10px 5px 10px"}
        borderWidth={"2px"}
        borderRadius={"3px"}
        borderColor={blueOne}
      >
        <Tooltip label="Search Users to Chat With" hasArrow placement="bottom">
          <Button
            variant={"ghost"}
            bg={blueOne}
            margin={"5px"}
            onClick={onOpen}
          >
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

        <Text fontFamily={montSub} fontSize={"4xl"} textAlign={"center"}>
          ChatterBox
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize={"2xl"} m={1} />
            </MenuButton>
            {/* <MenuList></MenuList> */}
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              bg={blueTwo}
              rightIcon={<ChevronDownIcon />}
            >
              <Avatar
                size={"sm"}
                cursor={"pointer"}
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList bg={primaryColor}>
              <ProfileModal user={user}>
                <MenuItem style={{ color: blueOne }} bg={primaryColor}>
                  My Profile
                </MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem
                style={{ color: blueOne }}
                bg={primaryColor}
                onClick={logoutHandler}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>Search Users</DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
