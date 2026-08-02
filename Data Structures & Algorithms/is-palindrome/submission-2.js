class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNumeric( char ) {
        return (
            ( char >= 'a' && char <= 'z' ) ||
            ( char >= 'A' && char <= 'Z' ) ||
            ( char >= '0' && char <= '9' )
        );
    }

    isPalindrome(s) {
        let left_to_right_str = ''
        let right_to_left_str = ''
        // const regex = /[a-zA-Z0-9]/g
        for( let i = 0; i < s.length; i++ ) {
            if(this.isAlphaNumeric(s[i])) left_to_right_str += s[i].toLowerCase()
        }
        for( let i = s.length-1; i >= 0; i-- ) {
            if(this.isAlphaNumeric(s[i])) right_to_left_str += s[i].toLowerCase()
        }
        return right_to_left_str === left_to_right_str
    }
}
