// console.log('utilities')

function getInputFeldValueById (id){
    const inputValue = document.getElementById(id).value;
    document.getElementById(id).value = "";
    return inputValue;
}