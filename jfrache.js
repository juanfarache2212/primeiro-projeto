const prompt = require('prompt-sync')();

const produtos = [ 
{ nome: "Celular", preco: 1500 },
{ nome: "Mouse", preco: 80 },
{ nome: "Teclado", preco: 120 }
];

const nomeProduto = prompt("Digite o nome do produto: ");

const produtoEncontrado = produtos.find(
    produto => produto.nome.toLowerCase() === nomeProduto.toLowerCase()
);

if (produtoEncontrado) {
    console.log("Preço do produto: R$ " + produtoEncontrado.preco);
} else {
    console.log("Produto não encontrado.");
}

produtos.sort((a, b) => a.preco - b.preco);
