class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total_sum = sum(nums)

        if total_sum % 2:
            return False

        dp = [True] + [False] * (total_sum // 2)

        for sums in range(total_sum // 2 + 1):
            for num in nums:
                if num == sums:
                    dp[sums] = True
                    break
                elif sums >= num:
                    dp[sums] = dp[sums - num]

        print(dp)
        return dp[total_sum // 2]




