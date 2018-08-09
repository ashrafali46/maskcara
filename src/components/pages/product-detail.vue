<template>
  <div class="container">
    <a href="#" class="thumbnail">
      <img v-bind:src="productDetail.image">
    </a>
    <h2 class="product-title">{{productDetail.title}}</h2>
    <div class="product-price">{{productDetail.price}}</div>
    <div class="product-short-desc">{{productDetail.short_description}}</div>
    <p>SKU: {{productDetail.item_code}}</p>
    <p>Category: </p>
    <hr>
    <p>Quantity</p>
    <br>
    <select name="" id="" class="form-control">
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
    </select>
    <button class="btn btn-default btn-cart" @click="addToCart(productDetail)">
      <span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span> ADD TO CART</button>

    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active">
        <a href="#description" aria-controls="home" role="tab" data-toggle="tab">Description</a>
      </li>
    </ul>

    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="description">
        <div v-html="productLongDesc"></div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'productDetail',
    mounted() {
      //when the component is loaded, trigger the api call from store
      this.$store.dispatch('getProductDetail')
    },
    computed: {
      productDetail() {
        return this.$store.getters.productDetail;
      },
      productLongDesc() {
        var decodedHtml = this.htmlDecode(this.productDetail.long_description);
        return decodedHtml;
      }
    },
    methods: {
      //escape html for v-html
      htmlDecode(input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        // handle case of empty input
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
      },
      addToCart(item_code) {
        //show toast
        let toast = this.$toasted.show("Product successfully added to cart", {
          theme: "outline",
          position: "top-right",
          duration: 3000
        });

        this.$store.dispatch('addCartItem', item_code)
      }
    },

  }

</script>
<style scoped>
  .thumbnail {
    margin-top: 10px;
  }

  .product-price {
    text-align: left;
    font-size: 22px;
  }

  .product-short-desc {
    text-align: left;
    font-weight: 100;
    margin: 20px 0;
  }

  button.btn.btn-default.btn-cart {
    display: inline;
    margin: auto;
    color: #fff;
    background-color: #a7bcd7;
    padding: 10px 60px;
    border-radius: 25px;
    margin: 30px 0 20px;
    font-size: 16px;
  }

  div#description {
    padding: 15px 5px;
  }

  ul.nav.nav-tabs {
    margin-top: 25px;
  }

  ol,
  ul {
    padding: 0 !important;
  }

</style>
