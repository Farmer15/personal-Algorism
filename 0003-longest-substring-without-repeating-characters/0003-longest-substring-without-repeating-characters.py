class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        chached_dict = {}
        left = 0
        max_count = 0

        for s_index in range(len(s)):
            char = s[s_index]

            if char in chached_dict:
                left = max(left, chached_dict[char] + 1)

            chached_dict[char] = s_index
            max_count = max(max_count, s_index - left + 1)

        return max_count