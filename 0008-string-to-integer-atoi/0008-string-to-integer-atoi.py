class Solution:
    def myAtoi(self, s: str) -> int:
        result = ""
        is_positive = True
        s = s.strip()

        for char_index in range(len(s)):
            char = s[char_index]
            if char_index == 0 and char == "+":
                continue

            if char_index == 0 and char == "-":
                is_positive = False
                continue
            
            if char.isdigit():
                result += char
            else:
                break

        if not result:
            return 0

        result = int(result)

        if result > 2 ** 31 - 1:
            result = 2 ** 31 - 1 if is_positive else 2 ** 31
        
        return result if is_positive else -1 * result
        
            
