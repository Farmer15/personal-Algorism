class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals = sorted(intervals, key = lambda interval: interval[0])
        new_interval = [intervals[0][0], intervals[0][1]]
        result = []

        for interval in intervals:
            if new_interval[1] >= interval[0]:
                if new_interval[0] > interval[0]:
                    new_interval[0] = interval[0]

                if new_interval[1] < interval[1]:
                    new_interval[1] = interval[1]
            else:
                result.append(new_interval)
                new_interval = interval
        
        result.append(new_interval)

        return result


