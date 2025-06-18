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
