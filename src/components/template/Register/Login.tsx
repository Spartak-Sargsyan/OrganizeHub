import { Box, Flex, Image, Text } from "@chakra-ui/react";
import FormControler from "../../organizm/loginOrganizm/FormControler";
import { Link } from "react-router-dom";
import tasklog from "../../../assets/images/task_log.png";

interface ILoginProps {
  siteName: string;
}

const costomCSS = {
  background: "linear-gradient(45deg, #00DBDE, #FC00FF)",
  borderRadius:"15px"
};

const costomCSS2 = {
  background: "linear-gradient(45deg, #63B3ED, #1A365D)",
  minHeight: "calc(100vh - 92px - 74px)",
};

const Login: React.FC<ILoginProps> = ({ siteName }) => {
  return (
    <Box style={costomCSS2}>
      <Flex justify={"center"}>
        <Box padding={25} minHeight={"80vh"} m={3}>
          <Flex
            marginTop={"3%"}
            align={"center"}
            justifyContent={"space-between"}
          >
            <Box style={costomCSS} padding={50} ml={70} mr={20} w={800}>
              <Text
                align={"center"}
                paddingBottom={50}
                fontSize={"3xl"}
                as="h2"
              >
                {siteName}
              </Text>
              <FormControler />
              <Text mt={5}>
                Don't have an account?{" "}
                <Link to="/register" style={{ color: "#90CDF4" }}>
                  Create An account here
                </Link>
              </Text>
            </Box>
            <Box>
              <Image width={1000} height={600} src={tasklog} alt="" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
