function solve() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      document.getElementById("msg").innerHTML += `FizzBuzz <br/>`;
    } else if (i % 3 == 0) {
      document.getElementById("msg").innerHTML += `Fizz <br/>`;
    } else if (i % 5 == 0) {
      document.getElementById("msg").innerHTML += `Buzz <br/>`;
    } else {
      document.getElementById("msg").innerHTML += `${i} <br/>`;
    }
  }
}
