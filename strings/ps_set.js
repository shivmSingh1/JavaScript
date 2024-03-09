// include fuction

let sentence= "my name is shivam singh";
let word="fox";

console.log(sentence.includes(word));
console.log(`the word '${word}' ${sentence.includes(word)? 'is' : 'is not'} persent in the given sentence`);

console.log("extract the amount");
let string="please give rs 10000";
let string2=Number.parseInt(string.slice("please give rs".length));
console.log(string2);