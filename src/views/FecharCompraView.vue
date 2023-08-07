<script setup>
import { ref } from 'vue'
import MButton from '@/components/MButton.vue'
import MMessage from '@/components/MMessage.vue'
import {
  carrinho,
  adicionarAoCarrinho,
  removerItemCarrinho,
  atualizaQuantidadeItem,
  RemoverItens
} from '@/_data/carrinho.js'

function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}

const nome = ref('')
const email = ref('')
const cidade = ref('')
const endereco = ref('')
const estado= ref('')
const forma = ref('')
const senha = ref('')
const obs = ref('')
const confirma = ref('')
const ok = ref(false)
const cartao = ref([])


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
      <m-message v-if="carrinho.itens.length === 0" />
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
                  <input type="number" v-model="item.quantidade" @change="atualizaQuantidadeItem(item)" min="1" />
                </p>
                <button @click="removerItemCarrinho(item)">❌</button>
                <p>Total: {{ formatarPreco(item.total) }}</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <m-button @click="RemoverItens()" texto="Limpar carrinho" />
      <hr>
      <m-button texto="Continuar comprando:" @click="$router.push({ name: 'home' })" />
      <hr>
      <p class="total">Total: {{ formatarPreco(carrinho.total) }}</p>
    </div>
  </div>
  <div class="container">
    <form class="form" @submit.prevent="ok = validar()">
      <div class="centro ">
        <p class="carrinho-total">Total a se pagar da compra é de: {{ formatarPreco(carrinho.total) }}</p>
        <h2 class="titu">Dados pessoais:</h2>
        <label for="">Nome:</label>
        <input type="text" v-on:keypress="ok = false" v-model="nome" required placeholder="Digite seu nome" />
        <hr>

        <label for="">Email:</label>
        <input type="email" v-on:keypress="ok = false" v-model="email" placeholder="Digite seu email" />
        <hr>
        <h2 class="titu">Endereço de entrega:</h2>
        <label for="">Endereço:</label>
        <input type="text" v-on:keypress="ok = false" v-model="endereco" placeholder="Digite seu endereço" />
        <hr>
        <label for="">Cidade:</label>
        <input type="text" v-on:keypress="ok = false" v-model="cidade" placeholder="Digite sua cidade" />
        <hr>
        <label for="">Estado:</label>
        <input type="text" v-on:keypress="ok = false" v-model="estado" placeholder="Digite seu estado" />
      <hr>
        <h2 class="titu">Forma de pagamento:</h2>
        <label for="forma">Forma:</label>
      <select v-on:keypress="ok = false" v-model="forma">
        <option class="font" value="Pix">Pix</option>
        <option class="font" value="Cartão">Cartão</option>
        <option class="font" value="Boleto">Boleto</option>
      </select>
      <hr><label for="">Senha:</label>
        <input type="password" v-on:keypress="ok = false" v-model="senha" minlength="6" placeholder="Digite sua senha" />
        <hr>
        <label for="">Confirmar senha:</label>
        <input type="password" v-on:keypress="ok = false" v-model="confirma" minlength="6"
          placeholder="Digite sua senha novamente" />
          <hr>
          <h2 class="titu">Observação sobre o site:</h2>
        <input type="text" v-on:keypress="ok = false" v-model="obs" style="padding: 30px;"
          placeholder="Digite uma obs sobre a loja..." />
        <hr>
        <button class="comp" type="submit">Finalizar</button>
      </div>
    </form>
    <div v-if="ok" class="baixo">
      <p>Total da compra é de: {{ formatarPreco(carrinho.total) }}</p>
      <h2 class="titu">Forma de pagamento:</h2>
      <p>A forma de pagamento digitada é: {{ forma }}</p>
      <div v-if="forma === 'Pix' "> 
      <img class="img" src="https://miro.medium.com/v2/resize:fit:640/0*zPG9dqz508rmRR70." alt="">
      <p class="num">OU CHAVE</p>
      <h2 class="num">(47) 99856487</h2>
      </div>
      <div v-if="forma === 'Cartão' "> 
      <p>Selecione o cartão escolhido:</p>
      <img class="img1" src="https://www.melhoresdestinos.com.br/wp-content/uploads/2020/02/bandeiras-3.png" alt="">
        <input type="checkbox" v-model="cartao" v-on:keypress="ok = false" value="American Express" /> American Express
        <input class="validar" type="checkbox" v-model="cartao" v-on:keypress="ok = false" value="MasterCard" />MasterCard
        <input class="validar" type="checkbox" v-model="cartao" v-on:keypress="ok = false" value="Visa" /> Visa
        <input class="validar" type="checkbox" v-model="cartao" v-on:keypress="ok = false" value="Elo" /> Elo
        <div v-if="ok">
        <p>O pagamento foi escolhido no cartão: {{ cartao }}</p>
        </div>
        <div v-if="forma === 'Boleto' "> 
        <p>oii</p>
        </div>
      </div>
      <hr>
      <p>A senha confirmada é de: {{ senha }}</p>
       <p>A confirmação da senha é: {{ confirma }}</p>     
      <h2 class="titu">Observação sobre o site:</h2>
      <p>Observação: {{ obs }}</p>
    
    </div>

  </div>
</template>

<style scoped>
.img2{
  height: 60px;
  width: 70px;
}
.validar{
  display: flex;
}
.img1{
  height: 80px;
  width: 550px;
}
.total{
  background-color: white;
  color: black;
  font-size: 25px;
  font-family: 'Times New Roman', Times, serif;
}
.num{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  background-color: wheat;
}
.carrinho {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Times New Roman', Times, serif;
  color: #a0522d ;
  transform: scale(0.9);

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
.font{
  font-size: 18px;
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

.carrinho-total {
  background-color: white;
  color: black;
  text-align: center;
  border-radius: #ccc 3px;
  font-size: 28px;
}
.img{
  height: 300px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  color: white;
  border: 1px solid #ccc;
  transform: scale(0.7);
}

.form {
  max-width: 700px;
  padding: 25px;
  border: 1px solid #ccc;
  background-color: #a0522d ;
  width: 85vh;
  font-family: 'Times New Roman', Times, serif;
  transform: scale(0.8);
  font-size: 25px;
}
.titu{
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  font-size: 30px;
  color: black;
  background-color: #ccc;
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

.baixo {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: white;
  max-width: 700px;
  padding: 25px;
  border: 1px solid #ccc;
  background-color: #a0522d ;
  width: 70vh;
  transform: scale(0.9);
  font-family: 'Times New Roman', Times, serif;
  font-size: 30px;

}

.comp {
  background-color: white;
  border-radius: #ccc 3px;
  color: black;
}</style>