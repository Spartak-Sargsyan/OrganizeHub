export const patchUserApi:string = `${import.meta.env.VITE_APP_BASE_URL}/users/profile`

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