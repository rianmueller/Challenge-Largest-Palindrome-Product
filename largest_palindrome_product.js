/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  let n = Math.pow(10, digits);

  for (i = 1; i < n; i++) {
    for (j = 1; j < n; j++) {
      let number = i * j;
      let rebmun = number.toString();
      rebmun = rebmun
        .split("")
        .reverse()
        .join("");
      rebmun = parseInt(rebmun);
      if (number === rebmun) {
        if (number > palindromeNumber) {
          palindromeNumber = number;
          factor_0 = i;
          factor_1 = j;
        }
      }
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
