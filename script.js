const divContainer = document.querySelector('#container');
const divScreen = document.querySelector('#screen');

createGrid(16);

function createGrid(number) {
  for(let i = 0; i < number * number; i++) {
    const divBox = document.createElement('div');

    divBox.setAttribute('id', 'divBox-' + (i + 1));
    divBox.setAttribute('class', 'box');

    divScreen.setAttribute('style', 'grid-template: repeat('+ number + ', ' + '1fr' + ')' + ' \/ ' + 'repeat(' + number + ', ' + '1fr' + ')');
    divScreen.appendChild(divBox);
  }
}

divScreen.addEventListener('mouseover', (event) => {
  const currentBox = event.target;
  currentBox.style.backgroundColor = 'black';
});