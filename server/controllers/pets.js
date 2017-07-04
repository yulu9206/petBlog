var petfinder = require('pet-finder-api')('0fd3db5cd208fdb50046dea4be95ccaf','8d259f3d7df67f79d753d139bb1ca7f6');


module.exports = {
petfinder.getBreedList('cat', function(err, breeds) {
  console.log(breeds)
});

}