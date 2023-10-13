// Explore the includes , startswith & endswith functions of a string
const sentence = 'The quick brown for jumps over the lazy dog.';
const word = 'fox2';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not '} in the sentence`);

// Write a program to convert a given string to lowercase
console.log(word.toLocaleLowerCase())

// Extract the amount out of this string "please give Rs 1000"
let str2 = "please give Rs 1000"
// let amount = str2.slice("please give Rs".length)
let amount = str2.slice(15) //same as above
// let amount = str2.slice(15) //same as above
console.log(Number(amount)+1)

//Try to change 4Th character of a given string were you able to do it?
let friend = "Deepika"
friend[3] = "R"
console.log(friend) //friend is not changed , beacuse string is immutable