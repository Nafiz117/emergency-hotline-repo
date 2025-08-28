
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
                listItem.className = 'flex flex-col p-2 rounded-xl m-3 bg-gray-100 border-none';
                

                const name1 = document.createElement('span');
                name1.className = 'font-bold';
                name1.innerText = serviceName;
                
                listItem.innerText = `${serviceName}`;

                // for number
                const number1 = document.createElement('span');
                number1.className = 'text-sm text-gray-500';
                number1.innerText = serviceNumber;
                listItem.appendChild(number1);

                // for time
                const time1 = document.createElement('span');
                time1.className = 'flex justify-between text-x text-gray-500';
                
                
                time1.innerText = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second:'2-digit' , hour12: true });

                listItem.appendChild(time1); 
                
                

    
               

                callHistoryList.appendChild(listItem);
            }

            

            
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

