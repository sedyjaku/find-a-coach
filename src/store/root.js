import userMessageModule from '@/store/userMessage';
import coachModule from '@/store/coach';
import { createStore } from 'vuex';

const store = createStore({
  modules: {
    coaches: coachModule,
    userMessages: userMessageModule
  },
  state() {
    return {
      logged: false
    }
  },
  mutations: {
    setLogged(state, payload){
      state.logged = payload.logged;
    }
  },
  getters: {
    isLogged(state){
      return state.logged
    }
  },
  actions: {
    login(context){
      context.commit('setLogged', { logged: true })
    },
    logout(context){
      context.commit('setLogged', { logged: false })
    }
  }

})
export default  store;