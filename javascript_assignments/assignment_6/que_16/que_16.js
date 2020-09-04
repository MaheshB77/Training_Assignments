function mostFrequent() {
  var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
  let maxPair = new Map();
  let count = 0;
  let flag = true;
  let output = "";
  let currMax = 0;

  //   Finding occurence and storing as key-value pair into a Map
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; j++) {
      if (maxPair.has(arr1[i])) {
        flag = false;
        break;
      }
      if (arr1[i] === arr1[j]) {
        count++;
      }
    }
    if (flag === false) {
      flag = true;
      continue;
    }
    maxPair.set(arr1[i], count);
    count = 0;
  }
  //   Finding max occurence
  maxPair.forEach((value, key) => {
    if (value > currMax) {
      currMax = value;
      output = `${key} ( ${value} times)`;
    }
  });

  let msg = `var arr1 = [${arr1}]`;
  document.getElementById("msg").innerHTML = msg;
  document.getElementById("result").innerHTML = output;
}
