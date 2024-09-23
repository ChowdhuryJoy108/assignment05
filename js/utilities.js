// console.log('utilities')

function getInputFieldValueById (id){
    const inputValue = document.getElementById(id).value;
    document.getElementById(id).value = "";
    return inputValue;
}