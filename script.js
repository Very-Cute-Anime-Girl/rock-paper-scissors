function getComputerChoice() {
  let choice = Math.random();

  switch (true) {
    case choice < 0.33:
      choice = "piedra";
      break;
    case choice >= 0.33 && choice < 0.66:
      choice = "papel";
      break;
    case choice >= 0.66:
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
      case humanChoice === "piedra" && computerChoice === "papel":
        console.log(`Tu elección: ${humanChoice}`);
        console.log(`Elección de la máquina: ${computerChoice}`);
        console.log("¡Perdiste!");
        if (puntajeHumano == 0) {
          puntajeHumano = puntajeHumano;
        } else if (puntajeHumano >= 0) {
          puntajeHumano = puntajeHumano - 1;
        }
        puntajePC = puntajePC + 1;
        break;
      case humanChoice === "piedra" && computerChoice === "tijeras":
        console.log(`Tu elección: ${humanChoice}`);
        console.log(`Elección de la máquina: ${computerChoice}`);
        console.log("¡Ganaste!");
        if (puntajePC == 0) {
          puntajePC = puntajePC;
        } else if (puntajePC >= 0) {
          puntajePC = puntajePC - 1;
        }
        puntajeHumano = puntajeHumano + 1;
        break;
      case humanChoice === "papel" && computerChoice === "tijeras":
        console.log(`Tu elección: ${humanChoice}`);
        console.log(`Elección de la máquina: ${computerChoice}`);
        console.log("¡Perdiste!");
        if (puntajeHumano == 0) {
          puntajeHumano = puntajeHumano;
        } else if (puntajeHumano >= 0) {
          puntajeHumano = puntajeHumano - 1;
        }
        puntajePC = puntajePC + 1;
        break;
      case humanChoice === "papel" && computerChoice === "piedra":
        console.log(`Tu elección: ${humanChoice}`);
        console.log(`Elección de la máquina: ${computerChoice}`);
        console.log("¡Ganaste!");
        if (puntajePC == 0) {
          puntajePC = puntajePC;
        } else if (puntajePC >= 0) {
          puntajePC = puntajePC - 1;
        }
        puntajeHumano = puntajeHumano + 1;
        break;
      case humanChoice === "tijeras" && computerChoice === "piedra":
        console.log(`Tu elección: ${humanChoice}`);
        console.log(`Elección de la máquina: ${computerChoice}`);
        console.log("¡Perdiste!");
        if (puntajeHumano == 0) {
          puntajeHumano = puntajeHumano;
        } else if (puntajeHumano >= 0) {
          puntajeHumano = puntajeHumano - 1;
        }
        puntajePC = puntajePC + 1;
        break;
      case humanChoice === "tijeras" && computerChoice === "papel":
        console.log(`Tu elección: ${humanChoice}`);
        console.log(`Elección de la máquina: ${computerChoice}`);
        console.log("¡Ganaste!");
        if (puntajePC == 0) {
          puntajePC = puntajePC;
        } else if (puntajePC >= 0) {
          puntajePC = puntajePC - 1;
        }
        puntajeHumano = puntajeHumano + 1;
        break;
      default:
        console.log(`Tu elección: ${humanChoice}`);
        console.log(`Elección de la máquina: ${computerChoice}`);
        console.log("Empate");
    }

    console.log(`Puntaje Humano: ${puntajeHumano}`);
    console.log(`Puntaje PC: ${puntajePC}`);
  }

  for (let i = 1; i <= 1; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log(`Ronda: ${i}`);
    playRound(humanSelection, computerSelection);
  }

  const ganador = puntajeHumano > puntajePC;
  ganador ? console.log("Ganador: Humano.") : console.log("Ganador: PC");
  console.log("Juego terminado");
}

playGame();


// Bucle for...of
const canidos = ["Lobo", "Perro", "Hiena", "Coyote"];

for (const can of canidos) {
    console.log(can)
}

// map() aplica cambios a caada elemento de una colección y lo guarda una nueva
function toUpper(string) {
    return string.toUpperCase();
}

const mayusCanidos = canidos.map(toUpper);
console.log(mayusCanidos);

// con filter() se dan parámetros para crear una colección nueva con items que lo cumplen
function lCan(can) {
    return can.startsWith("P");
}

const canidosFiltrado = canidos.filter(lCan);
console.log(canidosFiltrado)

// Búsqueda de contactos
const contactos = [
    "Juan:123456789",
    "Martin:234567891",
    "Pepe:345678912",
    "Abdul:456789123",
    "Said:567891234",
];

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contacto of contactos) {
        const splitContact = contacto.split(":");
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `El número de ${splitContact[0]} es ${splitContact[1]}`;
            break; // Sale del bucle, deja de buscar.
        }
    }
    if (para.textContent === "") {
        para.textContent = "No se encontró el contacto.";
    }
});

// bucle while y do...while
let indice = 1
while (indice<=5) {
    console.log(indice);
    indice++;
}

do {
    console.log(`mensaje ${indice}`)
    indice++;
} while (indice<=10)

// do...while siempre corre al menos una vez, luego checa la condición
// array -> colección ordenada de items

const arr = [1,2,3,4,5];
const productoDeTodo = arr.reduce((total, itemActual) => {
    return total * itemActual;
}, 1);
console.log(productoDeTodo)
console.log(arr)