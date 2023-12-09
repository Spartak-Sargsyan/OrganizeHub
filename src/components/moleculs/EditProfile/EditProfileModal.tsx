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
import { ChangeEvent, useEffect, useState } from "react";
import { fetchUser, patchUser } from "../../../services/CRUDFunctions";
import { useForm } from "react-hook-form";

const EditProfileModal = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();

  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState<{
    firstName: string;
    lastName: string;
  }>({
    firstName: "",
    lastName: "",
  });
  const [userData, setUserData] = useState({});

  const { register, handleSubmit } = useForm();

  const fetchUserData = async () => {
    try {
      const { data } = await fetchUser();
      setUserData(data);
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };
  const handleEditClick = () => {
    setEditMode(true);
    setEditedData({ ...userData });
  };

  const handleSaveClick = async () => {
    try {
      const { data } = await patchUser(editedData);
      setUserData({
        ...userData,
        firstName: data.firstName,
        lastName: data.lastName,
      });
      await fetchUserData();
    } catch (error) {
      console.error("Patch Failed", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <Box>
        <Button
          onClick={() => {
            onOpen();
            handleEditClick();
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
          <form onSubmit={handleSubmit(handleSaveClick)}>
            {editMode ? (
              <ModalBody>
                <CostomInput
                  label={"First Name"}
                  value={editedData.firstName}
                  handleChange={handleInputChange}
                  type={"text"}
                  {...register("firstName")}
                />
                <br />
                <CostomInput
                  label={"Last Name"}
                  value={editedData.lastName}
                  handleChange={handleInputChange}
                  type={"text"}
                  {...register("lastName")}
                />
              </ModalBody>
            ) : null}

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
