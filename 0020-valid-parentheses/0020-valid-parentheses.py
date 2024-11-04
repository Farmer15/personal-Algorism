class Solution:
    def isValid(self, s: str) -> bool:
        BRAKET_DICT = {
            "]": "[",
            ")": "(",
            "}": "{"
        }
        
        stack_list = []
        for braket in s:
            if braket in BRAKET_DICT:
                if len(stack_list) == 0  or stack_list.pop() != BRAKET_DICT[braket]:
                    return False
            else:
                stack_list.append(braket)
        
        if len(stack_list) != 0:
            return False
        else:
            return True