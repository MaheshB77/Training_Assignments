let arr = [];

function addElement() {
  let element = document.getElementById("inp").value;
  if (!element) {
    alert("Please add something !!");
    return;
  }
  arr.push(element);
  document.getElementById("inp").value = "";
  document.getElementById("result").innerHTML = `[${arr}]`;
}

function clearArray() {
  console.log("cleared");
  arr = [];
  document.getElementById("result").innerHTML = "";
}
