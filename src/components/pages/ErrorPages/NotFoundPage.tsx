import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      style={{ minHeight: "calc(91vh - 92px - 60px)" }}
      textAlign="center"
      mt={8}
    >
      <Text fontSize="4xl" fontWeight="bold">
        404 - Not Found
      </Text>
      <Text fontSize="xl" mt={4}>
        Oops! The page you're looking for doesn't exist.
      </Text>
      <Box mt={8}>
        <Link to="/">
          <Button colorScheme="teal" size="lg">
            Go Home
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
