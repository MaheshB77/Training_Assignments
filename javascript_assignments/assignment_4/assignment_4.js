// Showing all input fields from alert()
function submitData() {
  let dataArray = [];
  let allInputs = document.getElementsByClassName("data");
  let allInputsArray = Array.prototype.slice.call(allInputs);
  allInputsArray.forEach((element) => {
    dataArray.push(element.value);
  });
  console.clear();
  console.log(dataArray);
}

// Clearing all the inputs
function clearData() {
  let allInputs = document.getElementsByClassName("data");
  let allInputsArray = Array.prototype.slice.call(allInputs);
  allInputsArray.forEach((element) => {
    element.value = "";
  });
}
