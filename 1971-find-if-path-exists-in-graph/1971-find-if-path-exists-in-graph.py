class Solution:
    def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
        graph = defaultdict(list)

        for node1, node2 in edges:
            graph[node1].append(node2)
            graph[node2].append(node1)
        
        distance_dict = { node: float(inf) for node in range(n) }
        distance_dict[source] = 0
        priority_queue = [(0, source)]

        while priority_queue:
            current_distance, current_node = heapq.heappop(priority_queue)

            if current_node == destination:
                return True
            
            if current_distance > distance_dict[current_node]:
                continue
            
            for neighbor_node in graph[current_node]:
                disatnce = current_distance + 1
                
                if disatnce < distance_dict[neighbor_node]:
                    distance_dict[neighbor_node] = disatnce
                    heapq.heappush(priority_queue, (disatnce, neighbor_node))
            
        return False



       
            
            

