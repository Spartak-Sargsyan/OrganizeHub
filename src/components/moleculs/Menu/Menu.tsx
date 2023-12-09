import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Divider,
  Flex,
  Box,
  ModalCloseButton,
  useDisclosure,
  Icon,
  Text,
} from "@chakra-ui/react";
import { SwitchColor } from "../SwitchColor/SwitchColor";
import ModalTasks from "../Modal/Modal";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useChekUser } from "../../../hooks/useChekUser";
import { useEffect, useState } from "react";
import { IUser } from "../../../models/interface";
import { fetchUser } from "../../../services/CRUDFunctions";
import EditProfileModal from "../EditProfile/EditProfileModal";

interface IGetTask {
  getTask: () => void;
}

const Menu = ({ getTask }: IGetTask) => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { userLogOut } = useChekUser();

  const [user, setUser] = useState<IUser[]>([]);

  const getUser = async () => {
    try {
      const { data } = await fetchUser();
      setUser([...user, data]);
      console.log(data);
    } catch (error) {
      console.error("Failed user ", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Box>
        <Button variant={"outline"} m={15} onClick={onOpen}>
          <Icon as={ArrowLeftIcon} />
        </Button>
      </Box>

      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Flex>
              {user.map((item) => {
                return (
                  <Box key={item.id}>
                    <Text fontSize={"xl"}>
                      {item.firstName} {item.lastName}
                    </Text>
                  </Box>
                );
              })}
              <ModalCloseButton />
            </Flex>
            <Divider mt={15} mb={15} />
            <Box mt={5}>
              <ModalTasks getTasks={getTask} />
              <br />
              <br />
              <EditProfileModal />
            </Box>
          </DrawerBody>
          <SwitchColor />
          <br />
          <Button mb={15} onClick={() => userLogOut()}>
            Log Out
          </Button>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
