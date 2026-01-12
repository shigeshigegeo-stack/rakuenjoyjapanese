
import re

file_path = r'c:\Users\aubyi\Desktop\japanese-stories\src\data\stories\level_01_10.ts'

# ID -> List of exact question lines to look for (optional, for safety) -> New questions list
updates = {
    "STORY_L02_01": {
        "new_questions": [
            "あなたは よく <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みますか。",
            "これは あなたの <ruby>本<rt>ほん</rt></ruby>ですか。" # Note: keeping 2nd one if it was fine? No, replacing the whole block.
            # Actually, just replacing the whole schema_activation list for the ID is safer.
        ]
    }
}

# Simplified map of ID -> New Questions List
# Using exact new values derived from planning.
replacements = {
    "STORY_L02_01": [
        "あなたは よく <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みますか。",
        "あなたは <ruby>辞書<rt>じしょ</rt></ruby>を <ruby>持<rt>も</rt></ruby>っていますか。" # Replaced "Do you have a dictionary?" (was "Do you have a dictionary?" + "Is this your book?")
    ],
    "STORY_L02_02": [
        "あなたは <ruby>傘<rt>かさ</rt></ruby>を <ruby>持<rt>も</rt></ruby>っていますか。",
        "あなたは ノートを <ruby>持<rt>も</rt></ruby>っていますか。"
    ],
    "STORY_L02_04": [
        "あなたは <ruby>家<rt>うち</rt></ruby>の <ruby>鍵<rt>かぎ</rt></ruby>を <ruby>持<rt>も</rt></ruby>っていますか。",
        "あなたは カードを <ruby>持<rt>も</rt></ruby>っていますか。"
    ],
    "STORY_L03_04": [
        "あなたは パソコンを <ruby>持<rt>も</rt></ruby>っていますか。",
        "あなたは パソコンが <ruby>欲<rt>ほ</rt></ruby>しいですか。"
    ],
    "STORY_L10_01": [
        "あなたの <ruby>部屋<rt>へや</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
        "あなたの <ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>写真<rt>しゃしん</rt></ruby>が ありますか。"
    ]
}

def update():
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    
    for story_id, questions in replacements.items():
        # Regex to find the schema_activation block for this story ID
        # Looking for: "id": "STORY_ID" ... "schema_activation": [ ... ]
        pattern = re.compile(
            r'("id":\s*"' + story_id + r'".*?"schema_activation":\s*\[)([^\]]+)(\])',
            re.DOTALL
        )
        
        match = pattern.search(new_content)
        if match:
            # Format questions with indentation
            formatted_q = ",\n      ".join([f'"{q}"' for q in questions])
            replacement = f'\\1\n      {formatted_q}\n    \\3'
            new_content = pattern.sub(replacement, new_content)
            print(f"Updated {story_id}")
        else:
            print(f"Could not find block for {story_id}")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    update()
