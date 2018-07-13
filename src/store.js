import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../node_modules/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    productCategory: [],
    isActive: false,
  },
  getters: {
    //navigation toggle
    isActive: state => state.isActive,

    //product data
    categories: state => state.categories,
    productCategory: state => state.productCategory,
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },

    SET_PRODUCT_CATEGORY(state, productCategory) {
      state.productCategory = productCategory
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
          //console.log(categories);
          commit('SET_CATEGORIES', categories)
        })
    },

    getProductCategory({commit}) {
      Axios.get('http://localhost:8080/static/category.json')
        .then(r => r.data)
        .then(categories => {
          console.log(categories);
          commit('SET_PRODUCT_CATEGORY', categories)
        })
    },
    
    toggle(context){
        context.commit('TOGGLE')
    }
  }
})
