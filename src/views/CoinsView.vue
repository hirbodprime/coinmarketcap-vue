<template>
<div>
    <div v-if="err == ''">
    <ul v-for="i in info" v-bind:key="i">
    <br>
        <li>
            <!-- <a :href="`http://localhost:5173/get-coin/${i.name}`" target="_blank" rel="noopener">{{i.name}}</a> -->
            <RouterLink :to="{name: 'single-coin',params: { symbol_or_name: i.name} }">{{i.name}}</RouterLink>
            <RouterLink :to="{name: 'get-logo',params: { symbol_or: i.symbol} }" v-if="i.image == null" > | get logo</RouterLink>
        </li>
        <li>
            <!-- <a :href="`http://localhost:5173/get-coin/${i.symbol}`" target="_blank" rel="noopener"> -->
            <RouterLink :to="{name: 'single-coin',params: { symbol_or_name: i.symbol} }">{{i.symbol}}</RouterLink>
        </li>
        <li>
            {{i.price}}
        </li>
        <li v-if="i.image">
            <br>
           <img :src="i.image" alt=""> 
        </li>
    </ul>
    </div>
    <div v-else>
        {{err}}
    </div>
    <RouterView />
</div>
</template>




<script>
import  axios  from "axios";
// import { RouterLink, RouterView } from 'vue-router';
export default {
    name:'Coins',
    data () {
        return {
            info: '',
            err:''
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
                    console.log(response.data);

                }

            })
    },
}
</script>



<style scoped>

</style>