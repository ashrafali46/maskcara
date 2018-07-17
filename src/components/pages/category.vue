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
          <img v-bind:src="item.image" @click="showProductDetail">
          <p class="product-title">{{item.title}}</p>
          <p class="product-price">{{item.price}}</p>
          <button class="btn btn-default btn-cart"><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> ADD TO CART</button>
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
    },
    components: {
      'product-detail': ProductDetail
    },
    methods: {
      showProductDetail() {
        //show product detail when a product is selected in category product list
        this.isProductList = !this.isProductList;
      }
    }
  }

</script>
<style>
  .page-title {
    width: 100%;
    margin-bottom: 30px;
    padding: 36px 0;
    border-bottom: 1px solid #e1e7ec;
    background-color: #f5f5f5;
  }

  .page-title h1,
  .page-title h2,
  .page-title h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.25;
    text-align: center;
  }

  .thumbnail img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  p.product-title {
    text-align: center;
  }

  p.product-price {
    font-weight: bold;
    color: #333;
    text-align: center;
  }

  button.btn.btn-default.btn-cart {
    display: block;
    margin: auto;
    border-color: #a7bcd7;
    color: #a7bcd7;
    padding: 4px 100px;
    border-radius: 25px;
    font-size: 12px;
  }

  ul.product-list {
    list-style: none;
    width: 100%;
    padding: 10px 15px;
  }

  .thumbnail {
    padding: 30px 4px !important;
  }

  @media (max-width: 768px) {
    #page-title {
      margin-left: -250px;
      height: 100%;
    }
  }

</style>
