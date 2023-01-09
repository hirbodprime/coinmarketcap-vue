import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Search from '../views/SearchView.vue'
import Coins from '../views/CoinsView.vue'
import Coin from '../components/GetCoin.vue'
import UpdateCoins from '../components/UpdateCoins.vue'
import GetLogo from '../views/GetlogoView.vue'
import PageNotFound from '../components/404NotFound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/search',
    //   name: 'Search',
    //   component:Search
    // },
    {
      path:'/coins-list',
      name:'Coins',
      component:Coins
    },
    {
      path:'/get-coin/:symbol_or_name',
      name:'single-coin',
      component:Coin
    },
    {
      path:'/update-coins',
      name:'UpdateCoins',
      component:UpdateCoins
    },
    {
      path:'/get-logo/:symbol_or',
      name:'get-logo',
      component:GetLogo,
      props: true
    },
    { 
      path: "/:pathMatch(.*)*",
      name:"not-found",
      component: PageNotFound ,
    }
  ]
})

export default router
