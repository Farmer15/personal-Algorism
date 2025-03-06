class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        inc_sub = [nums[0]]

        for nums_index in range(1, len(nums)):
            num = nums[nums_index]

            if inc_sub[-1] < num:
                inc_sub.append(num)
            else:
                self.replace_nearest(inc_sub, num)

        return len(inc_sub)
                
    def replace_nearest(self, list: List[int], num: int) -> None:
        left = 0
        right = len(list) - 1

        while left <= right:
            mid = (left + right) // 2
            if list[mid] == num:
                return mid
            elif list[mid] > num:
                right = mid - 1
            else:
                left = mid + 1
        
        list[left] = num