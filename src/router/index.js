import Vue from 'vue'
import Router from 'vue-router'
import Category from '@/components/pages/category'
import ProductDetail from '@/components/pages/product-detail'

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
      path: '/product-detail',
      name: 'ProductDetail',
      component: ProductDetail
    }
  ]
})
