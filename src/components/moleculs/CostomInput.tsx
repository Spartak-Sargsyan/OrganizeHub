import { FieldError } from "react-hook-form";
import "../atoms/ChakraAtoms";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "../atoms/ChakraAtoms";
import { InputProps } from "@chakra-ui/react";

interface IinputProps extends InputProps {
  label: string;
  type: string;
  errors?: FieldError;
}

const CostomInput: React.FC<IinputProps> = ({
  label,
  errors,
  ...inputProps
}) => {
  return (
    <FormControl isInvalid={!!errors}>
      {errors && <FormErrorMessage>{errors.message}</FormErrorMessage>}
      <FormLabel>{label}</FormLabel>
      <Input {...inputProps} />
    </FormControl>
  );
};

export default CostomInput;
