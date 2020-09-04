function flipLetters() {
  let input = document.getElementById("inp").value;
  //   Validation
  if (!input) {
    alert("Please enter the input");
    document.getElementById("result").innerHTML = "";
    return;
  }
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] > "A" && input[i] < "Z") {
      output += input[i].toLowerCase();
    } else {
      output += input[i].toUpperCase();
    }
  }
  document.getElementById("result").innerHTML = output;
}
