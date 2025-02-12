class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        count_task = Counter(tasks)
        max_heap = [(-count, task) for task, count in count_task.items()]
        heapq.heapify(max_heap)

        result = 0

        while max_heap:
            task_cycle = []
            task_count = 0

            while max_heap and task_count < n + 1:
                max_task = heapq.heappop(max_heap)
                task_count += 1

                if max_task[0] < -1:
                        max_task = (max_task[0] + 1, max_task[1])
                        task_cycle.append(max_task)

            for item in task_cycle:
                heapq.heappush(max_heap, item)

            result += (n + 1) if max_heap else task_count
        
        return result
            





