class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def find_permutation(permutation: List[int], fixed_index: int):
            if fixed_index >= len(nums) - 1:
                result.append(permutation[:])
                return

            for changging_index in range(fixed_index, len(permutation)):
                permutation[fixed_index], permutation[changging_index] = permutation[changging_index], permutation[fixed_index]
                find_permutation(permutation, fixed_index + 1)
                permutation[changging_index], permutation[fixed_index] = permutation[fixed_index], permutation[changging_index]
            
        result = []
        find_permutation(sorted(nums), 0)

        return result
