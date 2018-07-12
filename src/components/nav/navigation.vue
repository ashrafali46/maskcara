<template>
  <div>
    <nav id="sidebar" v-bind:class="{active: isActive}">
      <div class="sidebar-header">
        <h3>Maskcara</h3>
      </div>
      <!-- {{navCategories}} -->
      <ul class="list-unstyled components" v-for="(item, index) in navCategories.data" :key="index">
        <li>
          <a data-toggle="collapse" aria-expanded="false">{{item.title}}</a>
          <ul class="collapse list-unstyled" >
            <li>
              <a href="#">{{item.title}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'navigation',
    mounted() {
      //when the component is loaded, trigger the api call from store
      this.$store.dispatch('getCategories')
    },
    computed:{
        isActive(){
            return this.$store.getters.isActive;
        },
        navCategories(){
            return this.$store.getters.categories;
        }
    },
  }

</script>
