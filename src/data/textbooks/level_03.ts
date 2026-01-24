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
        "translation": "<p>This is Sakura University. <br>Yamada-sensei: &quot;Ana-san, this is your classroom.&quot;<br>Ana: &quot;Thank you. Where is the cafeteria?&quot;<br>Yamada-sensei: &quot;The cafeteria is on the second floor. It is over there.&quot;<br>Ana: &quot;Is the administration office also on the second floor?&quot;<br>Yamada-sensei: &quot;No, the administration office is not on the second floor. It is on the first floor. The reception is also on the first floor.&quot;</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\">ここは さくら<ruby>大学<rt>だいがく</rt></ruby>です。</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「アナさん、ここはアナさんの<ruby>教室<rt>きょうしつ</rt></ruby>です」</span><br><span style=\"display: inline-block;\">アナ「ありがとうございます。</span><span style=\"display: inline-block;\"><ruby>食堂<rt>しょくどう</rt></ruby>は どこですか」</span><br><span id=\"L03_01_Q1\" style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>食堂<rt>しょくどう</rt></ruby>は <ruby>二階<rt>にかい</rt></ruby>です。</span><span style=\"display: inline-block;\">あそこですよ」</span><br><span style=\"display: inline-block;\">アナ「<ruby>事務室<rt>じむしつ</rt></ruby>も <ruby>二階<rt>にかい</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ、<ruby>事務室<rt>じむしつ</rt></ruby>は <ruby>二階<rt>にかい</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\"><ruby>一階<rt>いっかい</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>受付<rt>うけつけ</rt></ruby>も<ruby>一階<rt>いっかい</rt></ruby>です」</span></p>",
        "quizzes": [
            {
                "question": "<ruby>食堂<rt>しょくどう</rt></ruby>はどこですか。",
                "target_id": "L03_01_Q1",
                "choices": [
                    "<ruby>一階<rt>いっかい</rt></ruby>",
                    "<ruby>二階<rt>にかい</rt></ruby>",
                    "<ruby>ロビー<rt>ろびー</rt></ruby>"
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
        "translation": "<p>Yamada-sensei: &quot;Where are you from, John-san?&quot;<br>John: &quot;I am from America.&quot;<br>Yamada-sensei: &quot;Where do you work?&quot;<br>John: &quot;I am a NEX Bank employee.&quot;<br>Yamada-sensei: &quot;Kim-san, where are you from?&quot;<br>Kim: &quot;I am from Korea.&quot;<br>Yamada-sensei: &quot;Where do you work?&quot;<br>Kim: &quot;I am a LOOP Soft employee.&quot;<br>Yamada-sensei: &quot;Where are you from, Pak-san?&quot;<br>Pak: &quot;I am also from Korea.&quot;<br>Yamada-sensei: &quot;Are you an office worker, Pak-san?&quot;<br>Pak: &quot;No, I am not an office worker. I am a doctor.&quot;<br>Yamada-sensei: &quot;Where is your hospital?&quot;<br>Pak: &quot;It is Hikari Hospital.&quot;</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「お<ruby>国<rt>くに</rt></ruby>は どちらですか」</span><br><span id=\"L03_02_Q1\" style=\"display: inline-block;\">ジョン「アメリカです。」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>会社<rt>かいしゃ</rt></ruby>はどちらですか」</span><br><span style=\"display: inline-block;\">ジョン「NEXバンクの<ruby>銀行員<rt>ぎんこういん</rt></ruby>です」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「キムさん、お<ruby>国<rt>くに</rt></ruby>はどちらですか」</span><br><span style=\"display: inline-block;\">キム「<ruby>韓国<rt>かんこく</rt></ruby>です」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>会社<rt>かいしゃ</rt></ruby>はどちらですか」</span><br><span id=\"L03_02_Q2\" style=\"display: inline-block;\">キム「LOOPソフトの<ruby>社員<rt>しゃいん</rt></ruby>です」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「パクさんのお<ruby>国<rt>くに</rt></ruby>はどちらですか」</span><br><span style=\"display: inline-block;\">パク「<ruby>私<rt>わたし</rt></ruby>も<ruby>韓国<rt>かんこく</rt></ruby>です」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「パクさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\">パク「いいえ、<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。</span><span style=\"display: inline-block;\"><ruby>医者<rt>いしゃ</rt></ruby>です。」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>病院<rt>びょういん</rt></ruby>はどちらですか」</span><br><span style=\"display: inline-block;\">パク「ひかり<ruby>病院<rt>びょういん</rt></ruby>です。」</span></p>",
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
        "translation": "<p>Clerk: &quot;Welcome!&quot;<br>Ana: &quot;Excuse me, where is the shoe department?&quot;<br>Clerk: &quot;It is on the first floor. The escalator is over there.&quot;<br><br>Ana: &quot;Excuse me, how much are these shoes?&quot;<br>Clerk: &quot;They are 2,300 yen. They are Chinese shoes.&quot;<br>Ana: &quot;That's good. How much is this tie?&quot;<br>Clerk: &quot;It is 3,500 yen. It is a French tie.&quot;<br>Ana: &quot;How much is that watch?&quot;<br>Clerk: &quot;It is 12,000 yen. It is a Japanese watch.&quot;<br>Ana: &quot;Where is that wine from?&quot;<br>Clerk: &quot;It is Italian wine. It is 2,800 yen.&quot;<br>Ana: &quot;I'll take these shoes and this wine, please.&quot;<br>Clerk: &quot;Thank you very much.&quot;</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\"><ruby>店員<rt>てんいん</rt></ruby>「いらっしゃいませ」</span><br><span id=\"L03_03_Q1\" style=\"display: inline-block;\">アナ「すみません、<ruby>靴<rt>くつ</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>は どこですか」</span><br><span style=\"display: inline-block;\"><ruby>店員<rt>てんいん</rt></ruby>「<ruby>一階<rt>いっかい</rt></ruby>です。</span><span style=\"display: inline-block;\">エスカレーターは あちらです」</span><br><br><span style=\"display: inline-block;\">アナ「すみません、この<ruby>靴<rt>くつ</rt></ruby>はいくらですか」</span><br><span style=\"display: inline-block;\"><ruby>店員<rt>てんいん</rt></ruby>「2,300<ruby>円<rt>えん</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>中国<rt>ちゅうごく</rt></ruby>の<ruby>靴<rt>くつ</rt></ruby>です」</span><br><span style=\"display: inline-block;\">アナ「いいですね。</span><span style=\"display: inline-block;\">このネクタイは いくらですか」</span><br><span style=\"display: inline-block;\"><ruby>店員<rt>てんいん</rt></ruby>「3,500<ruby>円<rt>えん</rt></ruby>です。</span><span style=\"display: inline-block;\">フランスの ネクタイです」</span><br><span style=\"display: inline-block;\">アナ「その<ruby>時計<rt>とけい</rt></ruby>は いくらですか」</span><br><span style=\"display: inline-block;\"><ruby>店員<rt>てんいん</rt></ruby>「12,000<ruby>円<rt>えん</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>日本<rt>にほん</rt></ruby>の <ruby>時計<rt>とけい</rt></ruby>です」</span><br><span style=\"display: inline-block;\">アナ「あのワインは どこの ですか」</span><br><span id=\"L03_03_Q2\" style=\"display: inline-block;\"><ruby>店員<rt>てんいん</rt></ruby>「イタリアのワインです。</span><span style=\"display: inline-block;\">2,800<ruby>円<rt>えん</rt></ruby>です」</span><br><span style=\"display: inline-block;\">アナ「この<ruby>靴<rt>くつ</rt></ruby>とこのワインをください」</span><br><span style=\"display: inline-block;\"><ruby>店員<rt>てんいん</rt></ruby>「ありがとうございます」</span></p>",
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
        "translation": "<p>This is the office of Sakura University.<br>Ana: &quot;Hello. Where is Yamada-sensei?&quot;<br>Receptionist: &quot;Hello. Yamada-sensei is in the meeting room.&quot;<br>Ana: &quot;Where is the meeting room?&quot;<br>Receptionist: &quot;It is over there.&quot;<br>Ana: &quot;Thank you. Where is the telephone?&quot;<br>Receptionist: &quot;It is over there.&quot;<br><br>This is a classroom at Sakura University.<br>Yamada-sensei: &quot;Where is Ana-san?&quot;<br>Student: &quot;She is in the cafeteria. The cafeteria is in the basement.&quot;<br>Yamada-sensei: &quot;Thank you. Where is that bag from?&quot;<br>Student: &quot;It is from China. It is 8,900 yen.&quot;<br>Yamada-sensei: &quot;That's nice. Where is that camera from?&quot;<br>Student: &quot;This is a Japanese camera.&quot;<br>Yamada-sensei: &quot;How much is it?&quot;<br>Student: &quot;It is 54,000 yen.&quot;<br><br>This university's restrooms are on the first and second floors. The reception is in the lobby. The cafeteria and vending machine are in the basement. The teachers' room is on the first floor. Everyone's classroom is on the second floor.</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\">ここは さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>事務室<rt>じむしつ</rt></ruby>です。</span><br><span style=\"display: inline-block;\">アナ「こんにちは。</span><span id=\"L03_04_Q1\" style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はどちらですか」</span><br><span style=\"display: inline-block;\"><ruby>受付<rt>うけつけ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>「こんにちは。</span><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>会議室<rt>かいぎしつ</rt></ruby>ですよ。」</span><br><span style=\"display: inline-block;\">アナ「<ruby>会議室<rt>かいぎしつ</rt></ruby>はどちらですか」</span><br><span style=\"display: inline-block;\"><ruby>受付<rt>うけつけ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>「そちらです」</span><br><span style=\"display: inline-block;\">アナ「ありがとうございます。</span><span style=\"display: inline-block;\"><ruby>電話<rt>でんわ</rt></ruby>はどちらですか」</span><br><span style=\"display: inline-block;\"><ruby>受付<rt>うけつけ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>「あちらです。」</span><br><br><span style=\"display: inline-block;\">ここは さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>教室<rt>きょうしつ</rt></ruby>です</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「アナさんはどこですか」</span><br><span id=\"L03_04_Q3\" style=\"display: inline-block;\"><ruby>学生<rt>がくせい</rt></ruby>「<ruby>食堂<rt>しょくどう</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>食堂<rt>しょくどう</rt></ruby>は<ruby>地下<rt>ちか</rt></ruby>です。」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「ありがとう。</span><span style=\"display: inline-block;\">そのかばんはどこのですか。」</span><br><span style=\"display: inline-block;\"><ruby>学生<rt>がくせい</rt></ruby>「<ruby>中国<rt>ちゅうごく</rt></ruby>のです。</span><span style=\"display: inline-block;\">8,900<ruby>円<rt>えん</rt></ruby>です」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいですね。</span><span style=\"display: inline-block;\">そのカメラはどこのですか。」</span><br><span style=\"display: inline-block;\"><ruby>学生<rt>がくせい</rt></ruby>「これは<ruby>日本<rt>にほん</rt></ruby>のカメラです。」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いくらですか」</span><br><span id=\"L03_04_Q2\" style=\"display: inline-block;\"><ruby>学生<rt>がくせい</rt></ruby>「54,000<ruby>円<rt>えん</rt></ruby>です」</span><br><br><span style=\"display: inline-block;\">この<ruby>大学<rt>だいがく</rt></ruby>のトイレは<ruby>一階<rt>いっかい</rt></ruby>と<ruby>二階<rt>にかい</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>受付<rt>うけつけ</rt></ruby>はロビーです。</span><span style=\"display: inline-block;\"><ruby>食堂<rt>しょくどう</rt></ruby>と<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>は<ruby>地下<rt>ちか</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>先生<rt>せんせい</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は<ruby>一階<rt>いっかい</rt></ruby>です。</span><span style=\"display: inline-block;\">みなさんの<ruby>教室<rt>きょうしつ</rt></ruby>は<ruby>二階<rt>にかい</rt></ruby>です。</span></p>",
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
