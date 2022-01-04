

const name = document.querySelector('#name');
const year = document.querySelector('#year');
const gender = document.querySelector('#gender');
const check = document.querySelector('#check');
const result = document.querySelector('#result');




check.addEventListener('click', function(){

    result.innerHTML= marrageCal(name.value,year.value,gender.value);
    name.value='';
    year.value='';
    const gen = document.querySelector('#gen');
    gender.value= gen.value;
 

});