import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaChartLine, FaGlobe, FaCommentDots } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <HStack spacing={8}>
          <Link href="/" fontSize="xl" fontWeight="bold">Financial Times</Link>
          <HStack spacing={4}>
            <Link href="/"><FaHome /> Home</Link>
            <Link href="/markets"><FaChartLine /> Markets</Link>
            <Link href="/world"><FaGlobe /> World</Link>
            <Link href="/opinion"><FaCommentDots /> Opinion</Link>
          </HStack>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        {/* Latest News Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="lg" mb={4}>Latest News</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/400x200" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 1</Heading>
                <Text mt={2}>Brief description of the news article...</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/400x200" alt="News Image" />
              <Box p={4}>
                <Heading as="h3" size="md">News Headline 2</Heading>
                <Text mt={2}>Brief description of the news article...</Text>
              </Box>
            </Box>
            {/* Add more news articles as needed */}
          </SimpleGrid>
        </Box>

        {/* Sidebar with Financial Data */}
        <Box flex="1" p={4} bg="gray.50" borderLeftWidth={{ md: "1px" }} borderTopWidth={{ base: "1px", md: "0" }}>
          <Heading as="h2" size="lg" mb={4}>Financial Data</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="white" borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">Stock Prices</Heading>
              <Text mt={2}>AAPL: $150.00</Text>
              <Text>GOOGL: $2800.00</Text>
              <Text>AMZN: $3400.00</Text>
            </Box>
            <Box p={4} bg="white" borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">Market Indices</Heading>
              <Text mt={2}>S&P 500: 4500.00</Text>
              <Text>Dow Jones: 35000.00</Text>
              <Text>Nasdaq: 15000.00</Text>
            </Box>
            <Box p={4} bg="white" borderWidth="1px" borderRadius="lg">
              <Heading as="h3" size="md">Currency Exchange Rates</Heading>
              <Text mt={2}>USD/EUR: 0.85</Text>
              <Text>USD/JPY: 110.00</Text>
              <Text>GBP/USD: 1.35</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;