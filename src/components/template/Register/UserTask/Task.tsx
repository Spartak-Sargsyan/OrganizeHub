import {
  useForm,
  addTasks,
  Button,
  isAxiosError,
  CostomInput,
  SubmitHandler,
  IAddTasks,
  useState,
} from "./index";

const Task = () => {
  const [addTask, setAddTask] = useState<IAddTasks>({
    title: "",
    description: "",
    dueDate: "",
  });

  const { register, handleSubmit } = useForm<IAddTasks>({
    mode: "all",
  });

  const handleInputChanege = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddTask({ ...addTask, [name]: value });
  };

  const handleAddTasksSubmit: SubmitHandler<IAddTasks> = async () => {
    try {
      const response = await addTasks(addTask);
      console.log(response);
      return response;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          console.error("Add task failed: ", error.response.data);
        }
      }
    }
  };

  return (
    <>
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
