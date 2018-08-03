<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h1>
          {{productCategory.title}}
        </h1>
      </div>
    </div>

    <ul class="product-list" v-if="isProductList">
      <li v-for="(item, index) in productCategory.items" :key="index">

        <div class="thumbnail">
          <router-link :to="{ path: '/product/' + item.item_code, params: {item_code: item.item_code } }">
            <img v-bind:src="item.image">
            <p class="product-title">{{item.title}}</p>
            <p class="product-price">{{item.price}}</p>
          </router-link>
          <button class="btn btn-default btn-cart" @click="addToCart(item.item_code)">
            <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> ADD TO CART
          </button>
        </div>
      </li>
    </ul>

    <product-detail v-if="!isProductList"></product-detail>

  </div>
</template>
<script>
  import ProductDetail from '@/components/pages/product-detail';
  export default {
    name: 'category',
    data() {
      return {
        isProductList: true,
      }
    },
    mounted() {
      //when the component is loaded, trigger the api call from store
      this.$store.dispatch('getProductCategory')
    },
    computed: {
      productCategory() {
        return this.$store.getters.productCategory;
      },
      newItem() {
        return this.$store.getters.newItem
      }
    },
    components: {
      'product-detail': ProductDetail
    },
    methods: {
      showProductDetail() {
        //show product detail when a product is selected in category product list
        this.isProductList = !this.isProductList;
      },
      addToCart(item_code) {
        //show toast
        let toast = this.$toasted.show("Product successfully added to cart", {
          theme: "outline",
          position: "top-right",
          duration: 3000,
          fullWidth: true
        });

        this.$store.dispatch('addCartItem', item_code)
      }
    }
  }

</script>
<style>


</style>
