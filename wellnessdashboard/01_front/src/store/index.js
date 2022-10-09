import { createStore } from "vuex";
import { auth } from "./auth.module";
import { data } from "./data.module";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  modules: {
    auth: auth,
    data: data,
  },
  plugins: [createPersistedState()],
});
