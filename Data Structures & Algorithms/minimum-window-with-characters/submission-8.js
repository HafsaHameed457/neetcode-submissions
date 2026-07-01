class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
if(s.length<t.length) return ""
if(s===t)return t

let freqMap=new Map(),condMap=new Map(),minLength=undefined,minIndices=[],left=0,right=0, have=0,need=0

    for(let i=0;i<t.length;i++){
        if(freqMap.has(t[i])){
            freqMap.set(t[i],freqMap.get(t[i])+1)
        }
        else{
            freqMap.set(t[i],1)
            condMap.set(t[i],0)
        }
    }
    const arrKeys=Object.keys(Object.fromEntries(freqMap))
    need=arrKeys.length


    while(right<s.length){
            if(freqMap.has(s[right])){
                if(freqMap.get(s[right])===condMap.get(s[right])+1){
                have++
            }
                condMap.set(s[right],condMap.get(s[right])+1)

            }
        
while (have === need) {
        if (minLength === undefined || (right - left + 1) < minLength) {
            minIndices = [left, right];
            minLength = right - left + 1;
        }

        let leftChar = s[left];
        if (freqMap.has(leftChar)) {
            condMap.set(leftChar, condMap.get(leftChar) - 1);
            if (condMap.get(leftChar) < freqMap.get(leftChar)) {
                have--;
            }
        }
        left++;
    }
                right++

            
        


    
    
    
    
    
    
    
    }
if(minIndices.length>0){

let extractedString=s.slice(minIndices[0],minIndices[1]+1)
return extractedString
}
else{
    return ""
}



    }
}
