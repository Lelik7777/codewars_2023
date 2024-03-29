//?1. Handshake problem
// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).
function getParticipants(handshakes) {
  let copyHandshakes = handshakes;
  let participants = 0;
  while (copyHandshakes > 0) {
    copyHandshakes -= participants;
    participants++;
  }
  return participants;
}
console.log(getParticipants(7));
//? //////////////////////////////////////////////////////////////////////////

//?2. Duplicate Encoder
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

const duplicateEncode = (word) =>
  [...word.toLowerCase()]
    .map((letter, i, arr) =>
      arr.filter((el) => el === letter).length > 1 ? ')' : '('
    )
    .join('');
//variant using regex pattern
//алгоритм:
// 1. перевожу всю строку в нижний регистр
// 2. заменяю все элементы и к каждому элементу применяю ф-цию, которая сравнивает индексы каждого элемента,пробегая сначала и с конца: если они равны,то элемент встречается в строке лишь один раз,то заменяю на "(", иначе  - на ")"

const duplicateEncode2 = (word) => {
  word = word.toLowerCase();
  return word.replace(/./g, (letter) =>
    word.indexOf(letter) === word.lastIndexOf(letter) ? '(' : ')'
  );
};

console.log(duplicateEncode2('recede'));
//? //////////////////////////////////////////////////////////////////////////////

//?3. N-th Fibonacci
// I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
//variant recursion
const nthFiboRecursion = (n) =>
  n < 2 ? 0 : n === 2 ? 1 : nthFiboRecursion(n - 1) + nthFiboRecursion(n - 2);

//variant by for
const nthFibo = (n) => {
  [prev, cur] = [0, 1];
  for (let i = 1; i < n; i++) {
    [prev, cur] = [cur, prev + cur];
  }
  return prev;
};
console.log(nthFiboRecursion(4));
console.log(nthFibo(4));
//? //////////////////////////////////////////////////////////////////////////

//?4. Array Deep Count
// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
//алгоритм: перебираем циклом элементы массива и возвращаем count,который изначально равен длине массива. Если элемент является массивом, то рекурсивно вызываем эту же ф-цию и сумируем ее результат вызвова в count
const deepCount = (arr) => {
  let count = arr.length;
  for (const el of arr) {
    if (Array.isArray(el)) count += deepCount(el);
  }
  return count;
};
console.log(deepCount([1, 2, [3, 4, [5]]]));

const deepCount2 = (arr) =>
  arr.reduce(
    (acc, cur) => acc + (Array.isArray(cur) ? deepCount2(cur) : 0),
    arr.length
  );
console.log(deepCount2([1, 2, [3, 4, [5]]]));
//? ///////////////////////////////////////////////////////////////////////////

//?5.Length of missing array
// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.
//алгоритм: нужно превратить матрицу в массив длин вложенных массивов и отсортировать их Далее в этой последовательности найти недостающее звено
function getLengthOfMissingArray(arr) {
  const lengths = (arr ?? [])
    .map((el) => (el ? el.length : 0))
    .sort((a, b) => a - b);

  if (!lengths.length || lengths.includes(0)) return 0;
  //проверка на пропущенный элемент в массиве
  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i + 1] !== lengths[i] + 1) return lengths[i] + 1;
  }
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
);
//? ///////////////////////////////////////////////////////////////////////////

//?6.Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];
// your function should return the following array:

// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]
// Notes:

// The input array will always be valid and formatted as in the example above and will never be empty.
//1. find max age 2. filter by this

const findSenior = (list) =>
  list.filter(
    (developer) => developer.age === Math.max(...list.map((x) => x.age))
  );

console.log(
  findSenior([
    {
      firstName: 'Gabriel',
      lastName: 'X.',
      country: 'Monaco',
      continent: 'Europe',
      age: 49,
      language: 'PHP',
    },
    {
      firstName: 'Odval',
      lastName: 'F.',
      country: 'Mongolia',
      continent: 'Asia',
      age: 38,
      language: 'Python',
    },
    {
      firstName: 'Emilija',
      lastName: 'S.',
      country: 'Lithuania',
      continent: 'Europe',
      age: 19,
      language: 'Python',
    },
    {
      firstName: 'Sou',
      lastName: 'B.',
      country: 'Japan',
      continent: 'Asia',
      age: 49,
      language: 'PHP',
    },
  ])
);
//? //////////////////////////////////////////////////////////////////////////

