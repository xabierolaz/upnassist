import re
import os

path = 'src/data/part1/section4.json'
if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    def fix_string(match):
        s = match.group(0)
        # Replace literal newline with \n
        inner = s[1:-1]
        if '\n' in inner:
            print("Fixed a multiline string")
            fixed_inner = inner.replace('\n', '\\n')
            return f'"{fixed_inner}"'
        return s

    pattern = r'"(?:[^"\\]|\\.)*"'
    new_content = re.sub(pattern, fix_string, content, flags=re.DOTALL)

    if content != new_content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {path}")
    else:
        print(f"No changes for {path}")
else:
    print(f"File not found: {path}")

