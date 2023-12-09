const loginApi: string = `${import.meta.env.VITE_APP_BASE_URL}/auth/login`;
const taskApi: string = `${import.meta.env.VITE_APP_BASE_URL}/tasks?take=10&skip=0`
const addTasksApi: string = `${import.meta.env.VITE_APP_BASE_URL}/tasks`
const tasksDelete:string = `${import.meta.env.VITE_APP_BASE_URL}/tasks`
const userApi:string = `${import.meta.env.VITE_APP_BASE_URL}/users/profile`
const patchUserApi:string = `${import.meta.env.VITE_APP_BASE_URL}/users/profile`

export { loginApi, taskApi, addTasksApi, tasksDelete, userApi, patchUserApi }


import axios from "axios"

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers:{
        'Content-type': 'application/json',
        Accept: 'application/json',
    }
})

const configWithAuthorization = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token" || "refreshToken")}`,
      },
}

export { instance, configWithAuthorization }