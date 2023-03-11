const gridSize = 16;
const grid = document.querySelector('#grid');
const buttonChangeSize = document.querySelector('#change-grid-size')

createGrid(gridSize);

grid.addEventListener('mouseover', etchColor)
buttonChangeSize.addEventListener('click', changeGridSize);


function createGrid(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div');
    row.className = 'grid-row';
    grid.appendChild(row);
    for (let j = 0; j < size; j++) {
      const gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      row.appendChild(gridItem);
    }
  }
}


function etchColor(e) {
  if (e.target.className == 'grid-item') {
    e.target.style.backgroundColor = 'white';
  }
}


function changeGridSize() {
  clearGrid();

  number = prompt("Enter a number (2-100)");

  if (number >= 2 && number <= 100) {
    createGrid(number);
  } else {
    createGrid(gridSize)
  }
}


function clearGrid() {
  grid.innerHTML = ' ';
}