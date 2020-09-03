/* 
5.Write a JavaScript code 
Ex-String: "the quick brown fox"
Updated String: The Quick Brown Fox
*/

function capitalFirstLetter() {
  let inp = document.getElementById("inp").value;
  let finalResult = "";
  for (let i = 0; i < inp.length; i++) {
    if (i == 0 || inp[i - 1] == " ") {
      finalResult += inp[i].toUpperCase();
    } else {
      finalResult += inp[i].toLowerCase();
    }
  }
  document.getElementById("result").innerHTML = finalResult;
}
