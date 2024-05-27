import { Box, Container, VStack, Text, Button, Flex, Heading, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">ElectroShop</Heading>
            <Flex>
              <Link href="#" mx={2}>Home</Link>
              <Link href="#" mx={2}>Products</Link>
              <Link href="#" mx={2}>About Us</Link>
              <Link href="#" mx={2}>Contact</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading as="h2" size="2xl" mb={4}>Welcome to ElectroShop</Heading>
          <Text fontSize="lg" mb={6}>Your one-stop shop for the latest electronics</Text>
          <Button colorScheme="blue" size="lg">Shop Now</Button>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h3" size="xl" mb={8} textAlign="center">Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 1" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 1</Heading>
                <Text mb={4}>High-quality electronic product</Text>
                <Button colorScheme="blue">Buy Now</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 2" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 2</Heading>
                <Text mb={4}>High-quality electronic product</Text>
                <Button colorScheme="blue">Buy Now</Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/300" alt="Product 3" />
              <Box p={6}>
                <Heading as="h4" size="md" mb={2}>Product 3</Heading>
                <Text mb={4}>High-quality electronic product</Text>
                <Button colorScheme="blue">Buy Now</Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="blue.800" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
            <Text mb={{ base: 4, md: 0 }}>© 2023 ElectroShop. All rights reserved.</Text>
            <Flex>
              <Link href="#" mx={2}><FaFacebook size="24" /></Link>
              <Link href="#" mx={2}><FaTwitter size="24" /></Link>
              <Link href="#" mx={2}><FaInstagram size="24" /></Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;