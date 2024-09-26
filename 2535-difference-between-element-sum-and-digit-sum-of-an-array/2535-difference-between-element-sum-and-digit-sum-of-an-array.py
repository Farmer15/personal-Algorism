class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        x = 0
        y = 0

        for num in nums:
            x += num

            for digit in str(num):
                y += int(digit)
        
        return abs(y - x)