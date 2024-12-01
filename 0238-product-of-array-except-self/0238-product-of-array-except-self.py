from functools import reduce

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        total_multiple_1 = 1
        total_multiple_2 = 1

        for num in nums:
            if num == 0:
                if total_multiple_1 != total_multiple_2:
                    total_multiple_1 *= num

                total_multiple_2 *= num
            else:
                total_multiple_1 *= num
                total_multiple_2 *= num

        return list(map(lambda num: int(total_multiple_2 * num ** -1) if num else int(total_multiple_1), nums))