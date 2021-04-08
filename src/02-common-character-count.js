/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1arr = s1.split('');
  const s2arr = s2.split('');
  const rez = [];
  s1arr.forEach((item) => {
    if (s2arr.indexOf(item) !== -1) {
      s2arr.splice(s2arr.indexOf(item), 1);
      rez.push(item);
    }
  });
  return rez.length;
}

module.exports = getCommonCharacterCount;
