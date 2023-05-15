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
