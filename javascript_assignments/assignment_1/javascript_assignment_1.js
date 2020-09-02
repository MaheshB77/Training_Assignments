// Showing all input fields from alert()
function submitData() {
  let data = "";
  let dataArray = [];
  let allInputs = document.getElementsByClassName("data");
  let allInputsArray = Array.prototype.slice.call(allInputs);
  allInputsArray.forEach((element) => {
    data += element.value + " ";
    dataArray.push(element.value);
  });
  console.clear();

  //   Showing the data array on console
  console.log(dataArray);
  alert(data);
}

// Clearing all the inputs
function clearData() {
  let allInputs = document.getElementsByClassName("data");
  let allInputsArray = Array.prototype.slice.call(allInputs);
  allInputsArray.forEach((element) => {
    element.value = "";
  });
}
