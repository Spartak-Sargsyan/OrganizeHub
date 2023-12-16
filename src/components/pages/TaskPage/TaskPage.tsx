import { useParams } from "react-router-dom";
import Task from "../../template/UserTask/Task";

const TaskPage = () => {
  const { id } = useParams();
  return <Task taskId={id} />;
};

export default TaskPage;
