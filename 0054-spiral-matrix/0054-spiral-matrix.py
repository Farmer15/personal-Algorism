class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        DIRECTION = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        visited = [[False for _ in range(len(matrix[0]))] for column in range(len(matrix))]
        direction_index = 0
        current = [0, 0]
        visited[0][0] = True
        result = [matrix[0][0]]

        while len(result) < len(matrix) * len(matrix[0]):
            next_row = current[0] + DIRECTION[direction_index][0]
            next_column = current[1] + DIRECTION[direction_index][1]

            if 0 <= next_row < len(matrix) and 0 <= next_column < len(matrix[0]) and visited[next_row][next_column] is False:
                visited[next_row][next_column] = True
                result.append(matrix[next_row][next_column])
                current = [next_row, next_column]
            else:
                direction_index = (direction_index + 1) % 4
        
        return result