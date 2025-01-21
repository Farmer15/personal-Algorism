class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        return self.combination((m + n - 2), (n - 1))

    def factorial(self, num: int) -> int:        
        return num * self.factorial(num - 1) if num > 1 else 1
    
    def combination(self, num: int, represent: int) -> int:
        if not num:
            return 1 if not represent else None

        return self.factorial(num) // (self.factorial(represent) * self.factorial(num - represent))