class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int, initialNum: int = None) -> List[List[int]]:
        if initialNum is None: 
            initialNum = image[sr][sc]
        if sr < 0 or sc < 0 or sr >= len(image) or sc >= len(image[0]) or image[sr][sc] != initialNum or image[sr][sc] == color :
            return image
        initial_color = image[sr][sc]
        image[sr][sc] = color

        self.floodFill(image, sr - 1, sc, color, initial_color)
        self.floodFill(image, sr + 1, sc, color, initial_color)
        self.floodFill(image, sr, sc - 1, color, initial_color)
        self.floodFill(image, sr, sc + 1, color, initial_color)

        return image