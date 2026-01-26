import { Textbook } from './types';

export const textbooks_level_02: Textbook[] = [
    {
        "id": "TEXTBOOK_L02_01",
        "level": 2,
        "title": "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>",
        "schema_activation": [
            "（<ruby>何<rt>なに</rt></ruby>か<ruby>手<rt>て</rt></ruby>に<ruby>持<rt>も</rt></ruby>って）これはなんですか。",
            "（<ruby>何<rt>なに</rt></ruby>か<ruby>指<rt>ゆび</rt></ruby>さして）あれはなんですか。"
        ],
        "translation": "<p>Kim: &quot;What is this?&quot;<br>Yamada-sensei: &quot;It is a book. It is a Japanese book.&quot;<br>Kim: &quot;What is that over there?&quot;<br>Yamada-sensei: &quot;It is a clock. It is a Swiss clock.&quot;<br>Kim: &quot;Is that a dictionary?&quot;<br>Yamada-sensei: &quot;No. It is not a dictionary. It is Ana-san's notebook.&quot;<br>Kim: &quot;Is that umbrella over there also Ana-san's?&quot;<br>Yamada-sensei: &quot;Yes, it is Ana-san's.&quot;<br>Kim: &quot;Is that ballpoint pen over there also Ana-san's?&quot;<br>Yamada-sensei: &quot;No, it is not Ana-san's. It is mine.&quot;</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\">キム「これは<ruby>何<rt>なん</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>本<rt>ほん</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>です」</span><br><span style=\"display: inline-block;\">キム「あれは<ruby>何<rt>なん</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>時計<rt>とけい</rt></ruby>です。</span><span style=\"display: inline-block;\">スイスの<ruby>時計<rt>とけい</rt></ruby>です」</span><br><span style=\"display: inline-block;\">キム「それは<ruby>辞書<rt>じしょ</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ。</span><span style=\"display: inline-block;\"><ruby>辞書<rt>じしょ</rt></ruby>じゃありません。</span><span id=\"L02_01_Q1\" style=\"display: inline-block;\">アナさんの<ruby>手帳<rt>てちょう</rt></ruby>です」</span><br><span style=\"display: inline-block;\">キム「あの<ruby>傘<rt>かさ</rt></ruby>もアナさんのですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「はい、アナさんのです」</span><br><span style=\"display: inline-block;\">キム「あのボールペンもアナさんのですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ、アナさんのじゃありません。</span><span style=\"display: inline-block;\"><ruby>私<rt>わたし</rt></ruby>のです」</span></p>",
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
        "textbook_html": "<p><span style=\"display: inline-block;\">アナ「これは<ruby>誰<rt>だれ</rt></ruby>のかばんですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「それはジョンさんのかばんです。</span><span style=\"display: inline-block;\">アメリカのかばんです」</span><br><span style=\"display: inline-block;\">アナ「この<ruby>車<rt>くるま</rt></ruby>のカギもジョンさんのですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「はい、ジョンさんのです」</span><br><span id=\"L02_02_Q1\" style=\"display: inline-block;\">アナ「この<ruby>英語<rt>えいご</rt></ruby>の<ruby>新聞<rt>しんぶん</rt></ruby>もジョンさんのですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「はい、そうです」</span><br><span style=\"display: inline-block;\">アナ「その<ruby>手帳<rt>てちょう</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「キムさんのです」</span><br><span style=\"display: inline-block;\">アナ「その<ruby>韓国語<rt>かんこくご</rt></ruby>の<ruby>雑誌<rt>ざっし</rt></ruby>もキムさんのですか」</span><br><span id=\"L02_02_Q2\" style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ、キムさんのじゃありません。</span><span style=\"display: inline-block;\">パクさんのです」</span><br><span style=\"display: inline-block;\">アナ「あの<ruby>机<rt>つくえ</rt></ruby>と<ruby>椅子<rt>いす</rt></ruby>もパクさんのですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ、パクさんのじゃありません。</span><span style=\"display: inline-block;\"><ruby>私<rt>わたし</rt></ruby>のです」</span></p>",
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
        "translation": "<p>Ana: &quot;What is that?&quot;<br>Kim: &quot;This is a business card. It is Pak-san's business card. Pak-san is a doctor at Hikari Hospital.&quot;<br>Ana: &quot;I see.&quot;<br>Kim: &quot;Here you go. It is a souvenir. It is French chocolate.&quot;<br>Ana: &quot;Thank you. Is that also French chocolate over there?&quot;<br>Kim: &quot;No. That is Japanese chocolate.&quot;<br>Ana: &quot;Whose coffee is this?&quot;<br>Kim: &quot;It is mine. It is Brazilian coffee.&quot;<br>Ana: &quot;Whose CD is that?&quot;<br>Kim: &quot;That is John-san's. Whose clock is that?&quot;<br>Ana: &quot;This is Yamada-sensei's. It is a Swiss clock.&quot;</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\">アナ「それは<ruby>何<rt>なん</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\">キム「これは<ruby>名刺<rt>めいし</rt></ruby>です。</span><span style=\"display: inline-block;\">パクさんの<ruby>名刺<rt>めいし</rt></ruby>です。</span><span id=\"L02_03_Q1\" style=\"display: inline-block;\">パクさんはひかり<ruby>病院<rt>びょういん</rt></ruby>の<ruby>医者<rt>いしゃ</rt></ruby>です</span>」<br><span style=\"display: inline-block;\">アナ「そうですか」</span><br><span style=\"display: inline-block;\">キム「これ、どうぞ。</span><span style=\"display: inline-block;\">お<ruby>土産<rt>みやげ</rt></ruby>です。</span><span style=\"display: inline-block;\">フランスのチョコレートです」</span><br><span style=\"display: inline-block;\">アナ「ありがとうございます。</span><span style=\"display: inline-block;\">あれもフランスのチョコレートですか」</span><br><span style=\"display: inline-block;\">キム「いいえ。</span><span style=\"display: inline-block;\">あれは<ruby>日本<rt>にほん</rt></ruby>のチョコレートです」</span><br><span style=\"display: inline-block;\">アナ「このコーヒーは<ruby>誰<rt>だれ</rt></ruby>のですか」</span><br><span style=\"display: inline-block;\">キム「<ruby>私<rt>わたし</rt></ruby>のです。</span><span style=\"display: inline-block;\">ブラジルのコーヒーです」</span><br><span style=\"display: inline-block;\">アナ「あのCDは<ruby>誰<rt>だれ</rt></ruby>のですか」</span><br><span id=\"L02_03_Q2\" style=\"display: inline-block;\">キム「あれはジョンさんのです。</span><span style=\"display: inline-block;\">その<ruby>時計<rt>とけい</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか」</span><br><span style=\"display: inline-block;\">アナ「これは<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>のです。</span><span style=\"display: inline-block;\">スイスの<ruby>時計<rt>とけい</rt></ruby>です」</span></p>",
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
        "translation": "<p>Yamada-sensei: &quot;Whose business card is that?&quot;<br>Kim: &quot;It is mine. Here you go. I am a LOOP Soft employee.&quot;<br>Yamada-sensei: &quot;Thank you.&quot;<br>Kim: &quot;Whose book is this?&quot;<br>Yamada-sensei: &quot;It is Ana-san's. It is a Japanese book.&quot;<br>Kim: &quot;Is that dictionary also Ana-san's?&quot;<br>Yamada-sensei: &quot;No, it is not Ana-san's. It is mine. Whose pen is this?&quot;<br>Kim: &quot;It is mine.&quot;<br>Yamada-sensei: &quot;Is this mechanical pencil also yours?&quot;<br>Kim: &quot;No, it is not mine. It is Pak-san's.&quot;<br>Yamada-sensei: &quot;Is that key over there John-san's?&quot;<br>Kim: &quot;No, it is not John-san's. It is Pak-san's.&quot;<br>Yamada-sensei: &quot;What key is it?&quot;<br>Kim: &quot;It is a car key. Whose Swiss clock is this?&quot;<br>Yamada-sensei: &quot;It is mine. Whose computer is this?&quot;<br>Kim: &quot;It is Pak-san's.&quot;</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「その<ruby>名刺<rt>めいし</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか」</span><br><span style=\"display: inline-block;\">キム「<ruby>私<rt>わたし</rt></ruby>のです。</span><span style=\"display: inline-block;\">どうぞ。</span><span style=\"display: inline-block;\"><ruby>私<rt>わたし</rt></ruby>はLOOPソフトの<ruby>社員<rt>しゃいん</rt></ruby>です」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「ありがとうございます」</span><br><span style=\"display: inline-block;\">キム「これは<ruby>誰<rt>だれ</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>ですか」</span><br><span id=\"L02_04_Q1\" style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「アナさんのです。</span><span style=\"display: inline-block;\"><ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>です」</span><br><span style=\"display: inline-block;\">キム「その<ruby>辞書<rt>じしょ</rt></ruby>もアナさんのですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「いいえ、アナさんのじゃありません。</span><span style=\"display: inline-block;\"><ruby>私<rt>わたし</rt></ruby>のです。</span><span style=\"display: inline-block;\">このペンは<ruby>誰<rt>だれ</rt></ruby>のですか」</span><br><span style=\"display: inline-block;\">キム「<ruby>私<rt>わたし</rt></ruby>のです」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「このシャープペンもキムさんのですか」</span><br><span style=\"display: inline-block;\">キム「いいえ、<ruby>私<rt>わたし</rt></ruby>のじゃありません。</span><span style=\"display: inline-block;\">パクさんのです」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「あの<ruby>鍵<rt>かぎ</rt></ruby>はジョンさんのですか」</span><br><span style=\"display: inline-block;\">キム「いいえ、ジョンさんのじゃありません。</span><span style=\"display: inline-block;\">パクさんのです」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「なんの<ruby>鍵<rt>かぎ</rt></ruby>ですか」</span><br><span id=\"L02_04_Q2\" style=\"display: inline-block;\">キム「<ruby>車<rt>くるま</rt></ruby>の<ruby>鍵<rt>かぎ</rt></ruby>です。</span><span id=\"L02_04_Q3\" style=\"display: inline-block;\">このスイスの<ruby>時計<rt>とけい</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>私<rt>わたし</rt></ruby>のです。</span><span style=\"display: inline-block;\">このコンピュータは<ruby>誰<rt>だれ</rt></ruby>のですか」</span><br><span style=\"display: inline-block;\">キム「パクさんのです」</span></p>",
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
