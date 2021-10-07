const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
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
  words(string) {
    return string.split(' ');
  },
  pad(string, length) {
    if (length > string.length) {
      let padStart = Math.floor((length - string.length) / 2);
      let padEnd = length - string.length - padStart;
      let padString = ' ';
      return padString.repeat(padStart) + string + padString.repeat(padEnd);
    }
    else return string;
  },
  has(object, key) {
    if (object[key] === undefined) return false;
    else return true;
    },
  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      predicateReturnValue = predicate(value);
      if (predicateReturnValue) return key;
    }
    return undefined;
  },
  drop(array, number) {
    if (number === undefined) array.shift();
    for (i=0; i < number; i++) {
      array.shift()
    }
    return array;
  },
  dropWhile(array, predicate) {
    let cb = (element, index) => {
      return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size=1) {
    let newArray = [];
    for (i = 0; i < array.length; i+=size) {
      let chunk = array.slice(i,i+size);
      newArray.push(chunk);
    }
    return newArray;
  },
};
