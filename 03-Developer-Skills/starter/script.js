// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
TODO
- Temperature amplitude - dif between higher and lowest temp 
- Function that computes max and min ampl
- What's a sensor error and what to do when occurs - 'error'

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀
*/

/*
// --DONE-- Coding challenge from chapter 3 --DONE--
const temps = [-3, -2, -6, -1, -9, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (arr) {
  const min = getMinValue(arr);
  const max = getMaxValue(arr);
  let tempAmplitude = 0;

  if (min < 0 && max >= 0) {
    tempAmplitude = max - min;
  } else if (min < 0 && max <= 0) {
    tempAmplitude = -1 * min - -1 * max;
  } else {
    tempAmplitude = max - min;
  }

  return tempAmplitude;
};

const getMaxValue = function (arr) {
  let max = arr[0];

  for (let i = 0; i < temps.length; i++) {
    if (arr[i] > max && typeof arr[i] === 'number') {
      max = arr[i];
    }
  }

  return max;
};

const getMinValue = function (arr) {
  let min = arr[0];

  for (let i = 0; i < temps.length; i++) {
    if (arr[i] < min && typeof arr[i] === 'number') {
      min = arr[i];
    }
  }

  return min;
};

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < temps.length; i++) {
    if (typeof arr[i] !== 'number') {
      continue;
    } else {
      str = str + `${arr[i]}ºC in ${i + 1} days ...`;
    }
  }
  return str;
};

//printForecast(temps);
console.log(calcTempAmplitude(temps));
console.log('... ' + printForecast(temps)); */

//REMEMBER prompt function always returns a String value

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celcius:')),
  };

  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
