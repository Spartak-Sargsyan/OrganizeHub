import { FormControl, FormLabel, Input } from "../../atoms/ChakraAtoms";
import { InputProps } from "@chakra-ui/react";
import { ChangeEvent, forwardRef } from "react";
interface IinputProps extends InputProps {
  label?: string;
  type: string;
  value?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CostomInput = forwardRef(
  ({ type, label, value, handleChange, ...inputProps }: IinputProps, ref) => {
    return (
      <FormControl>
        <FormLabel fontSize={"1.4rem"}>{label}</FormLabel>
        <Input
          ref={ref}
          type={type}
          {...inputProps}
          placeholder={label}
          value={value}
          onChange={handleChange}
        />
      </FormControl>
    );
  }
);

export { CostomInput };
