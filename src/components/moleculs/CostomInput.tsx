import { FormControl, FormLabel, Input } from "../atoms/ChakraAtoms";
import { InputProps } from "@chakra-ui/react";
import { forwardRef } from "react";
interface IinputProps extends InputProps {
  label: string;
  type: string;
}

const CostomInput = forwardRef(
  ({ type, label, ...inputProps }: IinputProps, ref) => {
    return (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Input ref={ref} type={type} {...inputProps} placeholder={label} />
      </FormControl>
    );
  }
);

export default CostomInput;
