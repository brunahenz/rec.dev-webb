<script setup>
import { ref } from 'vue'
import MButton from '@/components/MButton.vue'
import FecharCompraView from './FecharCompraView.vue';


const nome = ref('')
const email = ref('')
const cidade = ref('')
const endereco = ref('')
const forma = ref('')
const senha = ref('')
const obs = ref('')
const confirma = ref('')
const ok = ref(false)


</script>

<template>
<div v-if="ok" class="baixo">
      <p>Total da compra é de: {{ formatarPreco(carrinho.total) }}</p>
      <h2 class="titu">Dados pessoais:</h2>
      <hr>
      <p>O nome digitado é: {{ nome }}</p>
      <p>O email digitado é: {{ email }}</p>
      <p>A senha digitada é: {{ senha }}</p>
      <p>A confirmação digitada é: {{ confirma }}</p>
      <hr>
      <h2 class="titu">Endereço de entrega:</h2>
      <p>O endereço digitado é: {{ endereco }}</p>
      <p>A cidade digitada é: {{ cidade }}</p>
      <hr>
      <h2 class="titu">Forma de pagamento:</h2>
      <p>A forma de pagamento digitada é: {{ forma }}</p>
      <hr>
      <h2 class="titu">Forma de pagamento:</h2>
      <p>Observação: {{ obs }}</p>
    </div>
</template>

<style scoped>

.baixo {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 138vh;
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

</style>
