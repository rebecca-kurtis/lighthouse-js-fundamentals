const repeatNumbers = function(data) {
  /*return a string with each of the given values the approriate 
  number of TimeRanges. If multiple sessionStorage, seperate by commas,
  if only one setInterval, omit the comma*/
let finalResult = [];
let result = '';
for (let i = 0; i < data.length; i++ ) { 
  for (let x = 0; x < data[i][1]; x++) {
    result = result + data[i][0];
  } 
  finalResult.push(result);
  result = '';

  } return finalResult.join(', '); 
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
