
const meu_span = document.getElementById("container");

const pega_json = async(caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

let conteudo = ''; 

const montaCard = (atleta) => {
    const cartao = document.createElement("article");
    const nome= document.createElement("h1")
    const imagem= document.createElement("img")
    const descri= document.createElement("p")
    const link= document.createElement("a");

    nome.innerHTML=atleta.nome;
    cartao.appendChild(nome);

    imagem.src=atleta.imagem;
    cartao.appendChild(imagem);

    descri.innerHTML=atleta.detalhes;
    cartao.appendChild(descri);

    link.innerHTML="Saiba mais...";
    link.href = `detalhes.html?id=${atleta.id}&altura=${atleta.altura}`;
    cartao.appendChild(link);

    container.appendChild(Cartao);
}

pega_json("https://botafogo-atletas.mange.li/2024_1/all").then(
    ( r ) => r.forEach((atleta) => conteudo += montaCard(atleta))
)

console.log("Isso imprime antes");