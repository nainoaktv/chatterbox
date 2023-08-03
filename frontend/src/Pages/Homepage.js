import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
        borderColor={"#45A29E"}
      >
        <Text color={"#C5C6C7"}>ChatterBox</Text>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default Homepage;
