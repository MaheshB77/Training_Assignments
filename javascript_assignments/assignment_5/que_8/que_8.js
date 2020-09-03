function sumToHundred() {
  let result = getSumString(100);
  let filteredResult = [];
  for (res of result) {
    filteredResult.push(res.slice(1) + "<br/>");
  }
  document.getElementById("result").innerHTML = filteredResult.join("");
}

function getSumString(val) {
  let result = [];
  function search(str, curstr, sum) {
    if (str.length === 0) return;

    if (sum + Number(str) === val) {
      result.push(curstr + "+" + str);
      return;
    }

    if (sum - Number(str) === val) {
      result.push(curstr + "-" + str);
      return;
    }

    for (let i = 0; i < str.length; i++) {
      search(
        str.substring(i + 1),
        curstr + "+" + str.substring(0, i + 1),
        sum + Number(str.substring(0, i + 1))
      );
      search(
        str.substring(i + 1),
        curstr + "-" + str.substring(0, i + 1),
        sum - Number(str.substring(0, i + 1))
      );
    }
  }

  search("123456789", "", 0);

  return result;
}
