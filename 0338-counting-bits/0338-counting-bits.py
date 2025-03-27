class Solution:
    def countBits(self, n: int) -> List[int]:
        target_n = n
        self.dp = [0] + [None] * n

        while target_n > 0:
            if not target_n in self.dp:
                self.get_bits_counting(target_n)

            target_n -= 1
        
        return self.dp

    def get_bits_counting(self, num):
        if not self.dp[num] is None:
            return self.dp[num]
        
        share = num // 2
        remainder = num % 2
        self.dp[num] = remainder + self.get_bits_counting(share)

        return self.dp[num]


        
        

        


