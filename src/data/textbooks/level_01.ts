import { Textbook } from './types';

export const textbooks_level_01: Textbook[] = [
    {
        "id": "TEXTBOOK_L01_01",
        "level": 1,
        "title": "<ruby>はじめまして<rt>　</rt></ruby>",
        "schema_activation": [
            "あなたの<ruby>名前<rt>なまえ</rt></ruby>はなんですか。",
            "あなたは何<ruby>歳<rt>さい</rt></ruby>ですか。"
        ],
        "translation": "<p>Yamada-sensei is Japanese. He is a teacher at Sakura University. Yamada-sensei is 45 years old.<br>Ana-san is not Japanese. She is German. She is 20 years old. Ana-san is a student at Sakura University. She is not a teacher.<br>Yamada-sensei is not a student. He is a teacher.<br>Yamada-sensei is not a company employee. Ana-san is also not a company employee.<br>Ana-san is 20 years old. Yamada-sensei is not 20 years old. He is 45 years old.<br>Yamada-sensei is a teacher at Sakura University. Ana-san is a student at Sakura University.<br>Ana-san is a German student. Yamada-sensei is a Japanese teacher.<br>Ana-san is not a teacher. She is a student. Yamada-sensei is not a student. He is a teacher.</p>",
        "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>日本人<rt>にほんじん</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>です。45<ruby>歳<rt>さい</rt></ruby>です。<br>アナさんはドイツ<ruby>人<rt>じん</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。20<ruby>歳<rt>さい</rt></ruby>です。<br><span id=\"L01_01_Q1\">アナさんは</span><ruby>先生<rt>せんせい</rt></ruby>じゃありません。<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>じゃありません。<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。アナさんも<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。</p>",
        "quizzes": [
            {
                "question": "アナさんは<ruby>先生<rt>せんせい</rt></ruby>ですか。",
                "target_id": "L01_01_Q1",
                "choices": [
                    "はい、<ruby>先生<rt>せんせい</rt></ruby>です",
                    "いいえ、<ruby>先生<rt>せんせい</rt></ruby>じゃありません"
                ],
                "answer_index": 1
            }
        ],
        "audio_file": "/audio/L01_01.mp3"
    },
    {
        "id": "TEXTBOOK_L01_02",
        "level": 1,
        "title": "<ruby>銀行員<rt>ぎんこういん</rt></ruby>と<ruby>会社員<rt>かいしゃいん</rt></ruby>",
        "schema_activation": [
            "あなたは<ruby>会社員<rt>かいしゃいん</rt></ruby>ですか。",
            "あなたは<ruby>学生<rt>がくせい</rt></ruby>ですか。"
        ],
        "translation": "<p>Eric-san is American. He is a bank employee at NEX Bank. He is 28 years old.<br>Kim-san is Korean. He is an employee at LOOP Soft. He is 25 years old.<br>Eric: &quot;Is Kim-san American?&quot;<br>Kim: &quot;No, I'm not American. I'm Korean. Is Eric-san American?&quot;<br>Eric: &quot;Yes, I'm American. I'm a bank employee. Is Kim-san also a bank employee?&quot;<br>Kim: &quot;No, I'm not a bank employee. I'm a company employee.&quot;<br>Eric-san is not a teacher. Kim-san is also not a teacher.<br>Eric-san is not a student. Kim-san is also not a student.</p>",
        "textbook_html": "<p>エリックさんはアメリカ<ruby>人<rt>じん</rt></ruby>です。NEXバンクの<span id=\"L01_02_Q1\"><ruby>銀行員<rt>ぎんこういん</rt></ruby>です。</span>28<ruby>歳<rt>さい</rt></ruby>です。<br>キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。LOOPソフトの<span id=\"L01_02_Q2\"><ruby>社員<rt>しゃいん</rt></ruby>です。</span>25<ruby>歳<rt>さい</rt></ruby>です。<br>エリック「キムさんはアメリカ<ruby>人<rt>じん</rt></ruby>ですか」<br>キム「いいえ、アメリカ<ruby>人<rt>じん</rt></ruby>じゃありません。<ruby>韓国人<rt>かんこくじん</rt></ruby>です。エリックさんはアメリカ<ruby>人<rt>じん</rt></ruby>ですか」<br>エリック「はい、アメリカ<ruby>人<rt>じん</rt></ruby>です。<ruby>私<rt>わたし</rt></ruby>は<ruby>銀行員<rt>ぎんこういん</rt></ruby>です。キムさんも<ruby>銀行員<rt>ぎんこういん</rt></ruby>ですか」<br>キム「いいえ、<ruby>銀行員<rt>ぎんこういん</rt></ruby>じゃありません。<ruby>会社員<rt>かいしゃいん</rt></ruby>です。」<br>エリックさんは<ruby>先生<rt>せんせい</rt></ruby>じゃありません。キムさんも<ruby>先生<rt>せんせい</rt></ruby>じゃありません。<br>エリックさんは<ruby>学生<rt>がくせい</rt></ruby>じゃありません。キムさんも<ruby>学生<rt>がくせい</rt></ruby>じゃありません。</p>",
        "quizzes": [
            {
                "question": "エリックさんは<ruby>銀行員<rt>ぎんこういん</rt></ruby>ですか。",
                "target_id": "L01_02_Q1",
                "choices": [
                    "はい、<ruby>銀行員<rt>ぎんこういん</rt></ruby>です",
                    "いいえ、<ruby>銀行員<rt>ぎんこういん</rt></ruby>じゃありません"
                ],
                "answer_index": 0
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
        ],
        "audio_file": "/audio/L01_02.mp3"
    },
    {
        "id": "TEXTBOOK_L01_03",
        "level": 1,
        "title": "<ruby>町<rt>まち</rt></ruby>の<ruby>病院<rt>びょういん</rt></ruby>",
        "schema_activation": [
            "あなたは<ruby>医者<rt>いしゃ</rt></ruby>ですか。",
            "あなたの<ruby>友達<rt>ともだち</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はなんですか。"
        ],
        "translation": "<p>Pak-san is Korean. He is 30 years old. Pak-san is not a company employee. He is a doctor at Hikari Hospital.<br>Kim-san is also Korean. He is 25 years old. Kim-san is not a doctor. He is a company employee. He is an employee at LOOP Soft.<br>Kim: &quot;Ana-san, this is Pak-san. He is my friend.&quot;<br>Ana: &quot;Nice to meet you. Is Pak-san a company employee?&quot;<br>Pak: &quot;No, I'm not a company employee. I'm a doctor. Is Ana-san a company employee?&quot;<br>Ana: &quot;No, I'm not a company employee. I'm a student at Sakura University. I'm 20 years old.&quot;<br>Pak: &quot;I see. What is your teacher's name?&quot;<br>Ana: &quot;It is Yamada-sensei.&quot;</p>",
        "textbook_html": "<p>パクさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。<span id=\"L01_03_Q1\">30<ruby>歳<rt>さい</rt></ruby>です。</span>パクさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。ひかり<ruby>病院<rt>びょういん</rt></ruby>の<span id=\"L01_03_Q2\"><ruby>医者<rt>いしゃ</rt></ruby>です。</span><br>キムさんも<ruby>韓国人<rt>かんこくじん</rt></ruby>です。25<ruby>歳<rt>さい</rt></ruby>です。キムさんは<ruby>医者<rt>いしゃ</rt></ruby>じゃありません。<ruby>会社員<rt>かいしゃいん</rt></ruby>です。LOOPソフトの<ruby>社員<rt>しゃいん</rt></ruby>です。<br>キム「アナさん、こちらはパクさんです。<ruby>私<rt>わたし</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>です」<br>アナ「はじめまして。パクさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>ですか。」<br>パク「いいえ、<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。<ruby>医者<rt>いしゃ</rt></ruby>です。アナさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>ですか」<br>アナ「いいえ、<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。20<ruby>歳<rt>さい</rt></ruby>です」<br>パク「そうですか。<ruby>先生<rt>せんせい</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はなんですか」<br>アナ「<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>です」</p>",
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
                    "はい、<ruby>学生<rt>がくせい</rt></ruby>です",
                    "いいえ、<ruby>学生<rt>がくせい</rt></ruby>じゃありません"
                ],
                "answer_index": 1
            }
        ],
        "audio_file": "/audio/L01_03.mp3"
    },
    {
        "id": "TEXTBOOK_L01_04",
        "level": 1,
        "title": "アナさんの<ruby>友達<rt>ともだち</rt></ruby>",
        "schema_activation": [
            "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はアナさんの<ruby>先生<rt>せんせい</rt></ruby>ですか。"
        ],
        "translation": "<p>Yamada-sensei is Japanese. He is a teacher at Sakura University. He is 45 years old.<br>Ana-san is German. She is a student at Sakura University. She is 20 years old.<br>Eric-san is American. He is a bank employee at NEX Bank. He is 28 years old.<br>Kim-san is Korean. He is an employee at LOOP Soft. He is 25 years old.<br>Pak-san is also Korean. He is a doctor at Sakura Hospital. He is 30 years old.<br>Yamada-sensei: &quot;Hello. Is Eric-san American?&quot;<br>Eric: &quot;Yes, I'm American.&quot;<br>Yamada-sensei: &quot;Is Kim-san a doctor?&quot;<br>Kim: &quot;No, I'm not a doctor. I'm a company employee. Is Yamada-sensei also a company employee?&quot;<br>Yamada-sensei: &quot;No, I'm not a company employee.&quot;<br>Kim: &quot;Is Yamada-sensei Ana-san's teacher?&quot;<br>Ana: &quot;Yes, that's right. Is Pak-san a student?&quot;<br>Pak: &quot;No, I'm not a student. I'm a doctor.&quot;<br>Yamada-sensei: &quot;I see. Pleased to meet you all.&quot;</p>",
        "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>日本人<rt>にほんじん</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>です。<span id=\"L01_04_Q1\">45<ruby>歳<rt>さい</rt></ruby>です。</span><br>アナさんはドイツ<ruby>人<rt>じん</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。20<ruby>歳<rt>さい</rt></ruby>です。<br><span id=\"L01_04_Q3\">エリックさんは</span>アメリカ<ruby>人<rt>じん</rt></ruby>です。NEXバンクの<ruby>銀行員<rt>ぎんこういん</rt></ruby>です。28<ruby>歳<rt>さい</rt></ruby>です。<br>キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。LOOPソフトの<ruby>社員<rt>しゃいん</rt></ruby>です。25<ruby>歳<rt>さい</rt></ruby>です。<br>パクさんも<span id=\"L01_04_Q2\"><ruby>韓国人<rt>かんこくじん</rt></ruby>です。</span>ひかり<ruby>病院<rt>びょういん</rt></ruby>の<ruby>医者<rt>いしゃ</rt></ruby>です。30<ruby>歳<rt>さい</rt></ruby>です。<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「こんにちは。エリックさんはアメリカ<ruby>人<rt>じん</rt></ruby>ですか」<br>エリック「はい、アメリカ<ruby>人<rt>じん</rt></ruby>です」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「キムさんは<ruby>医者<rt>いしゃ</rt></ruby>ですか」<br>キム「いいえ、<ruby>医者<rt>いしゃ</rt></ruby>じゃありません。<ruby>会社員<rt>かいしゃいん</rt></ruby>です。<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>も<ruby>会社員<rt>かいしゃいん</rt></ruby>ですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ、<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません」<br>キム「<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はアナさんの<ruby>先生<rt>せんせい</rt></ruby>ですか」<br>アナ「はい、そうです。パクさんは<ruby>学生<rt>がくせい</rt></ruby>ですか」<br>パク「いいえ、<ruby>学生<rt>がくせい</rt></ruby>じゃありません。<ruby>医者<rt>いしゃ</rt></ruby>です」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「そうですか。みなさんよろしくお<ruby>願<rt>ねが</rt></ruby>いします」</p>",
        "quizzes": [
            {
                "question": "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>何歳<rt>なんさい</rt></ruby>ですか。",
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
        ],
        "audio_file": "/audio/L01_04.mp3"
    }
];
