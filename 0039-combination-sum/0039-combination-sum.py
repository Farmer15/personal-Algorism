class Solution:
    result_list = []

    def combinationSum(self, candidates: List[int], target: int, sum_list: List[int] = [], start:int = 0) -> List[List[int]]:
        result_list = []

        def get_combination_sum(remaining: int, combination: List[int], start: int):
            if remaining == 0:
                result_list.append(list(combination))  # 깊은 복사로 결과 저장
                return

            if remaining < 0:
                return
            
            for i in range(start, len(candidates)):
                combination.append(candidates[i])
                get_combination_sum(remaining - candidates[i], combination, i) 
                combination.pop()

        get_combination_sum(target, [], 0)
        return result_list
        