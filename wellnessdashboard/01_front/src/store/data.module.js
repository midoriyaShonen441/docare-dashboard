export const data = {
  namespaced: true,
  state: {
    is_expanded: false,
    isMenuOpen: false,
    cssPopUpEmerDetail: false,
    username: "",
    wellness: [],
    domain_id: null,
    patients: [],
    staffs: [],
    staffRemove: {
      fullname: "",
      username: ""
    }
  },
  mutations: {
    haddleMenu(state) {
      if (state.isMenuOpen === false) {
        state.setmenu = "open setmenu";
        state.setsidemenu = "isopen-set-menu-container";
        state.cssGoogleMapContainer = "bind-set-googlemap-container";
        state.isMenuOpen = true;
        console.log("Click menu:", state.isMenuOpen);
      } else {
        state.setmenu = "setmenu";
        state.setsidemenu = "set-menu-container";
        state.cssGoogleMapContainer = "set-googlemap-container";
        state.isMenuOpen = false;
        console.log("Click menu:", state.isMenuOpen);
      }
    },
    getPatients(state, patients) {
      state.patients = patients;
    },
    getStaffs(state, staffs) {
      state.staffs = staffs;
    },
    getUsername(state, username) {
      state.username = username;
    },
    getStaffRemove(state, staff) {
      state.staffRemove.fullname = staff.fullname;
      state.staffRemove.username = staff.username;
    }
  },
  getters: {
    patients (state) {
      return state.patients;
    },
    staffs (state) {
      return state.staffs;
    },
    username (state) {
      return state.username;
    },
    staffRemove (state) {
      return state.staffRemove.username
    }
  },
  actions: {},
};
