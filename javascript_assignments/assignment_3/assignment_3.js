// Addition
function doAddition() {
  let num1 = Number.parseFloat(document.getElementById("num1").value);
  let num2 = Number.parseFloat(document.getElementById("num2").value);
  //   Validation
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert("Please provide valid inputs!!");
    return;
  }
  document.getElementById("result").value = num1 + num2;
}

// Subtraction
function doSubtraction() {
  let num1 = Number.parseFloat(document.getElementById("num1").value);
  let num2 = Number.parseFloat(document.getElementById("num2").value);
  //   Validation
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert("Please provide valid inputs!!");
    return;
  }
  document.getElementById("result").value = num1 - num2;
}

// Multiplication
function doMultiplication() {
  let num1 = Number.parseFloat(document.getElementById("num1").value);
  let num2 = Number.parseFloat(document.getElementById("num2").value);
  //   Validation
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert("Please provide valid inputs!!");
    return;
  }
  document.getElementById("result").value = num1 * num2;
}

// Division
function doDivision() {
  let num1 = Number.parseFloat(document.getElementById("num1").value);
  let num2 = Number.parseFloat(document.getElementById("num2").value);
  //   Validation
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert("Please provide valid inputs!!");
    return;
  }
  document.getElementById("result").value = num1 / num2;
}
