import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneTask } from "../../../store/service";
import { Box, Button, Container, Heading, Spinner, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthenticatedRoutePath } from "../../../constant/routes";

const Task = ({ taskId }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.tasks.selectedTask);
  const isLoading = useSelector((state) => state.tasks.isLoading);
  const error = useSelector((state) => state.tasks.error);
  console.log(selectedTask);
  
  useEffect(() => {
    dispatch(fetchOneTask(taskId));
  }, [dispatch, taskId]);

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  

  return (
    <Container mt={10}>
      {selectedTask ? (
        <>
          <Heading mb={4}>{selectedTask.title}</Heading>
          <Box mb={4}>
            <Text>{selectedTask.description}</Text>
          </Box>
          <Box>
            <Text>Due Date: {selectedTask.dueDate.slice(0,10)}</Text>
          </Box>
          <Link to={AuthenticatedRoutePath.Profile()}><Button>Back</Button></Link>
        </>
      ) : (
        <Text>No task found</Text>
      )}
    </Container>
  );
};

export default Task;
