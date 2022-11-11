import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Box,
  Heading,
  Grid,
  GridItem,
  Image,
  Button,
} from "@chakra-ui/react";
import IndividualPage from "./IndividualPage";
import { addToCart } from "../Context/CartContext/action";
import { CartContext } from "../Context/CartContext/CartContextProvider";

const Home = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(CartContext);

  const itemAlreadyExists = (id, cartItems) => {
    if (cartItems.find((item) => item.id === id)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  }, []);

  return (
    <>
      <Container maxW="6xl" centerContent marginTop="40px" marginBottom="50px">
        <Box maxW="5xl">
          <Image
            src="https://d64lkarmo2mrq.cloudfront.net/img/home/4544_500_off.webp"
            fit="fill"
          />
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
                <GridItem
                  p="20px"
                  w="300px"
                  h="auto"
                  textAlign="center"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <Box>
                    <IndividualPage key={product.id} {...product} />
                    <Button
                      colorScheme="yellow"
                      onClick={() => dispatch(addToCart(product))}
                      disabled={itemAlreadyExists(product.id, state)}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </GridItem>
              ))}
          </Grid>
        </Box>
      </Container>
      <Container maxW="6xl" centerContent>
        <Box marginBottom="20px">
          <Heading as="h4" size="lg">
            Furniture
          </Heading>
        </Box>
        <Box marginBottom="60px">
          <Grid templateColumns="repeat(5, 1fr)" gap={6} maxW="60%">
            {data
              .filter((item) => {
                return item.category === "furniture";
              })
              .map((product) => (
                <GridItem
                  p="20px"
                  w="300px"
                  h="auto"
                  textAlign="center"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <Box>
                    <IndividualPage key={product.id} {...product} />
                    <Button
                      colorScheme="yellow"
                      onClick={() => dispatch(addToCart(product))}
                      disabled={itemAlreadyExists(product.id, state)}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </GridItem>
              ))}
          </Grid>
        </Box>
      </Container>
      <Container maxW="6xl" centerContent>
        <Box marginBottom="20px">
          <Heading as="h4" size="lg">
            Sunglasses
          </Heading>
        </Box>
        <Box marginBottom="60px">
          <Grid templateColumns="repeat(5, 1fr)" gap={6} maxW="60%">
            {data
              .filter((item) => {
                return item.category === "sunglasses";
              })
              .map((product) => (
                <GridItem
                  p="20px"
                  w="300px"
                  h="auto"
                  textAlign="center"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <Box>
                    <IndividualPage key={product.id} {...product} />
                    <Button
                      colorScheme="yellow"
                      onClick={() => dispatch(addToCart(product))}
                      disabled={itemAlreadyExists(product.id, state)}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </GridItem>
              ))}
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
            {data
              .filter((item) => {
                return item.category === "mens-watches";
              })
              .map((product) => (
                <GridItem
                  p="20px"
                  w="300px"
                  h="auto"
                  textAlign="center"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <Box>
                    <IndividualPage key={product.id} {...product} />
                    <Button
                      colorScheme="yellow"
                      onClick={() => dispatch(addToCart(product))}
                      disabled={itemAlreadyExists(product.id, state)}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </GridItem>
              ))}
          </Grid>
        </Box>
      </Container>
      <Container maxW="6xl" centerContent>
        <Box marginBottom="20px">
          <Heading as="h4" size="lg">
            Jewellery
          </Heading>
        </Box>
        <Box marginBottom="60px">
          <Grid templateColumns="repeat(5, 1fr)" gap={6} maxW="60%">
            {data
              .filter((item) => {
                return item.category === "womens-jewellery";
              })
              .map((product) => (
                <GridItem
                  p="20px"
                  w="300px"
                  h="auto"
                  textAlign="center"
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  <Box>
                    <IndividualPage key={product.id} {...product} />
                    <Button
                      colorScheme="yellow"
                      onClick={() => dispatch(addToCart(product))}
                      disabled={itemAlreadyExists(product.id, state)}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </GridItem>
              ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
