class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        areaCental = [[1, 1], [1, 4], [1, 7], [4, 1], [4, 4], [4, 7], [7, 1], [7, 4], [7, 7]]
        directions = [[-1, -1] , [0, -1], [1, -1], [-1, 0], [0, 0], [1, 0], [-1, 1], [0, 1], [1, 1]]

        cental_list = [[board[center[0] + direction[0]][center[1] + direction[1]] for direction in directions] for center in areaCental]
        row_list = board
        column_list = [[board[row][column] for row in range(9)] for column in range(9)]

        for target_list in cental_list + row_list + column_list:
            seen = set()
            for num in target_list:
                if num == ".":
                    continue
                
                if num in seen:
                    return False
                else:
                    seen.add(num)
        
        return True

                


            

