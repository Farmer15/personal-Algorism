# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        first_bad_version = 2 ** 31 - 1
        start = 0
        end = n

        while end >= start:
            middle = (end + start) // 2 

            if isBadVersion(middle):
                end = middle - 1
                first_bad_version = min(first_bad_version, middle)
            else:
                start = middle + 1
        
        return first_bad_version
