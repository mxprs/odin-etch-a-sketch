// ------ 0/ Logic

// function to create a new grid with animation on event mouse over
function createNewGrid(size) {
    const container = document.createElement('div');
    container.setAttribute("id", "container");
    document.querySelector('body').appendChild(container);

    // generate the grid on the given size
    for (let index = 0; index < size*size; index++) {
        let newNode = document.createElement('div');
        newNode.classList = 'grid-item inactive-pixel';
        container.style.cssText = `grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr);`;
        container.appendChild(newNode);
    }

    // Add the animation on the grid on mouse over event
    gridAnimationMouseOver()

    // add info below the grid to notify user of the size of the grid
    const textBlock = document.createElement('p');
    textBlock.textContent = `Current size is ${size}x${size}.`;
    textBlock.className = 'info-size-grid';
    document.querySelector('body').appendChild(textBlock);

}

// function for the animation mouse over
function gridAnimationMouseOver() {
    const grid = document.querySelectorAll('.grid-item');

    // change each div to active if mouseovered
    grid.forEach(element => element.addEventListener('mouseover', (e)=> {
        e.target.classList.remove("inactive-pixel");
        e.target.classList.add("active-pixel");
    }));

    // Feature of the clean button with a click listener
    const btnErase = document.querySelector('.erase');
    btnErase.addEventListener('click', function() {
        grid.forEach(element => element.classList = 'grid-item inactive-pixel');
    });
}

// ------ 1/ Init

// Initialize the grid at first visit
createNewGrid(30);

// ------ 2/ Runtime

// Feature of the reset button with a click listener
const btnReset = document.querySelector('.reset');
btnReset.addEventListener('click', function() {

    // delete the info 'p' element for the size of the grid
    document.querySelector('.info-size-grid').remove();

    // remove the container with the grid inside
    container.remove();

    // request which size the user wants
    let gridSize = prompt("What size would you like?");

    // generate the new grid
    createNewGrid(gridSize);
    

})

