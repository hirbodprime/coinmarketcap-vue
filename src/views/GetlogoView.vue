<template>
<div>
    <ul>

        <div v-if="info == true">
            <p> logo dowloaded !</p>
        <li>
            <br>
            <!-- {{info}} -->
            <img :src="`http://127.0.0.1:8000/media/path/logo-${$route.params.symbol_or}.jpg`" alt=""> 
        </li>
        </div>
        
        <p v-else> wait!...</p>
        
    </ul>
</div>
</template>





<script>
import  axios  from "axios";

export default {
    name:'get-logo',
    props:{
        symbol_or:{
            type:String,
            default:"BTC"
        }
    },
    data () {
        return {
            info: false,
        }
    },
    mounted () {
        console.log(this.$route.params.symbol_or,"syasdf");
        axios
        .get(`http://127.0.0.1:8000/coin/get-logo/${this.$route.params.symbol_or}`)
        .then(response => {
                this.info = true;
                console.log(response);
            })
    },
}
</script>