import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/pages/category'
import ShoppingCart from '@/components/pages/shopping-cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
