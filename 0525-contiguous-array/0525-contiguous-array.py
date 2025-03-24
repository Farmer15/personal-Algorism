class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        count = 0
        hash_map = {
            0:[0]
        }
        max_length = 0

        for index in range(len(nums)):
            num = nums[index]

            if num == 1:
                count += 1
            else:
                count -= 1
            
            if count in hash_map:
                hash_map[count].append(index + 1)
            else:
                hash_map[count] = [index + 1]

        for key in hash_map:
            max_length = max(max_length, hash_map[key][-1] - hash_map[key][0])
        
        return max_length