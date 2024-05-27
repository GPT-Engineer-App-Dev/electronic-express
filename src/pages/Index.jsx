import { Container } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </Container>
  );
};

export default Index;