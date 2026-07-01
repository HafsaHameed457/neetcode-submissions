class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let remMap=new Map()

        for(let i=0;i<nums.length;i++){

            if(!remMap.has(nums[i].toString())){
                remMap.set((target-nums[i]).toString(),i)
            }
            else{
                return [remMap.get(nums[i].toString()),i]
            }
        }


    }
}
