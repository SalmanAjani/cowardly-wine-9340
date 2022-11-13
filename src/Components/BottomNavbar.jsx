import React from "react";
import { Container, HStack, Divider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <>
      <Container maxW="70%" centerContent marginTop="15px" marginBottom="1rem">
        <HStack spacing="30px">
          <Link
            to="/moreinfo"
            style={{ border: "1px solid black", padding: "4px" }}
          >
            Categories
          </Link>
          <Link
            to="/moreinfo"
            style={{ border: "1px solid black", padding: "4px" }}
          >
            Flash Sales
          </Link>
          <Link
            to="/moreinfo"
            style={{ border: "1px solid black", padding: "4px" }}
          >
            Best Deals
          </Link>
          <Link
            to="/moreinfo"
            style={{ border: "1px solid black", padding: "4px" }}
          >
            Shop By Brand
          </Link>
          <Link
            to="/moreinfo"
            style={{ border: "1px solid black", padding: "4px" }}
          >
            Trending
          </Link>
          <Link
            to="/moreinfo"
            style={{ border: "1px solid black", padding: "4px" }}
          >
            New Arrivals
          </Link>
        </HStack>
      </Container>
      <Divider borderColor="black" />
    </>
  );
};

export default BottomNavbar;
