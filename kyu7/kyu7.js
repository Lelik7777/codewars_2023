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

//? //////////////////////////////////////////////////////////////////////////

//?The following example will look for a pair of adjacent numbers in the array, and their sum is equal to 15:
// в результате мы найдем первую соседнюю пару,сумма которой равна 15, а дальше проверка не пойдет
let aa = 0,
  bb = 0,
  arr12 = [3, 6, 9, 6, 9, 3];

console.log(
  arr12.some((_, i) => {
    aa = arr12[i];
    bb = arr12[i + 1];
    console.log(aa, bb);
    return aa + bb === 15;
  })
);
console.log(aa, bb);
//? //////////////////////////////////////////////////////////////////////////

//? 11. Training JS #28: methods of arrayObject---every() and some()

// Coding in function mirrorImage. function accept 1 parameter arr, it's a number array. Your task is find the first pair of mirror-image number and return as an array. The two number must be adjacent, and the returned array is in accordance with the order from left to right.

// What's the mirror-image number? for example:123 and 321 is a pair of mirror-image number. Two the same number of palindromes can also be seen as a pair of mirror-image number, such as 121 and 121.

// If no such number is found, return[-1,-1]

// Example
// mirrorImage([11,22,33,33,22,11]) should return [33,33]
// mirrorImage([454,86,57,75,16,88]) should return [57,75]
// mirrorImage([454,0,57,0,16,88]) should return [-1,-1]

// 1. брать первое соседнее число,потом брать второе соседнее число и превращать его в массив, далее делать его реверс .reverse(),снова превращать в число и сравнивать с первым числом. Используем метод some()
const mirrorImage = (arr) => {
  let firstNum, secondNum, polidromSecondNum;

  const result = arr.some((_, i) => {
    firstNum = arr[i];
    secondNum = arr[i + 1];
    polidromSecondNum = +String(secondNum).split("").reverse().join("");
    return firstNum === polidromSecondNum;
  });
  if (!result) return [-1, -1];
  return new Array(firstNum, secondNum);
};
console.log(mirrorImage([454, 86, 57, 75, 16, 88]));

const mirrorImage2 = (arr) => {
  let a = 0,
    b = 0;
  const res = arr.some((x, i) => {
    [a, b] = [x, arr[i + 1]];
    return +[...String(b)].reverse().join("") === a;
  });
  return res ? [a, b] : [-1, -1];
};

console.log(mirrorImage2([454, 86, 57, 75, 16, 88]));

console.log(Array(4).join("a"));
console.log([...Array(4)].join("a"));
console.log(new Array(4 + 1).join("a"));

var cache = [];
for (var i = 0; i < 26; i++) cache[i] = String.fromCharCode(97 + i);
console.log(cache);
var result = cache.join("");
console.log(result);

//? //////////////////////////////////////////////////////////////////////////

//? 12. Training JS #29: methods of arrayObject---concat() and join()

// Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

// Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

// And then sort array in descending order.

// Finally, use the separator ">" to connect the elements into a string.

// Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

// Some example:

// bigToSmall([[1,2],[3,4],[5,6]]) should return "6>5>4>3>2>1"
// bigToSmall([[1,3,5],[2,4,6]]) should return "6>5>4>3>2>1"
// bigToSmall([[1,1],[1],[1,1]]) should return "1>1>1>1>1"

const bigToSmall = (arr) =>
  []
    .concat(...arr)
    .sort((a, b) => b - a)
    .join(">");
bigToSmall([
  [1, 2],
  [3, 4],
  [5, 6],
]);

//? //////////////////////////////////////////////////////////////////////////

console.log([1, 3, 4, 5, 6, 7].reduce((acc, cur) => acc + (cur % 2 ? 1 : 0)));

