const array = [1,2,2,3,3,3,4,5,5,5,5,6,6,6,];
  const count = {};
  
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    count[element] = (count[element] || 0) + 1;
  }
  
  console.log(count);
  
  const data = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];

function freq(nums) {
  return nums.reduce((acc, curr) => {
    acc[curr] = -~acc[curr];
    return acc;
  }, {});
}

console.log(freq(data));