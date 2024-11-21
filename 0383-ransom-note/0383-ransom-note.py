from collections import Counter

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ransomNote_dict = Counter(ransomNote)
        magazine_dict = Counter(magazine)

        for char, char_count in ransomNote_dict.items():
            if not char in magazine_dict or  char_count > magazine_dict[char]:
                return False
        
        return True
