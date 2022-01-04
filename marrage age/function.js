/**
 * Marrage age calculator
 * @param {*} name 
 * @param {*} year 
 * @param {*} gender 
 */

function marrageCal (name,year,gender){
    let date = new Date();
    let age = date.getFullYear() - year;
    let merry = ageCal(age);


    if( name == '' || year == '' || gender == '' ){
        return`<p style="color: red;">Please fill the all fields.</p>`
    }else{
        return`<p id="result" style="background-color:${merry.bgc};">Hi ${name}! your are ${ age} years old, You are ${gender}. ${merry.status}</p>`;
    }

    
};

function ageCal(age){
    if(age > 0 && age < 18){

        let waitage = 18-age;

        return{
            status : `You are not ready for merry. you need to wait more ${waitage} years old.`,
            bgc : '#444'
        };
    }else if( age >= 18 && age <= 50){
        return{
            status : 'You are ready for merry.',
            bgc : 'purple'
        };
    }else{
        return{
            status : 'Apnar biyer dorkar nai.',
            bgc : 'red'
        };
    };
    
};