/*
Display 'Mobile' details in text box and display information on same page  with validation .
*/

function validate() {
  let brand = document.getElementById("brand").value;
  let model = document.getElementById("model").value;
  let price = Number.parseFloat(document.getElementById("price").value);
  console.log(brand, model, price);
  if (!brand || !model || Number.isNaN(price)) {
    window.alert("Please enter valid input !!");
    return;
  }
  document.getElementById("result").innerHTML += `Brand name : ${brand} <br/>`;
  document.getElementById("result").innerHTML += `Model name : ${model} <br/>`;
  document.getElementById("result").innerHTML += `Price is : ${price}`;
}
