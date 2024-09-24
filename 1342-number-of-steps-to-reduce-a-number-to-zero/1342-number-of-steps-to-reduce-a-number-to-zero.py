class Solution:
    def numberOfSteps(self, num: int) -> int:
        target_num = num
        count = 0
        
        while target_num:
            if target_num % 2 == 0:
                target_num /= 2
            else:
                target_num -= 1
                
            count += 1

        return count