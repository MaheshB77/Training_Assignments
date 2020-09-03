/*
Print number of occurrences in this string 
Ex-"hello world"
*/

function occurenceCalc() {
  let inp = document.getElementById("inp").value;
  // Validation
  if (!inp) {
    alert("Please enter valid input");
    return;
  }
  let pairs = new Map();
  let count = 0;
  let flag = true;
  let finalResult = "";
  for (let i = 0; i < inp.length; i++) {
    for (let j = i; j < inp.length; j++) {
      if (pairs.has(inp[i])) {
        flag = false;
        break;
      }
      if (inp[i] === inp[j]) {
        count++;
      }
    }
    if (flag === false) {
      flag = true;
      continue;
    }
    pairs.set(inp[i], count);
    count = 0;
  }
  pairs.forEach((occ, char) => {
    finalResult += `${char} : : ${occ}<br/>`;
  });
  document.getElementById("result").innerHTML = finalResult;
}
