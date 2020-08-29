// Showing all input fields from alert()
function submitData(){
    let data="";
    let allInputs = document.getElementsByClassName("data");
    let allInputsArray = Array.prototype.slice.call(allInputs);
    allInputsArray.forEach(element => {
        data+=element.value+" ";
    });
    alert(data);
}

// Clearing all the inputs
function clearData(){
    let allInputs = document.getElementsByClassName("data");
    let allInputsArray = Array.prototype.slice.call(allInputs);
    allInputsArray.forEach(element=>{
        element.value="";
    })
}