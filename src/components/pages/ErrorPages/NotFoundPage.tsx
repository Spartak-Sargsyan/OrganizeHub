import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import notpage from "../../../assets/images/404.jpg";

const NotFoundPage = () => {
  return (
    // <Box>
    <Box
      textAlign="center"
      backgroundImage={notpage}
      backgroundSize={"100vw"}
      backgroundRepeat={"no-repeat"}
      height={"100vh"}
    >
      <Link to="/">
        <Button colorScheme="teal" size="lg">
          Go Home
        </Button>
      </Link>
    </Box>
    // </Box>
  );
};

export default NotFoundPage;
