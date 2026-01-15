import { Textbook } from './types';

export const textbooks_level_05: Textbook[] = [
    {
        "id": "TEXTBOOK_L05_01",
        "level": 5,
        "title": "<ruby>駅<rt>えき</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます",
        "schema_activation": [
            "あなたは <ruby>明日<rt>あした</rt></ruby>、どこへ <ruby>行<rt>い</rt></ruby>きますか。",
            "<ruby>昨日<rt>きのう</rt></ruby>、どこかへ <ruby>行<rt>い</rt></ruby>きましたか。"
        ],
        "translation": "<p>This is Sakura Station. Yamada-san is at the station now.<br>Ana: \"Yamada-san, where are you going?\"<br>Yamada: \"I am going to Nagoya.\"<br>Ana: \"I see. I am going home now.\"<br>Ana went to Osaka yesterday. Today she is going back to her house.</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\">ここは さくら<ruby>駅<rt>えき</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>今<rt>いま</rt></ruby> <ruby>駅<rt>えき</rt></ruby>に います。</span><br><span style=\"display: inline-block;\">アナ「<ruby>山田<rt>やまだ</rt></ruby>さん、どこへ <ruby>行<rt>い</rt></ruby>きますか」</span><br><span id=\"L05_01_Q1\" style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>「<ruby>名古屋<rt>なごや</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます」</span><br><span style=\"display: inline-block;\">アナ「そうですか。</span><span style=\"display: inline-block;\"><ruby>私<rt>わたし</rt></ruby>は <ruby>今<rt>いま</rt></ruby>から <ruby>家<rt>うち</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>ります」</span><br><span style=\"display: inline-block;\">アナさんは <ruby>昨日<rt>きのう</rt></ruby> <ruby>大阪<rt>おおさか</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。</span><span style=\"display: inline-block;\"><ruby>今日<rt>きょう</rt></ruby>は <ruby>家<rt>うち</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>ります。</span></p>",
        "quizzes": [
            {
                "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは どこへ <ruby>行<rt>い</rt></ruby>きますか。",
                "target_id": "L05_01_Q1",
                "choices": [
                    "<ruby>大阪<rt>おおさか</rt></ruby>",
                    "<ruby>名古屋<rt>なごや</rt></ruby>"
                ],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "TEXTBOOK_L05_02",
        "level": 5,
        "title": "<ruby>東京<rt>とうきょう</rt></ruby>への <ruby>旅行<rt>りょこう</rt></ruby>",
        "schema_activation": [
            "<ruby>旅行<rt>りょこう</rt></ruby>の <ruby>時<rt>とき</rt></ruby>、<ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>くのが <ruby>一番<rt>いちばん</rt></ruby> <ruby>好<rt>す</rt></ruby>きですか。",
            "あなたは <ruby>一人<rt>ひとり</rt></ruby>で <ruby>旅行<rt>りょこう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。それとも <ruby>家族<rt>かぞく</rt></ruby>や <ruby>友達<rt>ともだち</rt></ruby>と <ruby>行<rt>い</rt></ruby>きますか。"
        ],
        "textbook_html": "<p><span style=\"display: inline-block;\">ジムさんは <ruby>明日<rt>あした</rt></ruby> <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>「ジムさん、<ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか」</span><br><span id=\"L05_02_Q1\" style=\"display: inline-block;\">ジム「<ruby>新幹線<rt>しんかんせん</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>「<ruby>誰<rt>だれ</rt></ruby>と <ruby>行<rt>い</rt></ruby>きますか」</span><br><span style=\"display: inline-block;\">ジム「<ruby>一人<rt>ひとり</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます」</span><br><span style=\"display: inline-block;\">ジムさんは アメリカから <ruby>来<rt>き</rt></ruby>ました。</span><span style=\"display: inline-block;\"><ruby>飛行機<rt>ひこうき</rt></ruby>で <ruby>来<rt>き</rt></ruby>ました。</span><span id=\"L05_02_Q2\" style=\"display: inline-block;\"><ruby>去年<rt>きょねん</rt></ruby>の <ruby>九月<rt>くがつ</rt></ruby>に <ruby>来<rt>き</rt></ruby>ました。</span><span style=\"display: inline-block;\">とても <ruby>忙<rt>いそが</rt></ruby>しい <ruby>人<rt>ひと</rt></ruby>です。</span></p>",
        "quizzes": [
            {
                "question": "ジムさんは <ruby>何<rt>なに</rt></ruby>で <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。",
                "target_id": "L05_02_Q1",
                "choices": [
                    "<ruby>新幹線<rt>しんかんせん</rt></ruby>",
                    "<ruby>飛行機<rt>ひこうき</rt></ruby>"
                ],
                "answer_index": 0
            },
            {
                "question": "ジムさんは いつ <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ましたか。",
                "target_id": "L05_02_Q2",
                "choices": [
                    "<ruby>明日<rt>あした</rt></ruby>",
                    "9<ruby>月<rt>がつ</rt></ruby>",
                    "<ruby>去年<rt>きょねん</rt></ruby>の 9<ruby>月<rt>がつ</rt></ruby>"
                ],
                "answer_index": 2
            }
        ]
    },
    {
        "id": "TEXTBOOK_L05_03",
        "level": 5,
        "title": "<ruby>九州<rt>きゅうしゅう</rt></ruby>から <ruby>来<rt>き</rt></ruby>ました",
        "schema_activation": [
            "あなたの<ruby>国<rt>くに</rt></ruby>の <ruby>長<rt>なが</rt></ruby>い<ruby>休<rt>やす</rt></ruby>み（お<ruby>正月<rt>しょうがつ</rt></ruby>や お<ruby>祭<rt>まつ</rt></ruby>りなど）は いつですか。",
            "あなたの<ruby>町<rt>まち</rt></ruby>から <ruby>空港<rt>くうこう</rt></ruby>まで、<ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか。"
        ],
        "translation": "<p>Kim is Korean. He came to Japan last year.<br>Ana: \"Kim-san, where did you go yesterday?\"<br>Kim: \"I went to Kyushu. I went with my family.\"<br>They went by plane. Kim came back from Kyushu today. He returned by taxi at night. Kyushu was very beautiful.</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\">キムさんは <ruby>韓国人<rt>かんこくじん</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>去年<rt>きょねん</rt></ruby> <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ました。</span><br><span style=\"display: inline-block;\">アナ「キムさん、<ruby>昨日<rt>きのう</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きましたか」</span><br><span id=\"L05_03_Q1\" style=\"display: inline-block;\">キム「<ruby>九州<rt>きゅうしゅう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。</span><span style=\"display: inline-block;\"><ruby>家族<rt>かぞく</rt></ruby>と <ruby>行<rt>い</rt></ruby>きました」</span><br><span style=\"display: inline-block;\"><ruby>飛行機<rt>ひこうき</rt></ruby>で <ruby>行<rt>い</rt></ruby>きました。</span><br><span style=\"display: inline-block;\">キムさんは <ruby>今日<rt>きょう</rt></ruby> <ruby>九州<rt>きゅうしゅう</rt></ruby>から <ruby>帰<rt>かえ</rt></ruby>りました。</span><span id=\"L05_03_Q2\" style=\"display: inline-block;\"><ruby>夜<rt>よる</rt></ruby>、タクシーで <ruby>帰<rt>かえ</rt></ruby>りました。</span><br><span style=\"display: inline-block;\"><ruby>九州<rt>きゅうしゅう</rt></ruby>は とても <ruby>綺麗<rt>きれい</rt></ruby>でした。</span></p>",
        "quizzes": [
            {
                "question": "キムさんは <ruby>昨日<rt>きのう</rt></ruby>、どこへ <ruby>行<rt>い</rt></ruby>きましたか。",
                "target_id": "L05_03_Q1",
                "choices": [
                    "<ruby>九州<rt>きゅうしゅう</rt></ruby>",
                    "<ruby>韓国<rt>かんこく</rt></ruby>"
                ],
                "answer_index": 0
            },
            {
                "question": "キムさんは <ruby>何<rt>なに</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>りましたか。",
                "target_id": "L05_03_Q2",
                "choices": [
                    "<ruby>電車<rt>でんしゃ</rt></ruby>",
                    "タクシー",
                    "新幹線"
                ],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "TEXTBOOK_L05_04",
        "level": 5,
        "title": "<ruby>京都<rt>きょうと</rt></ruby>の <ruby>旅行<rt>りょこう</rt></ruby>",
        "schema_activation": [
            "あなたの <ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。",
            "<ruby>週末<rt>しゅうまつ</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と どこかへ <ruby>行<rt>い</rt></ruby>きますか。"
        ],
        "translation": "<p>Ana is going to Kyoto next Wednesday. <br>Yamada: \"Ana-san, who are you going with?\"<br>Ana: \"I am going with my friend Pak-san.\"<br>Yamada: \"How will you go?\"<br>Ana: \"We will go by train.\"<br>Ana's birthday is October 15th. This trip to Kyoto is a present. The two of them will return on Thursday. Next Sunday, she will not go anywhere. She will rest at home. Kyoto is a very famous town.</p>",
        "textbook_html": "<p>アナさんは <ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>水曜日<rt>すいようび</rt></ruby>に <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<br><ruby>山田<rt>やまだ</rt></ruby>「アナさん、<ruby>誰<rt>だれ</rt></ruby>と <ruby>行<rt>い</rt></ruby>きますか」<br><span id=\"L05_04_Q1\">アナ「<ruby>友達<rt>ともだち</rt></ruby>の パクさんと <ruby>行<rt>い</rt></ruby>きます」</span><br><ruby>山田<rt>やまだ</rt></ruby>「<ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか」<br><span id=\"L05_04_Q2\">アナ「<ruby>電車<rt>でんしゃ</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます」</span><br>アナさんの <ruby>誕生日<rt>たんじょうび</rt></ruby>は 10<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>です。<ruby>京都<rt>きょうと</rt></ruby>の <ruby>旅行<rt>りょこう</rt></ruby>は プレゼントです。<ruby>二人<rt>ふたり</rt></ruby>は <ruby>木曜日<rt>もくようび</rt></ruby>に <ruby>帰<rt>かえ</rt></ruby>ります。<span id=\"L05_04_Q3\"><ruby>次<rt>つぎ</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>は どこへも <ruby>行<rt>い</rt></ruby>きません。</span><ruby>家<rt>うち</rt></ruby>で <ruby>休<rt>やす</rt></ruby>みます。<ruby>京都<rt>きょうと</rt></ruby>は とても <ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>町<rt>まち</rt></ruby>です。</p>",
        "quizzes": [
            {
                "question": "アナさんは いつ <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。",
                "choices": [
                    "<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>水曜日<rt>すいようび</rt></ruby>",
                    "<ruby>木曜日<rt>もくようび</rt></ruby>"
                ],
                "answer_index": 0
            },
            {
                "question": "アナさんは <ruby>誰<rt>だれ</rt></ruby>と <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。",
                "choices": [
                    "<ruby>山田<rt>やまだ</rt></ruby>さん",
                    "パクさん",
                    "<ruby>一人<rt>ひとり</rt></ruby>で"
                ],
                "answer_index": 1
            },
            {
                "question": "アナさんの <ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。",
                "choices": [
                    "10<ruby>月<rt>がつ</rt></ruby> 1<ruby>日<rt>ついたち</rt></ruby>",
                    "10<ruby>月<rt>がつ</rt></ruby> 10<ruby>日<rt>にち</rt></ruby>",
                    "10<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>"
                ],
                "answer_index": 2
            }
        ]
    }
];
