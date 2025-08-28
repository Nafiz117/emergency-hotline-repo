
// heart button functionality

const heartBtns = document.getElementsByClassName('heart-btn');
const heartCount = document.getElementById('heart-count');

let count = 0;

for (let i = 0; i < heartBtns.length; i++){
    heartBtns[i].addEventListener('click', function(){
        count++;
        heartCount.innerText = count + " ❤️";
    });};



    // call button functionality


const callBtns = document.getElementsByClassName('call-btn');
const serviceNames = document.getElementsByClassName('service-name');
const helpServices = document.getElementsByClassName('help-service');
const coinCount = document.getElementById('coin-count');
const serviceNumbers = document.getElementsByClassName('service-number');

let coins = 100;

for (let i = 0; i < callBtns.length; i++){
    callBtns[i].addEventListener('click', function(){
        const serviceName = serviceNames[i].innerText;
        const helpService = helpServices[i].innerText;
        const serviceNumber = serviceNumbers[i].innerText;

        if (coins < 20) {
            alert('Insufficient balance. Please recharge your account.');
            return;     

        }

        else {
            coins -= 20;
            coinCount.innerText = coins + " 🪙";
            alert(`📞Calling ${helpService} ${serviceNumber} `);
        }
    });}


    // call history functionality

    const callingBtns = document.getElementsByClassName('call-btn');
    const callHistoryList = document.getElementById('call-history');

    for (let i = 0; i < callingBtns.length; i++) {
        callingBtns[i].addEventListener('click', function() {
            const serviceName = serviceNames[i].innerText;
            const serviceNumber = serviceNumbers[i].innerText;

            if (coins < 20) {
                return; 
            }

            else {
                const listItem = document.createElement('li');
                listItem.innerText = `Called ${serviceName} (${serviceNumber})`;
                callHistoryList.appendChild(listItem);
            }
        });
    }
    