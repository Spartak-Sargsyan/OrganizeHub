import { SubmitHandler, useForm } from "react-hook-form";
import { VStack, Button, Input } from "../atoms/ChakraAtoms";
// import CostomInput from "../moleculs/CostomInput";
import { Required, MinLength, MaxLength } from "../../constant/Validation";
import ErrorMessage from "../atoms/ErrorMessage/ErrorMessage";

interface FormData {
  [key: string]: string;
}

const FormContoler: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4}>
        {errors?.firstName && (
          <ErrorMessage>{errors.firstName.message}</ErrorMessage>
        )}
        <Input
          // label="First Name"
          {...register("firstName", {
            required: Required,
            minLength: MinLength,
            maxLength: MaxLength,
          })}
          style={errors.lastName && { borderColor: "red" }}
          type="text"
        />
        {errors?.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}
        <Input
          //   label="Last Name"
          {...register("lastName", {
            required: Required,
            minLength: MinLength,
            maxLength: MaxLength,
          })}
          style={errors.lastName && { borderColor: "red" }}
          type="text"
        />
        <Button type="submit" colorScheme="blue">
          Register
        </Button>
      </VStack>
    </form>
  );
};

export default FormContoler;
