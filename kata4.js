const instructorWithLongestName = function(instructors) {
  let name = 0;
  let index = 0;
  for (let i = 0; i < instructors.length; i++) {
  
    if (name < instructors[i].name.length) {
      name = instructors[i].name.length;
      index = i;
    }
      } return instructors[index];
      
      };
    

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));