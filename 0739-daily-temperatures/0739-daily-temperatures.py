class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        result = [0] * len(temperatures)
        stack = []

        for current_index in range(len(temperatures) - 1, -1, -1):
            current_temperature = temperatures[current_index]

            while stack and temperatures[stack[-1]] <= current_temperature:
                stack.pop()
            
            if stack:
                result[current_index] = stack[-1] - current_index 

            stack.append(current_index)
        
        return result

