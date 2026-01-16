import { Textbook } from './types';

export const textbooks_level_02: Textbook[] = [
    {
        "id": "TEXTBOOK_L02_01",
        "level": 2,
        "title": "<ruby>教室<rt>きょうしつ</rt></ruby>の<ruby>物<rt>もの</rt></ruby>",
        "schema_activation": [
            "（<ruby>何<rt>なに</rt></ruby>か<ruby>手<rt>て</rt></ruby>に<ruby>持<rt>も</rt></ruby>って）これはなんですか",
            "（<ruby>何<rt>なに</rt></ruby>か<ruby>指<rt>ゆび</rt></ruby>さして）あれはなんですか"
        ],
        "translation": "<p>This is a classroom. What is this? That is a book. It is a Japanese book.<br>What is that over there? That is a clock. It is Sakura University's clock.<br>Is that a dictionary? No, it's not a dictionary. It's a notebook.<br>Whose notebook is this? It's Ana-san's notebook.<br>Whose umbrella is that over there? It's Yamada-sensei's umbrella.<br>Is that a mechanical pencil? No, it's a ballpoint pen.<br>This is Yamada-sensei's ballpoint pen. It's not Ana-san's ballpoint pen.<br>That umbrella over there is also not Yamada-sensei's umbrella. It's Ana-san's umbrella.</p>",
        "textbook_html": "<p>これは<ruby>何<rt>なん</rt></ruby>ですか。<ruby>本<rt>ほん</rt></ruby>です。<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>です。<br>あれは<ruby>何<rt>なん</rt></ruby>ですか。<ruby>時計<rt>とけい</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>時計<rt>とけい</rt></ruby>です。<br>それは<ruby>辞書<rt>じしょ</rt></ruby>ですか。いいえ、<ruby>手帳<rt>てちょう</rt></ruby>です。<span id=\"L02_01_Q1\">アナさんの</span><ruby>手帳<rt>てちょう</rt></ruby>です。<br>あれは<ruby>誰<rt>だれ</rt></ruby>の<ruby>傘<rt>かさ</rt></ruby>ですか。アナさんの<ruby>傘<rt>かさ</rt></ruby>です。<br>これは<ruby>何<rt>なん</rt></ruby>ですか？アナさんのボールペンです。</p>",
        "quizzes": [
            {
                "question": "それはアナさんの<ruby>手帳<rt>てちょう</rt></ruby>ですか？",
                "target_id": "L02_01_Q1",
                "choices": [
                    "はい、アナさんのです。",
                    "いいえ、アナさんのじゃありません。"
                ],
                "answer_index": 0
            }
        ],
        "audio_file": "/audio/L02_01.mp3"
    },
    {
        "id": "TEXTBOOK_L02_02",
        "level": 2,
        "title": "<ruby>誰<rt>だれ</rt></ruby>のカバンですか",
        "schema_activation": [
            "（<ruby>何<rt>なに</rt></ruby>か<ruby>手<rt>て</rt></ruby>に<ruby>持<rt>も</rt></ruby>って）これは<ruby>誰<rt>だれ</rt></ruby>のですか",
            "（<ruby>何<rt>なに</rt></ruby>か<ruby>指<rt>ゆび</rt></ruby>さして）あれは<ruby>誰<rt>だれ</rt></ruby>のですか"
        ],
        "textbook_html": "<p>これは<ruby>誰<rt>だれ</rt></ruby>のカバンですか。それはエリックさんのカバンです。アメリカのカバンです。<br>この<ruby>車<rt>くるま</rt></ruby>のカギもエリックさんのですか。はい、エリックさんのです。<span id=\"L02_02_Q1\">この<ruby>新聞<rt>しんぶん</rt></ruby>も</span>エリックさんのです。<ruby>英語<rt>えいご</rt></ruby>の<ruby>新聞<rt>しんぶん</rt></ruby>です。<br>その<ruby>手帳<rt>てちょう</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか。キムさんのです。このボールペンもキムさんのです。<br>その<ruby>雑誌<rt>ざっし</rt></ruby>もキムさんのですか。いいえ、キムさんのじゃありません。パクさんのです。<span id=\"L02_02_Q2\"><ruby>韓国語<rt>かんこくご</rt></ruby>の<ruby>雑誌<rt>ざっし</rt></ruby>です。</span><br>あの<ruby>机<rt>つくえ</rt></ruby>と<ruby>椅子<rt>いす</rt></ruby>は<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>のです。</p>",
        "quizzes": [
            {
                "question": "その<ruby>新聞<rt>しんぶん</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか",
                "target_id": "L02_02_Q1",
                "choices": [
                    "エリックさん",
                    "キムさん"
                ],
                "answer_index": 0
            },
            {
                "question": "<ruby>韓国語<rt>かんこくご</rt></ruby>の<ruby>雑誌<rt>ざっし</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか。",
                "target_id": "L02_02_Q2",
                "choices": [
                    "エリックさん",
                    "パクさん",
                    "キムさん"
                ],
                "answer_index": 1
            }
        ],
        "audio_file": "/audio/L02_02.mp3"
    },
    {
        "id": "TEXTBOOK_L02_03",
        "level": 2,
        "title": "お<ruby>土産<rt>みやげ</rt></ruby>と<ruby>名刺<rt>めいし</rt></ruby>",
        "schema_activation": [
            "（ペンを<ruby>手<rt>て</rt></ruby>に<ruby>持<rt>も</rt></ruby>って）これは<ruby>誰<rt>だれ</rt></ruby>のペンですか",
            "（<ruby>時計<rt>とけい</rt></ruby>を<ruby>指<rt>ゆび</rt></ruby>さして）あれは<ruby>誰<rt>だれ</rt></ruby>の<ruby>時計<rt>とけい</rt></ruby>ですか"
        ],
        "textbook_html": "<p>これは<ruby>何<rt>なん</rt></ruby>ですか。それはカードです。<ruby>名刺<rt>めいし</rt></ruby>ですか。はい、<ruby>名刺<rt>めいし</rt></ruby>です。パクさんの<ruby>名刺<rt>めいし</rt></ruby>です。<span id=\"L02_03_Q1\">パクさんは</span><ruby>町<rt>まち</rt></ruby>の<ruby>病院<rt>びょういん</rt></ruby>の<ruby>医者<rt>いしゃ</rt></ruby>です。<br>これは<ruby>何<rt>なん</rt></ruby>ですか。お<ruby>土産<rt>みやげ</rt></ruby>です。このチョコレートはドイツのチョコレートです。アナさんのプレゼントです。<br>そのチョコレートもドイツのですか。いいえ、<span id=\"L02_03_Q2\">ドイツのじゃありません。</span><br>このコーヒーは<ruby>誰<rt>だれ</rt></ruby>のですか。キムさんのです。<br>あのCDはジャズのCDです。エリックさんのです。<br>このペンはボールペンですか、シャープペンシルですか。それはボールペンです。<br>あの<ruby>時計<rt>とけい</rt></ruby>はスイスの<ruby>時計<rt>とけい</rt></ruby>です。<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>のです。</p>",
        "quizzes": [
            {
                "question": "パクさんは<ruby>何<rt>なん</rt></ruby>ですか",
                "target_id": "L02_03_Q1",
                "choices": [
                    "<ruby>医者<rt>いしゃ</rt></ruby>",
                    "<ruby>学校<rt>がっこう</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>"
                ],
                "answer_index": 0
            },
            {
                "question": "あのＣＤは<ruby>誰<rt>だれ</rt></ruby>のですか",
                "target_id": "L02_03_Q2",
                "choices": [
                    "パクさん",
                    "アナさん",
                    "エリックさん"
                ],
                "answer_index": 2
            }
        ],
        "audio_file": "/audio/L02_03.mp3"
    },
    {
        "id": "TEXTBOOK_L02_04",
        "level": 2,
        "title": "<ruby>教室<rt>きょうしつ</rt></ruby>の<ruby>物<rt>もの</rt></ruby>",
        "schema_activation": [
            "（<ruby>本<rt>ほん</rt></ruby>を<ruby>手<rt>て</rt></ruby>に<ruby>持<rt>も</rt></ruby>って）これはなんの<ruby>本<rt>ほん</rt></ruby>ですか",
            "（<ruby>鍵<rt>かぎ</rt></ruby>を<ruby>指<rt>ゆび</rt></ruby>さして）あれはなんの<ruby>鍵<rt>かぎ</rt></ruby>ですか"
        ],
        "textbook_html": "<p>これは<ruby>誰<rt>だれ</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>ですか。アナさんのです。<span id=\"L02_04_Q1\"><ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>です。</span>その<ruby>辞書<rt>じしょ</rt></ruby>もアナさんのですか。いいえ、<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>辞書<rt>じしょ</rt></ruby>です。<br>このボールペンは<ruby>誰<rt>だれ</rt></ruby>のですか。それはキムさんのです。このシャープペンシルもキムさんのですか。はい、キムさんのです。<br>あのカバンはエリックさんのカバンです。このカギもエリックさんのですか。いいえ、エリックさんのじゃありません。パクさんの<ruby>車<rt>くるま</rt></ruby>のカギです。<span id=\"L02_04_Q2\"></span><br>この<ruby>名刺<rt>めいし</rt></ruby>はキムさんのです。ITの<ruby>会社員<rt>かいしゃいん</rt></ruby>です。<br>あの<ruby>傘<rt>かさ</rt></ruby>はアナさんのです。この<ruby>時計<rt>とけい</rt></ruby>は<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>のです。<br><span id=\"L02_04_Q3\">この<ruby>時計<rt>とけい</rt></ruby>は</span>スイスの<ruby>時計<rt>とけい</rt></ruby>です。<br>このコンピュータはキムさんのです。あの<ruby>椅子<rt>いす</rt></ruby>はパクさんのです。</p>",
        "quizzes": [
            {
                "question": "アナさんの<ruby>本<rt>ほん</rt></ruby>は<ruby>何<rt>なん</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>ですか。",
                "target_id": "L02_04_Q1",
                "choices": [
                    "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>",
                    "ドイツ<ruby>語<rt>ご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>"
                ],
                "answer_index": 0
            },
            {
                "question": "パクさんのカギは<ruby>何<rt>なん</rt></ruby>のカギですか。",
                "target_id": "L02_04_Q2",
                "choices": [
                    "<ruby>家<rt>いえ</rt></ruby>のカギ",
                    "<ruby>車<rt>くるま</rt></ruby>のカギ",
                    "<ruby>病院<rt>びょういん</rt></ruby>のカギ"
                ],
                "answer_index": 1
            },
            {
                "question": "スイスの<ruby>時計<rt>とけい</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか。",
                "target_id": "L02_04_Q3",
                "choices": [
                    "アナさん",
                    "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>",
                    "エリックさん"
                ],
                "answer_index": 1
            }
        ],
        "audio_file": "/audio/L02_04.mp3"
    }
];
