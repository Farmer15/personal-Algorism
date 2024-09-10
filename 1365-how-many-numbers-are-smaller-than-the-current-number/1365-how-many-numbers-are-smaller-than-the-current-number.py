class Solution(object):
    def smallerNumbersThanCurrent(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        copied = nums[0:]

        for index1 in range(0, len(nums)):
            count = 0
            for index2 in range(0, len(nums)):
                if index1 != index2 and nums[index1] > nums[index2]:
                    count += 1

            copied[index1] = count
        
        return copied