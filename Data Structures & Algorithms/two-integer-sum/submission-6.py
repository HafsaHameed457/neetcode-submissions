class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        arr_hash={}
        for x in range(len(nums)): 
            if target - nums[x] in arr_hash:
                return [arr_hash[target - nums[x]],x]
            if nums[x] not in arr_hash:
                arr_hash[nums[x]]=x
        

            
        