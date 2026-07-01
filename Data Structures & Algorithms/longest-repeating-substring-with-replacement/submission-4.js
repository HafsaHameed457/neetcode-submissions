class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let leftPtr=0,rightPtr=0,maxLength=0,maxFreq=0,freqMap=new Map();
        while(rightPtr<s.length){
            if(freqMap.has(s[rightPtr])){
                freqMap.set(s[rightPtr],freqMap.get(s[rightPtr])+1)
                
            }
            else{
                                freqMap.set(s[rightPtr],1)

            }
            maxFreq=Math.max(maxFreq,freqMap.get(s[rightPtr]))
            if((rightPtr-leftPtr+1-maxFreq)<=k){
                console.log(rightPtr-leftPtr+1,rightPtr,leftPtr,maxFreq,freqMap)
                maxLength=Math.max(maxLength,rightPtr-leftPtr+1)
                rightPtr++

            }
            else{
                                freqMap.set(s[leftPtr],freqMap.get(s[leftPtr])-1)
                                let freArr=Array.from(freqMap.values())
                                freArr.sort((a,b)=>a-b)
                                maxFreq=freArr[freArr.length-1]
                                leftPtr++
                                rightPtr++

            }
            
            
        }
        console.log(maxLength)
        return maxLength
    }
}
