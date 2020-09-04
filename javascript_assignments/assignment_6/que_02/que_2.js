function showSign() {
  let num1 = Number.parseFloat(document.getElementById("num1").value);
  let num2 = Number.parseFloat(document.getElementById("num2").value);
  let num3 = Number.parseFloat(document.getElementById("num3").value);
  //   Validation
  if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3)) {
    alert("Please enter valid input");
    return;
  }
  if (num1 == 0 || num2 == 0 || num3 == 0) {
    alert("Multiplication will be zero !!");
    return;
  }

  if (num1 > 0 && num2 > 0 && num3 > 0) {
    console.log(num1 * num2 * num3);
    alert(`Multiplication of ${num1} , ${num2} , ${num3} will have + sign`);
    return;
  } else if (num1 < 0 && num2 < 0 && num3 > 0) {
    console.log(num1 * num2 * num3);
    alert(`Multiplication of ${num1} , ${num2} , ${num3} will have + sign`);
    return;
  } else if (num1 > 0 && num2 < 0 && num3 < 0) {
    console.log(num1 * num2 * num3);
    alert(`Multiplication of ${num1} , ${num2} , ${num3} will have + sign`);
    return;
  } else if (num1 < 0 && num2 > 0 && num3 < 0) {
    console.log(num1 * num2 * num3);
    alert(`Multiplication of ${num1} , ${num2} , ${num3} will have + sign`);
    return;
  } else {
    console.log(num1 * num2 * num3);
    alert(`Multiplication of ${num1} , ${num2} , ${num3} will have - sign`);
    return;
  }
}
