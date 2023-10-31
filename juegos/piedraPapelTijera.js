


function mostrarPantallaPPT() {
        
    //Oculta el video de inicio
    const videoInicio = document.getElementById('videoInicio');
    const pantallaJuego = document.getElementById('PPT');
    if (videoInicio.style.display === "none") {
        videoInicio.style.display = "flex";
        pantallaJuego.style.display = 'none';
    } else {
        videoInicio.style.display = "none";
        pantallaJuego.style.display = "flex";
    }
    botonPPT = document.getElementById('botonPPT');
    if (botonPPT.textContent ==  'Volver'){
        botonPPT.textContent = 'Piedra, papel o tijera'; 
    } else {
        botonPPT.textContent = 'Volver'; 
    };
}


function iniciarPiedraPapelTijera() {
    mostrarPantallaPPT();
    document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", play);
    });
}

function play(event) {
    const playerChoice = event.target.id;
    const options = ["piedra", "papel", "tijera"];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    const result = getResult(playerChoice, computerChoice);

    displayResult(playerChoice, computerChoice, result);
}

function getResult(player, computer) {
    if (player === computer) return "Empate";

    if (
        (player === "piedra" && computer === "tijera") ||
        (player === "tijera"&& computer === "papel") ||
        (player === "papel" && computer === "piedra")
    ) {
        return "Ganaste";
    }

    return "Perdiste";
}

function displayResult(player, computer, result) {
    document.querySelector(".result p").textContent = `Elegiste ${player}, la computadora eligió ${computer}. ${result}`;
    console.log(`Elegiste ${player}, la computadora eligió ${computer}. ${result}`);
    document.querySelector("#winner").textContent = result;
}

