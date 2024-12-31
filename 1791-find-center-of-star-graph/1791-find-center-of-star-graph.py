from functools import reduce

class Solution:
    def findCenter(self, edges: List[List[int]]) -> int:
        return list(reduce(lambda acc_intersection, set_edges: set(acc_intersection) & set(set_edges), edges))[0]