class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        singleList=defaultdict(int)
        for num in nums:
            if singleList.get(num, 0)!=0:
                return True
            else:
                singleList.update({num: 1})
        return False
        