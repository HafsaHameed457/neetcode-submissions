class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        grouping={}
        result=[]
        for st in strs:
            st_count={}
            for s in st:
                st_count[s]=st_count.get(s,0)+1

            key=tuple(sorted(st_count.items()))
            if key in grouping:
                grouping[key].append(st)
            else:
                grouping[key]=[st]
        for key in grouping.keys():
            result.append(grouping[key])
        return result
        


        