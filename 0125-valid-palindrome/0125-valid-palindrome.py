class Solution:
    def isPalindrome(self, s: str) -> bool:
        target_string = list(map(lambda char: char.lower() , filter(lambda char: char.isalpha() or char.isdecimal() , s)))
        return "".join(target_string) == "".join(target_string[::-1])
