'use strict';

module.exports.randomNumberGenerator = async (event) => {
  let randomNumber = Math.floor((Math.random() * 10) + 1);
  console.log("randomNumber"+randomNumber);
  return randomNumber;
};
