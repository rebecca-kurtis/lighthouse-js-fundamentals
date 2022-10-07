const checkAir = function(samples, threshold) {
  // samples is an array of strings that is either clean or dirty
  // threshold is a number representign the highest acceptable number of dirty samples
  /* function must return 'polluted' if there are too many dirty air samples or
  or 'clean' if the proportion of dirty samples is below the threshold */
  let dirtyAir = 0;
  for (let i = 0; i < samples.length; i++ ) {
    if (samples[i] === 'dirty') {
      dirtyAir++;
    } 
    } if (dirtyAir/samples.length > threshold) {
      return "Polluted";
  }  else {return "Clean"};
}


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))