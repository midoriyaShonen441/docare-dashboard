import { createStore } from 'vuex';
import { auth } from './auth.module';
import { data } from './data.module';

export default createStore ({
    modules: {
        auth: auth,
        data: data
    }
})

// export default new Vuex.Store({
//   modules: {
//     auth
//   }
// });