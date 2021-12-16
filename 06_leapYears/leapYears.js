const leapYears = function(year) {
    /*  year % 4 == 0 -> TRUE
        year % 100 == 0 -> FALSE UNLESS
        year % 400 == 0 -> TRUE
    */
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
};
// Do not edit below this line
module.exports = leapYears;
