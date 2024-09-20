class Solution:
    def getSneakyNumbers(self, nums: List[int]) -> List[int]:
        result = []

        for num in nums:
            if nums.count(num) == 2 and num not in result:
                result.append(num)
        
        return result