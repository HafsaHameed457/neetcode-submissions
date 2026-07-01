class Solution:
    def maxArea(self, heights: List[int]) -> int:
        start,end,max_area=0,len(heights)-1,0
        while start<end:
            max_area=max(max_area,(end-start)*min(heights[end],heights[start]))
            if heights[start]<heights[end]:
                start+=1
            else:
                end-=1
        return max_area
        