import React from "react";
import {
  Heading,
  Flex,
  Box,
  Container,
  Button,
  Spacer,
  HStack,
  Center,
  Divider,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { EmailIcon } from "@chakra-ui/icons";

const TopNavbar = () => {
  return (
    <>
      <Container
        maxW="100%"
        backgroundColor="black"
        paddingTop="10px"
        paddingBottom="10px"
      >
        <Flex justifyContent="space-between" maxW="90%">
          <Box paddingLeft="30vw" margin="auto" textAlign="center">
            <Heading as="h5" size="sm" color="white" fontWeight={400}>
              Diwali Special offer on all Products use Coupon :
              <Text color="orange">"DIWALI22"</Text>
            </Heading>
          </Box>
          <Spacer />
          <HStack>
            <Button
              colorScheme="facebook"
              leftIcon={<FaFacebook />}
              paddingRight="0"
              paddingLeft="1.5"
              size="sm"
            />
            <Button
              colorScheme="linkedin"
              leftIcon={<FaLinkedin />}
              paddingRight="0"
              paddingLeft="1.5"
              size="sm"
            />
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Button leftIcon={<EmailIcon />} size="sm">
              NewsLetter
            </Button>
          </HStack>
        </Flex>
      </Container>
    </>
  );
};

export default TopNavbar;
