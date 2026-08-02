class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map = new Map();

        for ( let idx = 0; idx < nums.length; idx++ ) {
            const initialNum = nums[idx];
            const requiredNum = target - initialNum;
            const sumIdx = map.get(requiredNum);

            const isTarget = map.has(requiredNum);
            if(isTarget) return [idx, sumIdx];

            map.set(initialNum, idx);
        }

        return [-1, -1];
    }

    
}
