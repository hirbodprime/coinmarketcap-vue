<template>
<div>

<v-autocomplete
  clearable
  label="Find Coins"
  :items=this.info
  variant="solo"
>

</v-autocomplete>

<p v-for="i in this.info" :key="i.name">{{i.id}} {{i.name}} {{i.symbol}} {{i.price}}</p>
<div class="search-wrapper panel-heading col-sm-12" >
  
    <input type="text" autocomplete="off" @keydown.space.prevent v-model="search" placeholder="Search" /> <br> <br>
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
      <tr v-for="Coins in filteredCoins" :key="Coins.symbol">
          <td> {{ Coins.name }}</td>
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
        info2: [],
        err:'',
      search: ""
    };
  },
  computed: {
    filteredCoins() {
        return this.info2.filter(p => {
        let arr = [p.name.toLowerCase(),p.symbol.toLowerCase()]
        return arr[0].indexOf(this.search.toLowerCase()) != -1 || arr[1].indexOf(this.search.toLowerCase()) != -1;
      });
    },

  },
  mounted () {
        axios
            .get('http://127.0.0.1:8000/coin/api/get-coins/')
            .then(response => {
                if (response.data.length == 0){
                    this.err = 'no coin found try scraping it';                    
                } else{
                  // this.info = response.data;
                  this.info2 = response.data;
                  for (let index = 0; index < 10; index++) {
                    this.info.push(response.data[index].name);
                    }
                }

            })
    },
}
</script>



<style scoped>

</style>