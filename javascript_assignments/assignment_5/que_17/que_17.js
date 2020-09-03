/*
Store 10 assessment marks. Find the average marks and display
*/
function ans() {
  let marks = [65, 76, 92, 91, 54, 37, 67, 69, 88, 43];
  let sum = 0;
  let avg = 0;
  for (mark of marks) {
    sum += mark;
  }
  avg = sum / 10;
  let msg = `Given marks are [${marks}]`;
  let ans = `Average is ${avg}`;
  document.getElementById("msg").innerHTML = msg;
  document.getElementById("result").innerHTML = ans;
}
