const container = document.querySelector('.container');

for(let i = 0; i < 25; i++){
  let div = document.createElement('div');
  div.classList.add(`square${i}`);
  container.appendChild(div);
}



