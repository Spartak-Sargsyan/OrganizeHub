import { Button } from "@chakra-ui/react";
import { useChekUser } from "../../../context/ChekUser";

const ProfilePage = () => {
  const { userLogOut } = useChekUser();

  return (
    <>
      <h1>Profile page</h1>
      <Button onClick={() => userLogOut()}>Log Out</Button>
    </>
  );
};

export default ProfilePage;
