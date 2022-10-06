import { createStore } from 'vuex';
import { auth } from './auth.module';

export default createStore ({
    modules: {
        auth: auth
    }
})

// export default new Vuex.Store({
//   modules: {
//     auth
//   }
// });