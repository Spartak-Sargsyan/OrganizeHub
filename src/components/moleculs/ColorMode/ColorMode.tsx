import { FaMoon, FaSun } from "react-icons/fa";
import { Button, useColorMode } from "@chakra-ui/react";


const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button style={{ float: "right" }} onClick={toggleColorMode}>
      {colorMode === "light" ? <FaMoon /> : <FaSun />}
    </Button>
  );
};

export default ColorMode;
