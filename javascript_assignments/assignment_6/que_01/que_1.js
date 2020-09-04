function ans() {
  let num1 = Number.parseFloat(document.getElementById("num1").value);
  let num2 = Number.parseFloat(document.getElementById("num2").value);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert("Please enter valid input");
    return;
  }
  // If numbers are same
  if (num1 == num2) {
    document.getElementById("result").innerHTML = `Both numbers are same`;
    return;
  }

  let bigNum = num1 > num2 ? num1 : num2;
  document.getElementById("result").innerHTML = `Greater number is : ${bigNum}`;
}
