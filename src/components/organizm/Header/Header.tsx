import { Box, Flex, Heading, Link, Image } from "./index";
import logo from "../../../assets/images/logo.jpg";
import style from "./header.module.css";

const Header = () => {
  return (
    <Box boxShadow={"xl"} p={3}>
      <Flex justify={"space-between"} align={"center"}>
        <Link to={"/"}>
          <Image
            // style={{ margin: 15 }}
            m={2}
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
            Sign in
          </Link>
          <Link className={style.btn} to={"/register"}>
            Sign up
          </Link>
        </nav>
      </Flex>
    </Box>
  );
};

export default Header;
