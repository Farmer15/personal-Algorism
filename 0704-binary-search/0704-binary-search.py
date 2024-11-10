class Solution:
    def search(self, nums: List[int], target: int, start: int = 0, end: int = None) -> int:
        if end is None:
          end = len(nums) - 1

        if end < start:
            return -1

        if end == start and nums[start] == target:
            return start
      
        middle_index = (end + start) // 2

        if nums[middle_index] == target:
            return middle_index
        elif nums[middle_index] > target:
            return self.search(nums, target, start, middle_index - 1)
        else:
            return self.search(nums, target, middle_index + 1, end)
        
