const container = document.querySelector('#container');

for (let index = 0; index < 16*16; index++) {
    let newNode = document.createElement('div');
    newNode.className = 'grid-item';
    newNode.textContent = index;
    container.appendChild(newNode);
    
}

const grid = document.querySelectorAll('.grid-item');

grid.forEach(element => element.addEventListener('mouseover', (e)=> {
    e.target.style.backgroundColor = "yellow";
}));

