import {
  Box,
  Flex,
  Text,
  Stack,
  Link,
  SwitchColor,
  useTranslation,
  SwitchLanguage,
  // handleSwitchLanguage,
} from "./index";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const handleSwitchLanguage = (language: string) =>
    i18n.changeLanguage(language);

  return (
    <Box
      zIndex={1000}
      boxShadow="0px 2px 10px 3px rgba(0, 0, 0, 0.5)"
      bg={"black.500"}
      p={4}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Stack direction={"row"} spacing={"15px"}>
          <SwitchColor />
          <SwitchLanguage
            onChange={handleSwitchLanguage}
            text1={"en"}
            text2={"ru"}
          />
        </Stack>
        <Text>© 2023 PyCodeX</Text>
        <nav>
          <Link to={"/privacypolicy"}>{t("PP.HEADING")}</Link>
        </nav>
      </Flex>
    </Box>
  );
};

export default Footer;
