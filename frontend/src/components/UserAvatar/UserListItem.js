import { ChatState } from "../../Context/ChatProvider";
import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";

// color palette
const primaryColor = "#0B0C10";
const secondaryColor = "#1F2833";
const greyColor = "#C5C6C7";
const blueOne = "#66FCF1";
const blueTwo = "#45A29E";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor={"pointer"}
      bg={primaryColor}
      _hover={{ background: blueTwo, color: "white" }}
      w={"100%"}
      display={"flex"}
      alignItems={"center"}
      color={"black"}
      px={3}
      py={2}
      mb={2}
      borderRadius={"lg"}
    >
      <Avatar
        mr={2}
        size={"sm"}
        cursor={"pointer"}
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text color={blueOne}>{user.name}</Text>
        <Text color={"white"} fontSize={"xs"}>
          <b>Email: </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
