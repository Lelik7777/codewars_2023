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
  brightest(['#0D5D1B', '#3DCBE2', '#C0A8DD', '#BAE49F', '#A2D643', '#BBC5A3'])
);
//? ///////////////////////////////////////////////////////////////////////////////////////

//?2. Disemvowel Trolls
// our task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

const disemvowel = (str) => str.replace(/[aeiou]/gi, '');
console.log(disemvowel('This website is for losers LOL!'));
//? ///////////////////////////////////////////////////////////////////

//?3.Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
//const isIsogram = (str) => str.length === [...new Set(str.toLowerCase())].length;
const isIsogram = (str) => str.length === new Set(str.toLowerCase()).size;
console.log(isIsogram('moose'));
//? ///////////////////////////////////////////////////////////////////

//?4.Digits explosion
//Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
//explode("102269")// return "12222666666999999999"
//explode("312")// return "333122"

const explode = (str) => [...str].map((num) => num.repeat(+num)).join('');
console.log(explode('102269'));
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
  if (d === 'right') {
    for (let i = 0; i < n; i++) {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  if (d === 'left') {
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
  'left',
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
      str = str.split('');
      str.splice(Math.floor(str.length / 2), 1, '|');
      return str.join('');
    } else {
      str = str.split('');
      str.splice(Math.floor(str.length / 2), 0, '|');
      return str.join('');
    }
  });

console.log(isolateIt(['abcd', 'efgh', 'adscd']));

// логика в том,что каждую строку(элемент массива) я при помощи метода slice() меняю: вначале я беру первую половину строки,далее прибавляю символ  | и далее беру вторую часть строки с конца
const isolateIt1 = (arr) =>
  arr.map(
    (str) => str.slice(0, str.length / 2) + '|' + str.slice(-str.length / 2)
  );

console.log(isolateIt1(['abcd', 'efgh', 'adscd']));

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
    polidromSecondNum = +String(secondNum).split('').reverse().join('');
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
    return +[...String(b)].reverse().join('') === a;
  });
  return res ? [a, b] : [-1, -1];
};

console.log(mirrorImage2([454, 86, 57, 75, 16, 88]));

console.log(Array(4).join('a'));
console.log([...Array(4)].join('a'));
console.log(new Array(4 + 1).join('a'));

var cache = [];
for (var i = 0; i < 26; i++) cache[i] = String.fromCharCode(97 + i);
console.log(cache);
var result = cache.join('');
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
    .join('>');
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
        : ''
    )
    .filter((x) => x !== '')
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
  const str = String(n).split('.');
  if (str[0].length < str[1].length) return Math.ceil(n);
  if (str[0].length > str[1].length) return Math.floor(n);
  if (str[0].length === str[1].length) return Math.round(n);
};
console.log(roundIt(98.54));

const roundIt1 = (n) => {
  const [a, b] = String(n).split('.');
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
  const string = 'ABCDEFGHIJKLM';
  const symbols = '~!@#$%^&*';
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
  return code.join('');
};
console.log(rndCode());
//? //////////////////////////////////////////////////////////////////////////

//? 19.Training JS #37: Unlock new weapon---RegExp Object

const rex = /abc/;
const rex2 = new RegExp('abc');
console.log(rex);
console.log(rex2);

const words = ['abc', '123', '&##'];
for (const iterator of words) {
  console.log(new RegExp(iterator));
}
var str = 'ABABCDEababcde';
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
  arr.map((animal) => (str.match(new RegExp(animal, 'g')) ?? []).length);
console.log('726', countAnimals('pig', ['dog', 'cat']));

//? //////////////////////////////////////////////////////////////////////////

//? 20.Training JS #38: Regular Expression--"^","$", "." and test()

console.log('sfasfsdfsadfsadfsad'.match(/.{1,3}/g));
var str = 'abcabc';
console.log(str.replace(/^./, str[0].toUpperCase()));
console.log('hello world'.split(/ /));
'hello world'.replace(/^./, (x) => console.log(x));
'hello world'.replace(/.\b/g, (x) => console.log(x));
'whole words only'.replace(/\bwords\b/g, (x) => console.log(x));

var word = 'abcd';
//method 1:
//
var regstr =
  word[0] + //first letter
  word.slice(1, -1).replace(/./g, '.') + //middle letters
  word.slice(-1);
var reg1 = new RegExp('^' + regstr + '$');
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
    .join(' ');
