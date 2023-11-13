import { ErrorMessage } from "../models/type"

const RequiredField:ErrorMessage = {
    RequaredMessage: "This field id required to fill in."
};

const ValidateMessage:ErrorMessage = {
    EmailErrorMessage: "This is invalid email",
    PasswordErrorMessage: "This is invalid password",
    PhoneErrorMessage: "Please enter correct phone number"
}

const MinMaxLength:ErrorMessage = {
    MinLengthMessage: "Minimum 2 characters",
    MaxLengthMessage: "Maximum 50 characters"
}

export { RequiredField, ValidateMessage, MinMaxLength }