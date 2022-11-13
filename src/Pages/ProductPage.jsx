import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Heading, Image, Text, Button } from "@chakra-ui/react";
import { addToCart } from "../Context/CartContext/action";
import { CartContext } from "../Context/CartContext/CartContextProvider";

const getProductDetails = (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`);
};

const ProductPage = () => {
  const params = useParams();
  const { state, dispatch } = useContext(CartContext);

  const itemAlreadyExists = (id, cartItems) => {
    if (cartItems.find((item) => item.id === id)) {
      return true;
    }
    return false;
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProductDetails(params.id)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Container centerContent marginTop="40px" marginBottom="40px">
        <Heading marginBottom="20px">{data.title}</Heading>
        <Image src={data.thumbnail} alt={data.title}></Image>
        <Text fontSize="20px" marginTop="20px">
          {"Price "}
          {" : "}
          {"$"}
          {data.price}
        </Text>
        <Text fontSize="20px" marginBottom="20px">
          {"Rating "}
          {" : "}
          {data.rating}
          {"/5"}
        </Text>
        <Button
          colorScheme="yellow"
          onClick={() => dispatch(addToCart(data))}
          disabled={itemAlreadyExists(data.id, state)}
        >
          Add To Cart
        </Button>
      </Container>
    </div>
  );
};

export default ProductPage;
