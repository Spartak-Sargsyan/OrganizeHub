import { Button } from "@chakra-ui/react";
import { useChekUser } from "../../../hooks/useChekUser";

const ProfilePage = () => {
  const { userLogOut } = useChekUser();

  return (
    <>
      
      <Button onClick={() => userLogOut()}>Log Out</Button>
    </>
  );
};

export default ProfilePage;
