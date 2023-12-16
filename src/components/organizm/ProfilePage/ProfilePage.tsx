import { Text, Flex, Box, Image, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import logo from "../../../assets/images/logo.png";
import Menu from "../../moleculs/Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { fetchingTasks as fetchingTasksAction } from "../../../store/service";
import Tasks from "../../pages/Tasks/Tasks";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchingTasksAction());
  }, [dispatch]);

  return (
    <>
      <Flex justify={"space-between"}>
        <Box>
          <Image w={150} h={110} src={logo} alt="logo" />
        </Box>
        <Box>
          <Flex align={"center"}>
            <Box mt={1}>
              <Menu />
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-beetwen"}
      >
        
        <Tasks />
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : null}

        {error ? <Text>error</Text> : null}
      </Flex>
    </>
  );
};

export default ProfilePage;
