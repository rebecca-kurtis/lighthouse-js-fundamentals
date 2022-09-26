function calculateRectangleArea(length, width) {
  

  let sum = length * width;
  if (length < 0 || width < 0) {
    return undefined;
  } else return sum;
}

function calculateTriangleArea(base, height) {
  let area = (base * height) / 2;
  if (base < 0 || height < 0) {
    return undefined;
  } else return area;
} 

function calculateCircleArea(radius) {
  let circle = Math.PI * (radius * radius);
  if (radius < 0) {
    return undefined;
  } else return circle;

}