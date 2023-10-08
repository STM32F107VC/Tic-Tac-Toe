/*  Made by: Sydney Bär
    Project started on: 07.10.2023
    Project completed on: 
    Project changed on: 
    Purpose: learning
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
]

function createTable() {
    const table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
    return table;
}

function render() {
    const contentDiv = document.getElementById('content');
    const table = createTable();
    contentDiv.appendChild(table);
}

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

const myCircle = generateCircle();
document.body.appendChild(myCircle);


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

const myCross = generateCross();
document.body.appendChild(myCross);



