interface IErrorMessage {
    RequaredMessage:string;
    EmailErrorMessage:string;
    PasswordErrorMessage:string;
    MinLengthMessage:string;
    MaxLengthMessage:string;
    PhoneErrorMessage:string;
}

interface FormData {
    firstName: string; 
    lastName: string;
    userName: string;
    phoneNumber: string;
    email:string;
    password:string;
}

export type { IErrorMessage, FormData }