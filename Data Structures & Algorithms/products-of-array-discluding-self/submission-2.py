class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        forward=[]
        
        product=[]
        start=1;back=1;
        for x in nums:
            start*=x
            forward.append(start)
        backward=forward.copy()
        
        for y in range(len(nums)):
            back*=nums[len(nums)-y-1]
            backward[len(nums)-y-1]=back
        print(forward)
        for a in range(len(forward)):
            if a==0:
                product.append(backward[a+1])
            elif a==len(nums)-1:
                product.append(forward[a-1])
            else:
                print(forward[a-1],a,backward[a+1])
                product.append(forward[a-1]*backward[a+1])
        return product



        