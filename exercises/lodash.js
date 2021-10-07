/* In this project, you will be implementing some of the most exciting functionality from the widely-popular lodash.js library which provides many methods that add new functionality for numbers, strings, objects, and arrays. */


const _ = {
  
/*.clamp() takes three arguments: a number, a lower bound, and an upper bound
  .clamp() modifies the provided number to be within the two provided bounds
  If the provided number is smaller than the lower bound, it will return the lower bound as the final number
  If the number is larger than the upper bound, it will return the upper bound as the final number
  If the number is already within the two bounds, it will return the number as the final number */
  
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  
/*.inRange() takes three arguments: a number, a start value, and an end value
  .inRange() checks to see if the provided number falls within the range specified by the start and end values
  If the provided number is smaller than the start value, .inRange() will return false
  If the provided number is larger than or equal to the end value, .inRange() will return false
  If the provided number is within the start and end values, .inRange() will return true
  If no end value is provided to the method, the start value will be 0 and the end value will be the provided start value
  If the provided start value is larger than the provided end value, the two values should be swapped */
  
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }
    if (number < start || number >= end) return false;
    if (number >= start && number < end) return true;
  },
  
/*.words() takes one argument: a string
  .words() splits the string into an array of words
  A word is defined by a space-separated string of characters, so each space character, ' ', indicates the end of one word and the start of the next
  Note: You may have noticed in the documentation that this function has a pattern parameter. Your method does not need to accept the additional pattern parameter, we will only  split our string into words based on spaces */
  
  words(string) {
    return string.split(' ');
  },
  
/*.pad() takes two arguments: a string and a length
  .pad() adds spaces evenly to both sides of the string to make it reach the desired length
  Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length
  Your method does not need to accept the additional chars parameter; we will only add space characters to pad our string */
  
  pad(string, length) {
    if (length > string.length) {
      let padStart = Math.floor((length - string.length) / 2);
      let padEnd = length - string.length - padStart;
      let padString = ' ';
      return padString.repeat(padStart) + string + padString.repeat(padEnd);
    }
    else return string;
  },
    
/*.has() takes two arguments: an object and a key
  .has() checks to see if the provided object contains a value at the specified key
  .has() will return true if the object contains a value at the key and will return false if not
  Your method does not need to accept the additional path parameter; we will only check for unnested values */

  has(object, key) {
    if (object[key] === undefined) return false;
    else return true;
    },
      
      
/*.invert() takes one argument: an object
  .invert() iterates through each key / value pair in the provided object and swaps the key and value */
      
  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
    
/*.findKey() takes two arguments: an object and a predicate function — a function that returns a boolean value
  .findKey() iterates through each key / value pair in the provided object and calls the predicate function with the value
  .findKey() returns the first key that has a value that returns a truthy value from the predicate function
  .findKey() returns undefined if no values return truthy values from the predicate function */
    
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      predicateReturnValue = predicate(value);
      if (predicateReturnValue) return key;
    }
    return undefined;
  },
    
/*.drop() takes two arguments: an array and a number representing the number of items to drop from the beginning of the array
  .drop() returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array
  If the number of elements to drop is unspecified, your method should drop one element */
  
  drop(array, number) {
    if (number === undefined) array.shift();
    for (i=0; i < number; i++) {
      array.shift()
    }
    return array;
  },
  
/*.dropWhile() takes two arguments: an array and a predicate function
  The supplied predicate function takes three arguments: the current element, the current element index, and the whole array
  .dropWhile() creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value */  
    
  dropWhile(array, predicate) {
    let cb = (element, index) => {
      return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
    
/*.chunk() takes two arguments: an array and a size
  .chunk() breaks up the supplied array into arrays of the specified size
  .chunk() returns an array containing all of the previously-created array chunks in the order of the original array
  If the array can’t be broken up evenly, the last chunk will be smaller than the specified size
  If no size is supplied to the method, the size is set to 1 */
    
  chunk(array, size=1) {
    let newArray = [];
    for (i = 0; i < array.length; i+=size) {
      let chunk = array.slice(i,i+size);
      newArray.push(chunk);
    }
    return newArray;
  },
};
