class Solution:

    def encode(self, strs: List[str]) -> str:
        encoded_string="["
        for s in strs:
            encoded_word=""
            for x in s:
                if encoded_word:
                    encoded_word+="|"+str(ord(x))
                else:
                    encoded_word=str(ord(x))
            if encoded_string:
                encoded_string+="_"+encoded_word
            else:
                encoded_string=encoded_word
        return encoded_string

 



    def decode(self, s: str) -> List[str]:
        if not s:
            return [""]
        words=s.split("_")
        words.pop(0)

        words_decode=[]
        for word in words:
            word_decode=''
            if word:
                word=word.split('|')
                for l in word:
                    word_decode+=chr(int(l))
            words_decode.append(word_decode)
        return words_decode



