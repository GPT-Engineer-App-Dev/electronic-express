import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="brand.800" color="white" py={4} mt={10}>
      <Flex justifyContent="center" mb={4}>
        <Link href="https://facebook.com" isExternal mx={2}>
          <FaFacebook />
        </Link>
        <Link href="https://twitter.com" isExternal mx={2}>
          <FaTwitter />
        </Link>
        <Link href="https://instagram.com" isExternal mx={2}>
          <FaInstagram />
        </Link>
      </Flex>
      <Text textAlign="center">© 2023 Electronics Store. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;