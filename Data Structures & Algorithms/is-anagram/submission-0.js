class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let gAnaMap={}
 for (let i=97;i<=122;i++){
    gAnaMap[String.fromCharCode(i)]=0
 }
 let sMap={...gAnaMap}, tMap={...gAnaMap}
for (let i=0;i<t.length;i++){
    
if(tMap[t[i]]){
    tMap[t[i]]=tMap[t[i]]+1
}
else{
    tMap[t[i]]=1
}
 }
 for (let i=0;i<s.length;i++){
    
if(sMap[s[i]]){
    sMap[s[i]]=sMap[s[i]]+1
}
else{
    sMap[s[i]]=1
}
 }

 if(JSON.stringify(sMap)===JSON.stringify(tMap)){
    return true
 }
 else{
    return false
 }

    }
}
