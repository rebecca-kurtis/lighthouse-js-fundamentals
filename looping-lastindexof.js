function lastIndexOf(array, value) {
  let foundMatch = false;
  let result  = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result = i;
      foundMatch = true;
    }
  }
  if (foundMatch) {
    return result;
  } else { 
    return -1;
  }
}