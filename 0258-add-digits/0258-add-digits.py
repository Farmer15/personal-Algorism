class Solution(object):
    def addDigits(self, num):
        """
        :type num: int
        :rtype: int
        """
        num_list = list(str(num))
        result = 0

        for number in num_list:
            result += int(number)

        if result >= 10:
            return Solution.addDigits(self, result)
        else:
            return result