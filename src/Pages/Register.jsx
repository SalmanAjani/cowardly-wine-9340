import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Box,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [registerDetails, setRegisterDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetails({ ...registerDetails, [name]: value });
  };

  const handleRegister = () => {
    axios({
      method: "POST",
      url: "https://dummyjson.com/users/add",
      data: registerDetails,
    })
      .then((res) => {
        alert("Registration Successfull, You can Login now");
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  const { email, password } = registerDetails;

  return (
    <Container marginTop="40px" marginBottom="40px" textAlign="center">
      <Box marginBottom="30px">
        <Heading>Register</Heading>
      </Box>
      <Box textAlign="center">
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            borderColor="black"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            borderColor="black"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl marginTop="20px" marginBottom="20px">
          <Input
            type="submit"
            backgroundColor="teal"
            color="white"
            onClick={handleRegister}
            cursor="pointer"
          />
        </FormControl>

        <Box marginTop="10px" marginBottom="15px">
          <Link textDecoration="underline">
            Already have an account? Log In!
          </Link>
        </Box>

        <Box>
          <Text color="red">
            By signing up, you agree to our Terms of Use & Privacy Policy
          </Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
