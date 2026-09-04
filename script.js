
let curtidas = 0;

function curtir() {

    curtidas++;

    document.getElementById("contadorCurtidas").textContent = curtidas;

}



let joinhas = 0;

function joinha() {

    joinhas++;

    document.getElementById("contadorJoinhas").textContent = joinhas;

}



const temaBtn = document.getElementById("temaBtn");


temaBtn.addEventListener("click", function () {

    document.body.classList.toggle("tema-escuro");


    if (document.body.classList.contains("tema-escuro")) {

        temaBtn.textContent = "☀️";

    } else {

        temaBtn.textContent = "🌙";

    }

});
