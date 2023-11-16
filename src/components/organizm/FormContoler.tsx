import { SubmitHandler, useForm } from "react-hook-form";
import { VStack, Button } from "../atoms/ChakraAtoms";
import CostomInput from "../moleculs/CostomInput";

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
      <VStack spacing={4} align="stretch">
        {errors.firstName && <p>Error</p>}
        <CostomInput
          label="First Name"
          {...register("firstName", {
            minLength: {
              value: 2,
              message: "Error" || "Error",
            },
          })}
          errors={errors.firstName}
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
