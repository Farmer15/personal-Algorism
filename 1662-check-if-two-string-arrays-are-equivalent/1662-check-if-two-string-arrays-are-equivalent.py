class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        str_word1 = "".join(word1)
        str_word2 = "".join(word2)

        return str_word1 == str_word2