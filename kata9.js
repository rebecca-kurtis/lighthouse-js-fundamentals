const camelCase = function(input) {
// needs to convert a string to camelcase and return the result
let result = '';
let array = input.split(' ');
for (let i = 0; i < array.length; i++) {
  result += (i !== 0) ? array[i][0].toUpperCase() + array[i].slice(1).toLowerCase() : array[i].toLowerCase();
}

return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));