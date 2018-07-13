<template>
  <div>
    <nav id="sidebar" v-bind:class="{active: isActive}">
      <div class="sidebar-header">
        <h3>MASKCARA </h3>
      </div>
      <!-- {{navCategories}} -->
      <ul class="list-unstyled components" v-for="(parent, index) in navCategories.data" :key="index">
        <li>
          <a data-toggle="collapse" v-bind:href="'#id' + parent.id" aria-expanded="false">{{parent.title}}</a>
          <ul class="collapse" v-bind:id="'id'+ parent.id" >
            <li v-for="(child, index) in parent.children" :key="index">
              <a href="#">{{child.title}}</a>
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
