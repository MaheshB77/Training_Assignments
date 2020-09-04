function check() {
  let arr1 = [20, 30, 40, 70];
  let arr2 = ["Java", "Kotlin", "Swift"];
  document.getElementById("result").innerHTML += `[${arr1}] cloned to [${clone(
    arr1
  )}] <br/>`;
  document.getElementById("result").innerHTML += `[${arr2}] cloned to [${clone(
    arr2
  )}]`;
}

function clone(arr) {
  let clonedArray = [];
  for (element of arr) {
    clonedArray.push(element);
  }
  return clonedArray;

  // Alternative way to clone and array
  // for (let i = 0; i < arr.length; i++) {
  //   clonedArray.push(arr[i]);
  // }
  // return clonedArray;
}
