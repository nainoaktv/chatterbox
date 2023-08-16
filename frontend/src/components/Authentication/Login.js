import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const primaryColor = "#66FCF1";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  // const history = useHistory;

  const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    // setLoading(true);
    // if (!email || !password) {
    //   toast({
    //     title: "Please fill email and password",
    //     status: "warning",
    //     duration: 5000,
    //     isClosable: true,
    //     position: "bottom",
    //   });
    //   setLoading(false);
    //   return;
    // }
    // try {
    //   const config = {
    //     headers: {
    //       "Content-type": "application/json",
    //     },
    //   };
    //   const { data } = await axios.post(
    //     "/api/user/login",
    //     { email, password },
    //     config
    //   )
    // }
  };

  return (
    <VStack spacing={"5px"}>
      <FormControl id="email" isRequired>
        <FormLabel>E-Mail</FormLabel>
        <Input
          focusBorderColor={primaryColor}
          type="email"
          placeholder="chatterbox@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            focusBorderColor={primaryColor}
            type={show ? "text" : "password"}
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.5rem"} size={"sm"} onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        _hover={{ bg: primaryColor }}
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>

      <Button
        _hover={{ bg: primaryColor }}
        width={"100%"}
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Click to Login as Guest
      </Button>
    </VStack>
  );
};

export default Login;
