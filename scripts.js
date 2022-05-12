//create container to hold divs
const container = document.getElementById('container');

//creating grid
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.style.cssText = 'width:6.25%; height:6.25%;';
};

//change color once on hover



// const blocks = document.querySelectorAll('div');

// function changeColor(div){
//     div.style.cssText = 'background-color = blue;'
// };

// for (let i = 0; i < blocks.length; i++) {
//     blocks[i].addEventListener('mouseenter', function(){
//         changeColor(blocks[i]);
//     });
// };