console.log([1, 3, 4].reduce((acc, cur) => acc.concat(cur + 2), []));
console.log([1, 3, 4].reduce((acc, cur) => [...acc, cur + 2], []));

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [6, 7, 8, 9, 10];
//var result=arr1.map(x=>x*x).reduce((a,b,i,ar)=>a.concat(ar[i],arr2[i]),[])
//ES6 syntax
var result = arr1
  .map((x) => x * x)
  .reduce((a, b, i, ar) => [...a, ar[i], arr2[i]], []);

console.log(result); //output: [ 1, 6, 4, 7, 9, 8, 16, 9, 25, 10 ]

//? //////////////////////////////////////////////////////////////////////////

//? 13. Training JS #30: methods of arrayObject---reduce() and reduceRight()

// Coding in function tailAndHead. function accept 1 parameter arr(a number array).

// We use an example to explain this task:

// You got an array [123,456,789,12,34,56,78].

// First, from left to right, the tail of an element and the head of the next element are added together. The results are put into an array. like this:

// [123,456,789,1 2,3 4,5 6,78]
//    3+4 6+7 9+1 2+3 4+5 6+7
//     |   |   |   |   |   |
//    [7 ,13 ,10 , 5 , 9 ,13]
// And then, Calculate their product and return it(7x13x10x5x9x13=532350)

// So, tailAndHead([123,456,789,12,34,56,78]) should return 532350

// All elements of arr are positive integer. If a number is less than 10, its head and tail are the same. Please try to use reduce() solve this kata.

// Examples
// tailAndHead([1,2,3,4,5]) should return 945
// tailAndHead([111,2345,66,78,900]) should return 7293
// tailAndHead([35456,782,569,2454,875]) should return 12012

// 1. каждое число массива превратить в строку и получить первый элемент и последний элемент этого числа,использую slice() 2. используя reduce, суммировать эти элементы 3. получившиеся суммы перемножить также через reduce()

const tailAndHead = (arr) =>
  arr
    .map((num, i, ar) =>
      i < arr.length - 1
        ? Number(String(num).slice(-1)) + Number(String(ar[i + 1]).slice(0, 1))
        : ""
    )
    .filter((x) => x !== "")
    .reduce((acc, cur) => acc * cur);

console.log(tailAndHead([123, 456, 789, 12, 34, 56, 78]));

//? //////////////////////////////////////////////////////////////////////////

console.log(
  typeof JSON.stringify([
    [1, 2],
    [3, 4],
  ])
);

//? 14. Training JS #31: methods of arrayObject---isArray() indexOf() and toString()

// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:

// "It's a fake array"
// If arr contains elements 5 and 13, function should return:

// "It's a black array"
// If arr contains neither 5 nor 13, function should return:

// "It's a white array"
// Examples
// blackAndWhite(5,13) should return "It's a fake array"
// blackAndWhite([5,13]) should return "It's a black array"
// blackAndWhite([5,12]) should return "It's a white array"
// Using string template and ternary operator can make your work easier.

const blackAndWhite = (arr) => {
  const answers = [
    "It's a fake array",
    "It's a black array",
    "It's a white array",
  ];
  return !Array.isArray(arr)
    ? answers[0]
    : arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1
    ? answers[1]
    : answers[2];
};

console.log(blackAndWhite(5, 13)); // should return "It's a fake array"
console.log(blackAndWhite([5, 13])); // should return "It's a black array"
console.log(blackAndWhite([5, 12])); // should return "It's a white array"

//? //////////////////////////////////////////////////////////////////////////

//? 15. Training JS #32: methods of Math---round() ceil() and floor()

// Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

// If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

// roundIt(3.45) should return 4
// If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

// roundIt(34.5) should return 34
// If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

// roundIt(34.56) should return 35

const roundIt = (n) => {
  const str = String(n).split(".");
  if (str[0].length < str[1].length) return Math.ceil(n);
  if (str[0].length > str[1].length) return Math.floor(n);
  if (str[0].length === str[1].length) return Math.round(n);
};
console.log(roundIt(98.54));

