/* reduce((previousValue, currentValue)
    1) oldestAge = getAge(previousValue(default @ index [0]).yearOfBirth, previousValue.yearOfDeath)
        a)getAge => previousValue.yearOfDeath - previousValue.yearOfBirth UNLESS no year of death (!death) in which death = current year (2021)
    2) currentAge = (1) but with current index (default @ index[1])
    3) If oldestAge is less than currentAge then currentPerson becomes new currentValue ie accumulator else oldestAge becomes currentValue ie accumulator
    4)After traversing array, returns whoever is oldest
*/

const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
      //console.log(oldestAge);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
      return oldestAge < currentAge ? currentPerson : oldest
    })
  };
  
  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

// Do not edit below this line
module.exports = findTheOldest;
