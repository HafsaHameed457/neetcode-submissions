class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString=''

        for(let i=0;i<strs.length;i++){
            encodedString=encodedString+strs[i].length+'_'+strs[i]
        }
        return encodedString
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded_strs=[]

        for(let i=0;i<str.length;){
           let strLength=str.slice(i).split('_',1)
console.log(i,strLength[0])
            let new_str=str.slice(i+strLength[0].length+1,i+Number(strLength[0])+strLength[0].length+1)
            i=i+Number(strLength[0])+strLength[0].length+1
            decoded_strs.push(new_str)
            
        }
        return decoded_strs
        
    }
}
