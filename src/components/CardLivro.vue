<script setup>
import MButton from './MButton.vue';

import { adicionarAoCarrinho } from '@/_data/carrinho.js';
const props = defineProps({
    livro: Object
})

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}

</script>

<template>

<div class="card-livro">
        <div class="card-info-livro">
          <div class="wrap-livro">
            <img :src="props.livro.img" alt="Capa do livro" class="capa-livro" />
          </div>
          <p class="titulo-livro">{{ props.livro.title }}</p>
          <p class="marca-livro">{{ props.livro.marca }}</p>
          <p class="preco-livro">{{ formatarPreco(props.livro.price) }}</p>
        </div>
        <div class="card-buttons-livros">
          <m-button @click="adicionarAoCarrinho(props.livro)" texto="🛒"/>
         
        </div>
      </div>
    

</template>

<style scoped>

.card-livro {
  margin: 5px 10px;
  padding: 10px;
  background-image:linear-gradient( #a0522d, #111111);
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Times New Roman', Times, serif;
  color: white;
}

.wrap-livro {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 180px;
  height: 270px;
}
.capa-livro {
  width: 90%;
  max-height: 100%;
}

.card-livro p {
  margin: 0;
}

.card-livro .titulo-livro {
  font-weight: bold;
  margin-bottom: 5px;
}

</style>