class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort(function(a, b) {
  return a - b; 
});
console.log(nums)
const res=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0) break;
        if(i>0&&nums[i]===nums[i-1])continue

            let left=i+1,right=nums.length-1;
            while(left<right){
                const sum=nums[i]+nums[left]+nums[right]
                if(sum>0){
                    right--
                }
                else if(sum<0){
                    left++
                }
                else{
            res.push([nums[i],nums[left],nums[right]])
            left++
        right--
                while(right>left&&nums[left]===nums[left-1]){
                left++
            }
                }
            
            }

        
    }
    return res
    }
}
