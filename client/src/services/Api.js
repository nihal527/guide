import axios from "axios"
import AuthenticationService from "./AuthenticationService";

export default () => {
  return axios.create({
    baseURL: "http://localhost:8081"
  })
}


// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password: '123456'
// })
