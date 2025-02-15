// Variáveis para definir o tamanho da grade
const cols = 9; // Largura: 9 quadrados
const rows = 3; // Altura: 3 quadrados
const totalSquares = cols * rows;

// Criando o tabuleiro
document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.getElementById("game-container");
    gameContainer.style.display = "grid";
    gameContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    gameContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    gameContainer.style.gap = "5px";

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.dataset.index = i;
        gameContainer.appendChild(square);
    }

    activateRandomSquare();
});

// Função para ativar um quadrado aleatório
function activateRandomSquare() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(sq => sq.classList.remove("active"));
    
    const randomIndex = Math.floor(Math.random() * totalSquares);
    squares[randomIndex].classList.add("active");
}

// Evento de clique nos quadrados
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("square")) {
        if (event.target.classList.contains("active")) {
            event.target.classList.remove("active");
            activateRandomSquare();
        }
    }
});

// Estilos CSS para os quadrados
document.head.insertAdjacentHTML("beforeend", `
<style>
    #game-container {
        width: 90vw;
        height: 30vh;
        margin: auto;
    }
    .square {
        width: 100%;
        height: 100%;
        background-color: lightgray;
        border: 1px solid black;
    }
    .square.active {
        background-color: red;
    }
</style>
`);
