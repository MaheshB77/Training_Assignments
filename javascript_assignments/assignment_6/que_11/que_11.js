function firstEle(arr, num) {
  if (num === undefined) {
    return arr[0];
  }
  return arr.slice(0, num);
}

function check() {
  let arr1 = [40, 50, 60];
  let arr2 = ["Java", "Kotlin", "Ruby"];
  let arr3 = ["React", "Angular", "Vue", "JQuery"];
  let inputArrays = `arr1 = [${arr1}] <br/>arr2 = [${arr2}] <br/>arr3 = [${arr3}] <br/>`;
  document.getElementById("msg").innerHTML = inputArrays;

  document.getElementById("result").innerHTML += `firstEle(arr1) :- ${firstEle(
    arr1
  )} <br/>`;
  document.getElementById(
    "result"
  ).innerHTML += `firstEle(arr2, 2) :- ${firstEle(arr2, 2)} <br/>`;
  document.getElementById(
    "result"
  ).innerHTML += `firstEle(arr3, 3) :- ${firstEle(arr3, 3)}`;
}
