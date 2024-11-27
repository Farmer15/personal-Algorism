class Trie:

    def __init__(self):
        self.store_strings = {
          "total_string": ""
        }

    def insert(self, word: str) -> None:
        self.store_strings[word] = True
        self.store_strings["total_string"] += " " + word

    def search(self, word: str) -> bool:
        return word in self.store_strings

    def startsWith(self, prefix: str) -> bool:
        return  " " + prefix in self.store_strings["total_string"]


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)