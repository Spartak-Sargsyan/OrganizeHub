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


instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')
      const refreshToken  = localStorage.getItem('refreshToken')
      if(token) config.headers.Authorization = `Bearer ${token }`;
      else if (refreshToken) config.headers.Authorization = `Bearer ${refreshToken}`
      return config
    },
    (error)=>{
      return Promise.reject(error);
    }
  )

export { instance }