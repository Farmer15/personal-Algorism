class Solution:
    result_list = []

    def combinationSum(self, candidates: List[int], target: int, sum_list: List[int] = [], start:int = 0) -> List[List[int]]:
        result_list = []

        def get_combination_sum(remaining: int, combination: List[int], start: int):
            if remaining == 0:
                result_list.append(combination)
            
            if remaining < 0:
                return
            
            for index in range(start, len(candidates)):
                candidate = candidates[index]
                get_combination_sum(remaining - candidate, combination + [candidate], index)

            return

        get_combination_sum(target, [], 0)

        return result_list
        