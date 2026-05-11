with open(r'd:\GitHub Project\CodeMastery\src\lib\curriculum\python-curriculum.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the specific problematic f-string with string concatenation
# f"short.ly/{code}" -> "short.ly/" + str(code)
content = content.replace('return f\'short.ly/{code}\'', 'return "short.ly/" + str(code)')

with open(r'd:\GitHub Project\CodeMastery\src\lib\curriculum\python-curriculum.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed all f-strings")
