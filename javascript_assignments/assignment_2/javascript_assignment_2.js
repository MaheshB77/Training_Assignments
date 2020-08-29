// taking the input
function takeInput(input){
    document.getElementById("input").value+=input;
}
// calculating and showing the result
function showOutput(){
    let inputField = document.getElementById("input");
    let res = eval(inputField.value);
    inputField.value = res;
}
// Clearing the result field
function clearInput(){
    document.getElementById("input").value="";
}