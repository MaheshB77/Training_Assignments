let finalResult = 0;
function calculate() {
  finalResult += Number.parseFloat(prompt("Enter first number"));
  finalResult += Number.parseFloat(prompt("Enter second number"));
  alert(`Addition of two numbers is : ${finalResult}`);
  finalResult = 0;
}
