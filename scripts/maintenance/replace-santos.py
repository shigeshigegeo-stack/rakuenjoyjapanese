import re

file_path = r'c:\Users\aubyi\Desktop\japanese-stories\src\data\stories.json'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Japanese
count_jp = content.count('サントス')
content = content.replace('サントス', 'ワトソン')

# Replace English
count_en = content.count('Santos')
content = content.replace('Santos', 'Watson')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Replaced {count_jp} occurrences of 'サントス' with 'ワトソン'.")
print(f"Replaced {count_en} occurrences of 'Santos' with 'Watson'.")
