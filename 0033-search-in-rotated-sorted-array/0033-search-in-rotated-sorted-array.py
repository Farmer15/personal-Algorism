class Solution:
    def search(self, nums: List[int], target: int, start: int = 0, end = None) -> int:
        if end is None:
            end = len(nums) - 1

        if start == end:
            if nums[start] == target:
                return start
            else:
                return -1

        middle_index = (end + start) // 2 

        if nums[start] <= nums[middle_index]:
            if nums[start] <= target <= nums[middle_index]:
                return self.search(nums, target, start, middle_index)
            else:
                return self.search(nums, target, middle_index + 1, end)
        else:
            if nums[middle_index] < target <= nums[end]:
                return self.search(nums, target, middle_index + 1, end)
            else:
                return self.search(nums, target, start, middle_index)
