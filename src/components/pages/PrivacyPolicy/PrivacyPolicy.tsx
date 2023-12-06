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
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const date = new Date().toDateString();
  const { t } = useTranslation();
  return (
    <Container
      style={{ minHeight: "calc(100vh - 94px - 72px)" }}
      maxW="container.md"
      mt={10}
    >
      <Flex justifyContent={"center"} direction={"column"} align="center">
        <Heading color={"blue.600"} as={"h1"} size={"xl"} mb={6}>
          {t("PP.HEADING")}
        </Heading>
        <Box maxWidth="600px" textAlign="center" p={4}>
          <Text fontSize="xl" mb={4}>
            {t("PP.PP_APP")}
            <Text as="span" color="teal.400">
              OrganizeHub
            </Text>{" "}
            {t("PP.PP_APP_2")}
          </Text>
          <Text fontSize="xl" color="gray.5 00">
            {t("PP.UPDATE")}: {date}
          </Text>
          <Text mt={4} fontSize="xl">
            {t("PP.ABOUT.TWO")}
            <Text
              as="a"
              color="teal.400"
              href="https://www.organizehub.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("PP.ABOUT.URL")}
            </Text>{" "}
            {t("PP.ABOUT.ONE")}
          </Text>
          <Text mt={4} fontSize="xl">
            {t("PP.ABOUT_2.ONE")}
            <br />
            {t("PP.ABOUT_2.TWO")}
          </Text>
          <Text mt={4} fontSize="xl">
            {t("PP.ABOUT_3.ONE")}
            <br />
            {t("PP.ABOUT_3.TWO")}
          </Text>
          <List>
            <ListItem>
              <ListIcon as={InfoIcon} color="blue.500" />
              {t("PP.LIST.ONE")}
            </ListItem>
            <ListItem>
              <ListIcon as={InfoIcon} color="blue.500" />
              {t("PP.LIST.TWO")}
            </ListItem>
            <ListItem>
              <ListIcon as={InfoIcon} color="blue.500" />
              {t("PP.LIST.THREE")}
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Container>
  );
};

export default PrivacyPolicy;
