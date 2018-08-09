<template>
  <div>
    <div class="page-title">
      <div class="container">
        <h1>
          Place Your Order
        </h1>
      </div>
    </div>
    <div class="container">
      <h2>Checkout</h2>
      <br>
      <div class="panel panel-default">
        <div class="panel-heading">Shipping Information</div>
        <div class="panel-body">
          <h4>Shipping Address</h4>
          <br>
          <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control input-login" placeholder="First Name">
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control input-login" placeholder="Last Name">
          </div>
          <div class="form-group">
            <label>Phone Number</label>
            <input type="text" class="form-control input-login" placeholder="Phone Number">
          </div>
          <div class="form-group">
            <label>Email Address</label>
            <input type="text" class="form-control input-login" placeholder="Email Address">
          </div>
          <div class="form-group">
            <label>Address</label>
            <input type="text" class="form-control input-login" placeholder="Address">
          </div>
          <div class="form-group">
            <label>City</label>
            <input type="text" class="form-control input-login" placeholder="City">
          </div>
          <div class="form-group">
            <label>State</label>
            <select class="form-control input-login" placeholder="City">
              <option value=""> -- Select State --</option>
            </select>
          </div>
          <div class="form-group">
            <label>Zip</label>
            <input type="text" class="form-control input-login" placeholder="City">
          </div>
        </div>
      </div>

      <div class="panel panel-default">
        <div class="panel-heading">Billing Information</div>
        <div class="panel-body">
          <h4>Payment Method</h4>
          <br>
          <div class="form-group">
            <label>Name on card</label>
            <input type="text" class="form-control input-login" placeholder="Name on card">
          </div>
          <h2>
            <i class="glyphicon glyphicon-credit-card "></i>
          </h2>
          <div class="form-group">
            <label>Card number</label>
            <input type="text" class="form-control input-login" placeholder="Card number">
          </div>
          <div class="form-group">
            <label>Month *</label>
            <input type="text" class="form-control input-login" placeholder="Month">
          </div>
          <div class="form-group">
            <label>Year * </label>
            <input type="text" class="form-control input-login" placeholder="Year">
          </div>
          <div class="form-group">
            <label>CVV/CVC *</label>
            <input type="text" class="form-control input-login" placeholder="CVV/CVC">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container">
          <button class="btn btn-default pull-right">
            <span class="glyphicon glyphicon-lock" aria-hidden="true"></span> PLACE YOUR ORDER
          </button>
        </div>
      </div>
      <div class="well well-dark text-center">
        <button class="btn btn-default">
          <span class="glyphicon glyphicon-lock" aria-hidden="true"></span> PLACE YOUR ORDER
        </button>
        <table class="table">
          <tr>
            <td>Subtotal:</td>
            <td>${{totalPrice}}</td>
          </tr>
          <tr>
            <td>Items: </td>
            <td>{{cartLength}}</td>
          </tr>
          <tr>
            <td>Shipping & Handling:</td>
            <td></td>
          </tr>
          <tr>
            <td>Total before tax:</td>
            <td></td>
          </tr>
          <tr>
            <td>Estimated tax:</td>
            <td></td>
          </tr>
          <tr>
            <td> <strong>  Order total: </strong></td>
            <td><strong>${{totalPrice}}</strong> </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "checkout",
    computed: {
     totalPrice() {
        let total = 0;
        for (let item of this.$store.state.cart) {
          total += item.totalPrice;
        }
        return total;
      },
      cartLength() {
        return this.$store.state.cart.length;
      }
    }
  }

</script>
<style scoped>
  .card {
    margin: 50px 20px 50px !important;
  }

  .well {
    background: #fff;
  }

  .well-dark {
    background: #f8f9fa !important;
  }

  h2.title {
    margin-bottom: 30px;
  }

  .input-login {
    padding: 20px 10px;
    border-radius: 25px;
  }

  button.btn.btn-default {
    display: inline;
    margin: auto;
    color: #fff;
    background-color: #a7bcd7;
    padding: 10px 20px;
    border-radius: 25px;
    margin: 20px 0 20px;
    font-size: 16px;
  }

  .btn-forgotpass {
    text-align: center;
    color: #606975;
  }

  input {
    text-indent: 10px;
  }

  .join-now {
    text-align: center;
  }

  label {
    font-weight: 100;
  }

  td {
    text-align: left !important;
  }

</style>
