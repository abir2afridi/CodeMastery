with open(r'd:\GitHub Project\CodeMastery\src\lib\curriculum\python-curriculum.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace f-strings with .format() calls to avoid parsing conflicts
# f"short.ly/{code}" -> "short.ly/{}".format(code)
import re

# Pattern to match f-strings with simple variable interpolation
# This is a simplified replacement - complex f-strings would need more care
content = re.sub(r'f"([^"]*?)\{([^}]+)\}([^"]*?)"', r'"\1{}\3".format(\2)', content)
content = re.sub(r"f'([^']*?)\{([^}]+)\}([^']*?)'", r"'\1{}\3'.format(\2)", content)

with open(r'd:\GitHub Project\CodeMastery\src\lib\curriculum\python-curriculum.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print('Replaced f-strings with .format()')
