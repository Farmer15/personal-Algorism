class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        p, s = 1, 0
        while n:
            n, digit = divmod(n, 10)
            p, s = p * digit, s + digit
        return p - s