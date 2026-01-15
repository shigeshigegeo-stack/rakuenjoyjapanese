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
        "translation": "<p>This is Sakura University. <br>Yamada: \"Ana-san, this is my classroom.\"<br>Ana: \"Excuse me, where is the cafeteria?\"<br>Yamada: \"The cafeteria is on the second floor. It is over there.\"<br>Ana: \"Is the office also on the second floor?\"<br>Yamada: \"No, the office is not on the second floor. It is on the first floor.\"<br>The reception is on the first floor. The restroom is on the second floor.</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\">ここは さくら<ruby>大学<rt>だいがく</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>「アナさん、ここは <ruby>私<rt>わたし</rt></ruby>の <ruby>教室<rt>きょうしつ</rt></ruby>です」</span><br><span style=\"display: inline-block;\">アナ「すみません、<ruby>食堂<rt>しょくどう</rt></ruby>は どこですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>「<ruby>食堂<rt>しょくどう</rt></ruby>は <ruby>二階<rt>にかい</rt></ruby>です。</span><span style=\"display: inline-block;\">あそこですよ」</span><br><span style=\"display: inline-block;\">アナ「<ruby>事務室<rt>じむしつ</rt></ruby>も <ruby>二階<rt>にかい</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>「いいえ、<ruby>事務室<rt>じむしつ</rt></ruby>は <ruby>二階<rt>にかい</rt></ruby>じゃありません。<ruby>一階<rt>いっかい</rt></ruby>です」</span><br><span style=\"display: inline-block;\"><ruby>受付<rt>うけつけ</rt></ruby>は <ruby>一階<rt>いっかい</rt></ruby>です。</span><span style=\"display: inline-block;\">お<ruby>手洗<rt>てあら</rt></ruby>いは <ruby>二階<rt>にかい</rt></ruby>です。</span></p>",
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
        "title": "<ruby>お国<rt>くに</rt></ruby>はどちらですか",
        "schema_activation": [
            "お<ruby>国<rt>くに</rt></ruby>はどちらですか。",
            "<ruby>会社<rt>かいしゃ</rt></ruby>(<ruby>学校<rt>がっこう</rt></ruby>)はどちらですか。"
        ],
        "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby>「お<ruby>国<rt>くに</rt></ruby>は どちらですか」<br><span style=\"display: inline-block;\">エリック「アメリカです」</span><br><span style=\"display: inline-block;\">エリックさんは アメリカの <ruby>銀行員<rt>ぎんこういん</rt></ruby>です。</span><br><ruby>山田<rt>やまだ</rt></ruby>「キムさん、<ruby>会社<rt>かいしゃ</rt></ruby>は どちらですか」<br>キム「さくらITです。<span id=\"L03_02_Q2\"><ruby>東京<rt>とうきょう</rt></ruby>の <ruby>会社<rt>かいしゃ</rt></ruby>です」</span><br>パクさんは <ruby>病院<rt>びょういん</rt></ruby>の <ruby>医者<rt>いしゃ</rt></ruby>です。<span id=\"L03_02_Q1\"><ruby>病院<rt>びょういん</rt></ruby>は <ruby>神戸<rt>こうべ</rt></ruby>です。</span><br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の <ruby>大学<rt>だいがく</rt></ruby>は <ruby>奈良<rt>なら</rt></ruby>です。<br>みなさんの <ruby>国<rt>くに</rt></ruby>は アメリカ、<ruby>韓国<rt>かんこく</rt></ruby>、ドイツです。</p>",
        "quizzes": [
            {
                "question": "パクさんの<ruby>病院<rt>びょういん</rt></ruby>はどこですか。",
                "target_id": "L03_02_Q1",
                "choices": [
                    "<ruby>神戸<rt>こうべ</rt></ruby>",
                    "<ruby>奈良<rt>なら</rt></ruby>"
                ],
                "answer_index": 0
            },
            {
                "question": "キムさんの<ruby>会社<rt>かいしゃ</rt></ruby>はどこですか。",
                "target_id": "L03_02_Q2",
                "choices": [
                    "アメリカ",
                    "<ruby>東京<rt>とうきょう</rt></ruby>",
                    "<ruby>神戸<rt>こうべ</rt></ruby>"
                ],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "TEXTBOOK_L03_03",
        "level": 3,
        "title": "いくらですか",
        "schema_activation": [
            "あなたのスマホはいくらですか。",
            "それはどこのスマホですか。"
        ],
        "translation": "<p>Clerk: \"Welcome!\"<br>Ana: \"Excuse me, where is the shoe department?\"<br>Clerk: \"It is on the first floor. The escalator is over there.\"<br>Ana: \"How much is this tie?\"<br>Clerk: \"It is 3,500 yen. It is from France.\"<br>Ana: \"How much is that watch?\"<br>Clerk: \"It is 12,000 yen. It is a Japanese watch.\"<br>Ana: \"Which country is that wine from?\"<br>Clerk: \"It is from Chile. It is 2,800 yen.\"<br>The office is in the basement.</p>",
        "textbook_html": "<p><ruby>店員<rt>てんいん</rt></ruby>「いらっしゃいませ」<br>アナ「すみません、<ruby>靴<rt>くつ</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>は どこですか」<br><span id=\"L03_03_Q1\"><ruby>店員<rt>てんいん</rt></ruby>「<ruby>一階<rt>いっかい</rt></ruby>です。</span>エスカレーターは あちらです」<br>アナ「このネクタイは いくらですか」<br><ruby>店員<rt>てんいん</rt></ruby>「3,500<ruby>円<rt>えん</rt></ruby>です。フランスの ネクタイです」<br>アナ「その<ruby>時計<rt>とけい</rt></ruby>は いくらですか」<br><ruby>店員<rt>てんいん</rt></ruby>「12,000<ruby>円<rt>えん</rt></ruby>です。<ruby>日本<rt>にほん</rt></ruby>の <ruby>時計<rt>とけい</rt></ruby>です」<br>アナ「あのワインは どこの ですか」<br><ruby>店員<rt>てんいん</rt></ruby>「イタリアの です。<span id=\"L03_03_Q2\">2,800<ruby>円<rt>えん</rt></ruby>です」</span><br><ruby>自動販売機<rt>じどうはんばいき</rt></ruby>は <ruby>地下<rt>ちか</rt></ruby>です。</p>",
        "quizzes": [
            {
                "question": "<ruby>靴<rt>くつ</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>は どこですか。",
                "target_id": "L03_03_Q1",
                "choices": [
                    "<ruby>一階<rt>いっかい</rt></ruby>",
                    "<ruby>地下<rt>ちか</rt></ruby>"
                ],
                "answer_index": 0
            },
            {
                "question": "イタリアのワインはいくらですか。",
                "target_id": "L03_03_Q2",
                "choices": [
                    "3,500<ruby>円<rt>えん</rt></ruby>",
                    "2,800<ruby>円<rt>えん</rt></ruby>",
                    "12,000<ruby>円<rt>えん</rt></ruby>"
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
        "textbook_html": "<p>ここはさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>事務所<rt>じむしょ</rt></ruby>です。<br>「<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はどこですか」<span id=\"L03_04_Q1\">「<ruby>会議室<rt>かいぎしつ</rt></ruby>です。あちらです」</span><br>「<ruby>電話<rt>でんわ</rt></ruby>はどこですか」「そちらです」<br>アナさんはどこですか。<span id=\"L03_04_Q3\"><ruby>食堂<rt>しょくどう</rt></ruby>です。<ruby>地下<rt>ちか</rt></ruby>です。</span><br>「このカバンはどちらのですか」<br>「<ruby>中国<rt>ちゅうごく</rt></ruby>のです。8,900<ruby>円<rt>えん</rt></ruby>です」<br>「あのカメラはいくらですか」<br><span id=\"L03_04_Q2\">「54,000<ruby>円<rt>えん</rt></ruby>です。<ruby>日本<rt>にほん</rt></ruby>のです」</span><br>この<ruby>大学<rt>だいがく</rt></ruby>のトイレは<ruby>一階<rt>いっかい</rt></ruby>と<ruby>二階<rt>にかい</rt></ruby>です。<ruby>受付<rt>うけつけ</rt></ruby>はロビーです。<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>はあそこです。<ruby>先生<rt>せんせい</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>は<ruby>一階<rt>いっかい</rt></ruby>です。みなさんの<ruby>教室<rt>きょうしつ</rt></ruby>は<ruby>二階<rt>にかい</rt></ruby>です。</p>",
        "quizzes": [
            {
                "question": "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はどこですか。",
                "target_id": "L03_04_Q1",
                "choices": [
                    "<ruby>食堂<rt>しょくどう</rt></ruby>",
                    "<ruby>会議室<rt>かいぎしつ</rt></ruby>"
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
        ]
    }
];
