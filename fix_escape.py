with open(r'd:\GitHub Project\CodeMastery\src\lib\curriculum\python-curriculum.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the string concatenation back to f-string with escaped braces
content = content.replace('return "short.ly/" + str(code)', 'return f"short.ly/{code}"')

with open(r'd:\GitHub Project\CodeMastery\src\lib\curriculum\python-curriculum.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Fixed f-string')