const roundIt1 = (n) => {
  const [a, b] = String(n).split(".");
  return a.length > b.length
    ? Math.floor(n)
    : a.length < b.length
    ? Math.ceil(n)
    : Math.round(n);
};

//? //////////////////////////////////////////////////////////////////////////

//? 16. Training JS #33: methods of Math---max() min() and abs()

// Coding in function maxMin. function accept 2 parameter arr1 and arr2. They are two number array and have the same number of elements.

// First, calculate the difference of the same index of the arr1 and arr2. Like this:

// [1,3,5]
//  | | |   --->  8, 5, 2
// [9,8,7]
// Please note that the difference is positive. Such as the above 1 and 9, the difference should be 8, not -8. I think abs() can help you get the correct result ;-)

// Then find the maximum and minimum values of them, and return the results in the form of an array. Like this:

//   maxvalue , minvalue
// [    8     ,    2     ]
// Examples
// maxMin([1,3,5],[9,8,7])               should return [8,2]
// maxMin([1,10,100,1000],[0,0,0,0])     should return [1000,1]
// maxMin([10,20,30,40],[111,11,1,-111]) should return [151,9]

//1. в цикле вычитаю элементы двух массивов с одинаковыми индексами и пушу разницу в новый массив.2. нахожу максимальное значение и пушу в новый массив,далее нахожу минимальное и также пушу

const maxMin = (arr1, arr2) => {
  const arr = [];
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push(Math.abs(arr1[i] - arr2[i]));
  }
  res.push(Math.max(...arr), Math.min(...arr));
  return res;
};
console.log(maxMin([10, 20, 30, 40], [111, 11, 1, -111]));

const maxMin1 = (arr1, arr2) => {
  const res = arr1.map((x, i) => Math.abs(x - arr2[i]));
  return [Math.max(...res), Math.min(...res)];
};

console.log(maxMin1([10, 20, 30, 40], [111, 11, 1, -111]));

//? //////////////////////////////////////////////////////////////////////////

//? 17.Training JS #34: methods of Math---pow() sqrt() and cbrt()

// Task
// Coding in function cutCube. function accept 2 parameter: volume and n. volume is the volume of a cube. If we cut the cube into n block. please determine whether the length of the cube is an integer. return true or false.

// For exmaple:

// volume=27, it can be divided into 27 blocks, each small cube side length is 1

// cutCube(27,27) should return true
// volume=512, it can be divided into 8 blocks, each small cube side length is 4

// cutCube(512,8) should return true
// volume=512, it can be divided into 64 blocks, each small cube side length is 2

// cutCube(512,64) should return true
// If the side length of small cube is not a integer, should return false.

// cutCube(256,8) should return false
// cutCube(27,3) should return false
// cutCube(123,456) should return false
// If it can't be divided evenly into n small cubes, should return false too.

// cutCube(50000,50) should return false
// cutCube(256,4) should return false
// The two examples above seems to meet our requirements, but please note: a cube is unable to evenly divided into 50 pieces or 4 pieces. Only cubic numbers(such as 8,27,64,125,216...) can be used to divide the cube evenly.

const cutCube = (volume, n) =>
  Number.isInteger(Math.cbrt(n))
    ? Number.isInteger(Math.cbrt(volume / n))
    : false;

console.log(cutCube(27, 27));
console.log(cutCube(512, 64));
console.log(cutCube(27, 3));

console.log(~~34.8);

const getRandomNum = (from, to) => ~~((to - from) * Math.random() + from);
console.log(getRandomNum(2, 4));

//? //////////////////////////////////////////////////////////////////////////

//? 18.Training JS #36: methods of Math---kata author's lover:random()

// Coding in function rndCode. Your task is to generate a random verification code. In accordance with the following rules:

// the code length should be 8;

// The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

// The 3rd-6th characters should be four numbers.

// the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

// If Your code runs 100 times, It should generate 100 non duplicate verification codes.

// Some valid verification code examples:

