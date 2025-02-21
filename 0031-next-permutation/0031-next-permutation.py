class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        return self.switchNextPosition(nums)
    
    def switchNextPosition(self, nums: List[int]) -> None:
        for posA in range(len(nums) - 1, -1, -1):
            for posB in range(len(nums) - 1, posA, -1):
                if nums[posB] > nums[posA]:
                    [nums[posB], nums[posA]] = [nums[posA], nums[posB]]
                    nums[posA+1:] = sorted(nums[posA+1:])
                    return

        return nums.sort()