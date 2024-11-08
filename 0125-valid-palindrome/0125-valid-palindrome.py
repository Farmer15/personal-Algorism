class Solution:
    def isPalindrome(self, s: str) -> bool:
        left_pointer = 0
        right_pointer = len(s) - 1

        while left_pointer < right_pointer:
            while not s[left_pointer].isalnum():
                if left_pointer >= right_pointer:
                    break

                left_pointer += 1
                
            while not s[right_pointer].isalnum():
                if left_pointer >= right_pointer:
                    break

                right_pointer -= 1

            if s[left_pointer].lower() != s[right_pointer].lower():
                return False

            left_pointer += 1
            right_pointer -= 1

        return True