console.log(findSimilarity('bag dog dig dot doog dogs', 'dog'));
let word11 = 'dog';
var reg = new RegExp('^' + word11.replace(/\B.\B/g, '.') + '$');
console.log(reg);

console.log('dogs'.replace(/\B..\B/, '.'));
console.log('dogs cats'.replace(/\b./g, '.'));

let stringMy =
  'ПРОХОЖДЕНИЕ СОБЕСОВ И ПОЛУЧЕНИЕ РАБОТЫ РАЗРАБОМ - ЭТО РАЗРЕШЕНИЕ ОТЛОЖЕННОЙ МНОЙ ЕЩЕ В МОЛОДОСТИ ЗАДАЧИ, КОГДА Я КАТЕГОРИЧЕСКИ ОТКАЗАЛСЯ ИДТИ В ИНТЕРНАТУРУ';
console.log(stringMy.toLowerCase());

//
let str00 = 'xx xax xaax xaaax';
console.log(str00.replace(/xa{1,2}/g, '!'));
function fakeBin(x) {
  return x.replace(/./g, (d) => +(d >= 5));
}
console.log(fakeBin('23489'));
console.log(+true);
console.log(+false);
console.log('hello'.replace(/.\b/g, '*')); // заменить все буквы кроме последней
str.replace(
  /\w+/g,
  (x) => x.slice(0, -1).toUpperCase() + x.slice(-1).toLowerCase()
);
console.log('hello'.slice(0, -1));

//? //////////////////////////////////////////////////////////////////////////

//? 21.Training JS #39: Regular Expression--"?", "*", "+" and "{}"

var str01 = 'aaaabbbb';
console.log(str01.match(/сb/) + '');
console.log([3, 4, 5] + '');
console.log(['hello', 'world'] + '');

var s = '100001,111,12222221,222,3333,12321,14441';
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

const regex = /9.*0{4}/;
console.log(/-?9\d*0{4}$/.test('-90000123'));

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

const regex1 = /(http|https):\/\/[a-z0-9\.]+(\.net|\.com)/gi;
const regex2 = /https?:\/\/[a-z0-9\.]+\.(net|com)/gi;
console.log('http://hEllo233.44.com'.match(regex1));
console.log(
  'http://www.codewars1.com!@#$%http://www.codewars2.net'.match(regex2)
);

//? //////////////////////////////////////////////////////////////////////////

//? 23.Training JS #41: Regular Expression--"\"

function isPair(s) {
  var r = /\(\)|\[\]|\{\}/g;
  while (r.test(s)) s = s.replace(r, '');
  return s == '';
}

console.log(isPair('()')); //output: true
console.log(isPair('((()))')); //output: true

console.log(isPair(')(')); //output: false
console.log(isPair('({[})')); //output: false

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
var regex02 = /\b(\w)(\w)?(\w)?\w?\3\2\1\b/g;
console.log('qbcddcbq'.match(regex02));

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

//? //////////////////////////////////////////////////////////////////////////

//? 24.Count all the sheep on farm in the heights of New Zealand

// Every Friday and Saturday night, farmer counts amount of sheep returned back to his farm (sheep returned on Friday stay and don't leave for a weekend).

// Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

// Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

// Example 1: Input: {1, 2}, {3, 4}, 15 --> Output: 5

// Example 2: Input: {3, 1, 2}, {4, 5}, 21 --> Output: 6

const lostSheep = (friday, saturday, total) => {
  if (friday.length > 0) {
    total -= friday.reduce((acc, cur) => acc + cur);
  }
  if (saturday.length > 0) {
    total -= saturday.reduce((acc, cur) => acc + cur);
  }
  return total;
};

console.log(lostSheep([], [4, 5], 21));

const lostSheep1 = (f, s, t) =>
  t - [...f, ...s].reduce((acc, cur) => acc + cur, 0);
console.log(lostSheep1([], [], 21));

//? //////////////////////////////////////////////////////////////////////////

//? 25.Return the first M multiples of N

// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// multiples(3, 5.0)
// should return

// [5.0, 10.0, 15.0]

const multiples = (m, n) => {
  const arr = [];
  let sum = 0;
  for (let i = 0; i < m; i++) {
    arr.push((sum += n));
  }
  return arr;
};
const multiples1 = (m, n) => Array.from(Array(m), (_, i) => n * (i + 1));
console.log(multiples(3, 4.0));
console.log(multiples1(3, 4.0));
console.log(Array(2));

//? //////////////////////////////////////////////////////////////////////////

//? 26.80's Kids #2: Help ALF Find His Spaceship

// Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

