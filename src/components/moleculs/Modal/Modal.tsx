import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { CostomInput } from "../../organizm/regisrerOrganizm";
import { useState } from "react";
import { IAddTasks } from "../../../models/interface";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  createTask,
  fetchingTasks as fetchingTasksAction,
} from "../../../store/service";

const ModalTasks = () => {
  const dispatch = useDispatch();

  const { isOpen, onClose, onOpen } = useDisclosure();
  const [createTasks, setCreateTasks] = useState<IAddTasks>({
    title: "",
    description: "",
    dueDate: "",
  });

  const { register, handleSubmit } = useForm();

  const handleTasksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateTasks({ ...createTasks, [name]: value });
  };

  const handleCreateTask = async () => {
    try {
      dispatch(createTask(createTasks));
      dispatch(fetchingTasksAction());
    } catch (error) {
      console.error("Fail create: ", error);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Add Tasks</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Task</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(handleCreateTask)}>
            <ModalBody>
              <CostomInput
                label={"title"}
                {...register("title")}
                type={"text"}
                value={createTasks.title}
                handleChange={handleTasksChange}
              />
              <CostomInput
                label={"description"}
                {...register("description")}
                type={"text"}
                value={createTasks.description}
                handleChange={handleTasksChange}
              />
              <CostomInput
                label={"date"}
                {...register("dueDate")}
                type={"text"}
                value={createTasks.dueDate}
                handleChange={handleTasksChange}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" type={"submit"}>
                Create task
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalTasks;
