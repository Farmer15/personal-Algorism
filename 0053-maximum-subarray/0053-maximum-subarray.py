class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        left_pointer, right_pointer=0, 0
        maxSum= nums[left_pointer]
        current_sum = nums[left_pointer]

        while right_pointer < len(nums) - 1:
            if current_sum + nums[right_pointer + 1] > nums[right_pointer + 1]:
                right_pointer += 1
                current_sum += nums[right_pointer]
            else:
                right_pointer += 1
                left_pointer = right_pointer
                current_sum = nums[right_pointer]

            maxSum=max(current_sum, maxSum)
        
        return maxSum