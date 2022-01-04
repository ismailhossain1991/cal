

const amount = document.querySelector('#amount');
const currency = document.querySelector('#currency');
const check = document.querySelector('#check');
const result = document.querySelector('#result');

check.addEventListener('click', function(){
    result.innerHTML= currencyCal(amount,currency);
    amount.value = '';
    let usd = document.querySelector('#usd');
    currency.value = usd.value;
    
});


