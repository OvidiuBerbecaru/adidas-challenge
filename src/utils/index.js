export const stringCalculator = (string) => {
  // Removes empty spaces
  const noWhiteSpaceString = string.replace(/\s/g, '');

  // Removes characters other than numbers and operators
  const noCharacterString = noWhiteSpaceString.replace(/[a-zA-Z]/g, '');
  if(noCharacterString === '') {
    return 'N/A';
  }

  // Checks if there are only operators
  if(!noCharacterString.split('').find(el => parseInt(el))) {
    return 0;
  }

  // Removes operators from the front and the back of the calculation
  const firstDigitIndex = noCharacterString.split('').findIndex(number => number === '0' ? true : parseInt(number));
  const lastDigitIndex = noCharacterString.split('').length - noCharacterString.split('').reverse().findIndex(number => number === '0' ? true : parseInt(number))

  const noFrontBackOperators = noCharacterString.split('').slice(firstDigitIndex, lastDigitIndex).join('');

  // Removes duplicate operators
  const duplicatedOperators = noFrontBackOperators.split(/[\d.,]/g).filter(v => v);

  let cleanedUpString = noFrontBackOperators

  duplicatedOperators.forEach(dupOp => {
    cleanedUpString = cleanedUpString.replace(dupOp, dupOp.split('')[0])
  });

  // Gets the operators and the numbers
  const operators = cleanedUpString
                      .replace(/[\d.,]/g, '')
                      .split('');
  const numbers = cleanedUpString
                      .replace(/[+/%*-]/g, ' ')
                      .replace(/,/g, '.')
                      .split(' ')
                      .map(number => number === '0' ? '0' : parseFloat(number))
                      .filter(number => number);

  // Calculation
  while (operators.includes('*')) {
    let opIndex = operators.indexOf('*');
    numbers.splice(opIndex, 2, numbers[opIndex] * numbers[opIndex + 1]);
    operators.splice(opIndex, 1);
  };
  while (operators.includes('/')) {
    let opIndex = operators.indexOf('/');
    numbers.splice(opIndex, 2, numbers[opIndex] / numbers[opIndex + 1]);
    operators.splice(opIndex, 1);
  };

  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    operators[i] === '+' ? (result += numbers[i + 1]) : (result -= numbers[i + 1])
  }
  return result
}

export const reduce = (array, callback, inital) => {
  let currentState = inital;
  array.map(value => currentState = { ...currentState, ...callback(currentState, value) })
  return currentState
}