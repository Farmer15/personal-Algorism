class Solution:
    def validPalindrome(self, s: str) -> bool:
        return self.is_palindrome(s) or self.is_palindrome(s[::-1])

    
    def is_palindrome(self, s: str) -> bool:
        right_pointer = -1
        left_pointer = 0
        one_chance = True

        while left_pointer < len(s) / 2:
            if s[right_pointer] != s[left_pointer]:
                if not one_chance:
                    print(s[right_pointer], s[left_pointer], one_chance)
                    return False

                if s[right_pointer - 1] != s[left_pointer]:
                    if s[right_pointer] != s[left_pointer + 1]:
                        return False
                    else:
                        left_pointer += 1
                        one_chance = False
                else:
                    right_pointer -= 1
                    one_chance = False
            
            left_pointer += 1
            right_pointer -= 1

        return True
