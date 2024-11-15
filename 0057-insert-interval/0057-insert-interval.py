class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        start_list = []
        end_list = []
        start_pointer = end_pointer = 0
        result_interval = []
        result = []
        count = 0

        intervals.append(newInterval)
        for interval in intervals:
            start_list.append(interval[0])
            end_list.append(interval[1])
        
        start_list.sort()
        end_list.sort()
        while start_pointer <= len(start_list) - 1 or end_pointer <= len(end_list) - 1:
            print(start_pointer, end_pointer)
            if (start_pointer == len(start_list) or end_pointer == len(end_list)):
                break

            if len(result_interval) == 2:
                if result_interval[1] >= start_list[start_pointer]:
                    result_interval.pop()
                    start_pointer += 1 
                else:
                    result.append(result_interval)
                    result_interval = []
                    result_interval.append(start_list[start_pointer])
                    start_pointer += 1

            if len(result_interval) == 0:
                result_interval.append(start_list[start_pointer])
                start_pointer += 1
        
            if len(result_interval) == 1:
                result_interval.append(end_list[end_pointer])
                end_pointer += 1

        result.append(result_interval)

        return result      
      


            
