class Solution:

    def encode(self, strs: List[str]) -> str:
        encoded=""
        for st in strs:
            encoded+=str(len(st))
            for s in st:
                encoded+="$"
                encoded+=str(ord(s))
                # print(ord(s),s,encoded)
            encoded+="$"
        return encoded




    def decode(self, s: str) -> List[str]:
        decoded=[]
        current=None
        en_word=s.split("$")
        current_word=""
        i=0
        print(len(en_word))
        while i < len(en_word):
            if current == None:

                if len(en_word[i]):current=int(en_word[i])
                i+=1

                
            if current == 0:
                decoded.append(current_word)
                current_word=""
                if len(en_word[i]):current=int(en_word[i])
                i+=1
            else:
                while current is not None and current>0:
                    current_word+=chr(int(en_word[i]))
                    current-=1
                    i+=1


        return decoded

            


