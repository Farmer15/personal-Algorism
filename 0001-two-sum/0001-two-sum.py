class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        sorted_nums = sorted(nums[:])
        print(sorted_nums)
        left_pointer = 0
        right_pointer = len(sorted_nums) - 1

        while left_pointer <= right_pointer:
            left_number = sorted_nums[left_pointer]
            right_number = sorted_nums[right_pointer]
            
            if left_number + right_number == target:
                return [nums.index(left_number), len(nums) - 1 - nums[::-1].index(right_number)]

            if left_number + right_number > target:
                right_pointer -= 1
            else:
                left_pointer += 1