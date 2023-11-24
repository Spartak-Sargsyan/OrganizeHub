interface IErrorMessage {
    RequaredMessage:string;
    EmailErrorMessage:string;
    PasswordErrorMessage:string;
    MinLengthMessage:string;
    MaxLengthMessage:string;
    PhoneErrorMessage:string;
}

interface IDefaultValues {
    [key:string]: string
}

interface FormData {
    [key:string]:string
}


export type { IErrorMessage, FormData,IDefaultValues }