const urlEncode = function(text){
text = text.trim();
let output = '';
for (let i = 0; i < text.length; i++) {
  if (text[i] === " ") {
    output += "%20";
    
  } else {
    output += text[i];
    
  } 
} return output;
}


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));