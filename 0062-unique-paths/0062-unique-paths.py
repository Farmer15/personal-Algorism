from collections import defaultdict

class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [[0] * n for _ in range(m)]
        dp[0][0] = 1

        for row in range(m):
            for column in range(n):
                if row > 0: 
                    dp[row][column] += dp[row - 1][column]

                if column > 0:
                    dp[row][column] += dp[row][column - 1]
                 
        return dp[m - 1][n - 1]