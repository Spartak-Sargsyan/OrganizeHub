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

interface Ivalidate {
    value: number;
    message: string;
}
interface Ivalidate2 {
    value: boolean;
    message: string;
}
interface Ivalidat3 {
    value: RegExp;
    message: string;
}

export type { IErrorMessage, FormData, Ivalidate, Ivalidate2, Ivalidat3 }