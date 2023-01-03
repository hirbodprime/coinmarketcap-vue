<template>
<div>
<div class="search-wrapper panel-heading col-sm-12">
    <input type="text" @keydown.space.prevent v-model="search" placeholder="Search" /> <br> <br>
  </div>  
  <table class="table" id="myTable">
    <thead>
      <tr>
          <th>Name</th>
          <th>symbol</th>
          <th>price</th>
      </tr>
    </thead>
    <tbody>
      <!-- <p>{{filteredCoins}}</p> -->
      <tr v-for="Coins in filteredCoins" :key="Coins.symbol">
          <td>{{ Coins.name }}</td>
          <td>{{ Coins.symbol }}</td>
          <td>{{ Coins.price }}</td>
      </tr>
    </tbody>
   </table>
</div>
</template>




<script>
import  axios  from "axios";
export default {
    name:"Search",
    data() {
    return {
        info: [],
        err:'',
      search: ""
    };
  },
  computed: {
    filteredCoins() {
        return this.info.filter(p => {
        // return true if the product should be visible

        // in this example we just check if the search string
        // is a substring of the product name (case insensitive)
        let arr = [p.name.toLowerCase(),p.symbol.toLowerCase()]
        return arr[0].indexOf(this.search.toLowerCase()) != -1 || arr[1].indexOf(this.search.toLowerCase()) != -1;
      });
    }
  },
  mounted () {
        axios
            .get('http://127.0.0.1:8000/coin/api/get-coins/')
            .then(response => {
                if (response.data.length == 0){
                    this.err = 'no coin found try scraping it';                    
                } else{
                    this.info = response.data;
                }

            })
    },
}
</script>



<style scoped>

</style>