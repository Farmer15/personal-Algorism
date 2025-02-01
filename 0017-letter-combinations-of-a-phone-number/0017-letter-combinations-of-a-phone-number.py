class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits or not 2 <= int(digits[0]) <= 9:
            return []

        DIGITS_LETTERS = [None, None, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
        result = deque([""])

        for num in digits:
            if 2 <= int(num) <= 9:
                for _ in range(len(result)):
                    current_char = result.popleft()

                    for char in DIGITS_LETTERS[int(num)]:                    
                        result.append(current_char + char)
                
        return list(result)

