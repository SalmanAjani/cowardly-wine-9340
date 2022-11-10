import React, { useEffect, useState } from "react";
import { Container, Box, Heading, Grid, GridItem } from "@chakra-ui/react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);

  return (
    <>
      <Container
        maxW="6xl"
        centerContent
        border="1px solid black"
        marginTop="40px"
        marginBottom="50px"
      >
        <Box padding="14" color="black" maxW="md">
          There are many benefits to a joint design and development system. Not
          only does it bring benefits to the design team, but it also brings
          benefits to engineering teams. It makes sure that our experiences have
          a consistent look and feel, not just in our design specs, but in
          production.
        </Box>
      </Container>
      <Container maxW="6xl" centerContent>
        <Box marginBottom="20px">
          <Heading as="h4" size="lg">
            Fast Moving Products
          </Heading>
        </Box>
        <Box marginBottom="60px">
          <Grid templateColumns="repeat(5, 1fr)" gap={6} maxW="60%">
            {data
              .filter((item) => {
                return item.category === "smartphones";
              })
              .map((product) => (
                <GridItem w="300px" h="250px" bg="blue.500">
                  {product.title}
                </GridItem>
              ))}
          </Grid>
        </Box>
      </Container>
      <Container maxW="6xl" centerContent>
        <Box marginBottom="20px">
          <Heading as="h4" size="lg">
            Home Decor
          </Heading>
        </Box>
        <Box marginBottom="60px">
          <Grid templateColumns="repeat(5, 1fr)" gap={6} maxW="60%">
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
          </Grid>
        </Box>
      </Container>
      <Container maxW="6xl" centerContent>
        <Box marginBottom="20px">
          <Heading as="h4" size="lg">
            Small Appliances
          </Heading>
        </Box>
        <Box marginBottom="60px">
          <Grid templateColumns="repeat(5, 1fr)" gap={6} maxW="60%">
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
          </Grid>
        </Box>
      </Container>
      <Container maxW="6xl" centerContent>
        <Box marginBottom="20px">
          <Heading as="h4" size="lg">
            Watches
          </Heading>
        </Box>
        <Box marginBottom="60px">
          <Grid templateColumns="repeat(5, 1fr)" gap={6} maxW="60%">
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
          </Grid>
        </Box>
      </Container>
      <Container maxW="6xl" centerContent>
        <Box marginBottom="20px">
          <Heading as="h4" size="lg">
            Clothing
          </Heading>
        </Box>
        <Box marginBottom="60px">
          <Grid templateColumns="repeat(5, 1fr)" gap={6} maxW="60%">
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
            <GridItem w="300px" h="250px" bg="blue.500" />
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
