class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums.sort()
        max_xonsecutive=0
        consecutive=0
        for i in range(len(nums)):
            if i==0:
                consecutive=1
                continue
            if nums[i]==nums[i-1]:
                continue
            if nums[i]==nums[i-1]+1:
                consecutive+=1
                max_xonsecutive=max(max_xonsecutive,consecutive)
            else:
                consecutive=1
        # print(max_xonsecutive,consecutive,i,nums)
        return max(max_xonsecutive,consecutive)
        