// AB1234#$ MG6145$@ KJ2249@&
// CD5678%^ IG7593~% FH8638@&
// EF9012!@ GB7047%$ KD7604^%

// 1.создать массив на 8 ячеек 2.пробегаемся циклом по этому массиву 3. первые две ячейки забиваем заглавынми буквами 4. следующие 4 ячейки забиваем цифрами 5.в оставшиеся забиваем два символа

const rndCode = () => {
  const string = "ABCDEFGHIJKLM";
  const symbols = "~!@#$%^&*";
  const code = [];

  const length = 8;
  for (let i = 0; i < length; i++) {
    if (i < 2) {
      while (code.length < 2) {
        let randomLetter = string[~~(Math.random() * string.length)];
        if (!code.includes(randomLetter)) {
          code.push(randomLetter);
        }
      }
    }
    if (i > 1 && i < 6) {
      while (code.length < 6) {
        let randomNum = ~~(Math.random() * 10);
        if (!code.includes(randomNum)) code.push(randomNum);
      }
      console.log(code);
    }
    if (i >= 6) {
      while (code.length < 8) {
        let randomSymbol = symbols[~~(Math.random() * symbols.length)];
        if (!code.includes(randomSymbol)) {
          code.push(randomSymbol);
        }
      }
    }
  }
  return code.join("");
};
console.log(rndCode());
//? //////////////////////////////////////////////////////////////////////////

//? 19.Training JS #37: Unlock new weapon---RegExp Object

const rex = /abc/;
const rex2 = new RegExp("abc");
console.log(rex);
console.log(rex2);

const words = ["abc", "123", "&##"];
for (const iterator of words) {
  console.log(new RegExp(iterator));
}
var str = "ABABCDEababcde";
console.log(str.match(/a/)[0]);

console.log(str.match(/a/gi).length);

//Coding in function countAnimals. function accept two parameters: animals, a string contains some animals; count, an array list of which animals we should count. The result should be a number array.

// Examples
// countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
// countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
// countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
// countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]
//  возвращает числовой массив, каждый элемент которого это число совпадений из строки. 1. пробежаться по массиву и найти количество совпадений элемента массива и его копии в строке(это через длину массива совпадений)

const countAnimals = (str, arr) =>
  arr.map((animal) => (str.match(new RegExp(animal, "g")) ?? []).length);
console.log("726", countAnimals("pig", ["dog", "cat"]));

//? //////////////////////////////////////////////////////////////////////////

//? 20.Training JS #38: Regular Expression--"^","$", "." and test()

console.log("sfasfsdfsadfsadfsad".match(/.{1,3}/g));
var str = "abcabc";
console.log(str.replace(/^./, str[0].toUpperCase()));
console.log("hello world".split(/ /));
"hello world".replace(/^./, (x) => console.log(x));
"hello world".replace(/.\b/g, (x) => console.log(x));
"whole words only".replace(/\bwords\b/g, (x) => console.log(x));

var word = "abcd";
//method 1:
//
var regstr =
  word[0] + //first letter
  word.slice(1, -1).replace(/./g, ".") + //middle letters
  word.slice(-1);
var reg1 = new RegExp("^" + regstr + "$");
console.log(reg1);

//Coding in function findSimilarity. function accept two parameters: str, a sentence contains some words, separated by spaces; word, a sample word.

// Your task is to keep the words that are similar to the sample word, and to remove the other words.

// The similarity is defined as: the same length as the sample; the letter at the beginning and the end of word are same as the sample too.

// If there are no similar words in the sentence, should return an empty string.

// Examples
// findSimilarity("bag dog dig dot doog dogs","dog") should return "dog dig"
// findSimilarity("bag dog dig dot doog dogs","dig") should return "dog dig"
// findSimilarity("bag dog dig dot doog dogs","dot") should return "dot"
// findSimilarity("bag dog dig dot doog dogs","god") should return ""
// Hint: Use filter() will make your work easier; If you don't know how to solve the kata, please refer to the examples of lesson.

