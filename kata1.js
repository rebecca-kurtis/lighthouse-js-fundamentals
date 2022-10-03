const sumLargestNumbers = function(data) {
let a = data[0];
let b = data[0];
for (let lg = 0; lg < data.length; lg++) {
  if (a < data[lg])
 {
  a = data[lg]; 
 }};

 for (let sm = 0; sm < data.length; sm++) {
  if (b < data[sm] && data[sm] < a){
    b = data[sm];
  }
 }
return a+b; 
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));