function findGreatest() {
  let num1 = Number.parseFloat(document.getElementById("num1").value);
  let num2 = Number.parseFloat(document.getElementById("num2").value);
  let num3 = Number.parseFloat(document.getElementById("num3").value);
  let num4 = Number.parseFloat(document.getElementById("num4").value);
  let num5 = Number.parseFloat(document.getElementById("num5").value);
  //   Validation
  if (
    Number.isNaN(num1) ||
    Number.isNaN(num2) ||
    Number.isNaN(num3) ||
    Number.isNaN(num4) ||
    Number.isNaN(num5)
  ) {
    alert("Please enter valid input");
    return;
  }

  // Finding greatest number using conditionals
  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    alert(`Greatest number is ${num1}`);
    return;
  } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    alert(`Greatest number is ${num2}`);
    return;
  } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    alert(`Greatest number is ${num3}`);
    return;
  } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
    alert(`Greatest number is ${num4}`);
    return;
  } else {
    alert(`Greatest number is ${num5}`);
    return;
  }

  //   Alternative way to calculate largest number
  //   let numArray = [num1, num2, num3, num4, num5];
  //   let largest = numArray[0];
  //   for (let i = 0; i < numArray.length; i++) {
  //     if (numArray[i] > largest) {
  //       largest = numArray[i];
  //     }
  //   }
  //   alert(`Greater number is ${largest}`);
  //   return;
}
