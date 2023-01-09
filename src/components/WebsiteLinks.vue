<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import Search from '../views/SearchView.vue'
</script>


<template>
<div>
  
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Search bar</template>
    <Search/>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Coins List</template>
    <RouterLink to="/coins-list">Here</RouterLink>
    <!-- <a href="https://vuejs.org/" target="_blank" rel="noopener"></a> -->
    is a list of coins scraped by my
    <a href="https://github.com/hirbodprime/coinmarketcap" target="_blank" rel="noopener">Coinmarketcap scraper</a>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>API</template>

    This project API's are written in  
    <a href="https://www.python.org/" target="_blank" rel="noopener">python</a>
    using
    <a href="https://www.djangoproject.com/" target="_blank" rel="noopener">django</a> 
    and 
    <a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener">django-restframework</a>. If
    you need to check the api's just check
    <a href="https://github.com/hirbodprime/django-coinmarketcap" target="_blank" rel="noopener">this link</a>
    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>All links</template>
    <RouterLink to="/coins-list">Coins list</RouterLink>
    |
    <RouterLink to="/update-coins">update coins</RouterLink>
    |
    <!-- <RouterLink to="/get-logos">get coins logos</RouterLink> -->
    
  </WelcomeItem>

  

  <WelcomeItem>
    
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem> 
</div>
</template>
