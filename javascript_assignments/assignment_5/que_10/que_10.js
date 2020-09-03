/*
10.Given lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].
Result: [a,1,b,2,c,3]
*/
function func() {
  let list1 = ["a", "b", "c"];
  let list2 = [1, 2, 3];
  let outputList = [];
  let counter1 = 0;
  let counter2 = 0;
  for (let i = 0; i < list1.length + list2.length; i++) {
    if (i % 2 === 0) {
      outputList.push(list1[counter1]);
      counter1++;
    } else {
      outputList.push(list2[counter2]);
      counter2++;
    }
  }
  document.getElementById("result").innerHTML = `[${outputList}]`;
}
