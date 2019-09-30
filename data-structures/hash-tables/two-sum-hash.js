// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Hash
// TC: O(n)
// SC: O(n)
var twoSum = function(nums, target) {
    map = {};

    for (let i=0; i < nums.length; i++) {
        const comp = target - nums[i];

        if (map[comp] !== undefined) {
            return [map[comp], i];
        }

        map[nums[i]] = i;
    }
};

nums = [3, 2, 3];
target = 6;
console.log(twoSum(nums, target));