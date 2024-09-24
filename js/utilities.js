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

function generateMsg(msg){
    if(msg === 'noakhali'){
        return `Taka is Donated for famine-2024 at Noakhali, Bangladesh`
    }else if(msg === 'feni'){
        return `Taka is Donated for famine-2024 at Feni, Bangladesh`
    }else{
        return `Taka is Donated for famine-2024 at Quota protest, Bangladesh`
    }
}

function showDonationHistory(id, amount,text){
    const historySection = document.getElementById(id);
    const historyDiv = document.createElement('div');
    historyDiv.innerHTML =  `
        <h1 class="text-xl font-extrabold text-[#111111]">${amount} ${generateMsg(text)} </h1>
        <p>${Date()}</p>
    `
    historySection.appendChild(historyDiv)

}