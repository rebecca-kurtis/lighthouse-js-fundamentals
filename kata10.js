const multiplicationTable = function(maxValue) {
  let table = '';
  for (let i = 1; i <= maxValue; i++) {
    for (let x = 1; x <= maxValue; x++) {
      x % maxValue === 0 ? table = (table + (i * x)) + "\n" : table = (table + (i * x )) + " ";
       
    }
  } return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));