class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums = sorted(nums, key=lambda x: x, reverse=False)
        left = 0
        result = []


        while left < len(nums) - 2:
            if left > 0 and nums[left] == nums[left - 1]:
                left += 1
                continue

            middle = left + 1
            right = len(nums) - 1
            
            while middle < right:
                if right < len(nums) - 1 and nums[right] == nums[right + 1]:
                    right -= 1
                    continue

                if nums[middle] + nums[right] > -nums[left]:
                    right -= 1
                elif nums[middle] + nums[right] == -nums[left]:
                    result.append([nums[left], nums[middle], nums[right]])
                    middle += 1

                    while nums[middle - 1] == nums[middle] and middle <right:
                        middle += 1
                else:
                    middle += 1

            left += 1

        return result 
