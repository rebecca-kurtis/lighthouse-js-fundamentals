const finalPosition = function (moves) {
  // Your code in here ...
  let x = 0;
  let y = 0; 

  for (let move of moves) 
    if (move === "north") {
      y++;
    } else if (move === "east") {
      x++;
    } else if (move === "south") {
      y--;
    } else if (move === "west") {
      x--;
    } return [x,y];

}
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  