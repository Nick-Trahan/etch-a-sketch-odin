const divContainer = document.querySelector('#container');
const divScreen = document.querySelector('#screen');
const btnReset = document.querySelector('#button-reset')

createGrid(16);

function createGrid(number) {
  for(let i = 0; i < number * number; i++) {
    const divBox = document.createElement('div');

    divBox.setAttribute('id', 'div-box-' + (i + 1));
    divBox.setAttribute('class', 'box');

    divScreen.setAttribute('style', 'grid-template: repeat('+ number + ', 1fr)' + ' \/ ' + 'repeat(' + number + ', 1fr)');
    divScreen.appendChild(divBox);
  }
}

divScreen.addEventListener('mouseover', (event) => {
  const currentBox = event.target;

  currentBox.style.backgroundColor = 'black';
});

btnReset.addEventListener('click', (event) => {
  event.stopPropagation();
  resetBoard();
});

function resetBoard() {
  const colorBoxes = document.querySelectorAll('.box');

  colorBoxes.forEach((div) => {
    div.parentNode.removeChild(div);
  });

  promptUser();
}

function promptUser() {
  let gridSize = prompt('How large?');
  
  isNaN(gridSize) ? promptUser() : createGrid(gridSize);
}
