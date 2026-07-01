class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        nums_hash=Counter(nums)
        arr=[]
        for x,y in nums_hash.items():
            arr.append([y,x])
        arr.sort(reverse=True)
        res=[]
        while len(res)<k:
            res.append(arr.pop(0)[1])
        return res


        