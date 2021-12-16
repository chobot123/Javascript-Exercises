const sumAll = function(num1, num2) {
    let sum = 0;
    let smaller = 0;
    let bigger = 0;

    /*ONLY runs if BOTH parameters are NUMBERS AND if BOTH are POSITIVE
      First, sorts through parameters to see which is larger between the two...
      Second, loops through the digits between, inclusively, and adds each digit
      to the sum... */
    if((typeof num1 === 'number' &&  typeof num2 === 'number')
    && (num1 >=0 && num2 >= 0)){
    
        if(num1 - num2 > 0){
            bigger = num1;
            smaller = num2;
        }
        else {
            bigger = num2;
            smaller = num1;
        }   

        for(let i = smaller; i <= bigger; i++){
            sum += i;
        }
        return sum;
    }
    else return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
