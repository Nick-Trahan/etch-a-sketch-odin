const divContainer = document.querySelector('#container');
const divScreen = document.querySelector('#screen');

function createGrid(number) {
  for(let i = 0; i < number * number; i++) {
    const divBox = document.createElement('div');

    divBox.setAttribute('id', 'divBox-' + (i + 1));
    divBox.setAttribute('class', 'box');
    
    divScreen.setAttribute('style', 'grid-template: repeat('+ number + ', ' + '1fr' + ')' + ' \/ ' + 'repeat(' + number + ', ' + '1fr' + ')');
    divScreen.appendChild(divBox);
  }
}
