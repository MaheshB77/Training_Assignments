/*
7.You take a value and the area of the trangle should be printed
Ex-Sides of the triangle 5, 6, 7.
Area of the triangle: 14.696938456699069
*/

function calculateArea() {
  let side1 = Number.parseInt(document.getElementById("side1").value);
  let side2 = Number.parseInt(document.getElementById("side2").value);
  let side3 = Number.parseInt(document.getElementById("side3").value);

  //   Validation if any input is not a number
  if (Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3)) {
    window.alert("Please provide valid input !!");
    return;
  }
  let p = (side1 + side2 + side3) / 2; //calculating perimeter
  let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));

  //   Validation if any side is given inappropriate
  if (Number.isNaN(area)) {
    window.alert("Please provide valid input !!");
    return;
  }
  let msg = "Area of triangle is : ";
  document.getElementById("result").innerHTML = msg + area;
}
