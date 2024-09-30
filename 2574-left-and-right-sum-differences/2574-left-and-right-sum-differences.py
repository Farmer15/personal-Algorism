class Solution:
    def leftRightDifference(self, nums: List[int]) -> List[int]:
        n = len(nums)
        right = sum(nums)

        left = 0
        res = []
        for i in range(n):
            right -= nums[i]
            res.append(abs(left - right))
            left += nums[i]

        return res