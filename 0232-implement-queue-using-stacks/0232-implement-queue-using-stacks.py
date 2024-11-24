class MyQueue:
    def __init__(self):
        self.wait_stack = []
        self.execute_stack = []
    def push(self, x: int) -> None:
        self.wait_stack.append(x)
    def pop(self) -> int:
        self.peek()
        return self.execute_stack.pop()
    def peek(self) -> int:
        if len(self.execute_stack) == 0:
            while self.wait_stack:
                self.execute_stack.append(self.wait_stack.pop())

        return self.execute_stack[-1]
    def empty(self) -> bool:
        return len(self.wait_stack) == 0 and len(self.execute_stack) == 0