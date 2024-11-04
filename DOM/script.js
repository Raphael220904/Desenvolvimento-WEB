
const meu_span = document.getElementById("container");

let conteudo = ''; 

const montaCard = (atleta) => `
    <article>
        <h1>${atleta.nome}</h1>
        <img src="${atleta.imagem}">
        <p>${atleta.detalhes}</p>
    </article>
`;

/*for (let i = 0; i < dados.length; i++){
    let atleta = dados[i];

    conteudo += montaCard(atleta);
}*/

dados.forEach((atleta) => contudo += montaCard(atleta))

container.innerHTML = conteudo;
