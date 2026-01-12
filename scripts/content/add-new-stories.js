const fs = require('fs');
const path = require('path');

const storiesPath = path.join('src', 'data', 'stories.json');
const rawData = fs.readFileSync(storiesPath, 'utf8');
let stories = JSON.parse(rawData);

const newStories = [
    {
        "id": "STORY_L01_01",
        "level": 1,
        "title": "はじめまして",
        "schema_activation": [
            "あなたは <ruby>学生<rt>がくせい</rt></ruby>ですか。",
            "どこから <ruby>来<rt>き</rt></ruby>ましたか。"
        ],
        "translation": "<p>Watson: \"Nice to meet you. I am Watson.\"<br>Watson: \"I came from America.\"<br>Watson: \"I am a company employee. Nice to meet you.\"</p>",
        "story_html": "<p>ワトソン「はじめまして。ワトソンです。」<br>ワトソン「アメリカから <ruby>来<rt>き</rt></ruby>ました。」<br>ワトソン「わたしは <ruby>会社員<rt>かいしゃいん</rt></ruby>です。<br>どうぞ よろしく お<ruby>願<rt>ねが</rt></ruby>いします。」</p>",
        "quizzes": [
            {
                "question": "ワトソンさんは どこから <ruby>来<rt>き</rt></ruby>ましたか。",
                "choices": ["アメリカ", "ブラジル", "ドイツ"],
                "answer_index": 0
            },
            {
                "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>ですか。",
                "choices": ["<ruby>先生<rt>せんせい</rt></ruby>", "<ruby>学生<rt>がくせい</rt></ruby>", "<ruby>会社員<rt>かいしゃいん</rt></ruby>"],
                "answer_index": 2
            }
        ]
    },
    {
        "id": "STORY_L01_02",
        "level": 1,
        "title": "アナさんは <ruby>学生<rt>がくせい</rt></ruby>です",
        "schema_activation": [
            "あの <ruby>人<rt>ひと</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>ですか。",
            "あの <ruby>人<rt>ひと</rt></ruby>も <ruby>会社員<rt>かいしゃいん</rt></ruby>ですか。"
        ],
        "translation": "<p>Watson: \"Who is that person?\"<br>Mr. Yamada: \"That is Ana. She is a student at Sakura University.\"<br>Watson: \"Is she American?\"<br>Mr. Yamada: \"No, she is not American. She is German.\"</p>",
        "story_html": "<p>ワトソン「あの <ruby>人<rt>ひと</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>ですか。」<br><ruby>山田<rt>やまだ</rt></ruby>「あの方は アナさんです。<br>さくら<ruby>大学<rt>だいがく</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>です。」<br>ワトソン「アメリカ<ruby>人<rt>じん</rt></ruby>ですか。」<br><ruby>山田<rt>やまだ</rt></ruby>「いいえ、アメリカ<ruby>人<rt>じん</rt></ruby>じゃありません。<br>ドイツ<ruby>人<rt>じん</rt></ruby>です。」</p>",
        "quizzes": [
            {
                "question": "アナさんは <ruby>何<rt>なに</rt></ruby>ですか。",
                "choices": ["<ruby>先生<rt>せんせい</rt></ruby>", "<ruby>会社員<rt>かいしゃいん</rt></ruby>", "<ruby>学生<rt>がくせい</rt></ruby>"],
                "answer_index": 2
            },
            {
                "question": "アナさんは アメリカ<ruby>人<rt>じん</rt></ruby>ですか。",
                "choices": ["はい", "いいえ"],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "STORY_L01_03",
        "level": 1,
        "title": "<ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>先生<rt>せんせい</rt></ruby>です",
        "schema_activation": [
            "あなたは <ruby>先生<rt>せんせい</rt></ruby>ですか。",
            "あなたの <ruby>名前<rt>なまえ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。"
        ],
        "translation": "<p>Professor Yamada: \"I am Yamada. I am a teacher.\"<br>Professor Yamada: \"Watson, are you a teacher, too?\"<br>Watson: \"No, I am not a teacher. I am an engineer.\"</p>",
        "story_html": "<p><ruby>山田<rt>やまだ</rt></ruby>「わたしは <ruby>山田<rt>やまだ</rt></ruby>です。<ruby>先生<rt>せんせい</rt></ruby>です。」<br><ruby>山田<rt>やまだ</rt></ruby>「ワトソンさんも <ruby>先生<rt>せんせい</rt></ruby>ですか。」<br>ワトソン「いいえ、わたしは <ruby>先生<rt>せんせい</rt></ruby>じゃありません。<br>エンジニアです。」</p>",
        "quizzes": [
            {
                "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>何<rt>なに</rt></ruby>ですか。",
                "choices": ["<ruby>先生<rt>せんせい</rt></ruby>", "エンジニア", "<ruby>学生<rt>がくせい</rt></ruby>"],
                "answer_index": 0
            },
            {
                "question": "ワトソンさんは <ruby>先生<rt>せんせい</rt></ruby>ですか。",
                "choices": ["はい", "いいえ"],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "STORY_L01_04",
        "level": 1,
        "title": "キムさんは <ruby>韓国人<rt>かんこくじん</rt></ruby>です",
        "schema_activation": [
            "キムさんは <ruby>学生<rt>がくせい</rt></ruby>ですか。",
            "キムさんも <ruby>日本人<rt>にほんじん</rt></ruby>ですか。"
        ],
        "translation": "<p>Kim: \"Nice to meet you. I am Kim.\"<br>Kim: \"I am from Korea.\"<br>Watson: \"Kim is a student, too. She is not a teacher.\"</p>",
        "story_html": "<p>キム「はじめまして。キムです。」<br>キム「<ruby>韓国<rt>かんこく</rt></ruby>から <ruby>来<rt>き</rt></ruby>ました。」<br>ワトソン「キムさんも <ruby>学生<rt>がくせい</rt></ruby>です。<br><ruby>先生<rt>せんせい</rt></ruby>じゃありません。」</p>",
        "quizzes": [
            {
                "question": "キムさんは どこから <ruby>来<rt>き</rt></ruby>ましたか。",
                "choices": ["ドイツ", "<ruby>韓国<rt>かんこく</rt></ruby>", "日本"],
                "answer_index": 1
            },
            {
                "question": "キムさんは <ruby>先生<rt>せんせい</rt></ruby>ですか。",
                "choices": ["はい", "いいえ"],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "STORY_L02_01",
        "level": 2,
        "title": "これは <ruby>何<rt>なに</rt></ruby>ですか",
        "schema_activation": [
            "それは あなたの <ruby>本<rt>ほん</rt></ruby>ですか。",
            "それは じしょですか。"
        ],
        "translation": "<p>Watson: \"What is this?\"<br>Ana: \"That is a dictionary.\"<br>Watson: \"Is it a Japanese dictionary?\"<br>Ana: \"No, it is an English dictionary. It is my dictionary.\"</p>",
        "story_html": "<p>ワトソン「これは <ruby>何<rt>なに</rt></ruby>ですか。」<br>アナ「それは <ruby>辞書<rt>じしょ</rt></ruby>です。」<br>ワトソン「<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>ですか。」<br>アナ「いいえ、<ruby>英語<rt>えいご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>です。<br>わたしの <ruby>辞書<rt>じしょ</rt></ruby>です。」</p>",
        "quizzes": [
            {
                "question": "それは <ruby>何<rt>なに</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>ですか。",
                "choices": ["<ruby>日本語<rt>にほんご</rt></ruby>", "<ruby>英語<rt>えいご</rt></ruby>", "ドイツ<ruby>語<rt>ご</rt></ruby>"],
                "answer_index": 1
            },
            {
                "question": "それは <ruby>誰<rt>だれ</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>ですか。",
                "choices": ["ワトソンさん", "アナさん", "キムさん"],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "STORY_L02_02",
        "level": 2,
        "title": "この <ruby>傘<rt>かさ</rt></ruby>は あなたのですか",
        "schema_activation": [
            "その <ruby>傘<rt>かさ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>のですか。",
            "これは あなたの ノートですか。"
        ],
        "translation": "<p>Kim: \"Watson, is this umbrella yours?\"<br>Watson: \"No, it is not mine. It is Ana's.\"<br>Kim: \"Is this notebook Ana's, too?\"<br>Watson: \"Yes, that is hers.\"</p>",
        "story_html": "<p>キム「ワトソンさん、この <ruby>傘<rt>かさ</rt></ruby>は あなたのですか。」<br>ワトソン「いいえ、わたしのじゃありません。<br>アナさんのです。」<br>キム「この ノートも アナさんのですか。」<br>ワトソン「はい、それは アナさんのです。」</p>",
        "quizzes": [
            {
                "question": "この <ruby>傘<rt>かさ</rt></ruby>は ワトソンさんのですか。",
                "choices": ["はい", "いいえ"],
                "answer_index": 1
            },
            {
                "question": "ノートは <ruby>誰<rt>だれ</rt></ruby>のですか。",
                "choices": ["ワトソンさん", "キムさん", "アナさん"],
                "answer_index": 2
            }
        ]
    },
    {
        "id": "STORY_L02_03",
        "level": 2,
        "title": "お<ruby>土産<rt>みやげ</rt></ruby>の チョコレート",
        "schema_activation": [
            "それは <ruby>何<rt>なに</rt></ruby>ですか。",
            "それは どこから <ruby>来<rt>き</rt></ruby>ましたか。"
        ],
        "translation": "<p>Watson: \"Ana, this is a souvenir for you.\"<br>Ana: \"Thank you. What is this?\"<br>Watson: \"It is chocolate. It is chocolate from America.\"</p>",
        "story_html": "<p>ワトソン「アナさん、これは お<ruby>土産<rt>みやげ</rt></ruby>です。」<br>アナ「ありがとうございます。<ruby>何<rt>なに</rt></ruby>ですか。」<br>ワトソン「チョコレートです。<br>アメリカの チョコレートです。」</p>",
        "quizzes": [
            {
                "question": "それは <ruby>何<rt>なに</rt></ruby>ですか。",
                "choices": ["カメラ", "チョコレート", "ラジオ"],
                "answer_index": 1
            },
            {
                "question": "それは どこの チョコレートですか。",
                "choices": ["ドイツ", "日本", "アメリカ"],
                "answer_index": 2
            }
        ]
    },
    {
        "id": "STORY_L02_04",
        "level": 2,
        "title": "この <ruby>鍵<rt>かぎ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>のですか",
        "schema_activation": [
            "その <ruby>鍵<rt>かぎ</rt></ruby>は あなたのですか。",
            "それは <ruby>誰<rt>だれ</rt></ruby>のですか。"
        ],
        "translation": "<p>Ana: \"Whose key is this? Is it yours, Watson?\"<br>Watson: \"No, it's not. It is Mr. Yamada's key.\"<br>Ana: \"I see. And this card?\"<br>Watson: \"That is my card.\"</p>",
        "story_html": "<p>アナ「この <ruby>鍵<rt>かぎ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>のですか。<br>ワトソンさんのですか。」<br>ワトソン「いいえ、ちがいます。<ruby>山田<rt>やまだ</rt></ruby>さんの <ruby>鍵<rt>かぎ</rt></ruby>です。」<br>アナ「そうですか。じゃあ、この カードは？」<br>ワトソン「それは わたしの カードです。」</p>",
        "quizzes": [
            {
                "question": "<ruby>鍵<rt>かぎ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>のですか。",
                "choices": ["アナさん", "ワトソンさん", "<ruby>山田<rt>やまだ</rt></ruby>さん"],
                "answer_index": 2
            },
            {
                "question": "カードは <ruby>誰<rt>だれ</rt></ruby>のですか。",
                "choices": ["ワトソンさん", "アナさん", "<ruby>山田<rt>やまだ</rt></ruby>さん"],
                "answer_index": 0
            }
        ]
    },
    {
        "id": "STORY_L03_01",
        "level": 3,
        "title": "<ruby>受付<rt>うけつけ</rt></ruby>は あそこです",
        "schema_activation": [
            "トイレは どこですか。",
            "<ruby>電話<rt>でんわ</rt></ruby>は どこですか。"
        ],
        "translation": "<p>Watson: \"Where is the reception?\"<br>Staff: \"The reception is over there.\"<br>Watson: \"Thank you. And where is the toilet?\"<br>Staff: \"It is right here.\"</p>",
        "story_html": "<p>ワトソン「すみません、<ruby>受付<rt>うけつけ</rt></ruby>は どこですか。」<br><ruby>人<rt>ひと</rt></ruby>「<ruby>受付<rt>うけつけ</rt></ruby>は あそこです。」<br>ワトソン「ありがとうございます。<br>トイレは どこですか。」<br><ruby>人<rt>ひと</rt></ruby>「トイレは ここです。」</p>",
        "quizzes": [
            {
                "question": "<ruby>受付<rt>うけつけ</rt></ruby>は どこですか。",
                "choices": ["ここ", "そこ", "あそこ"],
                "answer_index": 2
            },
            {
                "question": "トイレは どこですか。",
                "choices": ["ここ", "そこ", "あそこ"],
                "answer_index": 0
            }
        ]
    },
    {
        "id": "STORY_L03_02",
        "level": 3,
        "title": "<ruby>教室<rt>きょうしつ</rt></ruby>は 2<ruby>階<rt>かい</rt></ruby>です",
        "schema_activation": [
            "<ruby>教室<rt>きょうしつ</rt></ruby>は どこですか。",
            "<ruby>先生<rt>せんせい</rt></ruby>は どこですか。"
        ],
        "translation": "<p>Ana: \"Watson, where is the classroom?\"<br>Watson: \"The classroom is on the 2nd floor.\"<br>Ana: \"Where is Professor Yamada?\"<br>Watson: \"He is in the office. The office is on the 1st floor.\"</p>",
        "story_html": "<p>アナ「ワトソンさん、<ruby>教室<rt>きょうしつ</rt></ruby>は どこですか。」<br>ワトソン「<ruby>教室<rt>きょうしつ</rt></ruby>は 2<ruby>階<rt>かい</rt></ruby>です。」<br>アナ「<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は どこですか。」<br>ワトソン「<ruby>事務室<rt>じむしつ</rt></ruby>です。<br><ruby>事務室<rt>じむしつ</rt></ruby>は 1<ruby>階<rt>かい</rt></ruby>です。」</p>",
        "quizzes": [
            {
                "question": "<ruby>教室<rt>きょうしつ</rt></ruby>は <ruby>何階<rt>なんがい</rt></ruby>ですか。",
                "choices": ["1<ruby>階<rt>かい</rt></ruby>", "2<ruby>階<rt>かい</rt></ruby>", "3<ruby>階<rt>かい</rt></ruby>"],
                "answer_index": 1
            },
            {
                "question": "<ruby>先生<rt>せんせい</rt></ruby>は どこですか。",
                "choices": ["<ruby>教室<rt>きょうしつ</rt></ruby>", "<ruby>食堂<rt>しょくどう</rt></ruby>", "<ruby>事務室<rt>じむしつ</rt></ruby>"],
                "answer_index": 2
            }
        ]
    },
    {
        "id": "STORY_L03_03",
        "level": 3,
        "title": "ワトソンさんの <ruby>会社<rt>かいしゃ</rt></ruby>",
        "schema_activation": [
            "お<ruby>国<rt>くに</rt></ruby>は どちらですか。",
            "あなたの <ruby>会社<rt>かいしゃ</rt></ruby>は どこですか。"
        ],
        "translation": "<p>Professor Yamada: \"Watson, which country are you from?\"<br>Watson: \"My country is America.\"<br>Professor Yamada: \"Where is your company?\"<br>Watson: \"It is in Ginza.\"</p>",
        "story_html": "<p><ruby>山田<rt>やまだ</rt></ruby>「ワトソンさん、お<ruby>国<rt>くに</rt></ruby>は どちらですか。」<br>ワトソン「アメリカです。」<br><ruby>山田<rt>やまだ</rt></ruby>「<ruby>会社<rt>かいしゃ</rt></ruby>は どこですか。」<br>ワトソン「<ruby>銀座<rt>ぎんざ</rt></ruby>に あります。」</p>",
        "quizzes": [
            {
                "question": "ワトソンさんの お<ruby>国<rt>くに</rt></ruby>は どこですか。",
                "choices": ["日本", "ドイツ", "アメリカ"],
                "answer_index": 2
            },
            {
                "question": "<ruby>会社<rt>かいしゃ</rt></ruby>は どこですか。",
                "choices": ["<ruby>渋谷<rt>しぶや</rt></ruby>", "<ruby>新宿<rt>しんじゅく</rt></ruby>", "<ruby>銀座<rt>ぎんざ</rt></ruby>"],
                "answer_index": 2
            }
        ]
    },
    {
        "id": "STORY_L03_04",
        "level": 3,
        "title": "この コンピューターは いくらですか",
        "schema_activation": [
            "これは どこの パソコンですか。",
            "それは いくらですか。"
        ],
        "translation": "<p>Watson: \"How much is this computer?\"<br>Staff: \"It is 150,000 yen.\"<br>Watson: \"Is it a Japanese computer?\"<br>Staff: \"Yes, that's right.\"</p>",
        "story_html": "<p>ワトソン「この パソコンは いくらですか。」<br><ruby>人<rt>ひと</rt></ruby>「150,000<ruby>円<rt>えん</rt></ruby>です。」<br>ワトソン「日本の パソコンですか。」<br><ruby>人<rt>ひと</rt></ruby>「はい、そうです。」</p>",
        "quizzes": [
            {
                "question": "パソコンは いくらですか。",
                "choices": ["50,000<ruby>円<rt>えん</rt></ruby>", "100,000<ruby>円<rt>えん</rt></ruby>", "150,000<ruby>円<rt>えん</rt></ruby>"],
                "answer_index": 2
            },
            {
                "question": "それは どこの パソコンですか。",
                "choices": ["日本", "アメリカ", "<ruby>韓国<rt>かんこく</rt></ruby>"],
                "answer_index": 0
            }
        ]
    }
];

let addedCount = 0;
newStories.forEach(newStory => {
    // Check if ID exists (it shouldn't, but safe to check)
    const index = stories.findIndex(s => s.id === newStory.id);
    if (index !== -1) {
        stories[index] = newStory;
        console.log(`Updated existing story: ${newStory.id}`);
    } else {
        stories.push(newStory);
        addedCount++;
    }
});

// Sort again by level
stories.sort((a, b) => {
    // Sort logic: numeric levels first, then N levels
    const getLvlNum = (lvl) => {
        if (typeof lvl === 'number') return lvl;
        if (typeof lvl === 'string' && lvl.startsWith('Level')) {
            return parseInt(lvl.match(/\d+/)[0], 10);
        }
        return 9999;
    };
    return getLvlNum(a.level) - getLvlNum(b.level);
});

fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');
console.log(`Successfully added/updated ${addedCount} stories.`);