// ALF has the technology to bring the spaceship home if he can lock on to its location.

// Given a map:

// ..........
// ..........
// ..........
// .......X..
// ..........
// ..........
// The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

// In this example:

// findSpaceship(map) => [7, 2]
// If you cannot find the spaceship, the result should be

// "Spaceship lost forever."
//здесь важно понять,что принимает ф-ция. Она принимает строку,состоящую из точек  и буквы Х. Поэтому сначала мне нужно превратить ее в массив подстрок,где переход на новыю строку яляется разделителем. Далее нужно поменять последовательность этих подстрок, поскольку по условию начало находится в конце. Далее пробежаться двумя циклами и перебрать элементы. Как только встречаем букву Х, то возвращаем массив с координатами. Если же буквы нет, то возвращаем кодовую фразу

const findSpaceship = (map = '') => {
  map = map.split('\n').reverse();
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 'X') {
        return [j, i];
      }
    }
  }
  return 'Spaceship lost forever.';
};
console.log(
  findSpaceship(`..........
..........
....X.....
..........
..........
..........`)
);

//? //////////////////////////////////////////////////////////////////////////

//? 27.80's Kids #3: Punky Brewster's Socks

// Punky loves wearing different colored socks, but Henry can't stand it.

// Given an array of different colored socks, return a pair depending on who was picking them out.

// Example:

// getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
// Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

// If there is no possible combination of socks, return an empty array.

const getSocks = (name, arr) => {
  if (name === 'Henry') {
    const set = new Set(arr);
    const res = arr
      .map((el) => (set.has(el) ? set.delete(el) : el))
      .filter((x) => x !== true);
    return [...res, ...res];
  }

  if (name === 'Punky') {
    const res = [...new Set(arr)];
    return res.length > 1 ? [res[0], res[1]] : [];
  }
};

console.log(getSocks('Henry', ['', 'hot', 'set', 'blue']));

//? //////////////////////////////////////////////////////////////////////////

//? 28.Adding values of arrays in a shifted way

// #Adding values of arrays in a shifted way

// You have to write a method, that gets two parameter:

// 1. An array of arrays with int-numbers
// 2. The shifting value
// #The method should add the values of the arrays to one new array.

// The arrays in the array will all have the same size and this size will always be greater than 0.
// The shifting value is always a value from 0 up to the size of the arrays.
// There are always arrays in the array, so you do not need to check for null or empty.

// #1. Example:

// [[1,2,3,4,5,6], [7,7,7,7,7,-7]], 0

// 1,2,3,4,5,6
// 7,7,7,7,7,-7

// --> [8,9,10,11,12,-1]
// #2. Example

// [[1,2,3,4,5,6], [7,7,7,7,7,7]], 3

// 1,2,3,4,5,6
//       7,7,7,7,7,7

// --> [1,2,3,11,12,13,7,7,7]
// #3. Example

// [[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]], 3

// 1,2,3,4,5,6
//       7,7,7,-7,7,7
//             1,1,1,1,1,1

// --> [1,2,3,11,12,13,-6,8,8,1,1,1]
// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

//1. цикл на длину базового массива 2. для первого элемента массива добавить нули( их количество равно сдвиг * (на длину массива-1)  ) в конец push() через Array.from({length:},x=>x=0).3 для последнего элемента также забиваем нулями, но вначале unshift() 4. основная проблема возникает с элементами,которые находятся посередине,поскольку нули нужно добавлять,как в начало массива(количество нулей равно сдвиг * на индекс), так и в конец(количество нулей равно (длина массива -1) * сдвиг - сдиг * на индекс)). 5. по итогу получаем массив array ,который содержит массивы в качестве элементов, в которых есть также массивы,поэтому array.map()  каждый элемента через flat() преобоазуем в одномерный массив. 6. складываем каждый элемент массивов по индексно и возращаем итоговый массив сумм
const addingShifted = (arr, shift) => {
  let array = arr;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      array[i].push(
        Array.from({ length: shift * (arr.length - 1) }, (x) => (x = 0))
      );
    } else if (i === arr.length - 1) {
      array[i].unshift(
        Array.from({ length: shift * (arr.length - 1) }, (x) => (x = 0))
      );
    } else {
      array[i].unshift(Array.from({ length: shift * i }, (x) => (x = 0)));

      array[i].push(
        Array.from(
          { length: (array.length - 1) * shift - shift * i },
          (x) => (x = 0)
        )
      );
    }
  }
  array = array.map((x) => x.flat());
  console.log(array);
  const res = [];
  let sum = 0;
  for (let j = 0; j < array[0].length; j++) {
    for (let i = 0; i < array.length; i++) {
      sum += array[i][j];
    }
    res[j] = sum;
    sum = 0;
  }
  return res;
};
console.log(
  addingShifted(
    [
      [1, 2, 3, 4, 5, 6],
      [7, 7, 7, -7, 7, 7],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
    ],
    3
  )
);
const str11 = '134';
console.log(str11.padEnd(str11.length + 3, '0'));

