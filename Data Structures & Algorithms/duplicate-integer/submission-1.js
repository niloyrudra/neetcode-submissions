class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let draftArr = new Set();
        for ( const num of nums ) {
            if( draftArr.has(num) ) return true;
            draftArr.add(num)
        }
        return false;
    }
}
