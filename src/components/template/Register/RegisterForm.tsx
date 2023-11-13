import style from "./register.module.css";
import { FormData } from "../../../models/interface";
import {
  MinMaxLength,
  RequiredField,
  ValidateMessage,
} from "../../../constant/ErrorMessage";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormLabel,
  VStack,
  Input,
} from "@chakra-ui/react";
import { RegExp } from "../../../constant/RegEx";
import { DefaultValuesRegister } from "../../../constant/DefaultValues";

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onSubmit",
    defaultValues: DefaultValuesRegister,
  });

  const onSubmit: SubmitHandler<FormData> = (e) => {
    console.log(e);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.registerForm}>
      <VStack spacing={4} align="stretch">
        {/* First Name */}
        <FormControl isRequired>
          {errors?.firstName && <p>{errors.firstName.message}</p>}
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            {...register("firstName", {
              required: RequiredField.RequaredMessage,
              minLength: {
                value: 2,
                message:
                  MinMaxLength.MinLengthMessage || "Minimum 2 characters",
              },
              maxLength: {
                value: 50,
                message:
                  MinMaxLength.MaxLengthMessage || "Maximum 50 characters",
              },
            })}
          />
        </FormControl>
        {/* Last Name */}
        <FormControl isRequired>
          {errors?.lastName && <p>{errors.lastName.message}</p>}
          <FormLabel>Last Name</FormLabel>
          <Input
            {...register("lastName", {
              required: RequiredField.RequaredMessage,
              minLength: {
                value: 2,
                message:
                  MinMaxLength.MinLengthMessage || "Minimum 2 characters",
              },
              maxLength: {
                value: 50,
                message:
                  MinMaxLength.MaxLengthMessage || "Maximum 50 characters",
              },
            })}
            type="text"
          />
        </FormControl>
        {/* User Name */}
        <FormControl isRequired>
          {errors?.userName && <p>{errors.userName.message}</p>}
          <FormLabel>User Name</FormLabel>
          <Input
            {...register("userName", {
              required: RequiredField.RequaredMessage,
              minLength: {
                value: 2,
                message:
                  MinMaxLength.MinLengthMessage || "Minimum 2 characters",
              },
              maxLength: {
                value: 50,
                message:
                  MinMaxLength.MaxLengthMessage || "Maximum 50 characters",
              },
            })}
            type="text"
          />
        </FormControl>
        {/* phone number */}
        <FormControl isRequired>
          {errors?.phoneNumber && <p>{errors.phoneNumber.message}</p>}
          <FormLabel>Phone Number</FormLabel>
          <Input
            {...register("phoneNumber", {
              required: RequiredField.RequaredMessage,
              pattern: {
                value: RegExp.PhoneNumberRegExp,
                message:
                  ValidateMessage.PhoneErrorMessage ||
                  "Please enter correct phone number",
              },
            })}
            type="text"
          />
        </FormControl>
        {/* email */}
        <FormControl isRequired>
          {errors?.email && <p>{errors.email.message}</p>}
          <FormLabel>Email</FormLabel>
          <Input
            {...register("email", {
              required: RequiredField.RequaredMessage,
              pattern: {
                value: RegExp.EmailRegExp,
                message:
                  ValidateMessage.EmailErrorMessage || "This is invalid email",
              },
            })}
            type="email"
          />
        </FormControl>
        {/* password */}
        <FormControl isRequired>
          {errors?.password && <p>{errors.password.message}</p>}
          <FormLabel>Password</FormLabel>
          <Input
            {...register("password", {
              // required: RequiredField.RequaredMessage,
              pattern: {
                value: RegExp.PasswordRegExp,
                message:
                  ValidateMessage.PasswordErrorMessage ||
                  "This is invalid password",
              },
            })}
            type="password"
          />
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Register
        </Button>
      </VStack>
    </form>
  );
};

export default RegisterForm;
