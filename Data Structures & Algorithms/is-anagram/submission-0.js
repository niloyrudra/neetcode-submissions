class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const sortedS = s.split('').sort().join()
        const sortedT = t.split('').sort().join()
        return sortedS === sortedT
        // const sSet = new Set();
        // const tSet = new Set();
        // for (const char in s) {
        //     if(sSet.has(char)) sSet[char] = sSet[char] +1
        //     else sSet[char] = 1
        // }
        // for (const char in t) {
        //     if(tSet.has(char)) tSet[char] = tSet[char] + 1
        //     else tSet[char] = 1
        // }
        // for ( const key in sSet ) {
        //     if (sSet[key] !== tSet[key]) return false
        // }
        // return true;
    }
}
