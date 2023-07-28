import { ref } from 'vue'

const carrinho = ref({
  itens: [],
  total: 0
})

const favoritar = ref({
  itens: [],
  total: 0
})

function atualizaQuantidadeItem(item) {
  carrinho.value.total -= item.total
  item.total = item.price * item.quantidade
  carrinho.value.total += item.total
}

function removerItemCarrinho(item) {
  const index = carrinho.value.itens.findIndex((i) => i.id === item.id)
  carrinho.value.total -= item.total
  carrinho.value.itens.splice(index, 1)
}

function adicionarAoCarrinho(livro) {
  const index = carrinho.value.itens.findIndex((item) => item.id === livro.id)
  if (index === -1) {
    carrinho.value.itens.push({
      ...livro,
      quantidade: 1,
      total: livro.price
    })
    carrinho.value.total += livro.price
  } else {
    carrinho.value.itens[index].quantidade++
    carrinho.value.itens[index].total += livro.price
    carrinho.value.total += livro.price
  }
}

function adicionarAoFavoritos(livro) {
  const index = favoritar.value.itens.findIndex((item) => item.id === livro.id)
  if (index === -1) {
    favoritar.value.itens.push({
      ...livro,
      quantidade: 1,
      total: livro.price
    })
    favoritar.value.total += livro.price
  } else {
    favoritar.value.itens[index].quantidade++
    favoritar.value.itens[index].total += livro.price
    favoritar.value.total += livro.price
  }
}

export {
  carrinho,
  adicionarAoCarrinho,
  removerItemCarrinho,
  atualizaQuantidadeItem,
  adicionarAoFavoritos,
  favoritar
}
