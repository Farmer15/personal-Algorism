class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        operator = {
          "+": lambda num1, num2: int(num1) + int(num2),
          "-": lambda num1, num2: int(num1) - int(num2),
          "*": lambda num1, num2: int(num1) * int(num2),
          "/": lambda num1, num2: int(num1) / int(num2),

        }

        for token in tokens:
            if token in operator:
                operand_second = stack.pop()
                operand_first = stack.pop()
                stack.append(operator[token](operand_first, operand_second))
            else:
                stack.append(token)

          
        return int(stack.pop())

