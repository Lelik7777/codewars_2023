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
  return subArr.map((arr) => arr.reduce((acc, cur) => acc + cur, 0));
};
console.log(threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]));

var arr = [1, 2, 3, 4, 5, 6, 100, 999];
arr.sort((a, b) => {
  //if (a%2==b%2) return a-b;
  if (a % 2 > b % 2) return -1;
  return 1;
});
console.log(arr);

//? //////////////////////////////////////////////////////////////////////////

//? 8. Training  #25: methods of arrayObject---reverse() and sort()

//Coding in function sortIt. function accept 1 parameters arr, it's a number array. Your task is to sort the array according to the specified conditions, and returns a new array(should not modify the original array).

// conditions1: according to the number of elements(in ascending order) for example:

// sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
// because [1,1,1,2,2,3] has one 3, two 2 and three 1
// conditions2: If the same number of elements, according to the number values(in descending order) for example:

// sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
// because number of 3,2 and 1 both are three, then according to 3>2>1
// Comprehensive two conditions should be like this:

// sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]

// 1.разделить массив на подмассив из одинаковых элементов

const sortIt = (arr) => {
  const sortArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        sortArr.push(arr[j]);
      }
    }
  }
  console.log(sortArr);
};
sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]);

var a = [...Array(4)];
console.log(a);
var b = a.map((_, i) => i);
console.log(b);
var c = [...Array(4)].map((_, i) => i);
console.log(c);

//? //////////////////////////////////////////////////////////////////////////

//? 9. Training JS #26:  methods of arrayObject---map()
//Coding in function isolateIt. function accept 1 parameters arr, it's a string array. Your task is to put a character "|" into the middle of each element.

// If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.

// If the string length is an odd number, use the replacement method. for example: "abcde" should became "ab|de". Character c will be replaced by |.

// The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).

// Example
// isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
// isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
// isolateIt(["1234","56789"]) should return ["12|34","56|89"]
// a little hint: Flexible use of slice() Will make the work more simple.

//1.определить длину каждой строки 2. определить четные и нечетные строки 3. в четных по середине поставить | ,а в нечетных срединный элемент заменить на |

const isolateIt = (arr) =>
  arr.map((str) => {
    if (str.length % 2) {
      str = str.split("");
      str.splice(Math.floor(str.length / 2), 1, "|");
      return str.join("");
    } else {
      str = str.split("");
      str.splice(Math.floor(str.length / 2), 0, "|");
      return str.join("");
    }
  });

console.log(isolateIt(["abcd", "efgh", "adscd"]));

// логика в том,что каждую строку(элемент массива) я при помощи метода slice() меняю: вначале я беру первую половину строки,далее прибавляю символ  | и далее беру вторую часть строки с конца
const isolateIt1 = (arr) =>
  arr.map(
    (str) => str.slice(0, str.length / 2) + "|" + str.slice(-str.length / 2)
  );

console.log(isolateIt1(["abcd", "efgh", "adscd"]));

//? //////////////////////////////////////////////////////////////////////////

//? 10. Training JS #27: methods of arrayObject---filter()

// Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:

// {S:888, A:888, B:888, C:888, D:888, X:888}
// Grading rules:

// Grade S: Full marks(score=100)
// Grade A: score<100 and score>=90
// Grade B: score<90 and score>=80
// Grade C: score<80 and score>=60
// Grade D: score<60 and score>=0
// Grade X: score=-1(The cheating guy gets a score like that)
// Example
// countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
// countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
// countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0,D:0, X:6}

//приходит массив баллов, а на выходе объект,в котором каждая оценка превращена в значение объекта; таким образом происходит заполнение массива

const countGrade = (arr) => {
  const obj = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
  obj.S = arr.filter((el) => el === 100).length;
  obj.A = arr.filter((el) => el < 100 && el >= 90).length;
  obj.B = arr.filter((el) => el < 90 && el >= 80).length;
  obj.C = arr.filter((el) => el < 80 && el >= 60).length;
  obj.D = arr.filter((el) => el < 60 && el >= 0).length;
  obj.X = arr.filter((el) => el === -1).length;
  return obj;
};
console.log(countGrade([50, 60, 70, 80, 90, 100]));

const countGrade1 = (arr) => {
  const count = (fun) => arr.filter((el) => fun(el)).length;
  return {
    S: count((x) => x === 100),
    A: count((x) => x < 100 && x >= 90),
    B: count((x) => x < 90 && x >= 80),
    C: count((x) => x < 80 && x >= 60),
    D: count((x) => x < 60 && x >= 0),
    X: count((x) => x === -1),
  };
};
console.log(countGrade1([50, 60, 70, 80, 90, 100]));
