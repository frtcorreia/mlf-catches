import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:9000/api/v1/',
  // headers: {
  //   Authorization: `Bearer ${sessionStorage.getItem('@App:token')}`,
  // },
})
