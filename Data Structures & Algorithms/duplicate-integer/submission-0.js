class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let numMap={}

        for(let i=0;i<nums.length;i++){
            if(!numMap[nums[i]]){
                numMap[nums[i]]=1
            }
            else{
                return true
            }
        }
        return false
    }
}
