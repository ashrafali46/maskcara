import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/pages/category'
import Product from '@/components/pages/product-detail'
import Cart from '@/components/pages/cart'
import Login from '@/components/pages/login'
import Checkout from '@/components/pages/checkout'
import ThankYou from '@/components/pages/thank-you'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/category/:cat_id',
      name: 'Category',
      component: Category
    },
    {
      path: '/product/:item_code',
      name: 'Product',
      component: Product
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/thank-you',
      name: 'ThankYou',
      component: ThankYou
    },

  ]
})
