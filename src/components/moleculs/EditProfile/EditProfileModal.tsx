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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingUser, patchingUser } from "../../../store/service";

const EditProfileModal = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { register, handleSubmit, setValue } = useForm();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users[0]);

  useEffect(() => {
    if (user) {
      setValue("firstName", user.firstName || "");
      setValue("lastName", user.lastName || "");
    }
  }, [user, setValue]);

  const handleChangeSave = async (data) => {
    try {
      await dispatch(patchingUser(data));
      dispatch(fetchingUser());
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
          Settings
        </Button>
      </Box>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Task</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(handleChangeSave)}>
            <ModalBody>
              <CostomInput
                label={"First Name"}
                type={"text"}
                {...register("firstName")}
              />
              <br />
              <CostomInput
                label={"Last Name"}
                type={"text"}
                {...register("lastName")}
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

export default EditProfileModal;
