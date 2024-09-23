// console.log('utilities')

function getInputFieldValueById (id){
    const inputValue = document.getElementById(id).value;
    document.getElementById(id).value = "";
    return inputValue;
}

function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}

function changeActiveButtonBackground(id){
    document.getElementById('btn-donation').style.background = '#FFFFFF';
    document.getElementById('btn-history').style.background = '#FFFFFF';
    document.getElementById(id).style.background = '#B4F461';
    document.getElementById(id).style.color = '#111111';

}