class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        copied_s = s[:]
        result = []
        for reverse_index in range(len(copied_s) - 1, -1, -1):
            s[len(copied_s) - 1 - reverse_index] = copied_s[reverse_index]