<script setup>
import { RouterView } from 'vue-router';
                                                      
</script>

<template>
  <h1>FutBols: Loja de bolas</h1>
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
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  background-color: brown;
  color: white;
}

</style>
