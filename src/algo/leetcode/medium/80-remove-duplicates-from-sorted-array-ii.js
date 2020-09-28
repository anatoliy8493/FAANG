const removeDuplicates = (nums) => {
  let j = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== nums[i + 2]) {
      // eslint-disable-next-line no-param-reassign
      nums[j] = nums[i];
      j += 1;
    }
  }

  return j;
};

export default removeDuplicates;
