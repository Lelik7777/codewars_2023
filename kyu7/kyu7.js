//?1.  Which color is the brightest?
// One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.
// One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:
// V = max(R,G,B)
// You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!
//You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!
// For example,
// brightest(["#001000", "#000000"]) == "#001000"
// brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
// If there are multiple brightest colors, return the first one:
// brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
//алгоритм:
// 1. разложить каждый цвет из массива на составляющие
// 2. перевести каждый разложенный цвет в десятичную систему исчисления
// 3. найти из них максимальное значение
// 4. в массиве с этими максимальными значениями найти наибольшее,индекс которого и будет являться индексом самого яркого цвета в массиве
//по этому индексу в массиве цветов вернуть самый яркий цвет

const brightest = (colorsArr) => {
  const getMaxColorValue = (color) => {
    const hexadecimal = 16;
    return Math.max(
      ...color
        .slice(1)
        .match(/../g)
        .map((color) => Number.parseInt(color, hexadecimal))
    );
  };
  //этот массив чисел идентичен по количеству начальному массиву цветов,поэтому индекс максимального числа соответствует индексу самого яркого цвета
  const arrayNumbers = colorsArr.map((color) => getMaxColorValue(color));
  return colorsArr.at(
    arrayNumbers.findIndex((el) => el === Math.max(...arrayNumbers))
  );
};
console.log(
  brightest(["#0D5D1B", "#3DCBE2", "#C0A8DD", "#BAE49F", "#A2D643", "#BBC5A3"])
);
//? ///////////////////////////////////////////////////////////////////////////////////////

//?2. Disemvowel Trolls
// our task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

const disemvowel = (str) => str.replace(/[aeiou]/gi, "");
console.log(disemvowel("This website is for losers LOL!"));
//? ///////////////////////////////////////////////////////////////////

//?3.Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//const isIsogram = (str) => str.length === [...new Set(str.toLowerCase())].length;
const isIsogram = (str) => str.length === new Set(str.toLowerCase()).size;
console.log(isIsogram("moose"));
//? ///////////////////////////////////////////////////////////////////

//?4.Digits explosion
//Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
//explode("102269")// return "12222666666999999999"
//explode("312")// return "333122"

const explode = (str) => [...str].map((num) => num.repeat(+num)).join("");
console.log(explode("102269"));
//? //////////////////////////////////////////////////////////////////////////

//?5. Head, Tail, Init and Last

// Haskell has some useful functions for dealing with lists:

// $ ghci
// GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
// Here's how I expect the functions to be called in your language:

// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]

class List {
  constructor(arr) {
    this.arr = [...arr];
  }
  head() {
    return this.arr.shift();
  }
  tail() {
    return this.arr.slice(1);
  }
  init() {
    return this.arr.slice(0, this.arr.length - 1);
  }
  last() {
    return this.arr.at(-1);
  }
}
const array = [1, 2, 3, 4, 5];
console.log(array);
const list = new List(array);
console.log(list.last());
console.log(array);

//? //////////////////////////////////////////////////////////////////////////
//? 6.Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()

// Coding in function infiniteLoop. function accept 3 parameters. The 1st parameter is arr, it's a 2D array, it contains three 1D array. The 2nd parameter is d ，it's a string. The 3rd parameter is n, it's a number.

//есть матрица с тремя одномерными массивами. При вызове ф-ции infiniteLoop()  происходить смещение в каждом одномерном массиве на число n впраео или влево,в зависимости от d по кругу - если движение вправо,то последний элемент или элементы уходят вначало,а смещая остальные - общий массив как бы проворачивается по кругу

//алгоримт
//1. матрицу превратить в одномерный массив
//2. произвести смещение -поменять массив
//3. снова его превратить в матрицу
//Как мне провернуть массив по кругу? Мне нужно последний элемент поставить вначало
//реализую простой вариант смещения на один элемент

const infiniteLoop = (arr, d, n) => {
  if (d === "right") {
    for (let i = 0; i < n; i++) {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  if (d === "left") {
    for (let i = 0; i < n; i++) {
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    }
  }
  return arr;
};
infiniteLoop(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  "left",
  1
);

//? //////////////////////////////////////////////////////////////////////////

//? 7. Training JS #24: methods of arrayObject---splice() and slice()

//?Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array. Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.

//логика: 1.мне нужно исходный массив разбить на подмассивы,каждый по три элемента,2.затем сложить элементы каждого подмассива и 3.суммы положить в новый массив

const threeInOne = (arr) => {
  const size = 3;
  const subArr = [];

  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    subArr.push(arr.slice(size * i, size * i + size));
  }
  return subArr.map(arr=>arr.reduce((acc,cur)=>acc+cur,0))
};
console.log(threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log([2,3,4,5,6,7].split(/{2}/g));
