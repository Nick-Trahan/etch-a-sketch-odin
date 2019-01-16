const divContainer = document.querySelector('#container');
const divScreen = document.querySelector('#screen');

function createGrid(number) {
  for(let i = 0; i < number * number; i++) {
    const divBox = document.createElement('div');

    divBox.setAttribute('id', 'divBox-' + (i + 1));
    divBox.setAttribute('class', 'box');

    divBox.textContent = i + 1;
    
    // divScreen.setAttribute('style', 'grid-template-rows: ' + number);
    // divScreen.setAttribute('style', 'grid-template-columns: ' + number);
    divScreen.appendChild(divBox);
  }
}
