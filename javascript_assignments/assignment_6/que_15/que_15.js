function sortArray() {
  var arr1 = [3, 8, 7, 6, 5, -4, -3, 2, 1];
  let msg = `var arr1 = [${arr1}]`;
  document.getElementById("msg").innerHTML = msg;
  let temp = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] > arr1[j]) {
        temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
      }
    }
  }
  document.getElementById("result").innerHTML = `Sorted array is [${arr1}]`;
}
