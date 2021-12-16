/*Formulas: Fahr to Celc: ([°F] − 32) × 5⁄9
            Celc to Fahr: [°F] = [°C] × 9⁄5 + 32 

  Round: Math.round(num * 10) / 10
*/




const ftoc = function(temp) {
  let conversion = (temp - 32) * (5/9);
  return Math.round(conversion * 10) / 10;
};

const ctof = function(temp) {
  let conversion = (temp) * (9/5) + 32;
  return Math.round(conversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
