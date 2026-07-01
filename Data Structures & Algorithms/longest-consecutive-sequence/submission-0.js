class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
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
        if (arr[i] > pivotElement) {
          rightArr.push(arr[i]);
        } else if (arr[i] < pivotElement) {
          leftArr.push(arr[i]);
        }
      }
      return [...this.quickSort(leftArr), pivotElement, ...this.quickSort(rightArr)];
    }
  };
    longestConsecutive(nums) {
        nums=this.quickSort(Array.from(new Set(nums)))
let seqMap=new Map(), maxSeq=0;

for(let i=0;i<nums.length;i++){
seqMap.set(nums[i],(seqMap.get(nums[i]-1)??0)+1)
    
}
seqMap.values().forEach((val)=>{
    maxSeq=Math.max(maxSeq,val)
})

return maxSeq
    }
}
