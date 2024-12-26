class MedianFinder:

    def __init__(self):
        self.min_heap = []
        self.max_heap = []
    
    def addNum(self, num: int) -> None:
        if not self.min_heap and not self.max_heap:
            heapq.heappush(self.max_heap, -num)
            print(self.min_heap, self.max_heap)
            return
        
        medium_element = self.findMedian()

        if num > medium_element:
            heapq.heappush(self.min_heap, num)
        else:
            heapq.heappush(self.max_heap, -num)
 
    def findMedian(self) -> float:
        if -1 <= len(self.min_heap) - len(self.max_heap) <= 1:
            if (len(self.min_heap) + len(self.max_heap)) % 2 == 0:
                return (self.min_heap[0] + -self.max_heap[0]) / 2
            else:
                return -self.max_heap[0] if len(self.min_heap) < len(self.max_heap) else self.min_heap[0]
        else:
            while not -1 <= len(self.min_heap) - len(self.max_heap) <= 1:
                if len(self.min_heap) > len(self.max_heap):
                    heapq.heappush(self.max_heap, -heapq.heappop(self.min_heap))
                else:
                    heapq.heappush(self.min_heap, -heapq.heappop(self.max_heap))
            
            return self.findMedian()


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()