interface IErrorMessage {
    RequaredMessage:string;
    EmailErrorMessage:string;
    PasswordErrorMessage:string;
    MinLengthMessage:string;
    MaxLengthMessage:string;
    PhoneErrorMessage:string;
}

interface ILoginData {
    email:string;
    password:string;
}

interface IRegiterData{
    firstName: string;
    lastName:string;
    email:string;
    password: string;
}

interface ITask {
    id:number;
    title:string;
    description:string;
    dueDate:string;
}

interface IAddTasks {
    title:string;
    description: string;
    dueDate:string;
}


export type { IErrorMessage, ILoginData, IRegiterData, IAddTasks, ITask }