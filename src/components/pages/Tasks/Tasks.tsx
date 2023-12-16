import { useDispatch, useSelector } from "react-redux";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthenticatedRoutePath } from "../../../constant/routes";
import {
  deleteTasks,
  fetchingTasks as fetchingTasksAction,
} from "../../../store/service";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleDeleteTasks = async (idTasks: number) => {
    try {
      await dispatch(deleteTasks(idTasks));
      dispatch(fetchingTasksAction());
    } catch (error) {
      console.error("Failed delete: ", error);
    }
  };

  return tasks.map((item) => (
    <Card key={item.id} mt={50} mb={30} mr={5} ml={5} flex={"1 0 20%"}>
      <CardBody>
        <Stack mt={6}>
          <Heading size="md">{item.title}</Heading>
          <Heading size="md">{item.id}</Heading>
        </Stack>
        <Text>{item.description}</Text>
        <Text>{item.dueDate.slice(0, 10)}</Text>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing={3}>
          <Link to={`${AuthenticatedRoutePath.Task()}/${item.id}`}>
            <Button colorScheme="blue">View</Button>
          </Link>
          <Button colorScheme="blue">Edit</Button>
          <Button onClick={() => handleDeleteTasks(item.id)} colorScheme="blue">
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  ));
};

export default Tasks;
