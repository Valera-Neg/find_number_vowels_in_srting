const numberOfVowels = function(data) {
const vowels =  data.toLowerCase().split("").filter(l => l === "a"  || l === "e" || l === "i"|| l === "o" || l === "u" || l === "y") 
return vowels.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));