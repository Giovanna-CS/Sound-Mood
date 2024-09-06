console.log(dados);

let section = document.getElementById("resultado-pesquisa")
console.log(section);

let resultados = ""

for (let dado of dados) {
    resultados += `
    <div class="item-resultado">
         <h2>${dado.titulo}</h2>
         <p class="descrição-resultado">${dado.descrição}ulalau vc ta feliz veja essa playlist <a href="${dado.link}"><img src="SpongeBob_SquarePants_personagem.png" alt=""></a></p>
    </div> `
}

section.innerHTML = resultados

