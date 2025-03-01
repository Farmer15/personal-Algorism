class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        waiting_queue = deque()
        pacificReachable = [[False] * len(heights[0]) for _ in range(len(heights))]
        atlanticable = [[False] * len(heights[0]) for _ in range(len(heights))]
        result = set()

        for row in range(len(heights)):
            waiting_queue.append((row, 0))
            pacificReachable[row][0] = True

        for col in range(len(heights[0])):
            waiting_queue.append((0, col))
            pacificReachable[0][col] = True
    
        while waiting_queue:
            current_posX, current_posY = waiting_queue.popleft()
            pacificReachable[current_posX][current_posY] = True

            for DIRECTION in DIRECTIONS:
                next_posX, next_posY = current_posX + DIRECTION[0], current_posY + DIRECTION[1]
                if 0 <= next_posX < len(heights) and 0 <= next_posY < len(heights[0]) and heights[current_posX][current_posY] <= heights[next_posX][next_posY] and pacificReachable[next_posX][next_posY] == False:
                    waiting_queue.append([next_posX, next_posY])
        
        for row in range(len(heights)):
            waiting_queue.append((row, len(heights[0]) - 1))
            atlanticable[row][len(heights[0]) - 1] = True

        for col in range(len(heights[0])):
            waiting_queue.append((len(heights) - 1, col))
            atlanticable[len(heights) - 1][col] = True
        
        while waiting_queue:
            current_posX, current_posY = waiting_queue.popleft()
            atlanticable[current_posX][current_posY] = True

            if pacificReachable[current_posX][current_posY] is True:
                result.add((current_posX, current_posY))

            for DIRECTION in DIRECTIONS:
                next_posX, next_posY = current_posX + DIRECTION[0], current_posY + DIRECTION[1]
                if 0 <= next_posX < len(heights) and 0 <= next_posY < len(heights[0]) and heights[current_posX][current_posY] <= heights[next_posX][next_posY] and atlanticable[next_posX][next_posY] == False:
                    waiting_queue.append([next_posX, next_posY])
            
        return list(map(lambda x: list(x) ,result))
