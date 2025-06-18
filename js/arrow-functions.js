/*
function getRandomNumber() {
  const randomNumber = Math.floor( Math.random() * 6 ) + 1;
  return randomNumber;
}

convert above function to arrow function, first via anonymous function

const getRandomNumber = function() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
};
*/

const getRandomNumber = (upperLimit) => {
  const randomNumber = Math.floor(Math.random() * upperLimit) + 1
  return randomNumber
}

//arrow functions are not hoisted, only loaded when reached
//upperLimit used as param, substitute for 6 on sides of die

/*
rewrite following getArea function as arrow function

function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}
*/

const getArea = (length, width, unit) => {
  const area = length * width
  return `${area} ${unit}`
}