//? 7.Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
// You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
// ];
// your function should return true as there is at least one developer from the required 5 geographic zones.

// Notes:

// The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.
//1. get array continents 2. get Set form this array 3. compare it`s length - must be === 5

const allContinents = (list) =>
  [...new Set(list.map((dev) => dev.continent))].length >= 5;
console.log('hello');

//? //////////////////////////////////////////////////////////////////////////

//? 8.CCoding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.

const isAgeDiverse = (list) => {
  console.log(list);
  [...new Set(list.map((dev) => Math.floor(dev.age / 10)))].length >= 10;
};

console.log(
  isAgeDiverse([
    {
      firstName: 'Harry',
      lastName: 'K.',
      country: 'Brazil',
      continent: 'Americas',
      age: 19,
      language: 'Python',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 29,
      language: 'JavaScript',
    },
    {
      firstName: 'Jing',
      lastName: 'X.',
      country: 'China',
      continent: 'Asia',
      age: 39,
      language: 'Ruby',
    },
    {
      firstName: 'Noa',
      lastName: 'A.',
      country: 'Israel',
      continent: 'Asia',
      age: 40,
      language: 'Ruby',
    },
    {
      firstName: 'Andrei',
      lastName: 'E.',
      country: 'Romania',
      continent: 'Europe',
      age: 59,
      language: 'C',
    },
    {
      firstName: 'Maria',
      lastName: 'S.',
      country: 'Peru',
      continent: 'Americas',
      age: 60,
      language: 'C',
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 75,
      language: 'Python',
    },
    {
      firstName: 'Chloe',
      lastName: 'K.',
      country: 'Guernsey',
      continent: 'Europe',
      age: 88,
      language: 'Ruby',
    },
    {
      firstName: 'Viktoria',
      lastName: 'W.',
      country: 'Bulgaria',
      continent: 'Europe',
      age: 98,
      language: 'PHP',
    },
    {
      firstName: 'Piotr',
      lastName: 'B.',
      country: 'Poland',
      continent: 'Europe',
      age: 128,
      language: 'JavaScript',
    },
  ])
);

//? //////////////////////////////////////////////////////////////////////////

// //? 9.CCoding Meetup #9 - Coding Meetup #10 - Higher-Order Functions Series - Create usernames
// Given the following input array:

// var list1 = [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];
// write a function that adds the username property to each object in the input array:

// [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//     username: 'emilyn1990' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//     username: 'nore2000' }
// ]
// The value of the username property is composed by concatenating:

// firstName in lower-case;
// first letter of the lastName in lower-case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.
// Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
// Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

const addUsername = (list) =>
  list.map((developer) => ({
    ...developer,
    username: `${developer.firstName.toLowerCase()}${developer.lastName
      .replace(/\./, '')
      .toLowerCase()}${new Date().getFullYear() - developer.age}`,
  }));

console.log(
  addUsername([
    {
      firstName: 'Emily',
      lastName: 'N.',
      country: 'Ireland',
      continent: 'Europe',
      age: 30,
      language: 'Ruby',
      username: 'emilyn1990',
    },
    {
      firstName: 'Nor',
      lastName: 'E.',
      country: 'Malaysia',
      continent: 'Asia',
      age: 20,
      language: 'Clojure',
      username: 'nore2000',
    },
  ])
);

//? //////////////////////////////////////////////////////////////////////////

// //? 10.Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
// You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.

// Your task is to return either:

// true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
//   { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
// ];
// your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.

// Notes:

// The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
// The input array will always be valid and formatted as in the example above.
// Each of the 3 programming languages will always be represented.

const isLanguageDiverse = (list) =>
  list.reduce((acc, cur) => {
    acc[cur.language] = (acc[cur.language] ?? 0) + 1;

    return acc;
  }, {});

