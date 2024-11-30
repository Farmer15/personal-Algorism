class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:        
        dynamic_programming = [math.inf] * (amount + 1)
        dynamic_programming[0] = 0

        for coin in coins:
            for index in range(coin, amount + 1):
                dynamic_programming[index] = min(dynamic_programming[index], dynamic_programming[index - coin] + 1)

        return -1 if dynamic_programming[amount] == math.inf else dynamic_programming[amount]