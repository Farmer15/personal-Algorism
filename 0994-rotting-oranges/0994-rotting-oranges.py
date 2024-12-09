class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        rotten_queue = deque()
        DIRECTIONS = [(0, 1), (0, -1), (-1, 0), (1, 0)]
        rotten_count = -1

        for row in range(len(grid)):
            for column in range((len(grid[0]))):
                if grid[row][column] == 2:
                    grid[row][column] = 0
                    rotten_queue.append((row, column))
        
        if not max(max(grid)):
            return 0
        
        while rotten_queue:
            rotten_length = len(rotten_queue)

            for _ in range(rotten_length):
                rotten_posX, rotten_posY = rotten_queue.popleft()

                for direction in DIRECTIONS:
                    next_posX, next_posY = rotten_posX + direction[0], rotten_posY + direction[1]

                    if 0 <= next_posX < len(grid) and 0 <= next_posY < len(grid[0]) and grid[next_posX][next_posY] == 1:
                        grid[next_posX][next_posY] = 0
                        rotten_queue.append((next_posX, next_posY))
    
            rotten_count += 1
        
        return -1 if max(max(grid)) else rotten_count
            






