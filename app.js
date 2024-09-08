function pesquisar() {
    let section = document.getElementById("resultado-pesquisa"); //Obtém o elemento da seção onde os resultados da pesquisa serão exibidos. 

    let campoPesquisa = document.getElementById ("campo-pesquisa").value; 
    // Obtém o valor do campo de pesquisa.


    if (campoPesquisa == "") {
        section.innerHTML = "<p> Nada foi encontrado </p>"
        return
    }

     // Verifica se o campo de pesquisa está vazio. Se estiver, exibe uma mensagem indicando que nada foi encontrado e encerra a função.
    campoPesquisa = campoPesquisa.toLowerCase();  // Converte o texto do campo de pesquisa para minúsculas para facilitar a comparação.

    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";

for (let dado of dados) { // Percorre todos os dados disponíveis.
    titulo =dado.titulo.toLowerCase ()
    descrição =dado.descrição.toLowerCase ()
    tags =dado.tags.toLowerCase ()

    if (titulo.includes(campoPesquisa) || (descrição.includes(campoPesquisa)) || tags.includes(campoPesquisa)){ 
        resultados += // Se houver correspondência, adiciona o item aos resultados.
       `<div class="item-resultado">
           <h2>${dado.titulo}</h2>
           <p class="descrição-resultado">${dado.descrição} <a href="${dado.link}"><img src="midias/spotifyimg.jpg" </a></p>
       </div> `;
   }
}

// Exibe os resulados na seção de pesquisa.
section.innerHTML = resultados;    

}

