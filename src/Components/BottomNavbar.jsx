import React from "react";
import { Container, HStack, Box } from "@chakra-ui/react";

const BottomNavbar = () => {
  return (
    <Container maxW="70%" centerContent marginTop="15px">
      <HStack spacing="30px">
        <Box>Categories</Box>
        <Box>Flash Sales</Box>
        <Box>Best Deals</Box>
        <Box>Shop By Brand</Box>
        <Box>Trending</Box>
        <Box>New Arrivals</Box>
      </HStack>
    </Container>
  );
};

export default BottomNavbar;
