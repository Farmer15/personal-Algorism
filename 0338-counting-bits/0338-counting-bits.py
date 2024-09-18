class Solution(object):
    def countBits(self, n):
        """
        :type n: int
        :rtype: List[int]
        """
        result = []

        for num in range(0, n + 1):
            num_binary = bin(num)
            count = 0

            for binary_num in num_binary:
                if binary_num == "1":
                    count += 1
            
            result.append(count)
        
        return result
                
            
        