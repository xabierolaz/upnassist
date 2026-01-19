import os
import re

files = [
    'src/data/part1/section1.json',
    'src/data/part1/section4.json'
]

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    if 'section1.json' in file_path:
        # Regex replace ":-)" -> \":-)\"
        # In regex: ":-\)" -> \\":-\)\\"
        content = re.sub(r'":-\)"', r'\\":-)\\"', content)
        
    if 'section4.json' in file_path:
        # print(f"...") -> print(f\"...\")
        # Regex: print\(f"(.*?)"\)
        # Sub: print(f\"$1\") (using group 1)
        # Python re uses \1
        content = re.sub(r'print\(f"(.*?)"\)', r'print(f\\"\1\\")', content)
        # Also input("...") -> input(\"...\")
        content = re.sub(r'input\("(.*?)"\)', r'input(\\"\1\\")', content)
        # Also print("...") -> print(\"...\")
        content = re.sub(r'print\("(.*?)"\)', r'print(\\"\1\\")', content)

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {file_path}")
    else:
        print(f"No changes for {file_path}")
