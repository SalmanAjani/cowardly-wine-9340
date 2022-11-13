//Container-Flex-Hstack,Flex
import React, { useContext } from "react";
import {
  Container,
  Flex,
  HStack,
  Box,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  Icon,
  Center,
  Divider,
  Button,
  Text,
} from "@chakra-ui/react";
import logo from "../Data/final_logo.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { loginLogoutAction } from "../Context/AuthContext/action";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

const MiddleNavbar = () => {
  const { state, dispatch } = useContext(AuthContext);
  let navigate = useNavigate();

  const handleClick = () => {
    dispatch(loginLogoutAction());
    navigate("/logout");
  };

  return (
    <Container maxW="70%" marginTop="20px">
      <Flex justifyContent="space-between">
        <Box>
          <Link to="/">
            <Image src={logo} alt="logo" boxSize="45px" width="100%"></Image>
          </Link>
        </Box>
        <Box className="search">
          <InputGroup size="md" borderColor="black" centerContent>
            <Input
              placeholder="Search"
              htmlSize={50}
              _hover={{ borderColor: "black" }}
            />
            <InputRightElement>
              <Icon as={FaSearch} color="yellow.500" w={5} h={5} />
            </InputRightElement>
          </InputGroup>
        </Box>

        <HStack>
          <Box>
            {state.isAuth ? (
              <Text fontSize="18px" fontWeight="500" color="red">
                Eve
              </Text>
            ) : (
              <Link to="./login">
                <Button variant="link" color="black">
                  LOGIN
                </Button>
              </Link>
            )}
          </Box>
          <Center height="20px" backgroundColor="black">
            <Divider orientation="vertical" />
          </Center>
          <Box>
            {state.isAuth ? (
              <Button variant="link" color="black" onClick={handleClick}>
                LOGOUT
              </Button>
            ) : (
              <Link to="./register">
                <Button variant="link" color="black">
                  SIGN UP
                </Button>
              </Link>
            )}
          </Box>
          <Center height="20px" backgroundColor="black">
            <Divider orientation="vertical" />
          </Center>
          <Box>
            <Link to="./cart">
              <Button variant="link" color="black">
                CART
              </Button>
            </Link>
          </Box>
        </HStack>
      </Flex>
    </Container>
  );
};

export default MiddleNavbar;
