class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const result = {};
        for ( let str of strs ) {
            const sortedStr = str.split('').sort().join('');
            if( !result[sortedStr] ) result[sortedStr] = []
            result[sortedStr].push(str)
        }
        return Object.values(result)

        // const result = {}
        // for( let str of strs ) {
        //     const count = Array(26).fill(0)
        //     for( let char of str ) {
        //         count[ char.charCodeAt(0) - 'a'.charCodeAt(0) ] += 1;
        //     }
        //     const key = count.join(',');
        //     if( !result[key] ) {
        //         result[key] = []
        //     }
        //     result[key].push(str)
        // }
        // return Object.values(result)
    }
}
