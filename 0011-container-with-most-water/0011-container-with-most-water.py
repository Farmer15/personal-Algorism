class Solution:
    def maxArea(self, height: List[int]) -> int:
        left_wall = 0
        right_wall = len(height) - 1
        max_water = 0

        while left_wall < right_wall:
            if height[left_wall] > height[right_wall]:
                max_water = max((right_wall - left_wall) * height[right_wall], max_water)
                right_wall -= 1
            else:
                max_water = max((right_wall - left_wall) * height[left_wall], max_water)
                left_wall += 1
        
        return max_water