import React, { useContext } from "react";
import {
  Table,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  useDisclosure,
  Button,
  Center,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { checkout, removeFromCart } from "../Context/CartContext/action";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  let navigate = useNavigate();

  const handleCheckout = () => {
    dispatch(checkout());
    onClose();
    navigate("/checkout");
  };

  return (
    <>
      <Container maxW="8xl" margin="auto">
        <TableContainer marginTop="40px" border="1px solid black">
          <Table variant="simple">
            <Tr>
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <GridItem>
                  <Th fontSize="18px">Product</Th>
                </GridItem>
                <GridItem>
                  <Th fontSize="18px">Price</Th>
                </GridItem>
                <GridItem>
                  <Th fontSize="18px">Remove From Cart</Th>
                </GridItem>
              </Grid>
            </Tr>

            <Tbody>
              {state.map((cartItem) => (
                <Tr>
                  <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <GridItem>
                      <Td fontSize="20px">{cartItem.title}</Td>
                    </GridItem>
                    <GridItem>
                      <Td fontSize="20px">{cartItem.price}</Td>
                    </GridItem>
                    <GridItem>
                      <Td>
                        <Button
                          colorScheme="yellow"
                          onClick={() => dispatch(removeFromCart(cartItem.id))}
                        >
                          Remove From Cart
                        </Button>
                      </Td>
                    </GridItem>
                  </Grid>
                </Tr>
              ))}
            </Tbody>

            <Tfoot>
              <Tr>
                <Th textAlign="center" fontSize="18px" color="red.500">
                  {"Final Price"} :{" "}
                  {Math.round(state.reduce((a, c) => a + c.price, 0))}
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <Center>
          <Button
            onClick={onOpen}
            marginTop="20px"
            marginBottom="40px"
            colorScheme="teal"
          >
            Place Order
          </Button>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader
                  fontSize="lg"
                  fontWeight="bold"
                  textAlign="center"
                >
                  Order Item
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure you want to place this order?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={handleCheckout} ml={3}>
                    Yes
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Center>
      </Container>
    </>
  );
};

export default Cart;
