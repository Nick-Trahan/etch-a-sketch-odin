const divScreen = document.querySelector('#div-screen');
const btnReset = document.querySelector('#button-reset');
const btnColor = document.querySelector('#button-toggle-colors');

createGrid(16);

/*
Creates the correct amount of divs by first assigning the user-provided number 
of columns and rows to the parent div, then looping though that user-provided 
number times itself. Each loop creates a div, assigns a class and id, then 
appends the div to its parent element.
*/
function createGrid(number) {
  divScreen.setAttribute('style', 'grid-template: repeat('+ number + ', 1fr)' + ' \/ ' + 'repeat(' + number + ', 1fr)');

  for(let i = 0; i < number * number; i++) {
    const divBox = document.createElement('div');

    divBox.setAttribute('id', 'div-box-' + (i + 1));
    divBox.setAttribute('class', 'box');

    divScreen.appendChild(divBox);
  }
}

//Helper function for random color generator
function random(number) { 
  return Math.floor(Math.random() * (number + 1));
}

/*
Generates a random color, then applies that color to the currently chosen div.
*/
divScreen.addEventListener('mouseover', (event) => { 
  const randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  const currentBox = event.target;

  /*
  This if() statment prevents changing the background color of divScreen.
  It's needed because of the 5px border between the parent element(divScreen)
  and the target elements.
  */
  if(currentBox.id ==='div-screen') { 
    return;

  } else {
    if(divScreen.className === 'colorful') {
      currentBox.style.backgroundColor = randomColor;
      
    } else {
      currentBox.style.backgroundColor = 'black';
    }
  }
});

btnColor.addEventListener('click', () => {
  divScreen.classList.toggle('colorful');
  toggleAnimation();
});

/*
This function is needed to allow a CSS animation to play to completion before
resetting. Without this function, the animation would only play as long as 
the user held the mouse button down.
*/
function toggleAnimation() {
  btnColor.removeAttribute('id', 'button-toggle-colors');
  btnColor.setAttribute('id', 'button-toggle-colors-animate');
  btnColor.style.animationPlayState = 'running';

  setTimeout( () => {
    btnColor.style.animationPlayState = 'paused';
    btnColor.removeAttribute('id', 'button-toggle-colors-animate');
    btnColor.setAttribute('id', 'button-toggle-colors');
  }, 300);
}
/*
The (300) here refers to the time, in milliseconds, the setTimeout function
will wait before executing the commands within the arrow function.
*/

btnReset.addEventListener('click', (event) => {
  event.stopPropagation(); //stops this event from applying to parent element
  promptUser();
});

function promptUser() {
  let gridSize = prompt('Give me a number and I\'ll magically produce a number X number grid for you to play with!', 16);

  if(gridSize === null) { // If user clicks 'cancel', prompt goes away
    return;
  }

// The next line ensures that the user has input a number, other input will be rejected.
  isNaN(gridSize) ? promptUser() : checkInput(gridSize);
}

/*
This function checks the user's input and will only accept a positive, whole
number greater than 0.
*/
function checkInput(number) {
  if(number <= 0 || number % 1 !== 0) {
    promptUser();

  } else {
    resetBoard();
    createGrid(number);
  }
}

function resetBoard() {
  const colorBoxes = document.querySelectorAll('.box');

  colorBoxes.forEach((div) => {
    div.parentNode.removeChild(div);
  });
}
