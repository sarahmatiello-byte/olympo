let curtidas = 0;
let joinhas = 0;

function curtir() {
    curtidas++;
    document.getElementById("contadorCurtidas").textContent = curtidas;
}

function joinha() {
    joinhas++;
    document.getElementById("contadorJoinhas").textContent = joinhas;
}
