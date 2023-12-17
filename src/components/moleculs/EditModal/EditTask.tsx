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
import { useForm } from "react-hook-form";
import { CostomInput } from "../CostomInput/CostomInput";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { patchingTask } from "../../../store/service";

const EditTask = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { register, handleSubmit } = useForm({
    mode: "all",
  });

  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.tasks.selectedTask);
  console.log(selectedTask);

  const [editTask, setEditTask] = useState({
    title: selectedTask?.title || "",
    description: selectedTask?.description || "",
  });

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditTask({ ...editTask, [name]: value });
  };

  const handleTaskEditSave = () => {
    const taskId = selectedTask?.id;
    console.log(taskId);
    if (taskId) {
      dispatch(patchingTask({ taskId, updateTask: editTask }));
    }
  };

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Edit
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />

          <form onSubmit={handleSubmit(handleTaskEditSave)}>
            <ModalBody>
              <CostomInput
                label={"title"}
                {...register("title")}
                type={"text"}
                value={editTask.title}
                handleChange={handleTaskChange}
              />
              <CostomInput
                label={"description"}
                {...register("description")}
                type={"text"}
                value={editTask.description}
                handleChange={handleTaskChange}
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

export default EditTask;
