from collections import defaultdict

class Solution:
    def __init__(self):
        self.dp = defaultdict(lambda : defaultdict(lambda : 0))

    def uniquePaths(self, m: int, n: int) -> int:
        for row in range(1, m + 1):
            for column in range(1, n + 1):
                if row == 1 and column == 1:
                    self.dp[row][column] = 1
                    continue
                
                self.dp[row][column] = self.dp[row - 1][column] + self.dp[row][column - 1]

        return self.dp[m][n]