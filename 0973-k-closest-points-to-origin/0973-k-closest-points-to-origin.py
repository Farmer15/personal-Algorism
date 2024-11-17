class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        origin_points= list(map(lambda point: [sqrt(point[0] ** 2 + point[1] ** 2), point], points))
        return list(map(lambda point: point[1], sorted(origin_points, key = lambda point: point[0], reverse=False)))[:k]
