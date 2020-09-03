/*
All you have to do is take a button called Donation and click on it. A donation ammount textbox and 2 buttons should appear on the same page. 
Donate and cancel. If you enter value in it. It should be printed in the value alert box
*/

function donate() {
  let inp = document.createElement("input");
  inp.id = "inp";
  inp.type = "text";
  inp.placeholder = "Enter donations";
  document.getElementById("inpText").appendChild(inp);

  let btn1 = document.createElement("button");
  btn1.id = "donate";
  btn1.type = "button";
  btn1.innerHTML = "Donate";
  btn1.addEventListener("click", submit);

  let btn2 = document.createElement("button");
  btn2.id = "cancel";
  btn2.type = "clear";
  btn2.innerHTML = "Cancel";
  document.getElementById("donation").appendChild(btn1);
  document.getElementById("donation").appendChild(btn2);
  document.getElementById("subm").remove();
}
function submit() {
  let value = Number.parseInt(document.getElementById("inp").value);
  document.getElementById("inp").value = "";
  if (Number.isNaN(value)) {
    window.alert("Please enter valid donations");
    return;
  }
  window.alert(`Your donation is ${value}, Thank you!! `);
}
