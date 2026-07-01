class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength=0, current=0, start=0
        let currentMap= new Map()
        while(current<s.length){
            if(!currentMap.has(s[current])){
                currentMap.set(s[current],current)
                current++
                maxLength=Math.max(maxLength,current-start)
            }
            else{
                maxLength=Math.max(maxLength,current-start)
                start=currentMap.get(s[current])+1
                current=start
                currentMap= new Map()
            }

        }
        return maxLength
    }
}
