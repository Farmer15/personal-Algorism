class Solution:
    def climbStairs(self, n: int) -> int:
        chached_list = [1, 1, 2]
        count = 3

        while count <= n:
            chached_list.append(chached_list[count - 1] + chached_list[count - 2])
            count += 1
        
        return chached_list[n]