console.log(
  ['abc', 'cbd'].map((x) =>
    x.replace(new RegExp(`^${x[0]}`), x[0].toLocaleUpperCase())
  )
);
console.log(Array.from({ length: 3 }, (x) => (x = 0)));

//? //////////////////////////////////////////////////////////////////////////

//? 29.Is every value in the array an array?
// Is every value in the array an array?

// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

// Examples:

// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

const arrCheck = (value) => value.every((el) => Array.isArray(el));
const arrCheck1 = (value) => value.every(Array.isArray);

//? //////////////////////////////////////////////////////////////////////////

//? 30.Smallest value of an array
// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

// 1.Math.min([...arr]) 2. arrray.indexOf(Math.min([...arr]))

const min = (arr, string) => {
  if (string === 'value') return Math.min(...arr);
  if (string === 'index') return arr.indexOf(Math.min(...arr));
};

//? //////////////////////////////////////////////////////////////////////////

//? 31.Array Array Array

// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

const explode0 = (x) => {
  if (x.every((num) => typeof num !== 'number')) return 'Void!';
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === 'number') sum += x[i];
  }
  return Array.from({ length: sum }, (el) => x);
};
console.log(explode0([5, 1]));

//? //////////////////////////////////////////////////////////////////////////

//? 32.The Office II - Boredom Score

// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

const boredom = (staff) => {
  const obj = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'passing about': 25,
  };
  console.log(Object.values(staff).map((el) => obj[el]));
  const res = Object.values(staff)
    .map((el) => obj[el])
    .reduce((a, c) => a + c, 0);
  if (+res <= 80) return 'kill me now';
  if (+res < 100 && +res > 80) return 'i can handle this';
  if (+res > 100) return 'party time!!';
};
boredom({
  tim: 'change',
  jim: 'accounts',
  randy: 'canteen',
  sandy: 'change',
  andy: 'change',
  katie: 'IS',
  laura: 'change',
  saajid: 'IS',
  alex: 'trading',
  john: 'accounts',
  mr: 'passing about',
});
boredom({
  tim: 'IS',
  jim: 'finance',
  randy: 'pissing about',
  sandy: 'cleaning',
  andy: 'cleaning',
  katie: 'cleaning',
  laura: 'pissing about',
  saajid: 'regulation',
  alex: 'regulation',
  john: 'accounts',
  mr: 'canteen',
});

//? //////////////////////////////////////////////////////////////////////////

//? 33.Scrabble Score

// Write a program that, given a word, computes the scrabble score for that word.

// Letter Values
// You'll need these:

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.

// Examples
// "cabbage" --> 14
// "cabbage" should be scored as worth 14 points:

// 3 points for C
// 1 point for A, twice
// 3 points for B, twice
// 2 points for G
// 1 point for E
// And to total:

// 3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14

// Empty string should return 0. The string can contain spaces and letters (upper and lower case), you should calculate the scrabble score only of the letters in that string.

// ""           --> 0
// "STREET"    --> 6
// "st re et"    --> 6
// "ca bba g  e" --> 14

//1. уберем все возможные проблемы в строке str.replace(/\s/,'') 2. создать объект letters ,у которого ключи - это буквы, а значения - вес буквы

const scrabbleScore = (str) => {
  const letters = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10,
  };
  if (str.length < 1) return 0;
  return [...str.replace(/\s/g, '')]
    .map((x) => letters[x.toLowerCase()])
    .reduce((a, c) => a + c, 0);
};

console.log(scrabbleScore('st re et'));

//? //////////////////////////////////////////////////////////////////////////

//? 35.Average Scores
// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// The array will never be empty.

const average = (scores) =>
  Math.round(scores.reduce((a, c) => a + c, 0) / scores.length);
console.log(average([49, 3, 5, 300, 7]));
//? //////////////////////////////////////////////////////////////////////////

//? 36.Convert the score

// You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

// The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

// e.g. "The score is four nil" should return [4,0]

// Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

// "new score: two three"

// "two two"

