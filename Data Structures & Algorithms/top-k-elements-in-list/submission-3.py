from collections import Counter
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        collect_tuple=[]
        fre_items=[]
        a=Counter(nums)
        for i in a.keys():
            collect_tuple.append((a[i],i))
        collect_tuple.sort(reverse=True)
        x=collect_tuple[0:k]
        for y in x: fre_items.append(y[1])
        return fre_items