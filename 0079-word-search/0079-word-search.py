class Solution:
    def __init__(self):
        self.DIRECTIONS = [(0, 1), (0, -1), (1, 0), (-1, 0)]

    def exist(self, board: List[List[str]], word: str) -> bool:
        for row in range(len(board)):
            for column in range(len(board[row])):
                if board[row][column] == word[0]:
                    if self.search_word(board, word, "", (row, column)):
                        return True
        
        return False
    
    def search_word(self, board: List[List[str]], word: str, confirm_word: str, position: tuple) -> bool:
        x, y = position[0], position[1]
        current_word = board[x][y]
        
        if len(confirm_word) >= len(word) or word[len(confirm_word)] != current_word:
            return False
        
        if confirm_word + current_word == word:
            return True 

        for next_dir_x, next_dir_y in self.DIRECTIONS:
            if not 0 <= x + next_dir_x <= len(board) - 1 or not 0 <= y + next_dir_y <= len(board[0]) - 1:
                continue
            
            temp, board[x][y] = board[x][y], "#"

            if self.search_word(board, word, confirm_word + current_word, (x + next_dir_x, y + next_dir_y)):
                return True
            
            board[x][y] = temp
    
        return False
        
