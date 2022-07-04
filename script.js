const container = document.querySelector('.container');
const btn = document.querySelector('button');
let gridSize = 5;

function createGrid(gridSize){
  for(let i = 0; i < gridSize**2; i++){
    let div = document.createElement('div');
    div.classList.add(`square${i}`);
    container.appendChild(div);
  } 
}

function eraseGrid(){
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
}

function drawOnGrid(){
  const divs = document.querySelectorAll('.container>div');
 
  divs.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      e.target.style.background = '#e5989b';
    });
  }); 
}

btn.addEventListener('click', (e) => {
  gridSize = parseInt(prompt('Please enter the new grid size', '5'));
  if(gridSize < 2 || gridSize > 10){
    alert('The range is between 2 and 10');
  }
  else{
    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
    eraseGrid();
    createGrid(gridSize);
    drawOnGrid();    
  }
});

createGrid(gridSize);
drawOnGrid();




