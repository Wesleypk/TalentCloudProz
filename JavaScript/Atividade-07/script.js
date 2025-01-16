let corpo = document.querySelector("body");
corpo.innerHTML = `    <h1 id="título">Venda de produto</h1>
<h5> Vendo carro ano 2000</h2>
<img src="https://garagem360.com.br/wp-content/uploads/2016/03/Chevrolet-Celta.jpg">
<p  id="lista" ></p>
<p>Preço: R$5.000,00</p>
`;
let lista = document.getElementById("lista");
lista.innerText = `Unico dono
Pintura nova
Pneus novos`;
