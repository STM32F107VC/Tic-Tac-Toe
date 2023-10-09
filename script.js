/*  Made by: Sydney Bär
    Project started on: 07.10.2023
    Project completed on: 
    Project changed on: 
    Purpose: learning prompt engineering
*/

/* Declare array */
let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];

/* Called when body loads */
function init() {
    render();
}

/* Render table */
function render() {
    const contentDiv = document.getElementById('content');
    const table = document.createElement('table');
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            cell.dataset.index = i * 3 + j; // Speichern Sie den Index im dataset
            const fieldValue = fields[i * 3 + j];
            // Überprüfen, ob das Feld bereits ein Kind-Element (Kreis oder Kreuz) hat
            const existingChild = cell.querySelector('.circle, .cross');
            if (!existingChild) {
                if (fieldValue === 'circle') {
                    cell.appendChild(generateCircle());
                    cell.classList.add('circle');
                } else if (fieldValue === 'cross') {
                    cell.appendChild(generateCross());
                    cell.classList.add('cross');
                }
            }
            cell.setAttribute('onclick', `handleClick(${i * 3 + j})`); // Fügen Sie das onclick-Attribut hinzu
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    contentDiv.innerHTML = '';
    contentDiv.appendChild(table);
}

/* Handle cell click */
function handleClick(index) {
    if (fields[index] === null) {
        const currentPlayer = fields.filter(field => field !== null).length % 2 === 0 ? 'circle' : 'cross';
        fields[index] = currentPlayer;
        render();
        const winner = checkWinner();
        if (winner) {
            setTimeout(() => {
                alert(`${winner} hat gewonnen!`);
                resetGame();
            }, 1000);
        } else if (fields.every(field => field !== null)) {
            setTimeout(() => {
                alert('Unentschieden!');
                resetGame();
            }, 1000);
        }
    }
}

/* Check for a winner */
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontale
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertikale
        [0, 4, 8], [2, 4, 6] // Diagonal
    ];
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            return fields[a];
        }
    }
    return null;
}

/* Reset the game */
function resetGame() {
    fields = fields.map(() => null);
    render();
}

/* Generate a circle with svg */
function generateCircle() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "40");
    svg.setAttribute("height", "40");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.classList.add('circle');
    circle.setAttribute("cx", "20");
    circle.setAttribute("cy", "20");
    circle.setAttribute("r", "18");
    circle.setAttribute("fill", "transparent");
    circle.setAttribute("stroke", "#6fabe3");
    circle.setAttribute("stroke-width", "4");
    svg.appendChild(circle);
    return svg;
}

/* Generate a cross with svg */
function generateCross() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "40");
    svg.setAttribute("height", "40");
    const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line1.classList.add('cross');
    line1.setAttribute("x1", "0");
    line1.setAttribute("y1", "0");
    line1.setAttribute("x2", "40");
    line1.setAttribute("y2", "40");
    line1.setAttribute("stroke", "#e36f75");
    line1.setAttribute("stroke-width", "4");
    const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line2.classList.add('cross');
    line2.setAttribute("x1", "0");
    line2.setAttribute("y1", "40");
    line2.setAttribute("x2", "40");
    line2.setAttribute("y2", "0");
    line2.setAttribute("stroke", "#e36f75");
    line2.setAttribute("stroke-width", "4");
    svg.appendChild(line1);
    svg.appendChild(line2);
    return svg;
}