const botoes =
document.querySelectorAll(".botao");

botoes.forEach(botao => {botao.addEventListener("click", () => {let conteudo = botao.nextElementSibling;

    if(conteudo.style.display === "block"){
        conteudo.style.display = "none";
    }
    else{conteudo.style.display = "block";}
});
});

function tocar(){
    document.getElementById("musica").play();
}