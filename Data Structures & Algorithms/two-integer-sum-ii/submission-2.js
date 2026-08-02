class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for( let number of numbers ) {
            const otherNumber = target-number
            if( numbers.includes( otherNumber ) ) {
                return [numbers.indexOf(number)+1, numbers.indexOf(otherNumber)+1]
            }
        }
        return []
    }
}
