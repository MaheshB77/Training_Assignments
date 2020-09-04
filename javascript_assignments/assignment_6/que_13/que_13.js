function joinArray() {
  let arr = ["Java", "Kotlin", "TypeScript", "CofeeScript"];
  let msg = `arr = [ ${arr} ] <br/>`;
  document.getElementById("msg").innerHTML += msg;

  document.getElementById(
    "result"
  ).innerHTML += `[ ${arr} ] converted to String "${arr.join("")}"`;
}
