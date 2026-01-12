import re
import os

file_path = r'c:\Users\aubyi\Desktop\japanese-stories\src\data\stories.json'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern: <ruby>KATAKANA<rt>...</rt></ruby>
# KATAKANA range roughly: \u30A1-\u30FA\u30FC (include nakaguro and long vowel)
# \u30A1 is small a. \u30F6 is small ke. \u30FC is long vowel. \u30FB is dot.
# Using explicit ranges or character classes. Since python re supports unicode properties poorly without flag, just use range.
# Range [ァ-ヶー・] covers standard katakana.

pattern = r'<ruby>([ァ-ヶー・]+)<rt>.*?</rt></ruby>'

matches = re.findall(pattern, content)
print(f"Found {len(matches)} matches to replace.")

# Replace
new_content = re.sub(pattern, r'\1', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replacement complete.")
