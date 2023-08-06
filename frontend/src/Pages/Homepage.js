import React from "react";
import {
  Container,
  Box,
  Text,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tab,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

// Fonts
const montSub = "Montserrat Subrayada";
// const montReg = "Montserrat";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d={"flex"}
        justifyContent={"center"}
        p={3}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px"}
        borderColor={"#45A29E"}
      >
        <Text fontFamily={montSub} fontSize={"4xl"} textAlign={"center"}>
          ChatterBox
        </Text>
      </Box>
      <Box
        w={"100%"}
        p={"4"}
        borderRadius={"lg"}
        borderWidth={"1px"}
        borderColor={"#45A29E"}
      >
        {/* @TODO: Find information on how to change tabs color theme */}
        <Tabs isFitted variant="enclosed" borderColor={"#66FCF1"}>
          <TabList mb="1em">
            <Tab
              _selected={{ color: "#66FCF1", borderColor: "#66FCF1" }}
              fontFamily={montSub}
            >
              LOGIN
            </Tab>
            <Tab
              _selected={{ color: "#66FCF1", borderColor: "#66FCF1" }}
              fontFamily={montSub}
            >
              SIGN-UP
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
