const titulo = document.getElementById("titulo");
console.log(titulo);
const lista_nao_ordenada = document.querySelector("ul");
console.log(lista_nao_ordenada);
const link = document.querySelector("a");
console.log(link);
const lista_ordenada = document.getElementById("lista-ordenada");
console.log(lista_ordenada);

titulo.innerText = "Adicionando Titulo";
link.innerText = "Adicionando link";
lista_nao_ordenada.innerHTML = `
    <li>Item Simples 1</li>
    <li>Item Simples 2</li>
    <li>Item Simples 3</li>
    `;
lista_ordenada.innerHTML = `
    <a href="google.com.br"><li>Google</li></a>
    <a href="mercadolivre.com.br"><li>Mercado Livre</li></a>
    <a href="facebook.com.br"><li>Facebook</li></a>
    `;
