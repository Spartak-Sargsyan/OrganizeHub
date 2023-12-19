import style from "../../template/Register/register.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  CostomInput,
  ErrorMessage,
  useTranslation,
  RegExp,
  IRegiterData,
} from "./index";
import { useDispatch, useSelector } from "react-redux";
import { fetchingRegister } from "../../../store/service";
import { RegisterState } from "../../../models/type";
import { Heading } from "@chakra-ui/react";

const FormControler: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IRegiterData>({
    mode: "all",
  });

  const dispatch = useDispatch();
  const isLoading = useSelector((state: RegisterState) => state.auth.isLoading);
  const error = useSelector((state: RegisterState) => state.auth.error);

  const isButtonDisable = isDirty || isValid;
  const { t } = useTranslation();

  const handleRegisterSubmit: SubmitHandler<IRegiterData> =  (data) => {
     dispatch(fetchingRegister(data));
  };

  return (
    <>
      <form
        className={style.form}
        onSubmit={handleSubmit(handleRegisterSubmit)}
      >
        <CostomInput
          label={t("FORM.LABELS.FIRSTNAME")}
          placeholder={t("FORM.LABELS.FIRSTNAME")}
          style={errors.lastName && { borderColor: "red" }}
          type="text"
          {...register("firstName", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            minLength: {
              value: 3,
              message: t("ERROR.MESSAGE.MINLENGTHMESSAGE"),
            },
            maxLength: {
              value: 30,
              message: t("ERROR.MESSAGE.MAXLENGTHMESSAGE"),
            },
          })}
        />

        {errors?.firstName && (
          <ErrorMessage>{errors.firstName.message}</ErrorMessage>
        )}

        <CostomInput
          label={t("FORM.LABELS.LASTNAME")}
          placeholder={t("FORM.LABELS.LASTNAME")}
          {...register("lastName", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            minLength: {
              value: 3,
              message: t("ERROR.MESSAGE.MINLENGTHMESSAGE"),
            },
            maxLength: {
              value: 50,
              message: t("ERROR.MESSAGE.MAXLENGTHMESSAGE"),
            },
          })}
          style={errors.lastName && { borderColor: "red" }}
          type="text"
        />
        {errors?.lastName && (
          <ErrorMessage>{errors.lastName.message}</ErrorMessage>
        )}

        <CostomInput
          label={t("FORM.LABELS.EMAIL")}
          placeholder={t("FORM.LABELS.EMAIL")}
          {...register("email", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            pattern: {
              value: RegExp.EmailRegExp,
              message: t("EROROR.MESSAGE.EMAILMESSAGE"),
            },
          })}
          style={errors.email && { borderColor: "red" }}
          type="email"
        />

        {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        {errors?.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <CostomInput
          label={t("FORM.LABELS.PASSWORD")}
          placeholder={t("FORM.LABELS.PASSWORD")}
          {...register("password", {
            required: t("ERROR.MESSAGE.REQUAREDMESSAGE"),
            pattern: {
              value: RegExp.PasswordRegExp,
              message: t("ERROR.MESSGAE.PASSWORDMESSAGE"),
            },
          })}
          style={errors.password && { borderColor: "red" }}
          type="password"
        />

        {errors?.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}

        <Button type="submit" colorScheme="blue" disabled={isButtonDisable}>
          {t("FORM.LABELS.BUTTON.SIGNUP")}
        </Button>
      </form>
      {isLoading ? <Heading>Loading...</Heading> : null}
      {error ? <Heading>error...</Heading> : null}
    </>
  );
};

export default FormControler;
