import { Box, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";

const products = [
  { id: 1, name: "Smartphone", image: "/images/smartphone.jpg", price: "$499" },
  { id: 2, name: "Laptop", image: "/images/laptop.jpg", price: "$999" },
  { id: 3, name: "Headphones", image: "/images/headphones.jpg", price: "$199" },
];

const FeaturedProducts = () => {
  return (
    <Box py={10}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Featured Products
      </Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={4}>
              <VStack spacing={2}>
                <Text fontSize="xl" fontWeight="bold">
                  {product.name}
                </Text>
                <Text color="gray.500">{product.price}</Text>
              </VStack>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedProducts;