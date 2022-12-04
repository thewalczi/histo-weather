import axios from 'axios'

export const api = axios.create({
  // baseURL: 'https://history.openweathermap.org/data/2.5/',
  baseURL: 'https://api.open-meteo.com/v1/',
  timeout: 4000,
  // params: {
  //   appid: 'f91e2441209a2d6ee3f1af947f3538f9'
  // }
})