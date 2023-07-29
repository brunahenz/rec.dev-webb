<script setup>
import { ref } from 'vue'

import {
  carrinho,
  adicionarAoCarrinho,
  removerItemCarrinho,
  atualizaQuantidadeItem,

} from '@/_data/carrinho.js'

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}

const nome = ref('')
const email = ref('')
const endereco = ref('')
const forma = ref('')
const senha = ref('')
const confirma = ref('')
const ok = ref(false)

function validar() {
  if (senha.value === confirma.value) {
    return true;
  }
  else {
    return false;
  }
}
</script>


<template>
    <div class= "container">
    <form class="form" @submit.prevent="ok = validar()">
      <div class="centro ">
        <p class="carrinho-total">Total a se pagar da compra é de: {{ formatarPreco(carrinho.total) }}</p>
        <label for="">Nome:</label>
        <input type="text" v-on:keypress="ok = false" v-model="nome" required placeholder="Digite seu nome" />
        <hr>
       
        <label for="">Email:</label>
        <input type="email" v-on:keypress="ok = false" v-model="email" placeholder="Digite seu email" />
        <hr>
        <label for="">Endereço:</label>
        <input type="text" v-on:keypress="ok = false" v-model="endereco" placeholder="Digite seu endereço" />
        <hr>
       
        <label for="estado">Forma de pagamento:</label>
        <select v-on:keypress="ok = false" v-model="forma">
          <option value="cartao">Cartão: Crédito ou debito</option>
          <option value="pix">Pix</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="boleto">Boleto</option>
          
        </select>
        <hr>
        <label for="">Senha:</label>
        <input type="password" v-on:keypress="ok = false" v-model="senha" minlength="6" placeholder="Digite sua senha" />
        <hr>
        <label for="">Confirmar senha:</label>
        <input type="password" v-on:keypress="ok = false" v-model="confirma" minlength="6"
          placeholder="Digite sua senha novamente" />
        <hr>
        <button type="submit">Mostrar</button>
      </div>
    </form>
    <div v-if="ok" class="baixo">
        <p>Total da compra é de: {{ formatarPreco(carrinho.total) }}</p>
      <p>O nome digitado é: {{ nome }}</p>
      <p>O email digitado é: {{ email }}</p>
      <p>O endereço digitado é: {{ endereco }}</p>
      <p>A forma de pagamento digitada é: {{ forma}}</p>
      <p>A senha digitada é: {{ senha }}</p>
      <p>A confirmação digitada é: {{ confirma }}</p>
     
    </div>
</div>
  </template>
  
  <style scoped>
.container{ 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
color:white;
}
.form{
    max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: brown;

}
.centro {
    margin-bottom: 10px;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.baixo{
    text-align: center;
display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  display: block;
  margin-bottom: 10px;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: brown;
color:white;


}


  </style>