// "Arsenal just conceded another goal, two nil"
// Note:

// Please return an array

const scoreboard = (str) => {
  const score = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  return str
    .split(' ')
    .splice(-2)
    .map((el) => score[el]);
};

console.log(scoreboard('The score is four nil'));

function scoreboard1(string) {
  var dict = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  return string
    .match(/(nil|one|two|three|four|five|six|seven|eight|nine)/g)
    .map((e) => dict[e]);
}

//? //////////////////////////////////////////////////////////////////////////

//? 37.Convert the score
console.log(
  '34 45 54'
    .split(' ')
    .map((x, i) => (i < 2 ? x : ''))
    .filter((x) => x !== '')
);

const obj = {
  name: 'bob',
  age: 323,
  job: 'admin',
  who: 'man',
};

function getInfo({ name, job }) {
  console.log('name is ', name, 'job is ', job);
}
getInfo(obj);

//? //////////////////////////////////////////////////////////////////////////

//? 38.Unflatten a list (Easy)

// There are several katas like "Flatten a list". These katas are done by so many warriors, that the count of available list to flattin goes down!

// So you have to build a method, that creates new arrays, that can be flattened!

// #Shorter: You have to unflatten a list/an array.

// You get an array of integers and have to unflatten it by these rules:

// - You start at the first number.
// - If this number x is smaller than 3, take this number x direct
//   for the new array and continue with the next number.
// - If this number x is greater than 2, take the next x numbers (inclusive this number) as a
//   sub-array in the new array. Continue with the next number AFTER this taken numbers.
// - If there are too few numbers to take by number, take the last available numbers.
// The given array will always contain numbers. There will only be numbers > 0.

// Example:

//  [1,4,5,2,1,2,4,5,2,6,2,3,3] -> [1,[4,5,2,1],2,[4,5,2,6],2,[3,3]]

// Steps:
// 1. The 1 is added directly to the new array.
// 2. The next number is 4. So the next 4 numbers (4,5,2,1) are added as sub-array in the new array.
// 3. The 2 is added directly to the new array.
// 4. The next number is 4. So the next 4 numbers (4,5,2,6) are added as sub-array in the new array.
// 5. The 2 is added directly to the new array.
// 6. The next number is 3. So the next 3 numbers would be taken. There are only 2,
//    so take these (3,3) as sub-array in the new array.

//1. проверить текущеее число меньше ли оно 3, 2.если да,то в новый массив, 3.если нет,то количество элементов данного числа в подмассив и в новый массив

const unflatten = (arr) => {
  const res = [];
  while (arr.length > 0) {
    for (let i = 0; i < 1; i++) {
      if (arr[i] < 3) {
        res.push(arr.shift());
      } else {
        res.push(arr.splice(i, arr[i]));
      }
    }
  }
  return res;
};

const unflatten1 = (arr) => {
  const res = [];
  while (arr.length) {
    res.push(arr[0] < 3 ? arr.shift() : arr.splice(0, arr[0]));
  }
  return res;
};
console.log(unflatten1([3, 5, 2, 1]));

//? //////////////////////////////////////////////////////////////////////////

//? 39.Thinkful - List and Loop Drills: Lists of lists

// You have a two-dimensional list in the following format:

// data = [[2, 5], [3, 4], [8, 7]]
// Each sub-list contains two items, and each item in the sub-lists is an integer.

// Write a function process_data()/processData() that processes each sub-list like so:

// [2, 5] --> 2 - 5 --> -3
// [3, 4] --> 3 - 4 --> -1
// [8, 7] --> 8 - 7 --> 1
// and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

// For input, you can trust that neither the main list nor the sublists will be empty.

const processData = (list) =>
  list.map((sublis) => sublis[0] - sublis[1]).reduce((a, c) => a * c, 1);

console.log(
  processData([
    [2, 5],
    [3, 4],
    [8, 7],
  ])
);
const process_data = (arr) => arr.reduce((a, [b, c]) => a * (b - c), 1);
console.log(
  process_data([
    [2, 5],
    [3, 4],
    [8, 7],
  ])
);

//? //////////////////////////////////////////////////////////////////////////

// //? 40. Thinkful - List and Loop Drills: Inverse Slicer
// You're familiar with list slicing in Python and know, for example, that:

// >>> ages = [12, 14, 63, 72, 55, 24]
// >>> ages[2:4]
// [63, 72]
// >>> ages[2:]
// [63, 72, 55, 24]
// >>> ages[:3]
// [12, 14, 63]
// write a function inverse_slice() that takes three arguments: a list items, an integer a and an integer b. The function should return a new list with the slice specified by items[a:b] excluded. For example:

