class Solution:
    def maxProduct(self, nums: List[int], start:int = 0, end:int = None) -> int:
        if not nums:
            return 0 
        
        max_product = float('-inf')
        cur_product = 1

        for num in nums:
            if num == 0:
                max_product = max(max_product, 0)
                cur_product = 1
                continue
            cur_product *= num
            max_product = max(max_product, cur_product)

        cur_product = 1
        for num in reversed(nums):
            if num == 0:
                cur_product = 1
                continue
            cur_product *= num
            max_product = max(max_product, cur_product)

        return max_product

        return max_nums