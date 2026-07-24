function getComputerChoice() {
    let choice = Math.random();
    
    switch (true) {
        case (choice<0.33):
            choice = "piedra";
            break;
        case (choice>=0.33 && choice<0.66):
            choice = "papel";
            break;
        case (choice>=0.66):
            choice = "tijeras";
            break;
    }

    return choice;
}

function getHumanChoice() {
    let choice = prompt("Ingrese su elección:");

    return choice.toLowerCase();
}

function playGame() {
    let puntajeHumano = 0;
    let puntajePC = 0;

    function playRound(humanChoice, computerChoice) {
        switch (true) {
            case (humanChoice === "piedra" && computerChoice === "papel"):
                console.log(`Tu elección: ${humanChoice}`);
                console.log(`Elección de la máquina: ${computerChoice}`);
                console.log("¡Perdiste!");
                if (puntajeHumano==0) {
                    puntajeHumano = puntajeHumano;
                } else if (puntajeHumano>=0) {
                    puntajeHumano = puntajeHumano - 1;
                }
                puntajePC = puntajePC + 1;
                break;
            case (humanChoice === "piedra" && computerChoice === "tijeras"):
                console.log(`Tu elección: ${humanChoice}`);
                console.log(`Elección de la máquina: ${computerChoice}`);
                console.log("¡Ganaste!");
                if (puntajePC==0) {
                    puntajePC = puntajePC;
                } else if (puntajePC>=0) {
                    puntajePC = puntajePC - 1;
                }
                puntajeHumano = puntajeHumano + 1;
                break;
            case (humanChoice === "papel" && computerChoice === "tijeras"):
                console.log(`Tu elección: ${humanChoice}`);
                console.log(`Elección de la máquina: ${computerChoice}`);
                console.log("¡Perdiste!");
                if (puntajeHumano==0) {
                    puntajeHumano = puntajeHumano;
                } else if (puntajeHumano>=0) {
                    puntajeHumano = puntajeHumano - 1;
                }
                puntajePC = puntajePC + 1;
                break;
            case (humanChoice === "papel" && computerChoice === "piedra"):
                console.log(`Tu elección: ${humanChoice}`);
                console.log(`Elección de la máquina: ${computerChoice}`);
                console.log("¡Ganaste!");
                if (puntajePC==0) {
                    puntajePC = puntajePC;
                } else if (puntajePC>=0) {
                    puntajePC = puntajePC - 1;
                }
                puntajeHumano = puntajeHumano + 1;
                break;
            case (humanChoice === "tijeras" && computerChoice === "piedra"):
                console.log(`Tu elección: ${humanChoice}`);
                console.log(`Elección de la máquina: ${computerChoice}`);
                console.log("¡Perdiste!");
                if (puntajeHumano==0) {
                    puntajeHumano = puntajeHumano;
                } else if (puntajeHumano>=0) {
                    puntajeHumano = puntajeHumano - 1;
                }
                puntajePC = puntajePC + 1;
                break;
            case (humanChoice === "tijeras" && computerChoice === "papel"):
                console.log(`Tu elección: ${humanChoice}`);
                console.log(`Elección de la máquina: ${computerChoice}`);
                console.log("¡Ganaste!");
                if (puntajePC==0) {
                    puntajePC = puntajePC;
                } else if (puntajePC>=0) {
                    puntajePC = puntajePC - 1;
                }
                puntajeHumano = puntajeHumano + 1;
                break;
            default:
                console.log(`Tu elección: ${humanChoice}`);
                console.log(`Elección de la máquina: ${computerChoice}`);
                console.log("Empate");
        }

        console.log(`Puntaje Humano: ${puntajeHumano}`)
        console.log(`Puntaje PC: ${puntajePC}`)
    }

    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log(`Ronda: ${i}`)
        playRound(humanSelection, computerSelection);
    }

    const ganador = puntajeHumano > puntajePC;
    ganador ? console.log("Ganador: Humano.") : console.log("Ganador: PC");
    console.log("Juego terminado");
}

playGame()