import {
  Box,
  Heading,
  Text,
  Container,
  Flex,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const PrivacyPolicy = () => {
  const date = new Date().toDateString();

  return (
    <Container
      style={{ minHeight: "calc(100vh - 94px - 72px)" }}
      maxW="container.md"
      mt={10}
    >
      <Flex justifyContent={"center"} direction={"column"} align="center">
        <Heading color={"blue.600"} as={"h1"} size={"3xl"} mb={6}>
          Privacy Policy
        </Heading>
        <Box maxWidth="600px" textAlign="center" p={4}>
          <Text fontSize="xl" mb={4}>
            Privacy Policy for{" "}
            <Text as="span" color="teal.400">
              OrganizeHub
            </Text>{" "}
            Application
          </Text>
          <Text fontSize="xl" color="gray.5 00">
            Last Update: {date}
          </Text>
          <Text mt={4} fontSize="xl">
            OrganizeHub operates the{" "}
            <Text
              as="a"
              color="teal.400"
              href="https://www.organizehub.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.organizehub.com
            </Text>{" "}
            website. This page informs you of our policies regarding the
            collection, use, and disclosure of personal data when you use our
            Service and the choices you have associated with that data. We use
            your data to provide and improve the Service. By using the Service,
            you agree to the collection and use of information in accordance
            with this policy.
          </Text>
          <Text mt={4} fontSize="xl">
            <strong>Information Collection and Use</strong>
            <br />
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </Text>
          <Text mt={4} fontSize="xl">
            <strong>Types of Data Collected</strong>
            <br />
            <strong>Personal Data:</strong> While using our Service, we may ask
            you to provide us with certain personally identifiable information
            that can be used to contact or identify you . Personally
            identifiable information may include, but is not limited to:
            <List>
              <ListItem>
                <ListIcon as={InfoIcon} color="blue.500" />
                Email address
              </ListItem>
              <ListItem>
                <ListIcon as={InfoIcon} color="blue.500" />
                First name and last name
              </ListItem>
              <ListItem>
                <ListIcon as={InfoIcon} color="blue.500" />
                File Cookies
              </ListItem>
            </List>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default PrivacyPolicy;
