with open(r'd:\GitHub Project\CodeMastery\src\lib\curriculum\python-curriculum.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('hints: ["name, version", packages],', 'hints: ["name, version", "packages"],')

with open(r'd:\GitHub Project\CodeMastery\src\lib\curriculum\python-curriculum.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed")
