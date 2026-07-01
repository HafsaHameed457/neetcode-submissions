class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    longestConsecutive(nums) {
        nums=Array.from(new Set(nums))
        nums.sort((a, b) => a - b)
let seqMap=new Map(), maxSeq=0;

for(let i=0;i<nums.length;i++){
seqMap.set(nums[i],(seqMap.get(nums[i]-1)??0)+1)
    
}
seqMap.values().forEach((val)=>{
    maxSeq=Math.max(maxSeq,val)
})

return maxSeq
    }
}
