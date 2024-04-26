 
    function smallestMissingPositiveInteger(nums) {
      const n = nums.length;
      
       let j = 0;
      for (let i = 0; i < n; i++) {
          if (nums[i] <= 0) {
              [nums[i], nums[j]] = [nums[j], nums[i]];
              j++;
          }
      }
      
       const positiveNums = nums.slice(j);
      
       for (let i = 0; i < positiveNums.length; i++) {
          const index = Math.abs(positiveNums[i]) - 1;
          if (index < positiveNums.length && positiveNums[index] > 0) {
              positiveNums[index] = -positiveNums[index];
          }
      }
      
       for (let i = 0; i < positiveNums.length; i++) {
          if (positiveNums[i] > 0) {
              return i + 1;
          }
      }
      
       return positiveNums.length + 1;
  }
    
  module.exports = smallestMissingPositiveInteger;
