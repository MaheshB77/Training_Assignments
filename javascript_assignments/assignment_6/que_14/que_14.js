function putDash() {
  let num = Number.parseFloat(document.getElementById("num1").value);
  //   Validation
  if (Number.isNaN(num) || num < 0) {
    alert("Please enter a valid number");
    return;
  }
  let numString = document.getElementById("num1").value;
  let ansString = "";
  for (let i = 0; i < numString.length; i++) {
    let currNum = Number.parseInt(numString[i]);
    let nextNum = Number.parseInt(numString[i + 1]);
    if (currNum % 2 == 0 && nextNum % 2 == 0) {
      ansString += `${currNum}-`;
    } else {
      ansString += `${currNum}`;
    }
  }
  document.getElementById("result").innerHTML = ansString;
}
