function checkGCD() {
  let num1 = Number.parseFloat(document.getElementById("num1").value);
  let num2 = Number.parseFloat(document.getElementById("num2").value);
  //   Validation
  if (Number.isNaN(num1) || Number.isNaN(num2) || num1 < 0 || num2 < 0) {
    alert("Please enter valid inputs");
    return;
  }
  if (num1 == 0 || num2 == 0) {
    alert("To calculate the GCD, Values must be non zero");
    return;
  }
  let small = num1 > num2 ? num2 : num1;
  let gcd = 1;
  for (let i = 1; i <= small; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
    }
  }
  document.getElementById(
    "msg"
  ).innerHTML = `GCD of ${num1} and ${num2} is ${gcd}`;
}
