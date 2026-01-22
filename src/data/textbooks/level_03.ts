import { Textbook } from './types';

export const textbooks_level_03: Textbook[] = [
    {
        "id": "TEXTBOOK_L03_01",
        "level": 3,
        "title": "<ruby>食堂<rt>しょくどう</rt></ruby>はどこですか",
        "schema_activation": [
            "ここは<ruby>日本<rt>にほん</rt></ruby>です。そこはどこですか。",
            "お<ruby>手洗<rt>てあら</rt></ruby>いはどこですか。"
        ],
        "translation": "<p>This is Sakura University. <br>Yamada-sensei: \"Ana-san, this is your classroom.\"<br>Ana: \"Thank you. Where is the cafeteria?\"<br>Yamada-sensei: \"The cafeteria is on the second floor. It is over there.\"<br>Ana: \"Is the administration office also on the second floor?\"<br>Yamada-sensei: \"No, the administration office is not on the second floor. It is on the first floor. The reception is also on the first floor.\"</p>",
        "textbook_html": "<p>ここは さくら<ruby>大学<rt>だいがく</rt></ruby>です。<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「アナさん、ここはアナさんの<ruby>教室<rt>きょうしつ</rt></ruby>です」<br>アナ「ありがとうございます。<ruby>食堂<rt>しょくどう</rt></ruby>は どこですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>食堂<rt>しょくどう</rt></ruby>は <ruby>二階<rt>にかい</rt></ruby>です。あそこですよ」<br>アナ「<ruby>事務室<rt>じむしつ</rt></ruby>も <ruby>二階<rt>にかい</rt></ruby>ですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ、<ruby>事務室<rt>じむしつ</rt></ruby>は <ruby>二階<rt>にかい</rt></ruby>じゃありません。<ruby>一階<rt>いっかい</rt></ruby>です。<ruby>受付<rt>うけつけ</rt></ruby>も<ruby>一階<rt>いっかい</rt></ruby>です」</p>",
        "quizzes": [
            {
                "question": "<ruby>食堂<rt>しょくどう</rt></ruby>はどこですか。",
                "target_id": "L03_01_Q1",
                "choices": [
                    "<ruby>一階<rt>いっかい</rt></ruby>",
                    "<ruby>二階<rt>にかい</rt></ruby>"
                ],
                "answer_index": 1
            }
        ],
        "audio_file": "/audio/L03_01.mp3"
    },
    {
        "id": "TEXTBOOK_L03_02",
        "level": 3,
        "title": "お<ruby>国<rt>くに</rt></ruby>はどちらですか",
        "schema_activation": [
            "お<ruby>国<rt>くに</rt></ruby>はどちらですか。",
            "<ruby>会社<rt>かいしゃ</rt></ruby>(<ruby>学校<rt>がっこう</rt></ruby>)はどちらですか。"
        ],
        "translation": "<p>Yamada-sensei: \"Where are you from, John-san?\"<br>John: \"I am from America.\"<br>Yamada-sensei: \"Where do you work?\"<br>John: \"I am a NEX Bank employee.\"<br>Yamada-sensei: \"Kim-san, where are you from?\"<br>Kim: \"I am from Korea.\"<br>Yamada-sensei: \"Where do you work?\"<br>Kim: \"I am a LOOP Soft employee.\"<br>Yamada-sensei: \"Where are you from, Pak-san?\"<br>Pak: \"I am also from Korea.\"<br>Yamada-sensei: \"Are you an office worker, Pak-san?\"<br>Pak: \"No, I am not an office worker. I am a doctor.\"<br>Yamada-sensei: \"Where is your hospital?\"<br>Pak: \"It is Hikari Hospital.\"</p>",
        "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「お<ruby>国<rt>くに</rt></ruby>は どちらですか」<br>ジョン「アメリカです。」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>会社<rt>かいしゃ</rt></ruby>はどちらですか」<br>ジョン「NEXバンクの<ruby>銀行員<rt>ぎんこういん</rt></ruby>です」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「キムさん、お<ruby>国<rt>くに</rt></ruby>はどちらですか」<br>キム「<ruby>韓国<rt>かんこく</rt></ruby>です」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>会社<rt>かいしゃ</rt></ruby>はどちらですか」<br>キム「LOOPソフトの<ruby>社員<rt>しゃいん</rt></ruby>です」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「パクさんのお<ruby>国<rt>くに</rt></ruby>はどちらですか」<br>パク「<ruby>私<rt>わたし</rt></ruby>も<ruby>韓国<rt>かんこく</rt></ruby>です」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「パクさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>ですか」<br>パク「いいえ、<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。<ruby>医者<rt>いしゃ</rt></ruby>です。」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>病院<rt>びょういん</rt></ruby>はどちらですか」<br>パク「ひかり<ruby>病院<rt>びょういん</rt></ruby>です。」</p>",
        "quizzes": [
            {
                "question": "ジョンさんの<ruby>国<rt>くに</rt></ruby>はどこですか。",
                "target_id": "L03_02_Q1",
                "choices": [
                    "ドイツ",
                    "アメリカ",
                    "<ruby>韓国<rt>かんこく</rt></ruby>"
                ],
                "answer_index": 1
            },
            {
                "question": "キムさんの<ruby>会社<rt>かいしゃ</rt></ruby>はどこですか。",
                "target_id": "L03_02_Q2",
                "choices": [
                    "LEEPソフト",
                    "NEXバンク",
                    "LOOPソフト"
                ],
                "answer_index": 2
            }
        ],
        "audio_file": "/audio/L03_02.mp3"
    },
    {
        "id": "TEXTBOOK_L03_03",
        "level": 3,
        "title": "<ruby>いくら<rt>　</rt></ruby>ですか",
        "schema_activation": [
            "あなたのスマホはいくらですか。",
            "それはどこのスマホですか。"
        ],
        "translation": "<p>Clerk: \"Welcome!\"<br>Ana: \"Excuse me, where is the shoe department?\"<br>Clerk: \"It is on the first floor. The escalator is over there.\"<br><br>Ana: \"Excuse me, how much are these shoes?\"<br>Clerk: \"They are 2,300 yen. They are Chinese shoes.\"<br>Ana: \"That's good. How much is this tie?\"<br>Clerk: \"It is 3,500 yen. It is a French tie.\"<br>Ana: \"How much is that watch?\"<br>Clerk: \"It is 12,000 yen. It is a Japanese watch.\"<br>Ana: \"Where is that wine from?\"<br>Clerk: \"It is Italian wine. It is 2,800 yen.\"<br>Ana: \"I'll take these shoes and this wine, please.\"<br>Clerk: \"Thank you very much.\"</p>",
        "textbook_html": "<p><ruby>店員<rt>てんいん</rt></ruby>「いらっしゃいませ」<br>アナ「すみません、<ruby>靴<rt>くつ</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>は どこですか」<br><ruby>店員<rt>てんいん</rt></ruby>「<ruby>一階<rt>いっかい</rt></ruby>です。エスカレーターは あちらです」<br><br>アナ「すみません、この<ruby>靴<rt>くつ</rt></ruby>はいくらですか」<br><ruby>店員<rt>てんいん</rt></ruby>「2,300<ruby>円<rt>えん</rt></ruby>です。<ruby>中国<rt>ちゅうごく</rt></ruby>の<ruby>靴<rt>くつ</rt></ruby>です」<br>アナ「いいですね。このネクタイは いくらですか」<br><ruby>店員<rt>てんいん</rt></ruby>「3,500<ruby>円<rt>えん</rt></ruby>です。フランスの ネクタイです」<br>アナ「その<ruby>時計<rt>とけい</rt></ruby>は いくらですか」<br><ruby>店員<rt>てんいん</rt></ruby>「12,000<ruby>円<rt>えん</rt></ruby>です。<ruby>日本<rt>にほん</rt></ruby>の <ruby>時計<rt>とけい</rt></ruby>です」<br>アナ「あのワインは どこの ですか」<br><ruby>店員<rt>てんいん</rt></ruby>「イタリアのワインです。2,800<ruby>円<rt>えん</rt></ruby>です」<br>アナ「この<ruby>靴<rt>くつ</rt></ruby>とこのワインをください」<br><ruby>店員<rt>てんいん</rt></ruby>「ありがとうございます」</p>",
        "quizzes": [
            {
                "question": "<ruby>靴<rt>くつ</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>はどこですか。",
                "target_id": "L03_03_Q1",
                "choices": [
                    "<ruby>地下<rt>ちか</rt></ruby>",
                    "<ruby>一階<rt>いっかい</rt></ruby>",
                    "<ruby>二階<rt>にかい</rt></ruby>"
                ],
                "answer_index": 1
            },
            {
                "question": "イタリアのワインはいくらですか。",
                "target_id": "L03_03_Q2",
                "choices": [
                    "2,300<ruby>円<rt>えん</rt></ruby>",
                    "2,800<ruby>円<rt>えん</rt></ruby>",
                    "3,500<ruby>円<rt>えん</rt></ruby>"
                ],
                "answer_index": 1
            }
        ],
        "audio_file": "/audio/L03_03.mp3"
    },
    {
        "id": "TEXTBOOK_L03_04",
        "level": 3,
        "title": "<ruby>会議室<rt>かいぎしつ</rt></ruby>はどちらですか",
        "schema_activation": [
            "あなたのカバンはどこの<ruby>国<rt>くに</rt></ruby>のメーカーですか。",
            "あなたの<ruby>家<rt>うち</rt></ruby>のパソコンはいくらですか。"
        ],
        "translation": "<p>This is the office of Sakura University.<br>Ana: \"Hello. Where is Yamada-sensei?\"<br>Receptionist: \"Hello. Yamada-sensei is in the meeting room.\"<br>Ana: \"Where is the meeting room?\"<br>Receptionist: \"It is over there.\"<br>Ana: \"Thank you. Where is the telephone?\"<br>Receptionist: \"It is over there.\"<br><br>This is a classroom at Sakura University.<br>Yamada-sensei: \"Where is Ana-san?\"<br>Student: \"She is in the cafeteria. The cafeteria is in the basement.\"<br>Yamada-sensei: \"Thank you. Where is that bag from?\"<br>Student: \"It is from China. It is 8,900 yen.\"<br>Yamada-sensei: \"That's nice. Where is that camera from?\"<br>Student: \"This is a Japanese camera.\"<br>Yamada-sensei: \"How much is it?\"<br>Student: \"It is 54,000 yen.\"<br><br>This university's restrooms are on the first and second floors. The reception is in the lobby. The cafeteria and vending machine are in the basement. The teachers' room is on the first floor. Everyone's classroom is on the second floor.</p>",
        "textbook_html": "<p>ここは さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>事務室<rt>じむしつ</rt></ruby>です。<br>アナ「こんにちは。<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はどちらですか」<br><ruby>受付<rt>うけつけ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>「こんにちは。<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>会議室<rt>かいぎしつ</rt></ruby>ですよ。」<br>アナ「<ruby>会議室<rt>かいぎしつ</rt></ruby>はどちらですか」<br><ruby>受付<rt>うけつけ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>「そちらです」<br>アナ「ありがとうございます。<ruby>電話<rt>でんわ</rt></ruby>はどちらですか」<br><ruby>受付<rt>うけつけ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>「あちらです。」<br><br>ここは さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>教室<rt>きょうしつ</rt></ruby>です<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「アナさんはどこですか」<br><ruby>学生<rt>がくせい</rt></ruby>「<ruby>食堂<rt>しょくどう</rt></ruby>です。<ruby>食堂<rt>しょくどう</rt></ruby>は<ruby>地下<rt>ちか</rt></ruby>です。」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「ありがとう。そのかばんはどこのですか。」<br><ruby>学生<rt>がくせい</rt></ruby>「<ruby>中国<rt>ちゅうごく</rt></ruby>のです。8,900<ruby>円<rt>えん</rt></ruby>です」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいですね。そのカメラはどこのですか。」<br><ruby>学生<rt>がくせい</rt></ruby>「これは<ruby>日本<rt>にほん</rt></ruby>のカメラです。」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いくらですか」<br><ruby>学生<rt>がくせい</rt></ruby>「54,000<ruby>円<rt>えん</rt></ruby>です」<br><br>この<ruby>大学<rt>だいがく</rt></ruby>のトイレは<ruby>一階<rt>いっかい</rt></ruby>と<ruby>二階<rt>にかい</rt></ruby>です。<ruby>受付<rt>うけつけ</rt></ruby>はロビーです。<ruby>食堂<rt>しょくどう</rt></ruby>と<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>は<ruby>地下<rt>ちか</rt></ruby>です。<ruby>先生<rt>せんせい</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は<ruby>一階<rt>いっかい</rt></ruby>です。みなさんの<ruby>教室<rt>きょうしつ</rt></ruby>は<ruby>二階<rt>にかい</rt></ruby>です。</p>",
        "quizzes": [
            {
                "question": "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はどこですか。",
                "target_id": "L03_04_Q1",
                "choices": [
                    "<ruby>食堂<rt>しょくどう</rt></ruby>",
                    "<ruby>会議室<rt>かいぎしつ</rt></ruby>",
                    "<ruby>先生<rt>せんせい</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>"
                ],
                "answer_index": 1
            },
            {
                "question": "<ruby>日本<rt>にほん</rt></ruby>のカメラはいくらですか。",
                "target_id": "L03_04_Q2",
                "choices": [
                    "8,900<ruby>円<rt>えん</rt></ruby>",
                    "54,000<ruby>円<rt>えん</rt></ruby>",
                    "12,000<ruby>円<rt>えん</rt></ruby>"
                ],
                "answer_index": 1
            },
            {
                "question": "<ruby>食堂<rt>しょくどう</rt></ruby>はどこですか。",
                "target_id": "L03_04_Q3",
                "choices": [
                    "<ruby>一階<rt>いっかい</rt></ruby>",
                    "<ruby>二階<rt>にかい</rt></ruby>",
                    "<ruby>地下<rt>ちか</rt></ruby>"
                ],
                "answer_index": 2
            }
        ],
        "audio_file": "/audio/L03_04.mp3"
    }
];
