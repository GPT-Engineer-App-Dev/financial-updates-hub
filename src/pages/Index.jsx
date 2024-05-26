import { Box, Container, Flex, Heading, HStack, VStack, Text, Image, Link } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [financialData, setFinancialData] = useState({
    stocks: [],
    indices: [],
    currencies: [],
  });

  useEffect(() => {
    // Fetch financial data here and update state
    // This is a placeholder for actual data fetching logic
    setFinancialData({
      stocks: [
        { name: "AAPL", price: 150.75 },
        { name: "GOOGL", price: 2750.50 },
      ],
      indices: [
        { name: "S&P 500", value: 4500.25 },
        { name: "Dow Jones", value: 35000.75 },
      ],
      currencies: [
        { pair: "USD/EUR", rate: 0.85 },
        { pair: "USD/JPY", rate: 110.25 },
      ],
    });
  }, []);

  return (
    <Container maxW="container.xl">
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between">
        <Heading size="md">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Markets</Link>
          <Link href="#">World</Link>
          <Link href="#">Opinion</Link>
        </HStack>
      </Flex>

      <Flex mt={4} direction={{ base: "column", md: "row" }}>
        <Box flex="3" p={4}>
          <Heading size="lg" mb={4}>Latest News</Heading>
          <VStack spacing={4} align="stretch">
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading size="md">News Headline 1</Heading>
                <Text mt={2}>Summary of the news article goes here...</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/800x400" alt="News Image" />
              <Box p={4}>
                <Heading size="md">News Headline 2</Heading>
                <Text mt={2}>Summary of the news article goes here...</Text>
              </Box>
            </Box>
          </VStack>
        </Box>

        <Box flex="1" p={4} bg="gray.100" borderRadius="lg" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading size="md" mb={4}>Financial Data</Heading>
          <Box mb={4}>
            <Heading size="sm">Stocks</Heading>
            {financialData.stocks.map((stock, index) => (
              <Text key={index}>{stock.name}: ${stock.price}</Text>
            ))}
          </Box>
          <Box mb={4}>
            <Heading size="sm">Indices</Heading>
            {financialData.indices.map((index, idx) => (
              <Text key={idx}>{index.name}: {index.value}</Text>
            ))}
          </Box>
          <Box>
            <Heading size="sm">Currencies</Heading>
            {financialData.currencies.map((currency, idx) => (
              <Text key={idx}>{currency.pair}: {currency.rate}</Text>
            ))}
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;