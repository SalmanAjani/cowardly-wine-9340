import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Box,
  Heading,
  Link,
  Alert,
  AlertDescription,
} from "@chakra-ui/react";
import {
  loginSuccessAction,
  loginFailureAction,
  loginLoadingAction,
} from "../Context/AuthContext/action";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLogin = () => {
    dispatch(loginLoadingAction());
    axios({
      method: "POST",
      url: "https://reqres.in/api/login",
      data: loginDetails,
    })
      .then((res) => {
        dispatch(loginSuccessAction(res.data.token));
      })
      .catch(() => {
        dispatch(loginFailureAction());
      });
  };

  if (state.isAuth) {
    return <Navigate to="/" />;
  }

  if (state.isError) {
    return (
      <Container>
        <Alert status="error">
          <AlertDescription>
            Something Went Wrong, Please Refresh.
          </AlertDescription>
        </Alert>
      </Container>
    );
  }

  const { email, password } = loginDetails;

  return (
    <Container marginTop="40px" marginBottom="40px" textAlign="center">
      <Box marginBottom="30px">
        <Heading>Login</Heading>
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
            onClick={handleLogin}
            isLoading={state.isLoading}
            cursor="pointer"
          />
        </FormControl>

        <Box>
          <Link>Forgot Password?</Link>
        </Box>
        <Box marginTop="10px">
          <Link textDecoration="underline" color="red">
            New to Beanbuy? Sign Up
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
