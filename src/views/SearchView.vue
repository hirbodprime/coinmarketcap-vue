<template>
  <div class="Search">
    <h4><Search/></h4>
  </div>
</template>

<script>
import Search from '../components/searchBar.vue'
export default {
  components:{
    Search
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .Search {
    min-height: 100px;
    display: flex;
    align-items: center;
  }
}
</style>
