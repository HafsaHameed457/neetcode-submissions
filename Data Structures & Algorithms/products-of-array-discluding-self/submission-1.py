class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        forward_product,backward_product, result=[],list(nums),[]
        product=1
        for i in range(len(nums)):
            product*=nums[i]
            forward_product.append(product)
        product=1

        
        for j in range(1,len(nums)+1):
            product*=nums[-j]
            backward_product[-j]=product    

        for k in range(len(nums)):
            if k==0:
                excluded_product=backward_product[k+1]
            elif k==len(nums)-1:
                excluded_product=forward_product[k-1] 
            else:
                excluded_product=(forward_product[k-1]*backward_product[k+1])
            result.append(excluded_product)
        return result

        