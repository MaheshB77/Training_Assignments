function sortNums() {
  let num1 = Number.parseFloat(document.getElementById("num1").value);
  let num2 = Number.parseFloat(document.getElementById("num2").value);
  let num3 = Number.parseFloat(document.getElementById("num3").value);
  let numArray = [num1, num2, num3];
  let temp = 0;
  //   Validation
  if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3)) {
    alert("Please enter valid input");
    return;
  }
  for (let i = 0; i < numArray.length; i++) {
    for (let j = i + 1; j < numArray.length; j++) {
      if (numArray[i] > numArray[j]) {
        temp = numArray[i];
        numArray[i] = numArray[j];
        numArray[j] = temp;
      }
    }
  }
  alert(`Sorted three numbers are ${numArray}`);
  //   Reloading the page after sorting
  location.reload();
  return;
}
