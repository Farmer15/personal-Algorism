class Solution:
    def trap(self, height: List[int]) -> int:
        max_wall_height = 0
        walter_amout = 0
        total_water = 0

        for wall in height:
            if wall and wall >= max_wall_height:
                total_water += walter_amout
                walter_amout = 0
                max_wall_height = max(max_wall_height, wall)
            else:
                walter_amout += max_wall_height - wall

        max_wall_height = 0
        walter_amout = 0

        for wall in height[::-1]:
            if wall and wall > max_wall_height:
                total_water += walter_amout
                walter_amout = 0
                max_wall_height = max(max_wall_height, wall)
            else:
                walter_amout += max_wall_height - wall

        return total_water

