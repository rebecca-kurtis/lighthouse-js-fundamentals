const conditionalSum = function(values, condition){
let sum = 0; 
  if (condition === "even") { 
    for ( let number of values) {
      const result = (number % 2 === 0) ? sum += number : sum = sum;
    }
  } else if (condition === "odd"){
    for (let number of values) {
      const result = (number % 2 === 1) ? sum+= number : sum = sum;
    }
  } 
    return sum; 
} 



console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));