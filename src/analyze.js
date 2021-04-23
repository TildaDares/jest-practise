const analyze = (array) => {
  let sum = array.reduce((total, num) => total + num, 0);
  let average = Math.round(sum / array.length);

  return {
    average,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

module.exports = analyze;
