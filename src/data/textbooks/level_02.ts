import { Textbook } from './types';

export const textbooks_level_02: Textbook[] = [
    {
        "id": "TEXTBOOK_L02_01",
        "level": 2,
        "title": "日本語の本",
        "schema_activation": [
            "（<ruby>何<rt>なに</rt></ruby>か<ruby>手<rt>て</rt></ruby>に<ruby>持<rt>も</rt></ruby>って）これはなんですか。",
            "（<ruby>何<rt>なに</rt></ruby>か<ruby>指<rt>ゆび</rt></ruby>さして）あれはなんですか。"
        ],
        "translation": "<p>Kim: &quot;What is this?&quot;<br>Yamada-sensei: &quot;It is a book. It is a Japanese book.&quot;<br>Kim: &quot;What is that over there?&quot;<br>Yamada-sensei: &quot;It is a clock. It is a Swiss clock.&quot;<br>Kim: &quot;Is that a dictionary?&quot;<br>Yamada-sensei: &quot;No. It is not a dictionary. It is Ana-san's notebook.&quot;<br>Kim: &quot;Is that umbrella over there also Ana-san's?&quot;<br>Yamada-sensei: &quot;Yes, it is Ana-san's.&quot;<br>Kim: &quot;Is that ballpoint pen over there also Ana-san's?&quot;<br>Yamada-sensei: &quot;No, it is not Ana-san's. It is mine.&quot;</p>",
        "textbook_html": "<p>キム「これは<ruby>何<rt>なん</rt></ruby>ですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>本<rt>ほん</rt></ruby>です。<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>です」<br>キム「あれは<ruby>何<rt>なん</rt></ruby>ですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>時計<rt>とけい</rt></ruby>です。スイスの<ruby>時計<rt>とけい</rt></ruby>です」<br>キム「それは<ruby>辞書<rt>じしょ</rt></ruby>ですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ。<ruby>辞書<rt>じしょ</rt></ruby>じゃありません。<span id=\"L02_01_Q1\">アナさんの</span><ruby>手帳<rt>てちょう</rt></ruby>です」<br>キム「あの<ruby>傘<rt>かさ</rt></ruby>もアナさんのですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「はい、アナさんのです」<br>キム「あのボールペンもアナさんのですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ、アナさんのじゃありません。<ruby>私<rt>わたし</rt></ruby>のです。」</p>",
        "quizzes": [
            {
                "question": "それはアナさんの<ruby>手帳<rt>てちょう</rt></ruby>ですか。",
                "target_id": "L02_01_Q1",
                "choices": [
                    "はい、アナさんのです",
                    "いいえ、アナさんのじゃありません"
                ],
                "answer_index": 0
            }
        ],
        "audio_file": "/audio/L02_01.mp3"
    },
    {
        "id": "TEXTBOOK_L02_02",
        "level": 2,
        "title": "<ruby>誰<rt>だれ</rt></ruby>のかばんですか",
        "schema_activation": [
            "（<ruby>何<rt>なに</rt></ruby>か<ruby>手<rt>て</rt></ruby>に<ruby>持<rt>も</rt></ruby>って）これは<ruby>誰<rt>だれ</rt></ruby>のですか。",
            "（<ruby>何<rt>なに</rt></ruby>か<ruby>指<rt>ゆび</rt></ruby>さして）それは<ruby>誰<rt>だれ</rt></ruby>のですか。"
        ],
        "textbook_html": "<p>アナ「これは<ruby>誰<rt>だれ</rt></ruby>のかばんですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「それはジョンさんのかばんです。アメリカのかばんです」<br>アナ「この<ruby>車<rt>くるま</rt></ruby>のカギもジョンさんのですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「はい、ジョンさんのです」<br>アナ「<span id=\"L02_02_Q1\">この<ruby>英語<rt>えいご</rt></ruby>の<ruby>新聞<rt>しんぶん</rt></ruby>も</span>ジョンさんのですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「はい、そうです」<br>アナ「その<ruby>手帳<rt>てちょう</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「キムさんのです」<br>アナ「その<ruby>韓国語<rt>かんこくご</rt></ruby>の<ruby>雑誌<rt>ざっし</rt></ruby>もキムさんのですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ、キムさんのじゃありません。<span id=\"L02_02_Q2\">パクさんのです。</span>」<br>アナ「あの<ruby>机<rt>つくえ</rt></ruby>と<ruby>椅子<rt>いす</rt></ruby>もパクさんのですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ、パクさんのじゃありません。<ruby>私<rt>わたし</rt></ruby>のです」</p>",
        "translation": "<p>Ana: &quot;Whose bag is this?&quot;<br>Yamada-sensei: &quot;That is John-san's bag. It is an American bag.&quot;<br>Ana: &quot;Is this car key also John-san's?&quot;<br>Yamada-sensei: &quot;Yes, it is John-san's.&quot;<br>Ana: &quot;Is this English newspaper also John-san's?&quot;<br>Yamada-sensei: &quot;Yes, it is.&quot;<br>Ana: &quot;Whose notebook is that?&quot;<br>Yamada-sensei: &quot;It is Kim-san's.&quot;<br>Ana: &quot;Is that Korean magazine also Kim-san's?&quot;<br>Yamada-sensei: &quot;No, it is not Kim-san's. It is Pak-san's.&quot;<br>Ana: &quot;Are that desk and chair over there also Pak-san's?&quot;<br>Yamada-sensei: &quot;No, they are not Pak-san's. They are mine.&quot;</p>",
        "quizzes": [
            {
                "question": "<ruby>新聞<rt>しんぶん</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか。",
                "target_id": "L02_02_Q1",
                "choices": [
                    "ジョンさん",
                    "パクさん",
                    "キムさん"
                ],
                "answer_index": 0
            },
            {
                "question": "<ruby>韓国語<rt>かんこくご</rt></ruby>の<ruby>雑誌<rt>ざっし</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか。",
                "target_id": "L02_02_Q2",
                "choices": [
                    "ジョンさん",
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
        "title": "パクさんの<ruby>名刺<rt>めいし</rt></ruby>",
        "schema_activation": [
            "（<ruby>何<rt>なに</rt></ruby>か<ruby>手<rt>て</rt></ruby>に<ruby>持<rt>も</rt></ruby>って）これは<ruby>何<rt>なん</rt></ruby>ですか。",
            "（<ruby>何<rt>なに</rt></ruby>か<ruby>手<rt>て</rt></ruby>に<ruby>持<rt>も</rt></ruby>って）これは<ruby>誰<rt>だれ</rt></ruby>のですか。"
        ],
        "translation": "<p>Ana: &quot;What is that?&quot;<br>Kim: &quot;This is a business card. It is Pak-san's business card. Pak-san is a doctor at Hikari Hospital.&quot;<br>Ana: &quot;Is that so?&quot;<br>Kim: &quot;Here you go. It is a souvenir. It is German chocolate.&quot;<br>Ana: &quot;Thank you. Is that also German chocolate over there?&quot;<br>Kim: &quot;No. That is Japanese chocolate.&quot;<br>Ana: &quot;Whose coffee is this?&quot;<br>Kim: &quot;It is mine. It is Brazilian coffee.&quot;<br>Ana: &quot;Whose CD is that?&quot;<br>Kim: &quot;That is John-san's. Whose clock is that?&quot;<br>Ana: &quot;This is Yamada-sensei's. It is a Swiss clock.&quot;</p>",
        "textbook_html": "<p>アナ「それは<ruby>何<rt>なん</rt></ruby>ですか」<br>キム「これは<ruby>名刺<rt>めいし</rt></ruby>です。パクさんの<ruby>名刺<rt>めいし</rt></ruby>です。<span id=\"L02_03_Q1\">パクさんはひかり<ruby>病院<rt>びょういん</rt></ruby>の<ruby>医者<rt>いしゃ</rt></ruby>です</span>」<br>アナ「そうですか」<br>キム「これ、どうぞ。お<ruby>土産<rt>みやげ</rt></ruby>です。ドイツのチョコレートです」<br>アナ「ありがとうございます。あれもドイツのチョコレートですか」<br>キム「いいえ。あれは<ruby>日本<rt>にほん</rt></ruby>のチョコレートです」<br>アナ「このコーヒーは<ruby>誰<rt>だれ</rt></ruby>のですか」<br>キム「<ruby>私<rt>わたし</rt></ruby>のです。ブラジルのコーヒーです」<br>アナ「あのCDは<ruby>誰<rt>だれ</rt></ruby>のですか」<br>キム「<span id=\"L02_03_Q2\">あれはジョンさんのです</span>。その<ruby>時計<rt>とけい</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか」<br>アナ「これは<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>のです。スイスの<ruby>時計<rt>とけい</rt></ruby>です」</p>",
        "quizzes": [
            {
                "question": "パクさんの<ruby>病院<rt>びょういん</rt></ruby>はどちらですか。",
                "target_id": "L02_03_Q1",
                "choices": [
                    "さくら<ruby>病院<rt>びょういん</rt></ruby>",
                    "ひかり<ruby>病院<rt>びょういん</rt></ruby>",
                    "みどり<ruby>病院<rt>びょういん</rt></ruby>"
                ],
                "answer_index": 1
            },
            {
                "question": "CDは<ruby>誰<rt>だれ</rt></ruby>のですか。",
                "target_id": "L02_03_Q2",
                "choices": [
                    "パクさん",
                    "アナさん",
                    "ジョンさん"
                ],
                "answer_index": 2
            }
        ],
        "audio_file": "/audio/L02_03.mp3"
    },
    {
        "id": "TEXTBOOK_L02_04",
        "level": 2,
        "title": "<ruby>誰<rt>だれ</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>ですか",
        "schema_activation": [
            "（<ruby>本<rt>ほん</rt></ruby>を<ruby>手<rt>て</rt></ruby>に<ruby>持<rt>も</rt></ruby>って）これはなんの<ruby>本<rt>ほん</rt></ruby>ですか。",
            "（スマホを<ruby>指<rt>ゆび</rt></ruby>さして）これは<ruby>誰<rt>だれ</rt></ruby>のスマホですか。"
        ],
        "translation": "<p>Yamada-sensei: &quot;Whose business card is that?&quot;<br>Kim: &quot;It is mine. Here you go. I am an employee at LOOP Soft.&quot;<br>Yamada-sensei: &quot;Thank you.&quot;<br>Kim: &quot;Whose book is this?&quot;<br>Yamada-sensei: &quot;It is Ana-san's. It is a Japanese book.&quot;<br>Kim: &quot;Is that dictionary also Ana-san's?&quot;<br>Yamada-sensei: &quot;No, it is not Ana-san's. It is mine. Whose pen is this?&quot;<br>Kim: &quot;It is mine.&quot;<br>Yamada-sensei: &quot;Is this mechanical pencil also Kim-san's?&quot;<br>Kim: &quot;No, it is not mine. It is Pak-san's.&quot;<br>Yamada-sensei: &quot;Is that key over there John-san's?&quot;<br>Kim: &quot;No, it is not John-san's. It is Pak-san's.&quot;<br>Yamada-sensei: &quot;What key is it?&quot;<br>Kim: &quot;It is a car key. Whose Swiss clock is this?&quot;<br>Yamada-sensei: &quot;It is mine. Whose computer is this?&quot;<br>Kim: &quot;It is Pak-san's.&quot;</p>",
        "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「その<ruby>名刺<rt>めいし</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか」<br>キム「<ruby>私<rt>わたし</rt></ruby>のです。どうぞ。<ruby>私<rt>わたし</rt></ruby>はLOOPソフトの<ruby>社員<rt>しゃいん</rt></ruby>です」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「ありがとうございます」<br>キム「これは<ruby>誰<rt>だれ</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>ですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「アナさんのです。<span id=\"L02_04_Q1\"><ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>です</span>」<br>キム「その<ruby>辞書<rt>じしょ</rt></ruby>もアナさんのですか」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ、アナさんのじゃありません。<ruby>私<rt>わたし</rt></ruby>のです。このペンは<ruby>誰<rt>だれ</rt></ruby>のですか」<br>キム「<ruby>私<rt>わたし</rt></ruby>のです」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「このシャープペンもキムさんのですか」<br>キム「いいえ、<ruby>私<rt>わたし</rt></ruby>のじゃありません。パクさんのです」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「あの<ruby>鍵<rt>かぎ</rt></ruby>はジョンさんのですか」<br>キム「いいえ、ジョンさんのじゃありません。パクさんのです」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「なんの<ruby>鍵<rt>かぎ</rt></ruby>ですか」<br>キム「<span id=\"L02_04_Q2\"><ruby>車<rt>くるま</rt></ruby>の<ruby>鍵<rt>かぎ</rt></ruby>です。</span><span id=\"L02_04_Q3\">このスイスの<ruby>時計<rt>とけい</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか</span>」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>私<rt>わたし</rt></ruby>のです。このコンピュータは<ruby>誰<rt>だれ</rt></ruby>のですか」<br>キム「パクさんのです」</p>",
        "quizzes": [
            {
                "question": "アナさんの<ruby>本<rt>ほん</rt></ruby>は<ruby>何<rt>なん</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>ですか。",
                "target_id": "L02_04_Q1",
                "choices": [
                    "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>",
                    "ドイツ<ruby>語<rt>ご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>",
                    "<ruby>英語<rt>えいご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>"
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
                    "ジョンさん"
                ],
                "answer_index": 1
            }
        ],
        "audio_file": "/audio/L02_04.mp3"
    }
];
