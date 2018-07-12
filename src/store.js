import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../node_modules/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    isActive: false,
  },
  getters: {
    categories: state => state.categories,

    isActive: state => state.isActive,
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },

    TOGGLE(state) {
      state.isActive = !state.isActive;
    }
  },
  actions: {
    getCategories({commit}) {
      Axios.get('http://localhost:8080/static/categories.json')
        .then(r => r.data)
        .then(categories => {
          console.log(categories);
          commit('SET_CATEGORIES', categories)
        })
    },
    
    toggle(context){
        context.commit('TOGGLE')
    }
  }
})
