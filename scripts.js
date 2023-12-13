const gridSize = 16;
const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridContainer.appendChild(gridItem);
  }