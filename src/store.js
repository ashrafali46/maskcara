import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../node_modules/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    productCategory: [],
    productDetail: [],
    cart: [],
    newItem: '',
    isActive: false,
  },
  getters: {
    //navigation toggle
    isActive: state => state.isActive,

    //product data
    categories: state => state.categories,
    productCategory: state => state.productCategory,
    productDetail: state => state.productDetail,

    //item code cart
    cart: state => state.cart,
  },
  mutations: {
    //cart murations
    GET_CART_ITEM(state, item){
      state.newItem = item
    },

    ADD_CART_ITEM(state, item_code){
      state.cart.push(item_code)
    },

    REMOVE_CART_ITEM(state, item){
      var items = state.cart
      items.splice(items.indexOf(item), 1)
   },

    //category mutations
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },

    SET_PRODUCT_CATEGORY(state, productCategory) {
      state.productCategory = productCategory
    },

    SET_PRODUCT_DETAIL(state, productDetail) {
      state.productDetail = productDetail
    },

    //navigation toggle
    TOGGLE(state) {
      state.isActive = !state.isActive;
    }
  },
  actions: {
    getCartItem({commit}, item){
      commit('GET_CART_ITEM', item)
    },

    addCartItem({commit}, item){
      commit('ADD_CART_ITEM', item)
    },

    removeCartItem({commit}, item){
      commit('REMOVE_CART_ITEM', item)
    },

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

    getProductDetail({commit}) {
      Axios.get('http://localhost:8080/static/item.json')
        .then(r => r.data)
        .then(item => {
          console.log(item);
          commit('SET_PRODUCT_DETAIL', item)
        })
    },
    
    toggle(context){
        context.commit('TOGGLE')
    }
  }
})
