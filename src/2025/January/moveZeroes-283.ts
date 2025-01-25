const moveZeroes = (nums) => {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      nums[left] = nums[right];
      left++;
    }
    console.log(nums[left], nums[right]);
  }
  for (let i = left; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
