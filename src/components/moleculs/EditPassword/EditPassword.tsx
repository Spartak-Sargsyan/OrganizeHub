import {
  Box,
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
import { CostomInput } from "../CostomInput/CostomInput";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changePassword } from "../../../store/service";

const EditPassword = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const handeleChangePassword = async (data:string) => {
    try {
      await dispatch(changePassword(data.newPassword));
      onClose();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <>
      <Box>
        <Button
          onClick={() => {
            onOpen();
          }}
        >
          Change Password
        </Button>
      </Box>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Task</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(handeleChangePassword)}>
            <ModalBody>
              <CostomInput
                label={"New password"}
                type={"password"}
                {...register("newPassword")}
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" type={"submit"}>
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPassword;
