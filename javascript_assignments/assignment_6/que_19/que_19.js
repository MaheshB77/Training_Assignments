function sumOfSquares() {
  let arr = [3, 5, 6, 1];
  let sumOfSq = 0;
  for (element of arr) {
    //   Finding the square and adding it to result
    sumOfSq += element ** 2;
  }
  let msg = `let arr = [${arr}]`;
  document.getElementById("msg").innerHTML = msg;
  document.getElementById(
    "result"
  ).innerHTML = `Sum of sqaure of each element is ${sumOfSq}`;
}
