class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = defaultdict(list)

        for word in strs:
            key = tuple(sorted(word))
            result[key].append(word)
        
        print(result)
        return list(result.values())