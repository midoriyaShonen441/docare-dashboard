export const data = {
  namespaced: true,
  state: {
    is_expanded: false,
    isMenuOpen: false,
    cssPopUpEmerDetail: false,
    wellness: [],
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
  },
  actions: {},
  getters: {},
};
