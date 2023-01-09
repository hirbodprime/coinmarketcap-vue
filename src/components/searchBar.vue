<template>
<div>

<v-autocomplete
  clearable
  label="Find Coins"
  :items=this.info
  variant="solo"
  return-object
>
<template v-slot:item="info">
      <v-list-item @click="goToCryptoPage(info['item']['title'])" class="px-5">
        <v-list-item-title>
          {{ info['item']['title'] }}
        </v-list-item-title>
      </v-list-item>
    </template>
</v-autocomplete>

<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
          <input @keydown.space.prevent v-model="search" type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
    </div>

    <!-- <p v-for="i in filteredCoins" :key="i.name">{{i.id}} {{i.name}} {{i.symbol}} {{i.price}}</p> -->

<table class="table-fixed">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Symbol</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="i in filteredCoins" :key="i.name" >
      <td>{{i.id}}</td>
      <td>{{i.name}}</td>
      <td>{{i.symbol}}</td>
      <td>{{i.price}}</td>
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
    methods:{
      goToCryptoPage(item) {
        this.$router.push({
          name: "single-coin",
          params: {
            itemType: String,
            symbol_or_name:item

          },
        });
      },
    }
}
</script>



<style scoped>
</style>