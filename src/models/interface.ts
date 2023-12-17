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

interface ITaskState  {
    tasks:ITask[],
    isLoading:boolean;
    error:string|undefined;
    selectedTask:null;
    isEditing?:boolean;
}

interface IAddTasks {
    title:string;
    description: string;
    dueDate:string;
}

interface IUser {
    id:number;
    firstName: string;
    lastName: string
}


export type { ITaskState, IErrorMessage, ILoginData, IRegiterData, IAddTasks, ITask, IUser }