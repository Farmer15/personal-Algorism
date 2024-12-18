class TimeMap:

    def __init__(self):
        self.timestamp_map = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if not key in self.timestamp_map:
            self.timestamp_map[key] = []
        
        self.timestamp_map[key].append((value, timestamp))

    def get(self, key: str, timestamp: int) -> str:
        if not key in self.timestamp_map:
            return ""
        
        key_of_value_list= self.timestamp_map[key]
        start, end = 0, len(key_of_value_list) - 1
        result = ""

        while start <= end:
            mid = (start + end) // 2

            if key_of_value_list[mid][1] <= timestamp:
                result = key_of_value_list[mid][0]
                start = mid + 1
            else:
                end = mid - 1

        return result


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)