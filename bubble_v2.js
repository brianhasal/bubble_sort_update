let input = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];

function bubbleSort(nums) {
  for (var i = 0; i < nums.length; i++) {
    let swapped = false;
    let j = (i + 1);
    while (j < nums.length) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        swapped = true;
      } else {
        j += 1;
      }
    };
    if (swapped === false) {
      return nums;
    }
  }
  return nums;
}

console.log(bubbleSort(input));