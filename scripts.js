const gridContainer = document.querySelector('.grid-container');

function setSize(num) {
    let gridSize = num;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
        gridItem.style.width = `calc(100% / ${gridSize})`;
        gridItem.style.height = `calc(100% / ${gridSize})`;
        gridItem.addEventListener('mouseover', changeColor);
      }
    }
setSize(16);

const resize = document.querySelector('#resize');
resize.addEventListener('click', () => {
    gridSize = prompt('Enter new grid size:');
    gridContainer.innerHTML = '';
    setSize(gridSize);
});

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.style.backgroundColor = 'white';
    });
});


