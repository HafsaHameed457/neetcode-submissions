class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anaGramMapSet=new Map()
        let alphaMap=new Map()
        for(let i=97;i<=122;i++){
            alphaMap.set(String.fromCharCode(i),0)
        }
strs.forEach((str)=>{

let thisMap=structuredClone(alphaMap)

for(let i=0;i<str.length;i++){
    if(thisMap.has(str[i])){
        thisMap.set(str[i],thisMap.get(str[i])+1)
    }
    else{
        thisMap.set(str[i],1)
    }
}
let strMap=JSON.stringify(Array.from(thisMap.entries()))
if(anaGramMapSet.has(strMap)){
   anaGramMapSet.set(strMap,[...anaGramMapSet.get(strMap),str])
}
else{
    anaGramMapSet.set(strMap,[str])
}
})
return Array.from(anaGramMapSet.values())
    }
}
