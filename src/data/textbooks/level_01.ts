import { Textbook } from './types';

export const textbooks_level_01: Textbook[] = [
    {
        "id": "TEXTBOOK_L01_01",
        "level": 1,
        "title": "はじめまして",
        "schema_activation": [
            "あなたの<ruby>名前<rt>なまえ</rt></ruby>はなんですか",
            "アナタは何<ruby>歳<rt>さい</rt></ruby>ですか"
        ],
        "translation": "<p>Yamada-san is Japanese. He is a teacher at Sakura University. Yamada-san is 45 years old.<br>Ana-san is not Japanese. She is German. She is 20 years old. Ana-san is a student at Sakura University. She is not a teacher.<br>Yamada-san is not a student. He is a teacher.<br>Yamada-san is not a company employee. Ana-san is also not a company employee.<br>Ana-san is 20 years old. Yamada-san is not 20 years old. He is 45 years old.<br>Yamada-san is a teacher at Sakura University. Ana-san is a student at Sakura University.<br>Ana-san is a German student. Yamada-san is a Japanese teacher.<br>Ana-san is not a teacher. She is a student. Yamada-san is not a student. He is a teacher.</p>",
        "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>日本人<rt>にほんじん</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>です。45<ruby>歳<rt>さい</rt></ruby>です。<br>アナさんはドイツ<ruby>人<rt>じん</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。20<ruby>歳<rt>さい</rt></ruby>です。<br><span id=\"L01_01_Q1\">アナさんは</span><ruby>先生<rt>せんせい</rt></ruby>じゃありません。<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>学生<rt>がくせい</rt></ruby>じゃありません。<br><ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。アナさんも<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。</p>",
        "quizzes": [
            {
                "question": "アナさんは<ruby>先生<rt>せんせい</rt></ruby>ですか。",
                "target_id": "L01_01_Q1",
                "choices": [
                    "はい、<ruby>先生<rt>せんせい</rt></ruby>です",
                    "いいえ。<ruby>先生<rt>せんせい</rt></ruby>じゃありません。"
                ],
                "answer_index": 1
            }
        ],
        "audio_file": "/audio/L01_01.mp3"
    },
    {
        "id": "TEXTBOOK_L01_02",
        "level": 1,
        "title": "<ruby>会社員<rt>かいしゃいん</rt></ruby>と<ruby>友達<rt>ともだち</rt></ruby>",
        "schema_activation": [
            "あなたは<ruby>会社員<rt>かいしゃいん</rt></ruby>ですか",
            "あなたは<ruby>学生<rt>がくせい</rt></ruby>ですか"
        ],
        "translation": "<p>Eric-san is American. He is a bank employee. He is 28 years old. Eric-san is not a teacher or a student. He is a bank employee.<br>Kim-san is Korean. He is an IT company employee. He is 25 years old. Kim-san is not a teacher or a student. He is an IT company employee.<br>Eric-san is an office worker. Kim-san is also an office worker.<br>Eric-san is American. Kim-san is not American, he is Korean. Kim-san is Korean. Eric-san is not Korean, he is American.<br>Eric-san is 28 years old. Kim-san is 25 years old. Eric-san is not 25. Kim-san is not 28.<br>Eric-san is a bank employee. Kim-san is not a bank employee, he is an IT company employee.<br>Eric-san is an office worker at an American bank. Kim-san is an office worker in Korea.<br>Eric-san is an office worker. Kim-san is also an office worker.<br>Eric-san and Kim-san are friends. They are not students at Sakura University.</p>",
        "textbook_html": "<p>エリックさんはアメリカ<ruby>人<rt>じん</rt></ruby>です。<span id=\"L01_02_Q1\"><ruby>銀行員<rt>ぎんこういん</rt></ruby>です。</span>28<ruby>歳<rt>さい</rt></ruby>です。<br>キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。ITの<span id=\"L01_02_Q2\"><ruby>会社員<rt>かいしゃいん</rt></ruby>です。</span>25<ruby>歳<rt>さい</rt></ruby>です。<br>エリックさんは<ruby>銀行員<rt>ぎんこういん</rt></ruby>です。キムさんも<ruby>会社員<rt>かいしゃいん</rt></ruby>です。<br><ruby>二人<rt>ふたり</rt></ruby>は<ruby>先生<rt>せんせい</rt></ruby>じゃありません。<ruby>二人<rt>ふたり</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>じゃありません。<br>エリックさんはアメリカの<ruby>銀行員<rt>ぎんこういん</rt></ruby>です。<br>キムさんは<ruby>韓国<rt>かんこく</rt></ruby>のITの<ruby>会社員<rt>かいしゃいん</rt></ruby>です。<br>エリックさんは25<ruby>歳<rt>さい</rt></ruby>じゃありません。28<ruby>歳<rt>さい</rt></ruby>です. キムさんは25<ruby>歳<rt>さい</rt></ruby>です。<br>エリックさんとキムさんはさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>です。<br><ruby>二人<rt>ふたり</rt></ruby>はさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>じゃありません。</p>",
        "quizzes": [
            {
                "question": "エリックさんの<ruby>仕事<rt>しごと</rt></ruby>はなんですか。",
                "target_id": "L01_02_Q1",
                "choices": [
                    "<ruby>先生<rt>せんせい</rt></ruby>",
                    "<ruby>銀行員<rt>ぎんこういん</rt></ruby>"
                ],
                "answer_index": 1
            },
            {
                "question": "キムさんは<ruby>銀行員<rt>ぎんこういん</rt></ruby>ですか。",
                "target_id": "L01_02_Q2",
                "choices": [
                    "はい、そうです",
                    "いいえ、<ruby>銀行員<rt>ぎんこういん</rt></ruby>じゃありません"
                ],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "TEXTBOOK_L01_03",
        "level": 1,
        "title": "<ruby>町<rt>まち</rt></ruby>の<ruby>病院<rt>びょういん</rt></ruby>",
        "schema_activation": [
            "あなたは<ruby>医者<rt>いしゃ</rt></ruby>ですか",
            "あなたの<ruby>友達<rt>ともだち</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はなんですか"
        ],
        "translation": "<p>Pak-san is Korean. Pak-san is a doctor. He is 30 years old. Pak-san is a doctor at a town hospital. He is not a teacher.<br>Kim-san is Korean. Pak-san is also Korean. Kim-san is an office worker. Pak-san is not an office worker, he is a doctor.<br>Pak-san is not a teacher or a student at Sakura University. He is a doctor at a town hospital.<br>Ana-san is German. She is 20 years old. She is a student at Sakura University.<br>Ana-san is not a doctor. Pak-san is not a student.<br>Pak-san is not 20 years old, he is 30. Ana-san is not 30 years old, she is 20.<br>Pak-san is Kim-san's friend. Kim-san is Pak-san's friend.<br>Eric-san is American. Kim-san and Pak-san are Korean.<br>Ana-san is 20. Kim-san is 25. Eric-san is 28. Pak-san is 30. Yamada-san is 45.<br>Everyone is friends.</p>",
        "textbook_html": "<p>パクさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。<ruby>医者<rt>いしゃ</rt></ruby>です。<span id=\"L01_03_Q1\">30<ruby>歳<rt>さい</rt></ruby>です。</span><ruby>町<rt>まち</rt></ruby>の<ruby>病院<rt>びょういん</rt></ruby>の<span id=\"L01_03_Q2\"><ruby>医者<rt>いしゃ</rt></ruby>です。</span><ruby>先生<rt>せんせい</rt></ruby>じゃありません。<br>キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。パクさんも<ruby>韓国人<rt>かんこくじん</rt></ruby>です。<br>キムさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>です。パクさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。<ruby>医者<rt>いしゃ</rt></ruby>です。<br>パクさんはさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>じゃありません。<ruby>学生<rt>がくせい</rt></ruby>じゃありません。<br>アナさんはドイツ<ruby>人<rt>じん</rt></ruby>です。20<ruby>歳<rt>さい</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。<br>パクさんはキムさんの<ruby>友達<rt>ともだち</rt></ruby>です。キムさんはパクさんの<ruby>友達<rt>ともだち</rt></ruby>です。<br>アナさんは20<ruby>歳<rt>さい</rt></ruby>です。キムさんは25<ruby>歳<rt>さい</rt></ruby>です。エリックさんは28<ruby>歳<rt>さい</rt></ruby>です。パクさんは30<ruby>歳<rt>さい</rt></ruby>です。<ruby>山田<rt>やまだ</rt></ruby>さんは45<ruby>歳<rt>さい</rt></ruby>です。</p>",
        "quizzes": [
            {
                "question": "パクさんは<ruby>何歳<rt>なんさい</rt></ruby>ですか。",
                "target_id": "L01_03_Q1",
                "choices": [
                    "20<ruby>歳<rt>さい</rt></ruby>",
                    "30<ruby>歳<rt>さい</rt></ruby>"
                ],
                "answer_index": 1
            },
            {
                "question": "パクさんは<ruby>学生<rt>がくせい</rt></ruby>ですか。",
                "target_id": "L01_03_Q2",
                "choices": [
                    "いいえ、<ruby>医者<rt>いしゃ</rt></ruby>です",
                    "はい、<ruby>学生<rt>がくせい</rt></ruby>です",
                    "いいえ、<ruby>先生<rt>せんせい</rt></ruby>です"
                ],
                "answer_index": 0
            }
        ]
    },
    {
        "id": "TEXTBOOK_L01_04",
        "level": 1,
        "title": "<ruby>教室<rt>きょうしつ</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>",
        "schema_activation": [
            "あなたの<ruby>先生<rt>せんせい</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はなんですか",
            "あなたの<ruby>友達<rt>ともだち</rt></ruby>は何<ruby>歳<rt>さい</rt></ruby>ですか"
        ],
        "translation": "<p>Yamada-san is Japanese. He is a teacher at Sakura University. He is 45 years old.<br>Ana-san is German. She is a student at Sakura University. She is 20 years old.<br>Eric-san is American. He is a bank employee. He is 28 years old.<br>Kim-san is Korean. He is an IT company employee. He is 25 years old.<br>Pak-san is Korean. He is a doctor at a town hospital. He is 30 years old.<br>Eric-san is an office worker. Kim-san is also an office worker.<br>Kim-san is Korean. Pak-san is also Korean.<br>Ana-san is not a teacher, she is a student. Yamada-san is not a student, he is a teacher.<br>Pak-san is not an office worker, he is a doctor.<br>Eric-san is not Japanese, he is American. Eric-san is not 25, he is 28. Kim-san is not 28, he is 25.<br>Pak-san is 30. Yamada-san is 45. Ana-san is 20.<br>Ana-san is a student at Sakura University. Yamada-san is a teacher at Sakura University.<br>Eric-san is a bank employee. Kim-san is an IT company employee. Pak-san is a doctor at a town hospital.<br>Yamada-san is a 45-year-old teacher. Ana-san is a German student. Eric-san is an American office worker.<br>Kim-san is a Korean office worker. Pak-san is a Korean doctor.<br>Ana-san is not a teacher. Yamada-san is not a student. Pak-san is not a student. Eric-san is not a student.<br>Kim-san is not a teacher. Ana-san is not an office worker. Eric-san is a bank employee in America. Kim-san is an IT employee in Korea.<br>Everyone is friends. They are friends in the Sakura University classroom.</p>",
        "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>日本人<rt>にほんじん</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>です。<span id=\"L01_04_Q1\">45<ruby>歳<rt>さい</rt></ruby>です。</span><br>アナさんはドイツ<ruby>人<rt>じん</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。20<ruby>歳<rt>さい</rt></ruby>です。<br>エリックさんはアメリカ<ruby>人<rt>じん</rt></ruby>です。<ruby>銀行<rt>ぎんこう</rt></ruby>の<ruby>会社員<rt>かいしゃいん</rt></ruby>です。28<ruby>歳<rt>さい</rt></ruby>です。<br>キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。ITの<ruby>会社員<rt>かいしゃいん</rt></ruby>です。25<ruby>歳<rt>さい</rt></ruby>です。<br>パクさんは<span id=\"L01_04_Q2\"><ruby>韓国人<rt>かんこくじん</rt></ruby>です。</span><ruby>町<rt>まち</rt></ruby>の<ruby>病院<rt>びょういん</rt></ruby>の<ruby>医者<rt>いしゃ</rt></ruby>です。30<ruby>歳<rt>さい</rt></ruby>です。<br><span id=\"L01_04_Q3\">エリックさんは</span><ruby>会社員<rt>かいしゃいん</rt></ruby>です。キムさんも<ruby>会社員<rt>かいしゃいん</rt></ruby>です。<br>キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。パクさんも<ruby>韓国人<rt>かんこくじん</rt></ruby>です。<br><ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>学生<rt>がくせい</rt></ruby>じゃありません。<ruby>先生<rt>せんせい</rt></ruby>です。<br>アナさんは<ruby>先生<rt>せんせい</rt></ruby>じゃありません。<ruby>学生<rt>がくせい</rt></ruby>です。<br>パクさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。<ruby>医者<rt>いしゃ</rt></ruby>です。<br>エリックさんは<ruby>銀行<rt>ぎんこう</rt></ruby>の<ruby>会社員<rt>かいしゃいん</rt></ruby>です。キムさんはITの<ruby>会社員<rt>かいしゃいん</rt></ruby>です。パクさんは<ruby>病院<rt>びょういん</rt></ruby>の<ruby>医者<rt>いしゃ</rt></ruby>です。<br>みなさんは<ruby>友達<rt>ともだち</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>です。</p>",
        "quizzes": [
            {
                "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>何歳<rt>なんさい</rt></ruby>ですか。",
                "target_id": "L01_04_Q1",
                "choices": [
                    "30<ruby>歳<rt>さい</rt></ruby>",
                    "45<ruby>歳<rt>さい</rt></ruby>"
                ],
                "answer_index": 1
            },
            {
                "question": "パクさんの<ruby>国<rt>くに</rt></ruby>はどこですか。",
                "target_id": "L01_04_Q2",
                "choices": [
                    "<ruby>韓国<rt>かんこく</rt></ruby>",
                    "ドイツ",
                    "アメリカ"
                ],
                "answer_index": 0
            },
            {
                "question": "エリックさんはさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>ですか。",
                "target_id": "L01_04_Q3",
                "choices": [
                    "はい、<ruby>学生<rt>がくせい</rt></ruby>です",
                    "いいえ、<ruby>学生<rt>がくせい</rt></ruby>じゃありません"
                ],
                "answer_index": 1
            }
        ]
    }
];
