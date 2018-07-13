<template>
  <div class="row">
    <div class="page-title">
      <div class="container">
        <h1>
          {{productCategory.title}}
        </h1>
      </div>
    </div>
    <ul class="product-list">
      <li v-for="(item, index) in productCategory.items" :key="index">
        <a href="#" class="thumbnail">
          <img v-bind:src="item.image">
          <p class="product-title">{{item.title}}</p>
          <p class="product-price">{{item.price}}</p>
          <button class="btn btn-default btn-cart">ADD TO CART</button>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'category',
    mounted() {
      //when the component is loaded, trigger the api call from store
      this.$store.dispatch('getProductCategory')
    },
    computed: {
      productCategory() {
        return this.$store.getters.productCategory;
      }
    },
  }

</script>
<style>
  .page-title {
    width: 100%;
    margin-bottom: 20px;
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

  p.product-title{
      text-align: center;
  }

  p.product-price{
      font-weight: bold;
      color: #333;
      text-align: center;
  }

  button.btn.btn-default.btn-cart {
    display: block;
    margin:auto;
}

ul.product-list {
    list-style: none;
    width: 100%;
    margin-left: -18px;
}

.thumbnail{
    padding: 30px 4px !important;
}

</style>
