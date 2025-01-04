class Solution:

    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        child_word = deque([""])
        seen = {} 

        while child_word:
            child = child_word.popleft()

            for word in wordDict:
                compressed_word = child + word 

                if compressed_word == s:
                    return True

                if compressed_word in s and not compressed_word in seen:
                    seen[compressed_word] = True
                    child_word.append(child + word)

        return False
