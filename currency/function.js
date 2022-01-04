

function currencyCal(amount,currency){

    if(amount.value == '' || currency.value == ''){
        return `<p id= "result" style="color: red;">Please Fill all Feilds.</p>`;
    }else{

        let total = (amount.value * currency.value);

        return `<p id= "result" style="color: #fff; background-color: green;">${total} Taka</p>`
    }


};