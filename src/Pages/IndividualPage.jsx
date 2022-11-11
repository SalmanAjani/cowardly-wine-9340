import React from "react";
import { Box, Image, VStack, StackDivider } from "@chakra-ui/react";

const IndividualPage = ({ rating, price, title, thumbnail }) => {
  return (
    <Box>
      <VStack
        divider={<StackDivider borderColor="black" />}
        spacing={4}
        align="stretch"
      >
        <Box h="auto">
          {"Rating: "}
          {rating}
          {"/5"}
        </Box>
        <Box h="300px">
          <Image src={thumbnail} />
        </Box>
        <Box h="auto">{title}</Box>
        <Box h="auto">
          {"Price: "}
          {"$"}
          {price}
        </Box>

        <Box></Box>
      </VStack>
    </Box>
  );
};

export default IndividualPage;
