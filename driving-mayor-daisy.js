function carPassing(cars, speed) {
  let newDate = Date.now(speed);
  let newArray = {};
  newArray.time =  newDate;
  newArray.speed = speed;
  cars.push(newArray);
return cars;

}