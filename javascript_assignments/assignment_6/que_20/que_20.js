function sumAndProd() {
  let arr = [9, 2, 1, 3, 2];
  let sum = 0;
  let product = 1;
  for (element of arr) {
    //   adding each element into a sum
    sum += element;
  }
  for (element of arr) {
    //   multiplying each element
    product *= element;
  }

  let msg = `let arr = [${arr}]`;
  document.getElementById("msg").innerHTML = msg;
  document.getElementById(
    "result"
  ).innerHTML = `Sum of each element is ${sum}<br/><br/>`;
  document.getElementById(
    "result"
  ).innerHTML += `Product of each element is ${product}`;
}
