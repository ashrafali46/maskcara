import Vue from 'vue'
import Vuex from 'vuex'
import Axios from '../node_modules/axios';

Vue.use(Vuex);
//get the previous cart items
let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');
export default new Vuex.Store({
  state: {
    categories: [],
    productCategory: [],
    productDetail: [],
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0,
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

    saveCart(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
      window.localStorage.setItem('cartCount', state.cartCount);
    },
    //cart murations
    GET_CART_ITEM(state, item) {
      state.newItem = item
    },

    ADD_CART_ITEM(state, item) {

      let found = state.cart.find(product => product.item_code == item.item_code);
      //check duplicate item in cart
      if (found) {
        found.quantity++;
        found.totalPrice = found.quantity * found.price_raw;
      } else {
        state.cart.push(item);

        Vue.set(item, 'quantity', 1);
        Vue.set(item, 'totalPrice', item.price_raw);
      }

      state.cartCount++;
      this.commit('saveCart');
    },

    REMOVE_CART_ITEM(state, item) {
      var items = state.cart
      items.splice(items.indexOf(item), 1)
      this.commit('saveCart');
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
    getCartItem({
      commit
    }, item) {
      commit('GET_CART_ITEM', item)
    },

    addCartItem({
      commit
    }, item) {
      commit('ADD_CART_ITEM', item)
    },

    removeCartItem({
      commit
    }, item) {
      commit('REMOVE_CART_ITEM', item)
    },

    getCategories({
      commit
    }) {
      Axios.get('/static/categories.json')
        .then(r => r.data)
        .then(categories => {
          //console.log(categories);
          commit('SET_CATEGORIES', categories)
        })
    },

    getProductCategory({
      commit
    }) {
      Axios.get('/static/category.json')
        .then(r => r.data)
        .then(categories => {
          console.log(categories);
          commit('SET_PRODUCT_CATEGORY', categories)
        })
    },

    getProductDetail({
      commit
    }) {
      Axios.get('/static/item.json')
        .then(r => r.data)
        .then(item => {
          console.log(item);
          commit('SET_PRODUCT_DETAIL', item)
        })
    },

    toggle(context) {
      context.commit('TOGGLE')
    }
  }
})
