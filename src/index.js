module.exports = function reverse (n) {
    let nString = n < 0 ? (n * (-1)).toString() : n.toString();
    let result = '';
    let i = nString.length - 1;
    while (i >= 0) {
      result = result + nString[i];
      i = i - 1;
    }
    return Number(result)
}
