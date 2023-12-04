const loginApi: string = `${import.meta.env.VITE_APP_BASE_URL}/auth/login`;
const registerApi:string = `${import.meta.env.VITE_APP_BASE_URL}/auth/register`;
const taskApi: string = `${import.meta.env.VITE_APP_BASE_URL}/tasks?take=10&skip=0`
const addTasksApi: string = `${import.meta.env.VITE_APP_BASE_URL}/tasks`
const tasksDelete:string = `${import.meta.env.VITE_APP_BASE_URL}/tasks`

export { loginApi, registerApi, taskApi, addTasksApi, tasksDelete }
