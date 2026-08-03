class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        target_three_sum=[]
        
        for i in range(len(nums)):
            start = i+1;end=len(nums)-1
            while start<end:
                if nums[start]+nums[end]+nums[i]==0 and [nums[i],nums[start],nums[end]] not in target_three_sum:
                    target_three_sum.append([nums[i],nums[start],nums[end]])
                    start+=1
                
                elif nums[start]+nums[end]+nums[i]>0:
                    end-=1
                else:start+=1
            

            print(i)
        return target_three_sum