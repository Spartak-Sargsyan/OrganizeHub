import {
  useForm,
  userTask,
  deleteTask,
  addTasks,
  Button,
  Heading,
  isAxiosError,
  CostomInput,
  SubmitHandler,
  IAddTasks,
  ITask,
  useEffect,
  useState,
} from "./index";

const Task = () => {
  const [task, setTask] = useState<ITask[]>([]);

  const [addTask, setAddTask] = useState<IAddTasks>({
    title: "",
    description: "",
    dueDate: "",
  });

  const { register, handleSubmit } = useForm<IAddTasks>({
    mode: "all",
  });

  const fetchData = async () => {
    try {
      const { data } = await userTask();
      setTask(data);
      console.log(data);
    } catch (error) {
      console.error("Error in fetchData: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(task);

  const handleInputChanege = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddTask({ ...addTask, [name]: value });
  };

  const handleAddTasksSubmit: SubmitHandler<IAddTasks> = async () => {
    try {
      const response = await addTasks(addTask);
      console.log(response);
      fetchData();
      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          console.error("Add task failed: ", error.response.data);
        }
      }
    }
  };

  const handleTaskDelete = async (tasksId: number) => {
    try {
      await deleteTask(tasksId);
      fetchData();
      console.log(`Task with ID ${tasksId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  return (
    <>
      {task.length ? (
        task.map((tasks) => (
          <div key={tasks.id}>
            <p>{tasks.title}</p>
            <p>{tasks.description}</p>
            <Button onClick={() => handleTaskDelete(tasks.id)}>Delete</Button>
          </div>
        ))
      ) : (
        <Heading>Нет задач</Heading>
      )}

      <form onSubmit={handleSubmit(handleAddTasksSubmit)}>
        <CostomInput
          handleChange={handleInputChanege}
          value={addTask.title}
          type={"text"}
          {...register("title")}
        />
        <CostomInput
          handleChange={handleInputChanege}
          value={addTask.description}
          type={"text"}
          {...register("description")}
        />
        <CostomInput
          handleChange={handleInputChanege}
          value={addTask.dueDate}
          type={"text"}
          {...register("dueDate")}
        />
        <Button type={"submit"}>Send</Button>
      </form>
    </>
  );
};

export default Task;
