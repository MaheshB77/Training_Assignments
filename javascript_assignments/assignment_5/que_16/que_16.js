/*
Store 10 employee names in an array. Print only the alternative names one below the other.
Ex-abc , def , ghi , jkl , mno , pgr , stu , vdx , yza , qwe
abc
ghi
mno
stu
yza
*/
function ans() {
  let employees = [
    "Mahesh",
    "Dinesh",
    "Aishwarya",
    "Shubhangi",
    "Harshal",
    "Sakshi",
    "Prajakta",
    "Monali",
    "Pooja",
    "Namrata",
  ];
  let alternateEmp = [];
  for (let i = 0; i < employees.length; i++) {
    if (i % 2 === 0) {
      alternateEmp.push(employees[i] + "<br/>");
    }
  }
  let msg = `Given 10 employees are [${employees}]`;
  document.getElementById("msg").innerHTML = msg;
  document.getElementById("result").innerHTML = alternateEmp.join("");
}
