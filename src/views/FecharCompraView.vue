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
    <div class="carrinho">
      <h2>Pagamento:🛒</h2>
      <div class="wrap-carrinho">
        <m-message v-if="carrinho.itens.length === 0"/>
        <div v-else>
          <div class="item-carrinho" v-for="(item, index) in carrinho.itens" :key="index">
            <div class="info-livro">
              <div class="imagem-livro">
                <img :src="item.img" class="icon-capa-livro" />
              </div>
              <div class="detalhes-livro">
                <div>
                  <p>{{ item.title }}</p>
                  <p class="info-livro-preco">{{ formatarPreco(item.price) }}/un</p>
                </div>
                <div>
                  <p>
                    Quantidade:
                    <input
                      type="number"
                      v-model="item.quantidade"
                      @change="atualizaQuantidadeItem(item)"
                      min="1"
                    />
                  </p>
                  <button @click="removerItemCarrinho(item)">&#128465;</button>
                  <p>Total: {{ formatarPreco(item.total) }}</p>
                  <p class="carrinho-total">Total: {{ formatarPreco(carrinho.total) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <m-button texto="Limpar"/>
        <m-button texto="🛒" @click="$router.push({name: 'fechar-compra'})"/>
        
        <button class="comp" @click="$router.push({name: 'home'})">Continuar comprando</button>
      </div>
    </div>
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
        <button  class="comp" type="submit">Mostrar</button>
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

.carrinho {
    display: flex;
    flex-direction: column;
    align-items: center;
  font-family: 'Times New Roman', Times, serif;
  color: brown;
}
.wrap-carrinho .carrinho-total {
    position: fixed;
    bottom: 3%;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .item-carrinho .info-livro {
    display: flex;
    margin-bottom: 50px;
  }
  .detalhes-livro {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .detalhes-livro p {
    margin: 0;
  }
  .detalhes-livro div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .detalhes-livro input[type='number'] {
    width: 50px;
    text-align: center;
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    margin-left: 10px;
  }
  
  .detalhes-livro button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: black;
    padding: 0;
    margin: 0;
  }
  
  .info-livro-preco {
    margin-left: auto;
  }
  .icon-capa-livro {
    width: 150px;
    margin-right: 10px;
  }
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
.comp{
  background-color: white;
  border-radius: #ccc 3px;
  color: brown;
}
  
</style>