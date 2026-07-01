class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        results=[]
        hashh=defaultdict(set)
        for i in range(len(nums)):
            j,k=i+1,len(nums)-1
            while j<k:
                if nums[j]+nums[k]+nums[i]==0:

                    if (nums[i],nums[j],nums[k]) not in hashh:
                        results.append([nums[i],nums[j],nums[k]])
                        hashh[(nums[i],nums[j],nums[k])]=True
                    j+=1
                    k-=1
                elif nums[j]+nums[k]+nums[i]<0:
                    j+=1
                else:
                    k-=1
        return results
                

            


        