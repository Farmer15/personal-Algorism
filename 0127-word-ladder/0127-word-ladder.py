class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
        alphabet = "abcdefghijklmnopqrstuvwxyz"
        set_wordList = { *wordList }
        queue = deque([beginWord])
        visited = set()
        count = 1

        if not endWord in set_wordList:
            return 0
        
        while queue:
            for index in range(len(queue)):
                word = queue.popleft()
                visited.add(word)

                for word_index in range(len(word)):
                    for char in alphabet:
                        if char == word[word_index]:
                            continue

                        new_word = word[:word_index] + char + word[word_index + 1:]

                        if new_word == endWord:
                            return count + 1

                        if new_word in set_wordList and not new_word in visited:
                            queue.append(new_word)
                        
            count += 1
        
        return 0

                    