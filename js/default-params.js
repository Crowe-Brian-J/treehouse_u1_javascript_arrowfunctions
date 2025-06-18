// Giving a parameter a value using "=" next to the parameter gives the function a default value to use in case no value is passed

const sayGreeting = (greeting = 'Good morning', name = 'student') => {
  return `${greeting}, ${name}`
}

/*
If you only want to pass the second argument into the function, pass "undefined" as the first argument.
You can omit the last, or subsequent, argument(s) and it will assign the default value. But if you want to change anything after the first argument, input "undefined" until you reach the argument you wish to change
*/

const getArea = (width, length, unit = 'sq ft') => {
  const area = width * length
  return `${area} ${unit}`
}
//set to whatever customary unit of measure is where the majority of your users are

//Below is JSDoc format (except the functions themselves)

/**
 * [A short description of the myFunc function]
 *
 * @param {[param type]} param1 - [parameter description]
 * @param {[param type]} param2 - [parameter description]
 * @returns {[return type]} [documents the function's return value]
 */

/*
function myFunc( param1, param2 ) {
  // function returns a value...
}
 */

/**
 * Calculates and returns the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the rectangle and unit of measure.
 */

/*
function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}
  */
