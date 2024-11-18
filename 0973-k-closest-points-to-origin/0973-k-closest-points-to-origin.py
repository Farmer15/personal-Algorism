import heapq

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []
        
        for posX, posY in points:
            distance = -sqrt(posX ** 2 + posY ** 2)
            if len(heap) >= k:
                heapq.heappushpop(heap, (distance, [posX, posY]))
            else:
                heapq.heappush(heap, (distance, [posX, posY]))

        return [[posX, posY]for distance, [posX, posY] in heap]
