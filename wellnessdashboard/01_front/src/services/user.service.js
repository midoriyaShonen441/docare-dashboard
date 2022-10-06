import axios from "axios";
import authHeader from "./auth-header";
import config from "../config/api.config";

class UserService {
  getPublicContent() {
    return axios.get(`${config.API}/api/test/` + "all");
  }

  getUserBoard() {
    return axios.get(`${config.API}/api/test/` + "user", {
      headers: authHeader(),
    });
  }

  getMasterBoard() {
    return axios.get(`${config.API}/api/test/` + "master", {
      headers: authHeader(),
    });
  }

  getManagerBoard() {
    return axios.get(`${config.API}/api/test/` + "manager", {
      headers: authHeader(),
    });
  }

  getAdminBoard() {
    return axios.get(`${config.API}/api/test/` + "admin", {
      headers: authHeader(),
    });
  }

  getStaffBoard() {
    return axios.get(`${config.API}/api/test/` + "staff", {
      headers: authHeader(),
    });
  }
}

export default new UserService();
