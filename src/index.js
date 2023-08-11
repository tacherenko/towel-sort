
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return [];
  }
  
  const sortedArray = [];
  
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      sortedArray.push(...matrix[i]);
    } else {
      sortedArray.push(...matrix[i].reverse());
    }
  }
  
  return sortedArray;
}
