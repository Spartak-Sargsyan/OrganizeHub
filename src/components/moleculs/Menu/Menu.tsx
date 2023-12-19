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
import { useEffect } from "react";
import { fetchingUser } from "../../../store/service";
import EditProfileModal from "../EditProfile/EditProfileModal";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const { onClose, isOpen, onOpen } = useDisclosure();
  const { userLogOut } = useChekUser();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users);
  const isLoading = useSelector((state) => state.user.isLoading);
  const error = useSelector((state) => state.user.error);
  console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchingUser());
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    fetchData();
  }, [dispatch]);

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
              {isLoading ? <Text>Loading...</Text> : null}
              {error ? <Text>error...</Text> : null}
              <ModalCloseButton />
            </Flex>
            <Divider mt={15} mb={15} />
            <Box mt={5}>
              <ModalTasks />
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
