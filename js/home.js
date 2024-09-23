console.log("Home.js is connected");

document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "blog.html";
});

document
  .getElementById("donate-for-noakhali")
  .addEventListener("click", function () {
    const accountBalance = document.getElementById("account-balance").innerText;
    let balance = parseFloat(accountBalance);

    const noakhaliTotalDonationAmount = document.getElementById(
      "noakhali-total-donation-amount"
    ).innerText;
    let noakhaliTotalDonation = parseFloat(noakhaliTotalDonationAmount);

    const donatingAmountForNoakhali = getInputFieldValueById(
      "input-money-for-noakhali"
    );

    if(!isNaN(donatingAmountForNoakhali)){
      const donationAmount = parseFloat(donatingAmountForNoakhali);
   
    if (donationAmount > balance ) {
      alert("You have insufficient balance");
    } else {
      const updatedBalance = balance - donationAmount;
      document.getElementById("account-balance").innerText = updatedBalance;
      const raisedDonationForNoakhali = noakhaliTotalDonation + donationAmount;
      document.getElementById("noakhali-total-donation-amount").innerText =
        raisedDonationForNoakhali;
      alert("successfully added");
    }
    }else{
      alert('invalid input')
    }
    
  });

document
  .getElementById("donate-for-feni")
  .addEventListener("click", function () {
    const accountBalance = document.getElementById("account-balance").innerText;
    let balance = parseFloat(accountBalance);

    const feniTotalDonationAmount = document.getElementById(
      "feni-total-donation-amount"
    ).innerText;
    let feniTotalDonation = parseFloat(feniTotalDonationAmount);

    const donatingAmountForFeni = getInputFieldValueById(
      "input-money-for-feni"
    );

    if(!isNaN(donatingAmountForFeni)){
      const donationAmount = parseFloat(donatingAmountForFeni);

      if (donationAmount > balance) {
        alert("You have insufficient balance");
      } else {
        const updatedBalance = balance - donationAmount;
        document.getElementById("account-balance").innerText = updatedBalance;
        const raisedDonationForFeni = feniTotalDonation + donationAmount;
        document.getElementById("feni-total-donation-amount").innerText =
          raisedDonationForFeni;
        alert("successfully added");
      }
    }else{
      alert('invalid input')
    }
   
  });

document
  .getElementById("donate-for-quota-protest")
  .addEventListener("click", function () {
    const accountBalance = document.getElementById("account-balance").innerText;
    let balance = parseFloat(accountBalance);

    const quotaTotalDonationAmount = document.getElementById(
      "quota-total-donation-amount"
    ).innerText;
    let quotaTotalDonation = parseFloat(quotaTotalDonationAmount);

    const donatingAmountForQuota = getInputFieldValueById(
      "input-money-for-quota"
    );

    if(!isNaN(donatingAmountForQuota)){
      const donationAmount = parseFloat(donatingAmountForQuota);

    if (donationAmount > balance) {
      alert("You have insufficient balance");
    } else {
      const updatedBalance = balance - donationAmount;
      document.getElementById("account-balance").innerText = updatedBalance;
      const raisedDonationForQuota = quotaTotalDonation + donationAmount;
      document.getElementById("quota-total-donation-amount").innerText =
        raisedDonationForQuota;
      alert("successfully added");
    }
    }else{
      alert('invalid input')
    }
    
  });