//1 с помощью filter() находим все слова,длина которых совпадает с длиной образца 2. прогоняем через map() и каждое слово сравниваем с образцом по первой и последней букве

const findSimilarity = (str, word) =>
  str
    .split(/ /)
    .filter(
      (w) =>
        w[0] === word[0] &&
        w.slice(-1) === word.slice(-1) &&
        w.length === word.length
    )
    .join(" ");
console.log(findSimilarity("bag dog dig dot doog dogs", "dog"));
let word11 = "dog";
var reg = new RegExp("^" + word11.replace(/\B.\B/g, ".") + "$");
console.log(reg);

console.log("dogs".replace(/\B..\B/, "."));
console.log("dogs cats".replace(/\b./g, "."));

let stringMy =
  "ПРОХОЖДЕНИЕ СОБЕСОВ И ПОЛУЧЕНИЕ РАБОТЫ РАЗРАБОМ - ЭТО РАЗРЕШЕНИЕ ОТЛОЖЕННОЙ МНОЙ ЕЩЕ В МОЛОДОСТИ ЗАДАЧИ, КОГДА Я КАТЕГОРИЧЕСКИ ОТКАЗАЛСЯ ИДТИ В ИНТЕРНАТУРУ";
console.log(stringMy.toLowerCase());

//
let str00 = "xx xax xaax xaaax";
console.log(str00.replace(/xa{1,2}/g, "!"));
function fakeBin(x) {
  return x.replace(/./g, (d) => +(d >= 5));
}
console.log(fakeBin("23489"));
console.log(+true);
console.log(+false);
console.log("hello".replace(/.\b/g, "*")); // заменить все буквы кроме последней
str.replace(
  /\w+/g,
  (x) => x.slice(0, -1).toUpperCase() + x.slice(-1).toLowerCase()
);
console.log("hello".slice(0, -1));

//? //////////////////////////////////////////////////////////////////////////

//? 21.Training JS #39: Regular Expression--"?", "*", "+" and "{}"

var str01 = "aaaabbbb";
console.log(str01.match(/сb/) + "");
console.log([3, 4, 5] + "");
console.log(['hello','world']+'');

var s="100001,111,12222221,222,3333,12321,14441";
console.log(s.match(/1.*?1/g));

//This time you do not need coding in function. You just need to write a regular expression that matches the specified numeric string. I've given the regular expression name: "regex", please don't modify the name.

// According to the following rules:

// The numeric string first digit should be "9".
// At the end of the number string there are at least four "0".
// It can also be a negative number(This means that the string may be started by "-", maybe not)
// Examples
// regex.test("90000") should return true
// regex.test("-90000") should return true
// regex.test("900000000") should return true
// regex.test("91230000") should return true
// regex.test("-91230000") should return true

// regex.test("90001") should return false
// regex.test("9000") should return false
// regex.test("91230") should return false
// regex.test("1-90000") should return false
// regex.test("-90000123") should return false

const regex=/9.*0{4}/;
console.log((/-?9\d*0{4}$/).test('-90000123'));



//? //////////////////////////////////////////////////////////////////////////

//? 22.Training JS #40: Regular Expression--"|", "[]" and "()"

//This time you need to write a regular expression that matches all URL contained in the string.

// The rules:


// Examples
// "http://codewars.com".match(regex)
// should return [ 'http://codewars.com' ]
// "http://www.codewars.com".match(regex)
// should return [ 'http://www.codewars.com' ]
// "HTTP://CODEWARS.COM".match(regex)
// should return [ 'HTTP://CODEWARS.COM' ]
// "https://www.codewars.com".match(regex)
// should return [ 'https://www.codewars.com' ]
// "http://www.codewars.net".match(regex)
// should return [ 'http://www.codewars.net' ]
// "1234http://www.codewars.comabcd".match(regex)
// should return [ 'http://www.codewars.com' ]
// "http://www.codewars1.com!@#$%http://www.codewars2.net".match(regex)
// should return [ 'http://www.codewars1.com', 'http://www.codewars2.net' ]
// "http://www.codewars.com.net".match(regex)
// should return [ 'http://www.codewars.com.net' ]
// "http://www.codewars.com.fak".match(regex)
// should return [ 'http://www.codewars.com' ]

