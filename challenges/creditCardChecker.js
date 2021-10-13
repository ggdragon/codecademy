/*  Project Goals:
    Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. 
    In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, 
    but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. 
    Unlike the other clerks, you can spend the rest of your time relaxing! */

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

/*  Steps to validate a credit card number: https://content.codecademy.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc%20validator%20diagram%201.svg
    1. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
    2. As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
    3. Sum up all the digits in the credit card number.
    4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid. */

// The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid.

const validateCred = arr => {
    let newNumbers = [];
    let tempNumber = 0;
    let sumTotal = 0;

// if credit card digit length is not 16, return false

    if (arr.length != 16) return false;

// for every other digit starting from the last, copy arr[i] into newNumbers[i]

    for (let i = arr.length - 1; i >= 0; i-=2) {
        newNumbers[i] = arr[i];
    }

// for every other digit starting from second to last, multiply by 2, and if >10, subtract 9, copy into newNumbers[i]

    for (let i = arr.length - 2; i >= 0; i-=2) {
        let tempNumber = arr[i] * 2;
        if (tempNumber > 9) newNumbers[i] = tempNumber - 9;
        if (tempNumber <= 9) newNumbers[i] = tempNumber;
    } 

// sum up all the elements in the array and divide by 10, if remainder is 0, return true, else false

    for (let i = 0; i < arr.length; i++) {
        sumTotal += newNumbers[i];
    }
    if (sumTotal % 10 === 0) return true;
    else return false;
}

// console.log(validateCred(valid1));

/* Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers. 
The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return 
another nested array of invalid cards */

const findInvalidCards = nestedArr => {
    let invalidCards = [];
    for (let i = 0; i < nestedArr.length; i++) {
      let validation = validateCred(nestedArr[i]);
      if (validation === false) {
        invalidCards.push(nestedArr[i]);
      }
    }
    return invalidCards;
  }

// console.log(findInvalidCards(batch));

/* After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies 
that have possibly issued these faulty numbers. Create a function, idInvalidCardCompanies() that has one parameter 
for a nested array of invalid numbers and returns an array of companies.

Currently, there 4 accepted companies which each have unique first digits. The following table shows which digit 
is unique to which company:

First Digit	Company
3	Amex (American Express)
4	Visa
5	Mastercard
6	Discover
If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.

idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers. 
This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear 
once in the array. */

const idInvalidCardCompanies = nestedArr => {
  let companies = [];
  for (let i = 0; i < nestedArr.length; i++) {
    if (nestedArr[i][0] === 3) {
      companies.push('Amex');
    }
    else if (nestedArr[i][0] === 4) {
      companies.push('Visa');
    }
    else if (nestedArr[i][0] === 5) {
      companies.push('Mastercard');
    }
    else if (nestedArr[i][0] === 6) {
      companies.push('Discover');
    }
    else console.log('Company not found')
  }

  // remove duplicates from Companies array

  let uniqueCompanies = [];
  companies.forEach(company => {
    if (!uniqueCompanies.includes(company)) {
      uniqueCompanies.push(company);
    }
  })
  return uniqueCompanies;
}

// let invalidCards = findInvalidCards(batch);
// console.log(idInvalidCardCompanies(invalidCards));
