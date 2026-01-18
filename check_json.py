import json

try:
    with open('src/data/part1/section4.json', 'r', encoding='utf-8') as f:
        content = f.read()
    json.loads(content)
    print("Valid JSON")
except json.JSONDecodeError as e:
    print(f"Invalid JSON: {e}")
    # Show context
    start = max(0, e.pos - 50)
    end = min(len(content), e.pos + 50)
    print(f"Context: {content[start:end]}")
