const container = document.querySelector('#container');

function createNewGrid (gridSize) {
    for (let index = 0; index < gridSize*gridSize; index++) {
        let newNode = document.createElement('div');
        newNode.classList = 'grid-item inactive-pixel';
        newNode.textContent = index;
        container.style.cssText = `grid-template-rows: repeat(${gridSize}, 50px); grid-template-columns: repeat(${gridSize}, 1fr);`;
        container.appendChild(newNode);
    }
}


const grid = document.querySelectorAll('.grid-item');

grid.forEach(element => element.addEventListener('mouseover', (e)=> {
    e.target.classList.remove("inactive-pixel");
    e.target.classList.add("active-pixel");
}));

const btnErase = document.querySelector('.erase');
btnErase.addEventListener('click', function() {
    grid.forEach(element => element.classList = 'grid-item inactive-pixel');
});

const btnReset = document.querySelector('.reset');
btnReset.addEventListener('click', function() {
    grid.forEach(element => element.remove());
    createNewGrid(16);
    // solve if clicked twice - grid is two times
    // grid not reacting on mouse over anymore....
    // continue grinding the exercise
})

