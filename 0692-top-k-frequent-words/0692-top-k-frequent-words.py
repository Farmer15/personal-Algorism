class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        words.sort()
        word_count = Counter(words).items()
        return [word for [word, counting] in sorted(word_count, key=lambda x: x[1], reverse=True)[:k]]
