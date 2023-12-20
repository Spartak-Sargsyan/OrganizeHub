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
}

interface IUserState {
    users:IUser[];
    isLoading:boolean;
    error:undefined | string
}

interface IAddTasks {
    title:string;
    description: string;
    dueDate:string;
}

interface ITaksEdit {
    title:string;
    description:string; 
}

interface IUser {
    id:number;
    firstName: string;
    lastName: string
}

interface IEditUser{
    firstName:string;
    lastName:string
}

interface ILoginState {
    isLoggedIn: boolean;
    isLoading: boolean;
    error: string | undefined; 
}

export type { ILoginState, IEditUser, IUserState, ITaksEdit, ITaskState, IErrorMessage, ILoginData, IRegiterData, IAddTasks, ITask, IUser }