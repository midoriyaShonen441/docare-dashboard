import config from "../config/api.config";
import axios from "axios";
import authHeader from "./auth-header";

class DashboardService {
  async getPatients() {
    return await axios.get(config.API + "/api/staff/dashboard/getPatients", {
      headers: authHeader(),
    });
  }
  async getStaffs() {
    return await axios.get(config.API + "/api/staff/dashboard/getStaffs", {
      headers: authHeader(),
    });
  }
  async deleteStaff(staffUsername) {
    return await axios.delete(config.API + "/api/staff/dashboard/removeStaff", {
      headers: authHeader(),
      data: {
        username: staffUsername,
      },
    });
  }
}

export default new DashboardService();
