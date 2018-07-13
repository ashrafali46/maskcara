<template>
  <div id="app">
    <div class="wrapper">
      <!-- Sidebar -->
      <navigation isActive=i sActive></navigation>

      <!-- Page Content Holder -->
      <div id="content">

        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" id="sidebarCollapse" @click="toggleNav" class="btn btn-info navbar-btn">
                <i class="glyphicon glyphicon-align-left"></i>
                <span>Toggle Sidebar</span>
              </button>
              <img src="https://www.maskcarabeauty.com/images/maskcara-logo-black.png" class="logo" alt="">
            </div>
          </div>
        </nav>
        <!--Pages-->
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
  import navigation from './components/nav/navigation'
  export default {
    name: 'App',
    data() {
      return {
        isActive: false,
      }
    },
    components: {
      'navigation': navigation,
    },
    methods: {
      toggleNav() {
        this.$store.dispatch('toggle')
      }
    }
  }

</script>

<style>
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

  body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
  }

  ol, ul{
    margin-bottom: 0 !important;
  }

  a,
  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
  }

  .logo{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
  }

  .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
  }

  /* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

  .wrapper {
    display: flex;
    align-items: stretch;
  }

  #sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #374250;
    color: #fff;
    transition: all 0.3s;
  }

  #sidebar.active {
    margin-left: -250px;
  }

  #sidebar .sidebar-header {
    padding: 20px;
    background: #313b47;
  }

  #sidebar ul.components {
    padding: 0;
    border-bottom: 1px solid #374250;
  }

  #sidebar ul p {
    color: #fff;
    padding: 10px;
  }

  #sidebar ul li a {
    padding: 20px 25px 20px;
    font-size: 1.1em;
    display: block;
    text-transform: uppercase;
    border-top: 1px solid #ffffff14;
  }

  #sidebar ul li a:hover {
    color: #374250;
    background: #fff;
  }

  #sidebar ul li.active>a,
  a[aria-expanded="true"] {
    color: #fff;
    background: #374250;
  }


  a[data-toggle="collapse"] {
    position: relative;
  }

  a[aria-expanded="false"]::before,
  a[aria-expanded="true"]::before {
    content: '\e259';
    display: block;
    position: absolute;
    right: 20px;
    font-family: 'Glyphicons Halflings';
    font-size: 0.6em;
  }

  a[aria-expanded="true"]::before {
    content: '\e260';
  }


  ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #374250;
  }

  ul.CTAs {
    padding: 20px;
  }

  ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  a.download {
    background: #fff;
    color: #7386D5;
  }

  a.article,
  a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
  }



  /* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

  #content {
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
    width: 100%;
  }

  /* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

  @media (max-width: 768px) {
    #sidebar {
      margin-left: -250px;
      height: 100%;
    }
    #sidebar.active {
      margin-left: 0;
    }
    #sidebarCollapse span {
      display: none;
    }
  }

</style>
