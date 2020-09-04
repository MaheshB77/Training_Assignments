function show() {
  var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ];

  let output = "";

  for (let row = 0; row < 5; row++) {
    output += `" Row ${row} "<br/>`;
    for (let col = 0; col < 4; col++) {
      output += `" ${a[row][col]} "<br/>`;
    }
  }
  document.getElementById("result").innerHTML = output;
}
