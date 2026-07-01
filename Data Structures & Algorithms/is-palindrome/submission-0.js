class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const string=s.replace(/[^a-zA-Z0-9]/g, '')
let start=0,end=string.length-1
while(start<end){
    if(string[start].toLocaleLowerCase()===string[end].toLocaleLowerCase()){
        --end
        ++start
    }
    else{
        return false
    }
}
return true

    }
}
