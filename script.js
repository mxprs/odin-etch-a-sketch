const container = document.querySelector('#container');

for (let index = 0; index < 16*16; index++) {
    let newNode = document.createElement('div');
    newNode.classList = 'grid-item inactive-pixel';
    newNode.textContent = index;
    container.appendChild(newNode);
    
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