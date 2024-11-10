class Solution:
    def search(self, nums: List[int], target: int) -> int:
          start = 0
          end = len(nums) - 1
          
          while start <= end:
              middle_index = (start + end) // 2
              
              if nums[middle_index] == target:
                  return middle_index
              
              if nums[middle_index] > target:
                  end = middle_index - 1
              else:
                  start = middle_index + 1
          
          return -1 
          
