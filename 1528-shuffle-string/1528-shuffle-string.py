class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        result_list = [0 for index in range(len(s))]
        
        for index in range(len(indices)):
            position = indices[index]
            result_list[position] = s[index]
        
        return "".join(result_list)