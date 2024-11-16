import copy

class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        queue = deque()
        row_length, column_length  = len(mat), len(mat[0])
        for row in range(row_length):
            for column in range(column_length):
                if mat[row][column] == 0:
                    queue.append((row, column))
                else:
                    mat[row][column] = row_length * column_length
        
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        while queue:
            row, column = queue.popleft()
            for direction in directions:
                next_row, next_column = row + direction[0], column + direction[1]
                if (0 <= next_row < row_length and 0 <= next_column < column_length) and mat[next_row][next_column] == row_length * column_length:
                    mat[next_row][next_column] = mat[row][column] + 1
                    queue.append((next_row, next_column))
        return mat






