<template>
  <div>
    <div class="container text-center">
      <div class="check-icon">
        <i class="far fa-check-circle"></i>
      </div>
      <h1>Thank You!</h1>
      <div>for your purchase</div>
      <div>We are sending details to your email</div>
      <router-link to='/category/23'>
        <button class="btn btn-default btn-cart">
          BACK TO SHOPPING
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ThankYou"
  }

</script>
<style scoped>
  .check-icon {
    color: #a7bcd7;
    font-size: 120px;
  }

  .btn-cart {
    background-color: #a7bcd7 !important;
    color: #fff !important;
    padding: 10px 80px !important;
    font-size: 14px !important;
    margin: 20px auto !important;
  }

</style>
