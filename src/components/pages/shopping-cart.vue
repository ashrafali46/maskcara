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
          <tr v-for="(item, index) in cart" :key="index" track-by="index">
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
      <hr>
      <div class="container">
        <p class="small-sub">
          <strong>Subtotal: ({{cartLength}} items):
            <span class="total"> ${{total}}</span>
          </strong>
        </p>
      </div>
      <hr>
      <div class="well">
        <div class="container">
          <p class="small-sub">
            <strong>Subtotal: ({{cartLength}} items):
              <span class="total"> ${{total}}</span>
            </strong>
          </p>
        </div>
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
      total() {
        return this.cart.reduce((acc, cur) => acc + parseFloat(cur.price.toString().replace("$", "")), 0);
      },
      cartLength() {
        return this.cart.length;
      }
    },
    filters: {
      dollars: num => `$${num / 100}`,
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

  .total {
    color: red;
  }

  strong {
    color: #606975;
  }

  .small-sub {
    font-size: 14px;
  }

  .well {
    min-height: 20px;
    padding: 5px 0px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
    margin: 15px;
  }

</style>
