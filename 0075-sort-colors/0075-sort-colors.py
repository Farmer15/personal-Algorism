class Solution:
    def sortColors(self, nums: List[int], start: int = 0, end: int = None) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if end is None:
            end = len(nums) - 1

        if end - start <= 1:
            if nums[start] > nums[end]:
                [nums[start], nums[end]] = [nums[end], nums[start]]
            return
        
        fivot = start
        left_pointer = start + 1
        right_pointer = end

        while left_pointer < right_pointer:
            if nums[left_pointer] > nums[right_pointer]:
                [nums[left_pointer], nums[right_pointer]] = [nums[right_pointer], nums[left_pointer]]
            else:
                if nums[left_pointer] < nums[fivot]:
                    left_pointer += 1
                
                if nums[right_pointer] >= nums[fivot]:
                    right_pointer -= 1
        
        [nums[fivot], nums[right_pointer]] = [nums[right_pointer] ,nums[fivot]]
        self.sortColors(nums, start, right_pointer)
        self.sortColors(nums, right_pointer, end)






            

