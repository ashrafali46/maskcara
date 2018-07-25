<template>
  <div>
    <div class="card well">
      <h2 class="title">Login</h2>
      <div class="form-group">
        <input type="text" class="form-control input-login" placeholder="Enter your username">
      </div>
      <div class="form-group">
        <input type="text" class="form-control input-login" placeholder="Enter your password">
      </div>
      <button class="btn btn-default">
        <span class="glyphicon glyphicon-lock" aria-hidden="true"></span> SIGN IN</button>
      <div class="btn-forgotpass">FORGOT PASSWORD/USERNAME?</div>
    </div>
    <p class="join-now">Don't have an account yet? <a href="#">Join Now!</a></p>
  </div>
</template>
<script>
  export default {
    name: "login"
  }

</script>
<style scoped>
  .card {
    margin: 50px 20px 50px !important;
  }

  .well {
    background: #fff !important;
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

  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #606975;
    padding-left: 10px;
  }

  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #606975;
    padding-left: 10px;
  }

  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #606975;
    padding-left: 10px;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #606975;
    padding-left:  10px;
  }

  .join-now{
      text-align: center;
  }

</style>
