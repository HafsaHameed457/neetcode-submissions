class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit=0,buyPrice=prices[0]
        for(let i=1;i<prices.length;i++){
            if(prices[i]<buyPrice){
                buyPrice=prices[i]
            }
            else if(prices[i]>buyPrice){
                profit=Math.max(profit,prices[i]-buyPrice)

            }
        }
        return profit

    }
}
