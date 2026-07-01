class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        group_hash={}
        arr=[]
        for i in range(0,26):
            arr.append(0)
        for x in strs:
            str_list=list(arr)
            for i in x:
                if str_list[ord(i)-97]<=0:
                    str_list[ord(i)-97]=1
                else:
                    str_list[ord(i)-97]+=1
            str_list=str(str_list)
            if str_list in group_hash:
                group_hash[str_list].append(x)
            else:
                group_hash[str_list]=list([x])
        return list(group_hash.values())

        