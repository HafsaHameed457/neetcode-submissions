class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        longest=0
        length_map=defaultdict(int)
        counted=defaultdict(int)
        current=0
        print(length_map)
        for n in nums:
            length_map[n]=1
        for i in range(len(nums)):
            if length_map[nums[i]-1]==0:
                start=0
                length=1
                while length_map[nums[i]+length]==1:
                    length+=1
                longest=max(length,longest)
                
            else:
                i+=1
            
        return longest
        