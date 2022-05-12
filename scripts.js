//create container to hold divs
const container = document.getElementById('container');

//creating grid
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'block')
    container.appendChild(div);
    div.style.cssText = 'width:6.25%; height:6.25%;';
};

//change color once on hover
const blocks = document.querySelectorAll('.block');

function changeColor(block){
    block.classList.add('blue');
};

for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('mouseenter', function(){
        changeColor(blocks[i]);
    });
};

//clear grid
const clear = document.getElementById('clear');

function removeColor(block) {
    block.classList.remove('blue');
};

function clearGrid(allBlocks){
    for (let i = 0; i < blocks.length; i++){
            removeColor(blocks[i]);
        };
    };

clear.addEventListener('click', function(){
    clearGrid(blocks)});

//change grid size



