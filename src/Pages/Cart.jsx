import React, { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
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
} from "@chakra-ui/react";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { checkout, removeFromCart } from "../Context/CartContext/action";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const handleCheckout = () => {
    dispatch(checkout());
    onClose();
  };

  return (
    <>
      <Container maxW="6xl">
        <TableContainer>
          <Table variant="simple">
            <TableCaption>No Exchange</TableCaption>
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Remove From Cart</Th>
              </Tr>
            </Thead>
            <Tbody>
              {state.map((cartItem) => (
                <Tr>
                  <Td>{cartItem.title}</Td>
                  <Td>{cartItem.price}</Td>
                  <Td>
                    <Button
                      onClick={() => dispatch(removeFromCart(cartItem.id))}
                    >
                      Remove From Cart
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Final Price</Th>
                <Th>{Math.round(state.reduce((a, c) => a + c.price, 0))}</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <Center>
          <Button onClick={onOpen}>Place Order</Button>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Customer
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
