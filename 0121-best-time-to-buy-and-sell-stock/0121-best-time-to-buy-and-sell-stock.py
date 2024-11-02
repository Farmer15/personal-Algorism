class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = prices[0]
        maxProfit = 0
        pointer = 0

        while pointer < len(prices):
            current_price = prices[pointer]
            maxProfit = max(current_price - minPrice, maxProfit)
            minPrice = min(current_price, minPrice)
            pointer += 1

        return maxProfit