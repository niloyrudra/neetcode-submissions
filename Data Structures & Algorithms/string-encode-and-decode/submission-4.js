class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if( strs.length === 0 ) return '';
        let encoded_str = ""
        for( let str of strs ) {
            encoded_str += `${str.length.toString()}#${str}` 
        }
        // let strs_size_arr = []
        // for( let str of strs ) {
        //     strs_size_arr.push(str.length)
        //     encoded_str += str
        // }
        // encoded_str = strs_size_arr.join() + "#" + encoded_str

        return encoded_str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0) return [];

        let res = [],
            i = 0
        // if(str.length === 3) return str;
        // const str_arr = str.split("#")
        // const strs_size_arr = str_arr[0].split(",")
        // const strs_arr = str_arr[1].split("")
        // const strs = []
        // for( let size of strs_size_arr ) {
        //     const splited_str = strs_arr.splice(0, size).join('')
        //     strs.push(splited_str)
        // }
        while( i < str.length ) {
            let j = i;
            while( str[j] !== '#' ) {
                j++
            }
            const length = parseInt(str.substring(i, j))
            i = j + 1
            j = i + length
            res.push( str.substring( i, j ) )

            i = j
        }


        return res;
    }
}
