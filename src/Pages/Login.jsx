import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Box,
  Heading,
  Link,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Container marginTop="40px" marginBottom="40px" textAlign="center">
      <Box marginBottom="30px">
        <Heading>Login</Heading>
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

        <FormControl marginTop="20px" marginBottom="20px">
          <Input type="submit" backgroundColor="teal" color="white" />
        </FormControl>

        <Box>
          <Link>Forgot Password?</Link>
        </Box>
        <Box marginTop="10px">
          <Link textDecoration="underline">New to Beanbuy? Sign Up</Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