// >>>inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
// [12, 14, 55, 24]
// The input will always be a valid list, a and b will always be different integers equal to or greater than zero, but they may be zero or be larger than the length of the list.

const inverseSlice = (items, a, b) => {
  items.splice(a, b - a);
  return items;
};

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3));

let matrix = [['hello'], ['world']];
matrix = matrix.map((x) => String(x).repeat(2));
console.log(matrix);

console.log(matrix.map((x) => [].fill('h', 4)));

const matrix1 = [['hello'], ['world']];
const res = matrix1.map((a) => Array(4).fill(...a));
console.log(res);
//? //////////////////////////////////////////////////////////////////////////

// //? 41.Thinkful - Object Drills: Vectors
// Create a Vector class with x and a y attributes that represent component magnitudes in the x and y directions.

// Your vectors should handle vector additon with an .add() method that takes a second vector as an argument and returns a new vector equal to the sum of the vector you call .add() on and the vector you pass in.

// For example:

// >>> a = Vector(3, 4)
// >>> a.x
// 3
// >>> a.y
// 4
// >>> b = Vector(1, 2)
// >>> c = a.add(b)
// >>> c.x
// 4
// >>> c.y
// 6
// Adding vectors when you have their components is easy: just add the two x components together and the two y components together to get the x and y components for the vector sum.

// class Vector {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   add(obj) {
//     this.x = obj.x + this.x;
//     this.y = obj.y + this.y;
//     console.log(this);
//     return this;
//   }
//}
// const _a = new Vector(-1, 2);
// const _b = new Vector(3, -4);
// const _c = _a.add(_b);
// console.log(_c.x);
// console.log(_c.y);

//? //////////////////////////////////////////////////////////////////////////

// //? 42.Thinkful - Object Drills: Quarks

// Your Quark class should allow you to create quarks of any valid color ("red", "blue", and "green") and any valid flavor ('up', 'down', 'strange', 'charm', 'top', and 'bottom').

// Every quark has the same baryon_number (BaryonNumber in C#): 1/3.

// Every quark should have an .interact() (.Interact() in C#) method that allows any quark to interact with another quark via the strong force. When two quarks interact they exchange colors.

// Example
// >>> q1 = Quark("red", "up")
// >>> q1.color
// "red"
// >>> q1.flavor
// "up"
// >>> q2 = Quark("blue", "strange")
// >>> q2.color
// "blue"
// >>> q2.baryon_number
// 0.3333333333333333
// >>> q1.interact(q2)
// >>> q1.color
// "blue"
// >>> q2.color
// "red"

class Quark {
  constructor(color, flavor) {
    this.color = color;
    this.flavor = flavor;
    this.baryon_number = 1 / 3;
  }
  interact(quark) {
    // let temp = this.color;
    // this.color = quark.color;
    // quark.color = temp;
    [this.color, quark.color] = [quark.color, this.color];
  }
}
let q1 = new Quark('red', 'up');
let q2 = new Quark('blue', 'strange');

q1.interact(q2);
console.log(q1.color);

//? //////////////////////////////////////////////////////////////////////////

// //? 43.Thinkful - String Drills: Quotable
// This function should take two string parameters: a person's name (name) and a quote of theirs (quote), and return a string attributing the quote to the person in the following format:

// '[name] said: "[quote]"'
// For example, if name is 'Grae' and 'quote' is 'Practice makes perfect' then your function should return the string

// 'Grae said: "Practice makes perfect"'
// Unfortunately, something is wrong with the instructions in the function body. Your job is to fix it so the function returns correctly formatted quotes.

// Click the "Train" button to get started, and be careful with your quotation marks.
const quotable = (name, quote) => `${name} said: "${quote}"`;

//? //////////////////////////////////////////////////////////////////////////

// //? 44.Thinkful - Thinkful - String Drills: Poem formatter

//  You have a collection of lovely poems. Unfortunately, they aren't formatted very well. They're all on one line, like this:

// Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.
// What you want is to present each sentence on a new line, so that it looks like this:

// Beautiful is better than ugly.
// Explicit is better than implicit.
// Simple is better than complex.
// Complex is better than complicated.
// Write a function, format_poem() that takes a string like the one line example as an argument and returns a new string that is formatted across multiple lines with each new sentence starting on a new line when you print it out.

// Try to solve this challenge with the str.split() and the str.join() string methods.

