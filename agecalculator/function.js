/**
 * Age Calculator
 * 
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */
function ageCal(name, year){
    let date = new Date();
   let age = date.getFullYear() - year;

    let ageStatus = checkAgeStatus(age);
    return`<p class="alert alert-${ageStatus.status}" >Hi ${name}, You are ${age} Years old & You ${ageStatus.name} </p>`;
}

/**
 * Test Jib/Bhout
 * @param {*} age 
 * @returns 
 */

function checkAgeStatus( age ){
    if( age > 0 && age < 10){
    return {
        name : 'babu',
        status : 'success'
    };
    }else if( age >= 10 && age < 18){
        return {
            name : 'kisour',
            status : 'danger'
        };
    }else if( age >= 18 && age < 35){
        return {
            name : 'Jobouk',
            status : 'info'
        };
    }else if( age >= 35 && age < 55){
        return {
            name : 'Buyosko',
            status : 'warning'
        };
    }else if( age >= 55 && age < 150){
        return {
            name : 'Biddo',
            status : 'primary'
        };;
    }else{
        return {
            name : 'Jib/Bhout',
            status : 'dark'
        };
    }

}