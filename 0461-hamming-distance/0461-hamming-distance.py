class Solution(object):
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        binaryX = bin(x)[2:].zfill(32)
        binaryY = bin(y)[2:].zfill(32)
        count = 0
        
        for index in range(0, 32):
            if binaryX[index] !=  binaryY[index]:
                count += 1
        
        return count
