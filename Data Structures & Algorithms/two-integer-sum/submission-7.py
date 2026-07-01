class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        iter_nums={}
        for x in range(len(nums)):
            if target-nums[x] in iter_nums:
                return [iter_nums[target-nums[x]],x]
            else:
                iter_nums[nums[x]]=x