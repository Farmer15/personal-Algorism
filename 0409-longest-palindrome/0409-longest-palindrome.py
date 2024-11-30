from collections import Counter
from functools import reduce

class Solution:
    def longestPalindrome(self, s: str) -> int:
        count_dict = Counter(s)
        sum_odd = False
        sum_count = 0
       
        for count in count_dict.values():
          if count % 2 == 1:
              sum_odd = True
          
          sum_count += count // 2

        return sum_count * 2 + 1 if sum_odd else sum_count * 2
