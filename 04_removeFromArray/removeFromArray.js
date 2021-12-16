const removeFromArray = function(array, ...remove) {
    /*Have two arrays: the arguments param and the array
      So via nested for loop -> check indices of remove and array
      to match value; and if so, remove that said value from array */

    for(let i = 0; i < remove.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[j] === remove[i]){
                array.splice(j, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
