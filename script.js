
//TODO - solve if clicked twice - grid is two times
//TODO - grid not reacting on mouse over anymore....
//TODO - continue grinding the exercise

function createNewGrid(size) {
    const container = document.createElement('div');
    container.setAttribute("id", "container");
    document.querySelector('body').appendChild(container);

    for (let index = 0; index < size*size; index++) {
        let newNode = document.createElement('div');
        newNode.classList = 'grid-item inactive-pixel';
        container.style.cssText = `grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`;
        container.appendChild(newNode);
    }

    gridAnimationMouseOver()

}

function gridAnimationMouseOver() {
    const grid = document.querySelectorAll('.grid-item');

    grid.forEach(element => element.addEventListener('mouseover', (e)=> {
        e.target.classList.remove("inactive-pixel");
        e.target.classList.add("active-pixel");
    }));

    const btnErase = document.querySelector('.erase');
    btnErase.addEventListener('click', function() {
        grid.forEach(element => element.classList = 'grid-item inactive-pixel');
    });
}

// Init

createNewGrid(16);

// Runtime



const btnReset = document.querySelector('.reset');
btnReset.addEventListener('click', function() {
    container.remove();
    let gridSize = prompt("What size would you like?");
    createNewGrid(gridSize);

})

