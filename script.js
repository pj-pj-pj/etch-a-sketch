const gridSize = 16;

createGrid(gridSize);
startEtch();


function startEtch() {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach(item => {
  item.addEventListener('mouseover', etchColor);
  })
}

function etchColor(e) {
  e.target.style.backgroundColor = 'white';
}


function createGrid(size) {
  const grid = document.querySelector('#grid');

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


