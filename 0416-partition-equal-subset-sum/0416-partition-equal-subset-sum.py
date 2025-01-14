class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total_sum = sum(nums)

        if total_sum % 2:
            return False
            
        dp = [True] + [False] * (total_sum // 2)

        for num in nums:
            for sums in range(total_sum // 2, -1 , -1):
                if dp[sums]:
                    continue
                if num == sums:
                    dp[sums] = True
                elif sums >= num:
                    dp[sums] = dp[sums - num]
        
        return dp[total_sum // 2]




