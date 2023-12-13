import {
  Button,
  Card,
  Heading,
  CardBody,
  CardFooter,
  Text,
  ButtonGroup,
  Divider,
  Stack,
  Flex,
  Box,
  Image,
  // Icon,
} from "@chakra-ui/react";
import { useEffect } from "react";
// import { deleteTask } from "../../../services/CRUDFunctions";
// import { ITask } from "../../../models/interface";
import logo from "../../../assets/images/logo.png";
// import Menu from "../../moleculs/Menu/Menu";
// import { CostomInput } from "../regisrerOrganizm";
// import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchingTasks as fetchingTasksAction } from "../../../store/service";

const ProfilePage = () => {
  // const handleDeleteTasks = async (idTasks: number) => {
  //   try {
  //     await deleteTask(idTasks);
  //     fetchTasks();
  //   } catch (error) {
  //     console.error("Feiled delete: ", error);
  //   }
  // };

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const error = useSelector((state) => state.tasks.error);

  console.log(tasks);

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
            {/* <CostomInput
              value={filterTasks}
              handleChange={handleSearchTasks}
              width={"500px"}
              type={"search"}
            />
            <Button mt={2} onClick={handleSearchClick}>
              <Icon as={SearchIcon} />
            </Button> */}
            <Box mt={1}>{/* <Menu getTask={fetchTasks} /> */}</Box>
          </Flex>
        </Box>
      </Flex>

      <Flex
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-beetwen"}
      >
        {tasks.length ? (
          tasks.map((item) => {
            return (
              <Card
                key={item.id}
                mt={50}
                mb={30}
                mr={5}
                ml={5}
                flex={"1 0 30%"}
              >
                <CardBody>
                  <Stack mt={6}>
                    <Heading size="md">{item.title}</Heading>
                  </Stack>
                  <Text>{item.description}</Text>
                  <Text>{item.dueDate.slice(0, 10)}</Text>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing={3}>
                    <Button colorScheme="blue">Edit</Button>
                    <Button
                      // onClick={() => handleDeleteTasks(item.id)}
                      colorScheme="blue"
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })
        ) : (
          <p>Dont have taks</p>
        )}
        {isLoading ? <Heading>Lodr</Heading> : null}
        {error ? <Text>eror</Text> : null}
      </Flex>
    </>
  );
};

export default ProfilePage;
