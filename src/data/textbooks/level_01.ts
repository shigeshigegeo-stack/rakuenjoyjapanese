import { Textbook } from './types';

export const textbooks_level_01: Textbook[] = [
    {
        "id": "TEXTBOOK_L01_01",
        "level": 1,
        "title": "<ruby>はじめまして<rt>　</rt></ruby>",
        "schema_activation": [
            "あなたの<ruby>名前<rt>なまえ</rt></ruby>はなんですか。",
            "あなたは<ruby>何歳<rt>なんさい</rt></ruby>ですか。"
        ],
        "translation": "<p>Yamada-sensei is Japanese. He is a teacher at Sakura University. He is 45 years old.<br>Ana-san is German. She is a student at Sakura University. She is 20 years old.<br>Ana-san is not a teacher. Yamada-sensei is not a student.<br>Yamada-sensei is not an office worker. Ana-san is also not an office worker.</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>日本人<rt>にほんじん</rt></ruby>です。</span><span style=\"display: inline-block;\">さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>です。</span><span style=\"display: inline-block;\">45<ruby>歳<rt>さい</rt></ruby>です。</span><br><span style=\"display: inline-block;\">アナさんはドイツ<ruby>人<rt>じん</rt></ruby>です。</span><span style=\"display: inline-block;\">さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。</span><span style=\"display: inline-block;\">20<ruby>歳<rt>はたち</rt></ruby>です。</span><br><span id=\"L01_01_Q1\" style=\"display: inline-block;\">アナさんは<ruby>先生<rt>せんせい</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>じゃありません。</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\">アナさんも<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。</span></p>",
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
        "translation": "<p>John-san is American. He is a bank employee at NEX Bank. He is 28 years old.<br>Kim-san is Korean. He is a LOOP Soft employee. He is 25 years old.<br>John: &quot;Are you American, Kim-san?&quot;<br>Kim: &quot;No, I'm not American. I'm Korean. Are you American, John-san?&quot;<br>John: &quot;Yes, I'm American. I'm a bank employee. Are you also a bank employee, Kim-san?&quot;<br>Kim: &quot;No, I'm not a bank employee. I'm an office worker.&quot;<br>John-san is not a teacher. Kim-san is also not a teacher.<br>John-san is not a student. Kim-san is also not a student.</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\">ジョンさんはアメリカ<ruby>人<rt>じん</rt></ruby>です。</span><span id=\"L01_02_Q1\" style=\"display: inline-block;\">NEXバンクの<ruby>銀行員<rt>ぎんこういん</rt></ruby>です。</span><span style=\"display: inline-block;\">28<ruby>歳<rt>さい</rt></ruby>です。</span><br><span style=\"display: inline-block;\">キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。</span><span id=\"L01_02_Q2\" style=\"display: inline-block;\">LOOPソフトの<ruby>社員<rt>しゃいん</rt></ruby>です。</span><span style=\"display: inline-block;\">25<ruby>歳<rt>さい</rt></ruby>です。</span><br><span style=\"display: inline-block;\">ジョン「キムさんはアメリカ<ruby>人<rt>じん</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\">キム「いいえ、アメリカ<ruby>人<rt>じん</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\"><ruby>韓国人<rt>かんこくじん</rt></ruby>です。</span><span style=\"display: inline-block;\">ジョンさんはアメリカ<ruby>人<rt>じん</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\">ジョン「はい、アメリカ<ruby>人<rt>じん</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>私<rt>わたし</rt></ruby>は<ruby>銀行員<rt>ぎんこういん</rt></ruby>です。</span><span style=\"display: inline-block;\">キムさんも<ruby>銀行員<rt>ぎんこういん</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\">キム「いいえ、<ruby>銀行員<rt>ぎんこういん</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\"><ruby>会社員<rt>かいしゃいん</rt></ruby>です。」</span><br><span style=\"display: inline-block;\">ジョンさんは<ruby>先生<rt>せんせい</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\">キムさんも<ruby>先生<rt>せんせい</rt></ruby>じゃありません。</span><br><span style=\"display: inline-block;\">ジョンさんは<ruby>学生<rt>がくせい</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\">キムさんも<ruby>学生<rt>がくせい</rt></ruby>じゃありません。</span></p>",
        "quizzes": [
            {
                "question": "ジョンさんは<ruby>銀行員<rt>ぎんこういん</rt></ruby>ですか。",
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
            "あなたの<ruby>先生<rt>せんせい</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はなんですか。",
            "あなたの<ruby>友達<rt>ともだち</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はなんですか。"
        ],
        "translation": "<p>Pak-san is Korean. He is 30 years old. Pak-san is not an office worker. He is a doctor at Hikari Hospital.<br>Kim-san is also Korean. He is 25 years old. Kim-san is not a doctor. He is an office worker. He is a LOOP Soft employee.<br>Kim: &quot;Ana-san, this is Pak-san. He is my friend.&quot;<br>Ana: &quot;Nice to meet you. Are you an office worker, Pak-san?&quot;<br>Pak: &quot;No, I'm not an office worker. I'm a doctor. Are you an office worker, Ana-san?&quot;<br>Ana: &quot;No, I'm not an office worker. I'm a student at Sakura University. I'm 20 years old.&quot;<br>Pak: &quot;I see. What is your teacher's name?&quot;<br>Ana: &quot;It is Yamada-sensei.&quot;</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\">パクさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。</span><span id=\"L01_03_Q1\" style=\"display: inline-block;\">30<ruby>歳<rt>さい</rt></ruby>です。</span><span style=\"display: inline-block;\">パクさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。</span><span id=\"L01_03_Q2\" style=\"display: inline-block;\">ひかり<ruby>病院<rt>びょういん</rt></ruby>の<ruby>医者<rt>いしゃ</rt></ruby>です。</span><br><span style=\"display: inline-block;\">キムさんも<ruby>韓国人<rt>かんこくじん</rt></ruby>です。</span><span style=\"display: inline-block;\">25<ruby>歳<rt>さい</rt></ruby>です。</span><span style=\"display: inline-block;\">キムさんは<ruby>医者<rt>いしゃ</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\"><ruby>会社員<rt>かいしゃいん</rt></ruby>です。</span><span style=\"display: inline-block;\">LOOPソフトの<ruby>社員<rt>しゃいん</rt></ruby>です。</span><br><span style=\"display: inline-block;\">キム「アナさん、こちらはパクさんです。</span><span style=\"display: inline-block;\"><ruby>私<rt>わたし</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>です」</span><br><span style=\"display: inline-block;\">アナ「はじめまして。</span><span style=\"display: inline-block;\">パクさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>ですか。」</span><br><span style=\"display: inline-block;\">パク「いいえ、<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\"><ruby>医者<rt>いしゃ</rt></ruby>です。</span><span style=\"display: inline-block;\">アナさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\">アナ「いいえ、<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\">さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。</span><span style=\"display: inline-block;\">20<ruby>歳<rt>はたち</rt></ruby>です」</span><br><span style=\"display: inline-block;\">パク「そうですか。</span><span style=\"display: inline-block;\"><ruby>先生<rt>せんせい</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>はなんですか」</span><br><span style=\"display: inline-block;\">アナ「<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>です」</span></p>",
        "quizzes": [
            {
                "question": "パクさんは<ruby>何歳<rt>なんさい</rt></ruby>ですか。",
                "target_id": "L01_03_Q1",
                "choices": [
                    "20<ruby>歳<rt>はたち</rt></ruby>",
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
            "あなたの<ruby>友達<rt>ともだち</rt></ruby>は<ruby>会社員<rt>かいしゃいん</rt></ruby>ですか。",
            "あなたの<ruby>友達<rt>ともだち</rt></ruby>は<ruby>何歳<rt>なんさい</rt></ruby>ですか。"
        ],
        "translation": "<p>Yamada-sensei is Japanese. He is a teacher at Sakura University. He is 45 years old.<br>Ana-san is German. She is a student at Sakura University. She is 20 years old.<br>John-san is American. He is a bank employee at NEX Bank. He is 28 years old.<br>Kim-san is Korean. He is a LOOP Soft employee. He is 25 years old.<br>Pak-san is also Korean. He is a doctor at Hikari Hospital. He is 30 years old.<br>Yamada-sensei: &quot;Hello. Are you American, John-san?&quot;<br>John: &quot;Yes, I'm American.&quot;<br>Yamada-sensei: &quot;Are you a doctor, Kim-san?&quot;<br>Kim: &quot;No, I'm not a doctor. I'm an office worker. Are you also an office worker, Yamada-sensei?&quot;<br>Yamada-sensei: &quot;No, I'm not an office worker.&quot;<br>Kim: &quot;Is Yamada-sensei Ana-san's teacher?&quot;<br>Ana: &quot;Yes, that's right. Are you a student, Pak-san?&quot;<br>Pak: &quot;No, I'm not a student. I'm a doctor.&quot;<br>Yamada-sensei: &quot;I see. Pleased to meet you all.&quot;</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>日本人<rt>にほんじん</rt></ruby>です。</span><span style=\"display: inline-block;\">さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>です。</span><span id=\"L01_04_Q1\" style=\"display: inline-block;\">45<ruby>歳<rt>さい</rt></ruby>です。</span><br><span style=\"display: inline-block;\">アナさんはドイツ<ruby>人<rt>じん</rt></ruby>です。</span><span style=\"display: inline-block;\">さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。</span><span style=\"display: inline-block;\">20<ruby>歳<rt>はたち</rt></ruby>です。</span><br><span id=\"L01_04_Q3\" style=\"display: inline-block;\">ジョンさんはアメリカ<ruby>人<rt>じん</rt></ruby>です。</span><span style=\"display: inline-block;\">NEXバンクの<ruby>銀行員<rt>ぎんこういん</rt></ruby>です。</span><span style=\"display: inline-block;\">28<ruby>歳<rt>さい</rt></ruby>です。</span><br><span style=\"display: inline-block;\">キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。</span><span style=\"display: inline-block;\">LOOPソフトの<ruby>社員<rt>しゃいん</rt></ruby>です。</span><span style=\"display: inline-block;\">25<ruby>歳<rt>さい</rt></ruby>です。</span><br><span id=\"L01_04_Q2\" style=\"display: inline-block;\">パクさんも<ruby>韓国人<rt>かんこくじん</rt></ruby>です。</span><span style=\"display: inline-block;\">ひかり<ruby>病院<rt>びょういん</rt></ruby>の<ruby>医者<rt>いしゃ</rt></ruby>です。</span><span style=\"display: inline-block;\">30<ruby>歳<rt>さい</rt></ruby>です。</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「こんにちは。</span><span style=\"display: inline-block;\">ジョンさんはアメリカ<ruby>人<rt>じん</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\">ジョン「はい、アメリカ<ruby>人<rt>じん</rt></ruby>です」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「キムさんは<ruby>医者<rt>いしゃ</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\">キム「いいえ、<ruby>医者<rt>いしゃ</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\"><ruby>会社員<rt>かいしゃいん</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>も<ruby>会社員<rt>かいしゃいん</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ、<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません」</span><br><span style=\"display: inline-block;\">キム「<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はアナさんの<ruby>先生<rt>せんせい</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\">アナ「はい、そうです。</span><span style=\"display: inline-block;\">パクさんは<ruby>学生<rt>がくせい</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\">パク「いいえ、<ruby>学生<rt>がくせい</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\"><ruby>医者<rt>いしゃ</rt></ruby>です」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「そうですか。</span><span style=\"display: inline-block;\">みなさんよろしくお<ruby>願<rt>ねが</rt></ruby>いします」</span></p>",
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
                "question": "ジョンさんはさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>ですか。",
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
