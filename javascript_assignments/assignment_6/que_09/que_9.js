function checkArray(inp) {
  if (toString.call(inp) === `[object Array]`) {
    return `[${inp}] is an Array`;
  } else {
    return `" ${inp} " is not an Array`;
  }
}
function check() {
  let inp1 = ["Mahesh", "Shubhangi", "Aishwarya"];
  let inp2 = new Array("Football", "Chess", "Cricket");
  let inp3 = "Java is very popular";
  let inp4 = 8085;
  document.getElementById("result").innerHTML += `${checkArray(
    inp1
  )} <br/><br/>`;
  document.getElementById("result").innerHTML += `${checkArray(
    inp2
  )} <br/><br/>`;
  document.getElementById("result").innerHTML += `${checkArray(
    inp3
  )} <br/><br/>`;
  document.getElementById("result").innerHTML += `${checkArray(
    inp4
  )} <br/><br/>`;
}
