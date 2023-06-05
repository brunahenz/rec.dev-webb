<script setup>

import { livros } from '@/_data/livros.js'

import CardLivro from '@/components/CardLivro.vue'

</script>

<template>

    <div class="listagem-livros">
      <card-livro  v-for="livro in livros" :key="livro.id" :livro="livro"/>
    </div>

</template>

<style scoped>

.listagem-livros {
  display: flex;
  flex-wrap: wrap;
}

</style>