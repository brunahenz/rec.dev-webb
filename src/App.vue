<script setup>
import { RouterView } from 'vue-router';
                                                      
</script>

<template>
  <h1>HENZ'S STORE</h1>
  <div class="container-geral">
    <RouterView />

    </div> 
</template>

<style scoped>

.container-geral {
  display: grid;
  grid-template-columns: 3fr 1fr;
  
} 
h1{
 
  text-align: center;
  background-color: #111111;
  color: #a0522d;
}

</style>
