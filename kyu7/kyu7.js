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