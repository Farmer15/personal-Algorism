class Solution:
    def subsets(self, nums: List[int], start: int = 0, prev_subset: List[int] = [])-> List[List[int]]:
        if start == 0:
            self.result = [[]]
            
        for index in range(start, len(nums)):
            subset = prev_subset + [nums[index]]
            self.result.append(subset)
            self.subsets(nums, index + 1, subset)

        return self.result
            

