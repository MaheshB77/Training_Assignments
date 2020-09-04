function lastEle(arr, num) {
  if (num === undefined) {
    return arr[arr.length - 1];
  }
  return arr.slice(arr.length - num);
}

function check() {
  let arr1 = [67, 54, 92, 90];
  let arr2 = ["Python", "Perl", "Rust", "JavaScript"];
  let arr3 = ["Football", "Cricket", "Chess", "Vollyball", "Tennis"];
  let inputArrays = `arr1 = [${arr1}] <br/>arr2 = [${arr2}] <br/>arr3 = [${arr3}] <br/>`;
  document.getElementById("msg").innerHTML = inputArrays;

  document.getElementById("result").innerHTML += `lastEle(arr1) :- ${lastEle(
    arr1
  )} <br/>`;
  document.getElementById("result").innerHTML += `lastEle(arr2, 2) :- ${lastEle(
    arr2,
    2
  )} <br/>`;
  document.getElementById("result").innerHTML += `lastEle(arr3, 3) :- ${lastEle(
    arr3,
    3
  )}`;
}
