class Solution:
    def validateChar(self,c:str):
        lower_letter=ord('a') <= ord(c) and ord(c) <= ord('z')
        uppper_letter=ord('A') <= ord(c) and ord(c) <= ord('Z')
        numbers=ord('0') <= ord(c) and ord(c) <= ord('9')
        if lower_letter or uppper_letter or numbers:
            return True
        else: 
            return False
    def isPalindrome(self, s: str) -> bool:
        start,end=0,len(s)-1
        while start<=end:
            print(s[start],s[end],ord(s[start]),ord(s[end]))
            if not self.validateChar(s[start]):
                start+=1
                continue
            if not self.validateChar(s[end]):
                end-=1
                continue
            

            if s[start].lower()!=s[end].lower():
                return False
            start+=1
            end-=1
        return True
        