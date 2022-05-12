//create container to hold divs
const container = document.getElementById('container');

//creating grid
function createGrid(blockSize, gridSize){
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'block')
        container.appendChild(div);
        div.style.cssText = `width:${blockSize}%; height:${blockSize}%;`;
    };
}

createGrid(6.25, 256);

//change color on hover
let blocks = document.querySelectorAll('.block');

function changeBlockColor(block){
    block.classList.add('blue');
};

function changeAllBlocksColor(listOfBlocks) {
    for (let i = 0; i < listOfBlocks.length; i++) {
        listOfBlocks[i].addEventListener('mouseenter', function(){
            changeBlockColor(listOfBlocks[i]);
        });
    }
};

changeAllBlocksColor(blocks);

//clear grid
const clear = document.getElementById('clear');

function removeColor(block) {
    block.classList.remove('blue');
};

function clearGrid(allBlocks){
    for (let i = 0; i < allBlocks.length; i++){
            removeColor(allBlocks[i]);
        };
    };

clear.addEventListener('click', function(){
    clearGrid(blocks)});

//change grid size
const grid = document.getElementById('grid');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

grid.addEventListener('click', function(){
    let number = prompt("How many squares across would you like the Etch-a-Sketch to be?","");

    let gridWidth = parseInt(number);
    let gridSize = Math.pow(gridWidth,2);

    if (isNaN(gridWidth) || gridWidth == null) {
        return alert('Please enter a number!');
    } else if (gridWidth > 100) {
        return alert('Do you want to crash your computer? Please enter a smaller number :(');
    } else {
        //clearing grid
        removeAllChildNodes(container);
        //recreating grid
        let blockSize = 1/gridWidth * 100;
        createGrid(blockSize, gridSize);
    }

    let customBlocks = document.querySelectorAll('.block');
    changeAllBlocksColor(customBlocks);

    clear.addEventListener('click', function(){
        clearGrid(customBlocks)});
});




