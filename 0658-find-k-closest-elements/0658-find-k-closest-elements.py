class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        low = 0
        high = len(arr) - k

        while low < high:
            start_point = (low + high) // 2

            if x - arr[start_point] <= arr[start_point + k] - x:
                high = start_point
            else:
                low = start_point + 1
        
        return arr[low: low + k] 

