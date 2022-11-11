import React from "react";
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

const Login = () => {
  return (
    <Container marginTop="40px" marginBottom="40px" textAlign="center">
      <Box marginBottom="30px">
        <Heading>Register</Heading>
      </Box>
      <Box textAlign="center">
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" borderColor="black" />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" borderColor="black" />
        </FormControl>

        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" borderColor="black" />
        </FormControl>

        <FormControl marginTop="20px" marginBottom="20px">
          <Input type="submit" backgroundColor="teal" color="white" />
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

export default Login;
