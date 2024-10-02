class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        pair = 0
        n = len(nums)
        for i in range(n-1):
            for j in range(i+1,n):
                if nums[i] == nums[j] and i < j:
                    pair += 1
        return pair 