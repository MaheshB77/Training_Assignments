function ans() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      output += "* ";
    }
    output += "<br/>";
  }
  document.getElementById("result").innerHTML = output;
  console.log(output);
}
