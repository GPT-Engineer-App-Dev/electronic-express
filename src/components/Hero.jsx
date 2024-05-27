import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box bg="gray.100" py={20} textAlign="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          Welcome to the Best Electronics Store
        </Heading>
        <Text fontSize="lg">
          Discover the latest and greatest in electronics.
        </Text>
        <Button colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </VStack>
    </Box>
  );
};

export default Hero;