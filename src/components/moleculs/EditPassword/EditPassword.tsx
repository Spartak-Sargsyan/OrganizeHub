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
import { useTranslation } from "react-i18next";
import { RegExp } from "../../organizm/regisrerOrganizm";

const EditPassword = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handeleSubmtiPassword = (data: string) => {
    try {
      dispatch(changePassword(data.newPassword));
      onClose();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  // const hand

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
          <form onSubmit={handleSubmit(handeleSubmtiPassword)}>
            <ModalBody>
              <CostomInput
                label={"New password"}
                type={"password"}
                {...register("newPassword", {
                  required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
                  pattern: {
                    value: RegExp.EmailRegExp,
                    message: t("EROROR.MESSAGE.EMAILMESSAGE"),
                  },
                })}
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
