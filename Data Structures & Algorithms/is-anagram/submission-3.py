class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_count=defaultdict(int) 
        t_count=defaultdict(int)
        for i in s:
            s_count.update({i:s_count.get(i,0)+1})
        for j in t:
            t_count.update({j:t_count.get(j,0)+1})
        return s_count==t_count
        