// Every sentence will end with a period, and every new sentence will have one space before the previous period. Be careful about trailing whitespace in your solution.

const formatPoem = (poem) => poem.split('. ').join('.\n');

console.log(
  formatPoem(
    'Beautiful is better than ugly.Explicit is better than implicit.Simple is better than complex.Complex is better than complicated.'
  )
);
const arrNum = [3, 4, 5];
console.log(arrNum.slice(0, -1));

//? //////////////////////////////////////////////////////////////////////////

// //? 45.Strings, strings, strings (Easy)

// The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() for the following data types.

// I. Booleans
// For booleans:

// true should be converted to "true"
// false should be converted to "false"
// II. Numbers
// For numbers, conversion should be as follows:

// e.g.
// (3).toString() === "3"
// (3.14).toString() === "3.14"
// (-78).toString() === "-78"
// Math.PI.toString() === "3.141592653589793"
// III. Arrays
// For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings. However, on top of fixing it, we would also like to improve it as well. We would like to keep the square brackets ([]) around the "stringified" array as it would be seen in Javascript code. For example:

// e.g.
// [].toString() === "[]"
// [1].toString() === "[1]"
// [2,4,8,17].toString() === "[2, 4, 8, 17]"

Boolean.prototype.toString =
  Number.prototype.toString =
  Array.prototype.toString =
    function () {
      return JSON.stringify(this);
    };
console.log(true.toString());
console.log([2, 4, 5].toString());

//? //////////////////////////////////////////////////////////////////////////

// //? 46.Thinkful - String Drills: Areacode extractor
// You've got a bunch of textual data with embedded phone numbers. Write a function area_code() that finds and returns just the area code portion of the phone number.

// >>> message = "The supplier's phone number is (555) 867-5309"
// >>> area_code(message)
// '555'
// The returned area code should be a string, not a number. Every phone number is formatted like in the example, and the only non-alphanumeric characters in the string are apostrophes ' or the punctuation used in the phone number.

function areaCode(text) {
  return text.match(/\(\d+\)/)[0].replace(/[()]/g, '');
}
console.log(areaCode2("The 102nd district court's fax line is (124) 816-3264"));

function areaCode2(text) {
  return text.slice(text.indexOf('(') + 1, text.indexOf(')'));
}

//? //////////////////////////////////////////////////////////////////////////
class Person {
  _name;
  _age;
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
  set name(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}
const peter = new Person('peter', 44);
peter.name = 'vasya';
console.log(peter.name);

//? 47.Averages of numbers
// #Get the averages of these numbers

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

// Example:

// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null, your method should return an empty array.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

const averages = (arr) => {
  if (!arr || arr.length < 3) return [];
  const array = [];
  for (let i = 0; i < arr.length - 1; i++) {
    array.push((arr[i] + arr[i + 1]) / 2);
  }

  return array;
};
console.log(averages([1, 3, 5, 1, -10]));

//? //////////////////////////////////////////////////////////////////////////

// //? 48.Sort an array by value and index

// Sort an array by value and index
// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

//алгоритм: 1. создаю пустой объект. 2. создаю новый массив и в него записываю через map() умноженные значения из исходного массива умноженные на индекс+1 3. через цикл for() записываю в объект в ключ значение из нового массива,а в значение - значение из исходного массива 4. сортирую ключи по возрастанию через Object.keys(obj),получая массив отсортированных ключей 5. через map() возращаю новый массив,используя массив отсортированных ключей
//Предыдущий алгоритм не будет работать,если элементы в массиве дублируются,поскольку ключи в объекте могут быть только уникальными значениями и повторяться не могут,поэтому необходимо использовать матрицу,которую сортируем по второму элементу внутреннего массива,а потом через map() возращаем массив из первых элементов внтуренних массивов
const sortByValueAndIndex = (array) =>
  array
    .map((x, i) => [x, x * (i + 1)])
    .sort((a, b) => a[1] - b[1])
    .map((x) => x[0]);
console.log(
  sortByValueAndIndex([
    -3, -12, -24, -6, 29, 16, -26, -29, 21, -1, 26, 16, -19, 25, -20, -12,
  ])
);
//? //////////////////////////////////////////////////////////////////////////

// //? 49.Return substring instance count
// Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

// Usage example:

// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
//     ---> should return 2 since "bb" shows up twice

// full_text = "aaabbbcccc", search_text = "bbb"
//     ---> should return 1

function solution(fullText, searchText) {
  //проверяем,если null, return []
  return (fullText.match(new RegExp(searchText, 'g')) || []).length;
}
console.log(solution('ccddeeccddeecc', 'gg'));
console.log(solution('abbc', 'bb'));

//? //////////////////////////////////////////////////////////////////////////

// //? 50. Higher-Order Functions Series - Find the first Python developer

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];
// your function should return Victoria, Puerto Rico.

