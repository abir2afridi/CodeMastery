with open(r'd:\GitHub Project\CodeMastery\src\lib\curriculum\python-curriculum.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the specific f-string issue at line 5739
# Change f\"short.ly/{code}\" to f'short.ly/{code}'
content = content.replace('return f\\"short.ly/{code}\\"', "return f'short.ly/{code}'")

with open(r'd:\GitHub Project\CodeMastery\src\lib\curriculum\python-curriculum.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed f-string")
