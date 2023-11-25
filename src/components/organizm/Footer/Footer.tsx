import {
  Box,
  Flex,
  Text,
  Stack,
  Link,
  SwitchColor,
  SwitchLanguage,
} from "./index";

const Footer = () => {
  return (
    <Box
      // style={{ boxShadow: "0px -10px 10px -18px rgba(0, 0, 0, 0.64)" }}
      boxShadow="0px 2px 10px 3px rgba(0, 0, 0, 0.5)"
      bg={"black.500"}
      p={4}
    >
      <Flex justify="space-between" align="center">
        <Stack direction={"row"} spacing={"15px"}>
          <SwitchColor />
          <SwitchLanguage
            onChange={() => console.log("lang")}
            text1={"en"}
            text2={"ru"}
          />
        </Stack>
        <Text>© 2023 PyCodeX</Text>
        <nav>
          <Link to={"/privacypolicy"}>Privacy Policy</Link>
        </nav>
      </Flex>
    </Box>
  );
};

export default Footer;
