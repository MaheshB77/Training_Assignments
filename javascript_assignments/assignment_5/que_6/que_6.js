// 6.Enter value in textbox upto which you want to print prime number.

function seePrimes() {
  let inp = document.getElementById("inp").value;
  let inpNumber = Number.parseInt(inp);
  let allPrimes = [];
  let flag = true;

  //   Validation if input is not a number
  if (Number.isNaN(inpNumber)) {
    window.alert("Please enter valid number !!");
    return;
  }
  //   If input is 1
  if (inpNumber === 1) {
    document.getElementById("result").innerHTML = "1 is not a prime number!!!";
    return;
  }

  for (let i = 2; i <= inpNumber; i++) {
    if (i === 2) {
      allPrimes.push(i);
      continue;
    }
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      allPrimes.push(i);
    }
    flag = true;
  }
  document.getElementById("result").innerHTML = allPrimes.toString();
}
