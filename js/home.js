console.log("Home.js is connected");

document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "blog.html";
});

document.getElementById("donate-for-noakhali")
        .addEventListener('click', function(){
            const donateAmountForNoakhali = getInputFeldValueById('input-money-for-noakhali');
            const donationAmount = parseFloat(donateAmountForNoakhali);
            console.log(typeof donationAmount)
        })

// document.getElementById("donate-for-noakhali")
//         .addEventListener('click', function(){

//         })

// document.getElementById("donate-for-noakhali")
//         .addEventListener('click', function(){

//         })
