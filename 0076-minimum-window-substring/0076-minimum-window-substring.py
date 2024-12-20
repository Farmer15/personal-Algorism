class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if (len(s) < len(t)):
            return ""

        char_count = Counter(t)
        store_string = deque([])
        result = ""

        for s_char in s:
            if not store_string and not s_char in char_count:
                continue
            
            store_string.append(s_char)

            if s_char in char_count:
                char_count[s_char] -= 1

                if s_char == store_string[0] and len(store_string) != 1 and char_count[s_char] < 0:
                    remove_char = store_string.popleft()

                    if remove_char in char_count:
                        char_count[remove_char] += 1

                    while not store_string[0] in char_count or char_count[store_string[0]] < 0:
                        remove_char = store_string.popleft()

                        if remove_char in char_count:
                            char_count[remove_char] += 1

                if char_count[s_char] == 0:
                    if max(char_count.values()) <= 0:
                        if not result or len(result) > len(store_string):
                            result = store_string.copy()

        return "".join(result)

            







