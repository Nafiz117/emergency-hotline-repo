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

            const listItem = document.createElement('li');
            // make this a single horizontal row: left = name/number, right = time
            listItem.className = 'flex justify-between items-center p-2 rounded-xl m-3 bg-gray-100 border-none';

            // left: name (top) and number (below)
            const leftDiv = document.createElement('div');
            leftDiv.className = 'flex flex-col items-start';
            const nameSpan = document.createElement('span');
            nameSpan.className = 'font-bold';
            nameSpan.innerText = serviceName;
            const numberSpan = document.createElement('span');
            numberSpan.className = 'text-sm text-gray-500';
            numberSpan.innerText = serviceNumber;
            leftDiv.appendChild(nameSpan);
            leftDiv.appendChild(numberSpan);

            // right: time
            const timeSpan = document.createElement('span');
            timeSpan.className = 'text-sm text-gray-500 call-time';
            timeSpan.innerText = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: true });

            listItem.appendChild(leftDiv);
            listItem.appendChild(timeSpan);

            // add newest on top
            callHistoryList.prepend(listItem);
        });
    }
    

    // clear button functionality

    const clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', function() {
        callHistoryList.innerHTML = '';
    });


    // copy button functionality



    


    const copyBtns = document.getElementsByClassName('copy-btn');
    const copyCount = document.getElementById('copy-count');


      for (let i = 0; i < copyBtns.length; i++) {
        copyBtns[i].addEventListener('click', function() {

            count++;
            copyCount.innerText = count + " Copy";
        
        const card = copyBtns[i].closest('.p-5');
        const serviceNumber = card ? card.querySelector('.service-number') : null;
         if (serviceNumber) {
            navigator.clipboard.writeText(serviceNumber.innerText).then(() => {
                copyBtns[i].innerText = "Copied!";
                setTimeout(() => {
                    copyBtns[i].innerText = "Copy";
                }, 2000);
            });
        } else {
            alert('No service number found to copy.');
        }
    });
}
