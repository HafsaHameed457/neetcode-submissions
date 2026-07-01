class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        nums_dict={}
        for x in nums:
            if x in nums_dict and nums_dict[x]>0:
                return True
            else:
                nums_dict[x]=1
            
        return False