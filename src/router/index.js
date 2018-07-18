import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/pages/category'
import Product from '@/components/pages/product-detail'
import ShoppingCart from '@/components/pages/shopping-cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
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
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
