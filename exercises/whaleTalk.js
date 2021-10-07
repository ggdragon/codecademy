/* Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program. */

let input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u'];
let resultArray = [];

for (i = 0; i < input.length; i++) {
    if (input[i] === 'e' || input[i] === 'u') resultArray.push(input[i]);
    for (v = 0; v < vowels.length; v++) {
      if (input[i] === vowels[v]) {
        resultArray.push(input[i]);
      }
    }
}
console.log(resultArray.join('').toUpperCase());
