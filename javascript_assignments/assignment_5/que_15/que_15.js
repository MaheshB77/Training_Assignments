/*
Find the largest of five numbers and display the result on the screen.
Ex-Sample numbers: -5, -2, -6, -8, -1
Answer: -1
*/

function ans() {
  let arr = [-5, -2, -6, -8, -1];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  document.getElementById(
    "result"
  ).innerHTML = `Maximum number in [${arr}] is ${max}`;
}
