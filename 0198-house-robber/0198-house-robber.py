class Solution:
    def __init__(self):
        self.max_money = 0

    def rob(self, nums: List[int]) -> int:
        dp = [None] * len(nums)

        def sum_money(current_house) -> int:
            if current_house < 0:
                return 0
            
            if not dp[current_house]:
                dp[current_house] = max(sum_money(current_house - 2) + nums[current_house], sum_money(current_house - 1))

            return dp[current_house]

        return sum_money(len(nums) - 1)