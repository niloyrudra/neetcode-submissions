class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for( let i=0; i<numbers.length; i++ ) {
            for( let j= i+1; j < numbers.length; j++ ) {
                if( numbers[i] + numbers[j] === target ) {
                    return [ i+1, j+1 ]
                }
            }
        }
        // for( let number of numbers ) {
        //     const otherNumber = target-number
        //     if( numbers.includes( otherNumber ) ) {
        //         return [numbers.indexOf(number)+1, numbers.indexOf(otherNumber)+1]
        //     }
        // }
        return []
    }
}
