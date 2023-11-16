import "../atoms/ChakraAtoms";
import { FormControl, FormLabel, Input } from "../atoms/ChakraAtoms";
import { InputProps } from "@chakra-ui/react";

interface IinputProps extends InputProps {
  label: string;
  type: string;
}

const CostomInput: React.FC<IinputProps> = ({ label, ...inputProps }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input {...inputProps} />
    </FormControl>
  );
};

export default CostomInput;
