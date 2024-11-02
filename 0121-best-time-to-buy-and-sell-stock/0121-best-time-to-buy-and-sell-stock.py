class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left_pointer = 0
        right_pointer = 0
        best_buy_and_sell = 0

        while left_pointer < len(prices) -1 or right_pointer < len(prices) - 1:
            right_number = prices[right_pointer]
            left_number = prices[left_pointer]
            best_buy_and_sell = max(best_buy_and_sell, right_number - left_number)
            
            if left_pointer == right_pointer:
                right_pointer += 1
                continue

            if right_pointer == len(prices) - 1:
                left_pointer += 1
                continue

            if right_number - left_number >= 0:
                right_pointer += 1
            else:
                left_pointer = right_pointer

        return best_buy_and_sell