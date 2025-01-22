class Solution:
    def longestPalindrome(self, s: str) -> str:
        if not s:
            return ""

        longest_palindrome = s[0]

        for index in range(1, len(s)):
            if s[index - 1] == s[index]:
                longest_palindrome = self.getPalindrom(s, index - 0.5) if len(self.getPalindrom(s, index - 0.5)) > len(longest_palindrome) else longest_palindrome


            if index + 1 < len(s) and s[index - 1] == s[index + 1]:
                longest_palindrome = self.getPalindrom(s, index - 0.5) if len(self.getPalindrom(s, index - 0.5)) > len(longest_palindrome) else longest_palindrome

        return longest_palindrome

    
    def getPalindrom(self, s: str, center: int | float) -> str:
        result = deque([])
        left = right = None
        
        if type(center) == float:
            left = int(center - 0.5)
            right = int(center + 0.5)
        else:
            result.append(s[center])
            left = center - 1
            right = center + 1
        
        while 0 <= left and right < len(s) and s[left] == s[right]:
            result.appendleft(s[left])
            result.append(s[right])
            left -= 1
            right += 1
        
        return "".join(result)


