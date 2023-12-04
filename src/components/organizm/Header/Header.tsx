import { Box, Flex, Heading, Link, Image, useTranslation } from "./index";
import logo from "../../../assets/images/logo.png";
import style from "./header.module.css";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Box boxShadow={"xl"} p={3}>
      <Flex justify={"space-between"} align={"center"}>
        <Link to={"/"}>
          <Image
            m={1}
            src={logo}
            alt={"OrganizeHub"}
            borderRadius={15}
            w={85}
            h={70}
          />
        </Link>
        <Heading as={"h1"}>OrganizeHub</Heading>
        <nav>
          <Link className={style.btn} to={"/login"}>
            {t("FORM.LABELS.BUTTON.SIGNIN")}
          </Link>
          <Link className={style.btn} to={"/register"}>
            {t("FORM.LABELS.BUTTON.SIGNUP")}
          </Link>
        </nav>
      </Flex>
    </Box>
  );
};

export default Header;
