import {
  Box,
  Image,
  Text,
  useTranslation,
  Flex,
  Heading,
  Button,
  Link,
} from "./index";
import Hub from "../../../assets/images/OrganizeHub.webp";
// import Hub2 from "../../../assets/images/hub.svg";

const WelcomePage = () => {
  const { t } = useTranslation();

  const gradientStyle = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #2196F3 90%)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontSize: "4rem",
    marginBottom: "1.5rem",
  };

  return (
    <>
      <Flex wrap={"wrap"} justify={"space-evenly"}>
        <Box w={600} marginTop={"50"}>
          <Heading style={gradientStyle}>{t("WELCOM.DESCRIPTION")}</Heading>
          <Text fontSize={"xl"} as={"span"}>
            {t("WELCOM.TEXT")}
          </Text>
          <br />
          <br />
          <Link to={"/register"}>
            <Button type={"button"} colorScheme="messenger">
              {t("FORM.LABELS.BUTTON.SIGNUP2")}
            </Button>
          </Link>
        </Box>
        <Box>
          <Image src={Hub} width={800} height={800} alt={"hub"} />
        </Box>
      </Flex>
    </>
  );
};

export default WelcomePage;
