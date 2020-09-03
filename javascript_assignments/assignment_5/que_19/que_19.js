function isError(input) {
  return input instanceof Error || toString.call(input) === "[object Error]";
}
function ans() {
  document.getElementById("q1").innerHTML += " " + isError(new Error("foo"));
  document.getElementById("q2").innerHTML += " " + isError(100);
  document.getElementById("q3").innerHTML += " " + isError("foo");
}
