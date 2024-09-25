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

    if (!isNaN(donatingAmountForNoakhali) && donatingAmountForNoakhali !== '' && donatingAmountForNoakhali > 0) {
      const donationAmount = parseFloat(donatingAmountForNoakhali);

      if (donationAmount > balance) {
        alert("Sorry! Your Balance is Insufficient.");
      } else {
        const updatedBalance = balance - donationAmount;
        document.getElementById("account-balance").innerText = updatedBalance;
        const raisedDonationForNoakhali =
          noakhaliTotalDonation + donationAmount;
        document.getElementById("noakhali-total-donation-amount").innerText =
          raisedDonationForNoakhali;
        showDonationHistory("donation-history", donationAmount, "noakhali");
       
        document.getElementById("my_modal_1").showModal();
      }
    } else {
      alert("Invalid Amount Input");
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

    if (!isNaN(donatingAmountForFeni) && donatingAmountForFeni !== '' && donatingAmountForFeni > 0) {
      const donationAmount = parseFloat(donatingAmountForFeni);

      if (donationAmount > balance) {
        alert("Sorry! Your Balance is Insufficient.");
      } else {
        const updatedBalance = balance - donationAmount;
        document.getElementById("account-balance").innerText = updatedBalance;
        const raisedDonationForFeni = feniTotalDonation + donationAmount;
        document.getElementById("feni-total-donation-amount").innerText =
          raisedDonationForFeni;
        showDonationHistory("donation-history", donationAmount, "feni");
        document.getElementById("my_modal_1").showModal();
        
      }
    } else {
      alert("Invalid Amount Input");
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

    if (!isNaN(donatingAmountForQuota) && donatingAmountForQuota !== '' && donatingAmountForQuota > 0) {
      //do a shared function
      const donationAmount = parseFloat(donatingAmountForQuota);

      if (donationAmount > balance) {
        alert("Sorry! Your Balance is Insufficient.");
      } else {
        const updatedBalance = balance - donationAmount;
        document.getElementById("account-balance").innerText = updatedBalance;
        const raisedDonationForQuota = quotaTotalDonation + donationAmount;
        document.getElementById("quota-total-donation-amount").innerText =
          raisedDonationForQuota;

        showDonationHistory("donation-history", donationAmount, "quota");

        document.getElementById("my_modal_1").showModal();
      }
    } else {
      alert("Invalid Amount Input");
    }
  });



document.getElementById("btn-donation").addEventListener("click", function () {
  changeActiveButtonBackground("btn-donation");
  showSectionById("donation-section");
});

document.getElementById("btn-history").addEventListener("click", function () {
  changeActiveButtonBackground("btn-history");
  showSectionById("history-section");
});
