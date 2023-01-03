<template>
<div>
    <div v-if="err == ''">
        <div v-if="info == ''">
            wait...
        </div>
        <div v-else>

        <h3> {{info}} </h3> 
        </div>
    <RouterLink to="/coins-list">Here</RouterLink>
        is a list of Coins
    </div>
    <div v-else>
        {{err}}
    </div>
</div>
</template>




<script>
import  axios  from "axios";
export default {
    name:'UpdateCoins',
    data () {
        return {
            info: '',
            err:''
        }
    },
    mounted () {
        axios
            .get('http://127.0.0.1:8000/coin/scrape-coins/')
            .then(response => {
                if (response.data.length == 0){
                    this.err = 'could not scrape coins';                    
                } else{
                    this.info = 'coins updated!';
                    console.log(response.data);
                }
            })
    },
}
</script>



<style scoped>

</style>