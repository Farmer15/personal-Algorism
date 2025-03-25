class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        count_s = 0
        count_t = 0
        index_s = len(s) - 1
        index_t = len(t) - 1

        while index_t >= 0:
            if t[index_t] == "#":
                count_t += 1
                index_t -= 1
                continue
            else:
                if count_t > 0:
                    count_t -= 1
                    index_t -= 1
                    continue
                
            while index_s >= 0:
                if s[index_s] == "#":
                    count_s += 1
                    index_s -= 1
                    continue
                else:
                    if count_s > 0:
                        count_s -= 1
                        index_s -= 1
                        continue
                    break
            
            if s[index_s] == t[index_t] and index_s >= 0 and index_t >= 0:
                index_s -= 1
                index_t -= 1
            else:
                return False
        
        while index_s >= 0:
            if s[index_s] == "#":
                count_s += 1
                index_s -= 1
                continue
            else:
                if count_s > 0:
                    count_s -= 1
                    index_s -= 1
                    continue
                else:
                    return False

        return True

