class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0,right=heights.length-1,maxWater=0
        while(left<right){
        let waterCapacity=(right-left)*Math.min(heights[left],heights[right])
        maxWater=Math.max(maxWater,waterCapacity)
        if(heights[left]<heights[right]){
            left++
        }
        else{
            right--
        }

        }
        return maxWater

    }
}
