<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h1>Shopping Cart</h1>
      </div>
    </div>
    <router-link to='/category/23'>
      <button class="btn btn-default btn-cart">
        BACK TO SHOPPING
      </button>
    </router-link>
    <div v-if="cart.length != 0">
      <table class="table table-striped">
        <thead>
          <tr>
            <td>
              <strong>Product</strong>
            </td>
            <td>
              <strong>Quantity</strong>
            </td>
            <td>
              <strong>Price</strong>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="index">
            <td>
              <div class="media">
                <div class="media-left">
                  <img class="media-object" height="64" width="64" :src="item.image">
                </div>
                <div class="media-body">
                  <h4 class="media-heading">{{ item.title }}</h4>
                  <p>{{item.short_description}}</p>
                </div>
              </div>
            </td>
            <td>-</td>
            <td>
              <strong>{{ item.price }}</strong>
            </td>
            <td>
              <button class="btn btn-sm btn-default" @click="removeFromCart(index)">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="well">
        <router-link to='/login'>
          <button class="btn btn-default btn-cart">
            PROCEED TO CHECKOUT
          </button>
        </router-link>
      </div>

    </div>
    <div v-else>
      <p class="info">Your shopping cart is empty</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'shoppingCart',
    mounted() {
      this.$store.dispatch('getProductCategory');
    },
    computed: {
      cart() {
        return this.$store.getters.cart.map((cartItem) => {
          return this.$store.getters.productCategory.items.find((productCategory) => {
            return cartItem === productCategory.item_code;
          });
        });
      },
    },
    methods: {
      removeFromCart(index) {
        this.$store.dispatch('removeCartItem', index);
      },
    }
  };

</script>
<style scoped>
  .btn-cart {
    background-color: #a7bcd7 !important;
    color: #fff !important;
    padding: 10px 80px !important;
    font-size: 14px !important;
    margin: 20px auto !important;
  }

  .table {
    margin: 0px !important;
  }

  .info {
    margin: 30px 40px;
  }

</style>
