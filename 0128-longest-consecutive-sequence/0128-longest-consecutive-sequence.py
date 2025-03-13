class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        max_length = 0
        set_nums = set(nums)

        for num in set_nums:
            if num - 1 not in set_nums:
                length = 0
                cur_num = num
                while cur_num in set_nums:
                    length += 1
                    cur_num += 1
                
                max_length = max(max_length, length)
        
        return max_length