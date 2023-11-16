import { Select } from "@chakra-ui/react";

interface ILanguage {
  text1: string;
  text2: string;
  className?: string;
}

const SelectLanguage = ({ text1, text2, className }: ILanguage) => {
  return (
    <Select className={className} size="sm">
      <option>{text1}</option>
      <option>{text2}</option>
    </Select>
  );
};

export default SelectLanguage;