console.log(
  isLanguageDiverse([
    {
      firstName: 'Daniel',
      lastName: 'J.',
      country: 'Aruba',
      continent: 'Americas',
      age: 42,
      language: 'Python',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 22,
      language: 'Ruby',
    },
    {
      firstName: 'Sou',
      lastName: 'B.',
      country: 'Japan',
      continent: 'Asia',
      age: 43,
      language: 'Ruby',
    },
    {
      firstName: 'Hanna',
      lastName: 'L.',
      country: 'Hungary',
      continent: 'Europe',
      age: 95,
      language: 'JavaScript',
    },
    {
      firstName: 'Jayden',
      lastName: 'P.',
      country: 'Jamaica',
      continent: 'Americas',
      age: 18,
      language: 'JavaScript',
    },
    {
      firstName: 'Joao',
      lastName: 'D.',
      country: 'Portugal',
      continent: 'Europe',
      age: 25,
      language: 'JavaScript',
    },
  ])
);
//? /////////////////////////////////////////////////////////////////////////////////////////

//?11. Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];
// write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]
// Explanation of the above:

// Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
// Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
// Notes:

// Preserve the order of the original list.
// Return an empty array [] if there is no developer with an "odd" name.
// The input array and first names will always be valid and formatted as in the example above.

console.log('a'.charCodeAt(0));

function findOddNames(list) {
  return list.filter(
    (developer) =>
      [...developer.firstName].reduce(
        (acc, cur) => acc + cur.charCodeAt(0),
        0
      ) % 2
  );
}

console.log(
  findOddNames([
    {
      firstName: 'Aba',
      lastName: 'N.',
      country: 'Ghana',
      continent: 'Africa',
      age: 21,
      language: 'Python',
    },
    {
      firstName: 'Abb',
      lastName: 'O.',
      country: 'Israel',
      continent: 'Asia',
      age: 39,
      language: 'Java',
    },
  ])
);

//? /////////////////////////////////////////////////////////////////////////////////////////

//?12. Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ];
// write a function that

// adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
// Hi, could you please provide your <property name>.

// and returns only the developers with missing details:
// [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//   question: 'Hi, could you please provide your firstName.' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
//   question: 'Hi, could you please provide your language.' }
// ]

function askForMissingDetails(list) {
  return list.filter((dev) => {
    const indexNull = Object.values(dev).findIndex((x) => x === null);
    if (indexNull !== -1) {
      dev.question = `Hi, could you please provide your ${
        Object.keys(dev)[indexNull]
      }`;
      return dev;
    }
  });
}
console.log(
  Object.values(
    [
      {
        firstName: null,
        lastName: 'I.',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java',
      },
      {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: null,
      },
      {
        firstName: 'Madison',
        lastName: 'U.',
        country: 'United States',
        continent: 'Americas',
        age: 32,
        language: 'Ruby',
      },
    ][0]
  ).findIndex((x) => x == null)
);
console.log(
  askForMissingDetails([
    {
      firstName: null,
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java',
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: null,
    },
    {
      firstName: 'Madison',
      lastName: 'U.',
      country: 'United States',
      continent: 'Americas',
      age: 32,
      language: 'Ruby',
    },
  ])
);

//? /////////////////////////////////////////////////////////////////////////////////////////

//?13. Valid Braces
// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

function validBraces(braces) {
  const openBraces = ['(', '[', '{'];
  const bracesPairs = {
    [')']: '(',
    [']']: '[',
    ['}']: '{',
  };
  const stack = [];
  for (let i = 0; i < braces.length; i++) {
    if (openBraces.includes(braces[i])) {
      stack.push(braces[i]);
    } else {
      if (!stack.length) {
        return false;
      }
      let topElStack = stack[stack.length - 1];
      if (topElStack === bracesPairs[braces[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
//? /////////////////////////////////////////////////////////////////////////////////////////

//?14. Validate my Password
// I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

// Passwords must abide by the following requirements:

// More than 3 characters but less than 20.

// Must contain only alphanumeric characters.

//Must contain letters and numbers.

function validPass(password) {
  return /^(?=.*\d)(?=.*[A-Za-z])[A-Za-z0-9]{4,19}$/.test(password)
    ? 'VALID'
    : 'INVALID';
}
// function validPass(password) {
//   return /\d\w$/.test(password) && password > 3 && password < 20
//     ? 'VALID'
//     : 'INVALID';
// }
console.log(validPass('Username'));
