//Container-Flex-Hstack,Flex
import React from "react";
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
} from "@chakra-ui/react";
import logo from "../Data/final_logo.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const MiddleNavbar = () => {
  return (
    <Container maxW="70%" marginTop="13px">
      <Flex justifyContent="space-between">
        <HStack>
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
        </HStack>
        <HStack>
          <Box>
            <Link to="./login">
              <Button variant="link" color="black">
                LOGIN
              </Button>
            </Link>
          </Box>
          <Center height="20px" backgroundColor="black">
            <Divider orientation="vertical" />
          </Center>
          <Box>
            <Link to="./register">
              <Button variant="link" color="black">
                SIGN UP
              </Button>
            </Link>
          </Box>
        </HStack>
      </Flex>
    </Container>
  );
};

export default MiddleNavbar;
