class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
let preSum=new Map(),suffSum=new Map(), res=[]
for(let i=0;i<nums.length;i++){
    if(i===0){
        preSum.set(i,1)
    }
    else{
        preSum.set(i,preSum.get(i-1)*nums[i-1])
    }
}
for(let i=nums.length-1;i>=0;i--){
    if(i===nums.length-1){
        suffSum.set(i,1)
    }
    else{
        suffSum.set(i,suffSum.get(i+1)*nums[i+1])
    }
}
for(let i=0;i<nums.length;i++){
    res.push(preSum.get(i)*suffSum.get(i))
}
return res
    }
}
