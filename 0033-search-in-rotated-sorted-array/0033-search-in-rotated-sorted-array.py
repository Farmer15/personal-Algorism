class Solution:
    def search(self, nums: List[int], target: int, start: int = 0, end = None) -> int:
        start = 0
        end = len(nums) - 1

        while start != end:
            middle_index = (end + start) // 2 

            if nums[start] <= nums[middle_index]:
                if nums[start] <= target <= nums[middle_index]:
                    end = middle_index
                else:
                    start = middle_index + 1
            else:
                if nums[middle_index] < target <= nums[end]:
                    start = middle_index + 1
                else:
                    end = middle_index


        return start if nums[start] == target else -1
