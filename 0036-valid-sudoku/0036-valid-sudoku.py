class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        AREA_CENTER = [
            (1, 1), (1, 4), (1, 7),
            (4, 1), (4, 4), (4, 7),
            (7, 1), (7, 4), (7, 7)
        ]

        AREA_DIRECTION = [
            (-1, -1), (0, -1), (1, -1),
            (-1, 0), (0, 0), (1, 0),
            (-1, 1), (0, 1), (1, 1)
        ]

        index = 0

        while index < 9:
            row_list = board[index]
            column_list = [
                board[0][index],
                board[1][index],
                board[2][index],
                board[3][index],
                board[4][index],
                board[5][index],
                board[6][index],
                board[7][index],
                board[8][index]
            ]
            area_list = list(map(lambda direction: board[direction[0] + AREA_CENTER[index][0]][direction[1] + AREA_CENTER[index][1]], AREA_DIRECTION))

            for each_list in [row_list, column_list, area_list]:
                confirm_dic = {}

                for num in each_list:
                    if num != ".":
                        if num in confirm_dic:
                            return False
                        else:
                            confirm_dic[num] = 1
            
            return True
            
