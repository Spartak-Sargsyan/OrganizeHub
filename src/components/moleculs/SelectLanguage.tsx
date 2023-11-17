import {
  Box,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import en from "../../assets/images/English.jpg";
import ru from "../../assets/images/Russion.jpg";

interface ILanguage {
  text1: string;
  text2: string;
  className?: string;
  onChange: (language: string) => void;
}

const SelectLanguage: React.FC<ILanguage> = ({
  text1,
  text2,
  className,
  onChange,
}) => {
  const getFlagSrc = (language: string) => (language === "en" ? en : ru);

  return (
    <Menu>
      <MenuButton
        as={Button}
        className={className}
        size="sm"
        style={{ paddingRight: "2rem" }}
      >
        <Box display="flex" alignItems="center">
          <Image src={getFlagSrc(text2)} alt={text1} boxSize="20px" mr="2" />
          {text1 ? text1 : text2}
        </Box>
      </MenuButton>

      <MenuList>
        <MenuItem onClick={() => onChange(text1)}>
          <Box display="flex" alignItems="center">
            <Image src={en} alt={text1} boxSize="20px" mr="2" />
            {text1}
          </Box>
        </MenuItem>
        <MenuItem onClick={() => onChange(text2)}>
          <Box display="flex" alignItems="center">
            <Image src={ru} alt={text2} boxSize="20px" mr="2" />
            {text2}
          </Box>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SelectLanguage;
