class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    quickSort (arr) {
    let leftArr = [],
      rightArr = [];
    let pivotElement;
    if (arr.length === 0) {
      return arr;
    } else {
      pivotElement = arr[arr.length - 1];
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][1] > pivotElement[1]) {
          rightArr.push(arr[i]);
        } else if (arr[i][1] <= pivotElement[1]) {
          leftArr.push(arr[i]);
        }
      }
      return [...this.quickSort(leftArr), pivotElement, ...this.quickSort(rightArr)];
    }
  }
    topKFrequent(nums, k) {
        let numMap=new Map()
        for (let i=0;i<nums.length;i++){
        if (numMap.has(nums[i])){
            numMap.set(nums[i],numMap.get(nums[i])+1)
        }
        else{
            numMap.set(nums[i],1)
        }
        }
        let numArray=Array.from(numMap)
        let sortedArray=this.quickSort(numArray)
        return sortedArray.slice(sortedArray.length-k).map((num)=>num[0])
    
    }
}
