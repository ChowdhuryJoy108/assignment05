

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
    
}




function generateMsg(msg){
    if(msg === 'noakhali'){
        return `Taka is Donated for Flood at Noakhali, Bangladesh`
    }else if(msg === 'feni'){
        return `Taka is Donated for Flood Relief in Feni,Bangladesh`
    }else{
        return `Taka is Donated for Aid for Injured in the Quota Movement,Bangladesh`
    }
}




function showDonationHistory(id, amount,text){
    const historySection = document.getElementById(id);
    const historyDiv = document.createElement('div');
    historyDiv.classList.add('border-2')
    historyDiv.classList.add('border-[#94a3b8]')
    historyDiv.classList.add('rounded-lg')
    historyDiv.classList.add('p-8')
    historyDiv.classList.add('mb-8')
    historyDiv.innerHTML =  `
        <h1 class="text-md font-bold text-[#111111] mb-2">${amount} ${generateMsg(text)} </h1>
        <p class="text-[16px] text-[#111111] opacity-[0.7] " >Date : ${Date()}</p>
    `
    historySection.appendChild(historyDiv);

}

