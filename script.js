const container = document.querySelector('.container');

for(let i = 0; i < 25; i++){
  let div = document.createElement('div');
  div.classList.add(`square${i}`);
  container.appendChild(div);
}

const divs = document.querySelectorAll('.container>div');

divs.forEach((div) => {
  div.addEventListener('mouseover', (e) => {
    e.target.style.background = '#b5838d';
  })
})


