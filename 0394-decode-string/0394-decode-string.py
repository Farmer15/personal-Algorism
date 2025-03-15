class Solution:
    def decodeString(self, s: str) -> str:
        start_index = None
        result = ""
        num_store = ""
        braket_count = 0

        for s_index in range(len(s)):
            cur_char = s[s_index]

            if cur_char == "[":
                braket_count += 1
                
                if braket_count == 1:
                    start_index = s_index + 1
                continue

            if cur_char == "]":
                braket_count -= 1

                if braket_count == 0:
                    result += (int(num_store) if num_store else 1) * self.decodeString(s[start_index: s_index])
                    num_store = ""
                continue
                    
            if cur_char.isdigit() and braket_count == 0:
                num_store += cur_char
            elif braket_count == 0:
                result += cur_char
        
        return result
