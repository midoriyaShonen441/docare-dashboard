import axios from "axios";
import config from "../config/api.config"

class AuthService {
    login(user) {
      return axios
        .post(`${config.API}/auth/login`, {
          username: user.username,
          password: user.password
        })
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
          }
  
          return response.data;
        });
    }
  
    logout() {
      localStorage.removeItem('user');
    }
  
    register(user) {
      return axios.post(`${config.API}/auth/signup`, {
        username: user.username,
        email: user.email,
        password: user.password
      });
    }
  }
  
  export default new AuthService();