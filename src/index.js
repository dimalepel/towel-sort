
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];

	if (matrix) {
    function pushDigit(arr) {
      arr.forEach((item) => {
        result.push(item);
      });
    }

    matrix.forEach((item, index) => {
      if (index % 2 !== 0) {
        pushDigit(item.sort().reverse());
      } else {
        pushDigit(item);
      }
    });
  }  
  
  return result;
}