// These examples should return null:
// "ftp://www.codewars.com".match(regex)
// "http://www.code#wars.com".match(regex)
// "http://wwwcodewarscom".match(regex)
// "http://www.codewars.org".match(regex)
// "http://www . codewars . com".match(regex)
// "http://mail@codewars.com".match(regex)
// Hint: to match "/" and ".", you should use "\/" and "\." "\" is the escape character, we will learn it in the next lesson.

// URL start with http:// or https://
// URL end with .com or .net
// The middle part of URL can use letters, numbers and dots
// Need to ignore case, and a string may contain multiple URLs
// Your regular expression name should be regex and your result should be a string array.

const regex1=/(http|https):\/\/[a-z0-9\.]+(\.net|\.com)/gi;
const regex2=/https?:\/\/[a-z0-9\.]+\.(net|com)/gi;
console.log('http://hEllo233.44.com'.match(regex1));
console.log("http://www.codewars1.com!@#$%http://www.codewars2.net".match(regex2));

//? //////////////////////////////////////////////////////////////////////////

//? 23.Training JS #41: Regular Expression--"\"

function isPair(s){
  var r=/\(\)|\[\]|\{\}/g;
  while (r.test(s)) s=s.replace(r,"");
  return s=="";
}

console.log( isPair("()") )     //output: true
console.log( isPair("((()))") ) //output: true

console.log( isPair(")(") )     //output: false
console.log( isPair("({[})") )  //output: false

//You might have guessed the task. Yes, This time your task is to write a regular expressions matching all palindrome substring of a string.

// The rules:

// The string contains letters, numbers, underscores and spaces. space is the separator. the substring means the whole of a substring that separated by spaces. For example:
// "aaa bcccd" should match a substring "aaa" ,
// should not match "ccc", "ccc" is a part of substring "bcccd"
// Palindrome substring length range is 2-7. It means don't match the substring which length=1 or length>7.
// A string may contain multiple palindrome substring.
// You should not ignore case.
// Your regular expression name should be regex and your result should be a string array.
// Examples
// "aa bbb cccc".match(regex)             should return [ 'aa', 'bbb', 'cccc' ]
// "aaa bcccd".match(regex)               should return [ 'aaa' ]
// "_x_x_ --- ~~|~~".match(regex)         should return [ '_x_x_' ]
// "ABCDCBA ABABABA".match(regex)         should return [ 'ABCDCBA', 'ABABABA' ]
// "121 1221 13577531 11211".match(regex) should return [ '121', '1221', '11211' ]
// "aabbbcccc d".match(regex)             should return null
// "1    1".match(regex)                  should return null
// "abbA CdDc".match(regex)               should return null

//скопировал, так и не смог разобраться
var regex02=/\b(\w)(\w)?(\w)?\w?\3\2\1\b/g
console.log("qbcddcbq".match(regex02));

//    \b - spaces around the words / numbers
//    (\w) - first symbol
//    (\w)? - find out how many symbols in word/number
//    \b(\w)(\w)?(\w)?\w?\3\2\1\b checking for palyndrome
//        1   2    3    4 5 6 7

//    7th symbol must match 1 sub expression, 6 = 2, 5 = 3 and 4th symbol in the middle.
//    So \3 checks if the 5th symbol equal 3rd subexpression, /2 - if the 6th symbol match 2nd subexpression, /1 - if the 7th symbol math 1st subexpression.

//    for example str   '   A   B   C   D  C B A  '
//    regex             \b(\w)(\w)(\w)(\w)\3\2\1\\b
//    sub expression №      1   2   3   4

//    Did I understand this solution correctly?
