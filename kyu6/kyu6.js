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
      arr.filter((el) => el === letter).length > 1 ? ")" : "("
    )
    .join("");
//variant using regex pattern
//алгоритм:
// 1. перевожу всю строку в нижний регистр
// 2. заменяю все элементы и к каждому элементу применяю ф-цию, которая сравнивает индексы каждого элемента,пробегая сначала и с конца: если они равны,то элемент встречается в строке лишь один раз,то заменяю на "(", иначе  - на ")"

const duplicateEncode2 = (word) => {
  word = word.toLowerCase();
  return word.replace(/./g, (letter) =>
    word.indexOf(letter) === word.lastIndexOf(letter) ? "(" : ")"
  );
};

console.log(duplicateEncode2("recede"));
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
