class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        initialNum = image[sr][sc]

        return self.changeColor(image, sr, sc, color, initialNum)

    def changeColor(self, image: List[List[int]], sr: int, sc: int, color: int, initialNum: int) -> List[List[int]]:
        if sr < 0 or sc < 0 or sr >= len(image) or sc >= len(image[0]) or image[sr][sc] != initialNum or image[sr][sc] == color :
            return image

        initial_color, image[sr][sc] = image[sr][sc], color

        self.changeColor(image, sr - 1, sc, color, initial_color)
        self.changeColor(image, sr + 1, sc, color, initial_color)
        self.changeColor(image, sr, sc - 1, color, initial_color)
        self.changeColor(image, sr, sc + 1, color, initial_color)

        return image