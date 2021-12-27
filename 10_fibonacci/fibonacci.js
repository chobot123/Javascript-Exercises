const fibonacci = (a) => {
    let sequence = [1,1,2,3,5,8];
    let sum = 0;
    while(a > sequence.length) {
        let sum = (sequence[sequence.length-1] + 
            sequence[sequence.length-2]);
        sequence.push(sum);
    }
    if(a < 0){
        return `OOPS`;
    }
    return sequence[a-1];
};

// Do not edit below this line
module.exports = fibonacci;
