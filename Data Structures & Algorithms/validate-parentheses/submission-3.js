class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let currentStack=[]
        

for(let i =0;i<s.length;i++){
    if(s[i]==="{"||s[i]==="("||s[i]==="["){
        currentStack.push(s[i])

    }
    else{

        let lastIndex=currentStack.pop()
        if(s[i]==="}"&&lastIndex!=="{"||
        s[i]==="]"&&lastIndex!=="["||
        s[i]===")"&&lastIndex!=="("){
            return false
        }
    }
}
if(currentStack.length===0){
return true
}
else{
    return false
}
    }
}
