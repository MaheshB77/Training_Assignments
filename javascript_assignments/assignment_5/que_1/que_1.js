// 1.Write a javascript program display Current Date and Time.
let date = new Date();
let dateAndTime = date.toString();

let element = document.getElementById("data");
element.innerHTML = dateAndTime;
