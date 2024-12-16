class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        hash_map = {}

        for num in nums:
            if num in hash_map: 
                hash_map[num] += 1
            else:
                hash_map[num] = 1

            if hash_map[num] >= len(nums) / 2:
                return num
