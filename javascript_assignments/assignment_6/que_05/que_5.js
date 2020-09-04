function calc() {
  for (let i = 0; i < 16; i++) {
    if (i % 2 == 0) {
      document.getElementById("msg").innerHTML += `${i} is Even <br/>`;
    } else {
      document.getElementById("msg").innerHTML += `${i} is Odd <br/>`;
    }
  }
}
