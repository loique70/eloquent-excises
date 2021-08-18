// Regexp golf
let regExpOne = /ca[rt]/;

let regExpTwo = /pr?op/;

let regExpThree = /ferr(et|y|ari)/;

let regExpFour = /ious\b/;

let regExpFive = /\s[.,:;]/;

let regExpSix = /\w{7,}/

let regExpSeven = /\b[^eE\W]\b/;

//Quoting style

let text = "'I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(/((')\s)|(\s('))|(^('))|((')$)/g, re => {
  if (re.match(/(')\s/)) return "\" ";
  if (re.match(/\s(')/)) return " \"";
  return "\"";
}));

console.log(text.replace(/(^|\W)'|'(\W|$)/g, "$1\"$2"))


// RegExp describing JavaScript style number
let number = /^[\+-]?((\d+\.?\d*)|(\d*\.?\d+))([eE][\+-]?\d+)?$/;