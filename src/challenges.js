// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2;
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(win, ties) {
  return ((win * 3) + (ties * 1));
}

// Desafio 6
function highestCount(numberArray) {
  let counter = 0;
  let higherNumber = numberArray[0];
  
  for (let number of numberArray) {
    if (number > higherNumber) {
      higherNumber = number;
      counter = 1;
    } else if (number === higherNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse === cat2 - mouse || cat2 - mouse === (cat1 - mouse) * -1) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } return 'cat2';
}

// Desafio 8
function fizzBuzz(fizzBuzzArray) {
  // for (let key in fizzBuzzArray) {
  //   if (fizzBuzzArray[key] % 3 === 0 && fizzBuzzArray[key] % 5 === 0){
  //     return 'FizzBuzz'
  //   } else if () {

  //   }
  // }
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
