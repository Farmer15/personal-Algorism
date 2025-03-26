class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        def search_near_index(arr: List[int], num: int) -> int:
            start, end = 0, len(arr) - 1
            result = -1

            while start <= end:
                mid = (start + end) // 2
                if arr[mid] <= num:
                    result = mid
                    start = mid + 1
                else:
                    end = mid - 1

            if start <= 0:
                return 0
            
            if start > len(arr) - 1:
                return len(arr) - 1
            
            if arr[start - 1] - num < num - arr[start]:
                return start
            else:
                return start - 1

        middle = search_near_index(arr, x)
        left = middle - 1
        right = middle + 1
        result = deque([arr[middle]])

        while k > 1:
            if left < 0:
                result.append(arr[right])
                right += 1
                k -= 1
                continue
            
            if right > len(arr) - 1:
                result.appendleft(arr[left])
                left -= 1
                k -= 1
                continue

            if x - arr[left] <= arr[right] - x:
                result.appendleft(arr[left])
                left -= 1
            else:
                result.append(arr[right])
                right += 1
            
            k -= 1

        return list(result)
