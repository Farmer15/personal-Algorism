class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        chached = {}

        for nums_index in range(len(nums)):
            if nums[nums_index] in chached:
                return [chached[nums[nums_index]][1], nums_index]
            else:
                chached[target - nums[nums_index]] = [nums[nums_index], nums_index]