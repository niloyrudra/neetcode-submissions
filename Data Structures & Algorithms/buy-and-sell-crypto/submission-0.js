class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // for (let i=0; i < prices.length; i++) {
        //     // if( prices[i] > prices[i+1] && prices[i+1] <= prices.length-1 ) return 0;
        //     for (let j = prices.length-1; j < prices.length/2; j--) {
        //         if( prices[i] > prices[j] && i < j ) continue;
        //         return prices[j] - prices[i]
        //     }
        // }
        let left = 0,
            right = 1,
            maxProfit = 0;
        while( right < prices.length ) {
            if( prices[left] < prices[right] ) {
                const profit = prices[right] - prices[left];
                maxProfit = Math.max( maxProfit, profit )
            }
            else left = right;
            right++;
        }
        return maxProfit
    }

}
