// 4.Create an external JS file called 'combinations.js' which contains a JavaScript function that generates all combinations of a string. Include 'combinations.js in body sections and display the output.
// Ex-string : 'dog'

// d,do,dog,o,og,g

function combinations() {
  let inp = document.getElementById("inp").value;
  let temp = "";
  let finalResult = "";
  for (let i = 0; i < inp.length; i++) {
    for (let j = i; j < inp.length; j++) {
      temp += inp[j];
      finalResult += `${temp} , `;
    }
    temp = "";
  }
  finalResult = finalResult.slice(0, finalResult.length - 2);
  document.getElementById("result").innerHTML = finalResult;
}
