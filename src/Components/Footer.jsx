import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Divider,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
  Container,
  Box,
  Heading,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Container maxW="100%" backgroundColor="gray.200" paddingTop="20px">
        <TableContainer maxW="70%" margin="auto" marginBottom="40px">
          <Table variant="unstyled" size="sm">
            <Thead>
              <Tr>
                <Th fontSize="lg" color="yellow.600">
                  OUR POLICIES
                </Th>
                <Th fontSize="lg" color="yellow.600">
                  CORPORATE
                </Th>
                <Th fontSize="lg" color="yellow.600">
                  HELP
                </Th>
                <Th fontSize="lg" color="yellow.600">
                  SELL WITH US
                </Th>
                <Th fontSize="lg" color="yellow.600">
                  SUBSCRIBE
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* 1st row */}
              <Tr>
                <Td>
                  <Link>Covid-19 Precautions</Link>
                </Td>
                <Td>
                  <Link>Sell With Us</Link>
                </Td>
                <Td>
                  <Link>How BeanBuy Works</Link>
                </Td>
                <Td>
                  <Link>General Information</Link>
                </Td>
                <Td>
                  <Input
                    placeholder="Enter Email"
                    borderColor="black"
                    variant="filled"
                    _hover={{ textDecoration: "none" }}
                  />
                </Td>
              </Tr>

              {/* 2nd row */}
              <Tr>
                <Td>
                  <Link>Our Promise</Link>
                </Td>
                <Td>
                  <Link>Career Opportunities</Link>
                </Td>
                <Td>
                  <Link>My Orders</Link>
                </Td>
                <Td>
                  <Link>Signup</Link>
                </Td>
                <Td>
                  <Button
                    backgroundColor="blue.300"
                    color="black"
                    _hover={{ textDecoration: "none" }}
                  >
                    Subscribe
                  </Button>
                </Td>
              </Tr>

              {/* 3rd row */}
              <Tr>
                <Td>
                  <Link>Terms & Conditions</Link>
                </Td>
                <Td>
                  <Link>Our Blog</Link>
                </Td>
                <Td>
                  <Link>Exchanges, Returns and Refunds</Link>
                </Td>
                <Td></Td>
                <Td>
                  <Button
                    colorScheme="facebook"
                    leftIcon={<FaFacebook />}
                    paddingRight="0"
                    paddingLeft="1.5"
                    size="sm"
                    marginRight="6px"
                  />
                  <Button
                    colorScheme="linkedin"
                    leftIcon={<FaLinkedin />}
                    paddingRight="0"
                    paddingLeft="1.5"
                    size="sm"
                    marginRight="6px"
                  />
                  <Button
                    colorScheme="whatsapp"
                    leftIcon={<FaWhatsapp />}
                    paddingRight="0"
                    paddingLeft="1.5"
                    size="sm"
                  />
                </Td>
              </Tr>

              {/* 4th row */}
              <Tr>
                <Td>
                  <Link>Customs tariffs and fees</Link>
                </Td>
                <Td>
                  <Link>Sitemap</Link>
                </Td>
                <Td>
                  <Link>Contact Us</Link>
                </Td>
              </Tr>

              {/* 5th row */}
              <Tr>
                <Td>
                  <Link>Privacy Policy</Link>
                </Td>
                <Td></Td>
                <Td>
                  <Link>FAQ</Link>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Divider borderColor="black" width="70%" margin="auto" />
        <Box padding="14" color="black" maxW="70%" margin="auto">
          <Heading as="h3" size="md" color="yellow.600" marginBottom="10px">
            Beanbuy Is Your One Stop Destination For Online Shopping
          </Heading>
          <Text marginBottom="22px">
            Beanbuy is a comprehensive platform for you to choose how you shop,
            whether it is buying instantly, waiting to save or to pick up your
            order from the store after freezing it.
            <br />
            Everyone will agree that it is not easy to go down to the market in
            massive traffic, driving through crowds, all striving for the same
            trendy clothing, expecting in line to try on the picked up items in
            the trial rooms, and finally deciding on the product you buy. Some
            people like to personally analyze the product before purchasing it
            in the store. Although some people do not like to shop online,
            others beg to differ by using the internet to do things. For all you
            internet enthusiasts who like online shopping,
          </Text>
          <Heading as="h3" size="md" color="yellow.600" marginBottom="10px">
            Get The Best Of Your Online Shopping Experience
          </Heading>
          <Text marginBottom="22px">
            Keeping mind the fact that everything is just a tap away in today's
            world, fashion and clothing have no escape from the cyberspace.
            Online shopping is made easier with various categories and filters
            that let you get the best result of what you're looking for. At
            Beanbuy.com we specialize in categorizing the required fields as per
            your convenience to provide you the best online shopping experience.
            Categories like Online shopping for kids, online shopping for men,
            online shopping for women, online shopping for accessories, etc. is
            curated to make this experience even more convenient. Find the Best
            Online Shopping in Hyderabad only at Beanbuy.
          </Text>
          <Heading as="h3" size="md" color="yellow.600" marginBottom="10px">
            Beanbuy Let You choose At Your Convenience
          </Heading>
          <Text>
            What if you belong to the former kind, where you like to buy the
            product from the shop after analyzing it personally? But don't want
            to miss out on a fantastic product in the process? We got your back!
            At Beanbuy.com, you can freeze the product and pick up from your
            neighboring store without the worry of missing the product. Another
            additional feature of this website is, you can wait and save on the
            products you like.
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
