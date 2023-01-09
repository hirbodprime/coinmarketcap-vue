<template>
<div>
<div v-if="info_get_coin">
    <h3>
    {{$route.params.symbol_or_name}}
        {{info_get_coin.name}}
    </h3>
    <ul>
        <li>
            {{info_get_coin.symbol}} 
        </li>
        <li>
            {{info_get_coin.price}}
        </li>
        <div v-if="info_get_coin.image != null">
        <li>
            <br>
            <!-- {{info}} -->
            <img :src="`http://127.0.0.1:8000/media/path/logo-${info_get_coin.symbol}.jpg`" alt=""> 
        </li>
        </div>
    </ul>
</div>
<div v-else-if="info_get_coin == null">
<PageNotFound />
</div>
</div>
</template>





<script>
import  axios  from "axios";
import PageNotFound from '../components/404NotFound.vue'
export default {
    name:'single-coin',
    props:{
        symbol_or_Name:{
            type:String,
            // default:"BTC"
        }
    },
    data () {
        return {
            info_get_coin: '',
        }
    },
    components:{
        PageNotFound
    },
    mounted () {
        let x = this.$route.params.symbol_or_name
        axios
            .get(`http://127.0.0.1:8000/coin/api/get-coin/${x}`)
            .then(response => {
                this.info_get_coin = response.data[0];
                console.log(this.info);
            })
            .catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }

            });
    },
}
</script>