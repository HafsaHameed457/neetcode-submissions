class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        maintain={}
        for i in range(len(nums)):
            if maintain.get(target-nums[i],None) is not None:
                return [maintain.get(target-nums[i]),i]
            else:
                maintain.update({nums[i]:i})
            print(maintain)
        