// Notes:

// The input array will always be valid and formatted as in the example above.

// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

const getFirstPython = (list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].language === 'Python') {
      return [list[i].firstName, list[i].country].join(', ');
    }
  }
  return 'There will be no Python developers';
};
var list2 = [
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 29,
    language: 'JavaScript',
  },
  {
    firstName: 'Amar',
    lastName: 'V.',
    country: 'Bosnia and Herzegovina',
    continent: 'Europe',
    age: 32,
    language: 'Ruby',
  },
];

console.log(
  getFirstPython([
    {
      firstName: 'Mark',
      lastName: 'G.',
      country: 'Scotland',
      continent: 'Europe',
      age: 22,
      language: 'JavaScript',
    },
    {
      firstName: 'Victoria',
      lastName: 'T.',
      country: 'Puerto Rico',
      continent: 'Americas',
      age: 30,
      language: 'Python',
    },
    {
      firstName: 'Emma',
      lastName: 'B.',
      country: 'Norway',
      continent: 'Europe',
      age: 19,
      language: 'Clojure',
    },
  ])
);

//? //////////////////////////////////////////////////////////////////////////

// //? 51.Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

const countDevelopers = (list) =>
  list.filter(
    (dev) => dev.language === 'JavaScript' && dev.continent === 'Europe'
  ).length;

//? //////////////////////////////////////////////////////////////////////////

// //? 52. Higher-Order Functions Series - Greet developers

// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array where each object will have a new property 'greeting' with the following string value:

// Hi < firstName here >, what do you like the most about < language here >?

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
// ];
// your function should return the following array:

// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   }
// ];

const greetingDevelopers = (list) =>
  list.map((developer) => ({
    ...developer,
    greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`,
  }));
console.log(
  greetingDevelopers([
    {
      firstName: 'Sofia',
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
      language: 'Python',
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

//? //////////////////////////////////////////////////////////////////////////

// //? 53.Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.

const isRubyComing = (list) =>
  list.find((developer) => developer.language === 'Ruby') ? true : false;

const isRubyComing2 = (list) =>
  list.some((developer) => developer.language === 'Ruby');
//? //////////////////////////////////////////////////////////////////////////

// //? 54.Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// your function should return the following object (associative array in PHP, table in COBOL):

// { C: 2, JavaScript: 1, Ruby: 1 }

const countLanguages = (list) => {
  const languages = {};
  for (let i = 0; i < list.length; i++) {
    if (!languages.hasOwnProperty(list[i].language)) {
      languages[list[i].language] = 0;
    }

    if (languages.hasOwnProperty(list[i].language)) {
      languages[list[i].language] += 1;
    }
  }

  return languages;
};
countLanguages([
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
  },
  {
    firstName: 'Ramon',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
  },
]);

const countLanguages2 = (list) =>
  list.reduce((a, c, i) => {
    a[c.language] = (a[c.language] ?? 0) + 1;
    return a;
  }, {});
console.log(
  countLanguages2([
    {
      firstName: 'Noah',
      lastName: 'M.',
      country: 'Switzerland',
      continent: 'Europe',
      age: 19,
      language: 'C',
    },
    {
      firstName: 'Anna',
      lastName: 'R.',
      country: 'Liechtenstein',
      continent: 'Europe',
      age: 52,
      language: 'JavaScript',
    },
    {
      firstName: 'Ramon',
      lastName: 'R.',
      country: 'Paraguay',
      continent: 'Americas',
      age: 29,
      language: 'Ruby',
    },
    {
      firstName: 'George',
      lastName: 'B.',
      country: 'England',
      continent: 'Europe',
      age: 81,
      language: 'C',
    },
  ])
);
//? //////////////////////////////////////////////////////////////////////////

// //? 55.Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];
// your function should return true.

const isSameLanguage = (list) =>
  list.every((developer) => developer.language === list[0].language);
//? //////////////////////////////////////////////////////////////////////////

// //? 56.Coding Meetup #11 - Higher-Order Functions Series - Find the average age

// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

const getAverageAge = (list) =>
  Math.round(list.reduce((acc, cur) => acc + cur.age, 0) / list.length);
