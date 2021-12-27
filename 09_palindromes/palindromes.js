const palindromes = a => {
    //turn to array -> remove punctuation -> back to string -> all
    //to lower case -> compare
    let anArray = a.split('');
    let aReverse=[];
    anArray = anArray.filter(isLetter => isLetter.toUpperCase() != 
        isLetter.toLowerCase());
    for(let i=anArray.length-1;i>=0;i--){
        aReverse += anArray[i];
    }
    aReverse = aReverse.split('');
    console.log(anArray);
    console.log(aReverse);
    return anArray.toString().toLowerCase() === aReverse.toString().toLowerCase();
}
// Do not edit below this line
module.exports = palindromes;
