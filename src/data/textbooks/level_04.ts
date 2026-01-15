import { Textbook } from './types';

export const textbooks_level_04: Textbook[] = [
    {
        "id": "TEXTBOOK_L04_01",
        "level": 4,
        "title": "朝の<ruby>時間<rt>じかん</rt></ruby>",
        "schema_activation": [
            "<ruby>毎朝<rt>まいあさ</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。",
            "<ruby>今朝<rt>けさ</rt></ruby>、パンを<ruby>食<rt>た</rt></ruby>べましたか。"
        ],
        "translation": "<p>Yamada-san is Japanese. He is a teacher at Sakura University. Yamada-san is 45 years old.<br>Ana-san is not Japanese. She is German. She is 20 years old. Ana-san is a student at Sakura University. She is not a teacher.<br>Yamada-san is not a student. He is a teacher.<br>Yamada-san is not a company employee. Ana-san is also not a company employee.<br>Ana-san is 20 years old. Yamada-san is not 20 years old. He is 45 years old.<br>Yamada-san is a teacher at Sakura University. Ana-san is a student at Sakura University.<br>Ana-san is a German student. Yamada-san is a Japanese teacher.<br>Ana-san is not a teacher. She is a student. Yamada-san is not a student. He is a teacher.</p>",
        "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>毎日<rt>まいにち</rt></ruby>、6<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。<br><ruby>山田<rt>やまだ</rt></ruby>「アナさん、<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか」<br>アナ「7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます」<br><span id=\"L04_01_Q1\">アナさんは</span>7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。それからさくら<ruby>大学<rt>だいがく</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。</p>",
        "quizzes": [
            {
                "question": "アナさんは<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。",
                "target_id": "L04_01_Q1",
                "choices": [
                    "6<ruby>時<rt>じ</rt></ruby>",
                    "7<ruby>時<rt>じ</rt></ruby>"
                ],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "TEXTBOOK_L04_02",
        "level": 4,
        "title": "<ruby>図書館<rt>としょかん</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>までですか",
        "schema_activation": [
            "あなたの<ruby>町<rt>まち</rt></ruby>の<ruby>図書館<rt>としょかん</rt></ruby>は、<ruby>何時<rt>なんじ</rt></ruby>までですか。",
            "<ruby>今日<rt>きょう</rt></ruby>、<ruby>何時間<rt>なんじかん</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>しますか。"
        ],
        "textbook_html": "<p>さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>図書館<rt>としょかん</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>は9<ruby>時<rt>じ</rt></ruby>から5<ruby>時<rt>じ</rt></ruby>までです。<br>アナ「すみません、<ruby>図書館<rt>としょかん</rt></ruby>は<ruby>土曜日<rt>どようび</rt></ruby>も<ruby>休<rt>やす</rt></ruby>みですか」<br><ruby>山田<rt>やまだ</rt></ruby>「いいえ、<span id=\"L04_02_Q1\"><ruby>休<rt>やす</rt></ruby>みは</span><ruby>月曜日<rt>げつようび</rt></ruby>です」<br>アナさんは<ruby>昨日<rt>きのう</rt></ruby>、<ruby>図書館<rt>としょかん</rt></ruby>で<span id=\"L04_02_Q2\">3<ruby>時間<rt>じかん</rt></ruby></span><ruby>勉強<rt>べんきょう</rt></ruby>しました。12<ruby>時<rt>じ</rt></ruby>に<ruby>終<rt>お</rt></ruby>わりました。<ruby>今日<rt>きょう</rt></ruby>も9<ruby>時<rt>じ</rt></ruby>から<ruby>勉強<rt>べんきょう</rt></ruby>します。</p>",
        "quizzes": [
            {
                "question": "<ruby>図書館<rt>としょかん</rt></ruby>の<ruby>休<rt>やす</rt></ruby>みは<ruby>何曜日<rt>なんようび</rt></ruby>ですか。",
                "target_id": "L04_02_Q1",
                "choices": [
                    "<ruby>月曜日<rt>げつようび</rt></ruby>",
                    "<ruby>土曜日<rt>どようび</rt></ruby>"
                ],
                "answer_index": 0
            },
            {
                "question": "アナさんは<ruby>昨日<rt>きのう</rt></ruby>、<ruby>何時間<rt>なんじかん</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>しましたか。",
                "target_id": "L04_02_Q2",
                "choices": [
                    "12<ruby>時間<rt>じかん</rt></ruby>",
                    "9<ruby>時間<rt>じかん</rt></ruby>",
                    "3<ruby>時間<rt>じかん</rt></ruby>"
                ],
                "answer_index": 2
            }
        ]
    },
    {
        "id": "TEXTBOOK_L04_03",
        "level": 4,
        "title": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>",
        "schema_activation": [
            "あなたの<ruby>国<rt>くに</rt></ruby>の<ruby>銀行<rt>ぎんこう</rt></ruby>は、<ruby>土曜日<rt>どようび</rt></ruby>に<ruby>休<rt>やす</rt></ruby>みますか。",
            "あなたは<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きますか。"
        ],
        "textbook_html": "<p>ジムさんは<ruby>今<rt>いま</rt></ruby>、<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>にいます。<br>ジム「すみません、<span id=\"L04_03_Q1\"><ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は</span>9<ruby>時<rt>じ</rt></ruby>からですか」<br><ruby>店員<rt>てんいん</rt></ruby>「はい、9<ruby>時<rt>じ</rt></ruby>から5<ruby>時<rt>じ</rt></ruby>までです」<br>ジムさんは<ruby>昨日<rt>きのう</rt></ruby>、<span id=\"L04_03_Q2\"><ruby>銀行<rt>ぎんこう</rt></ruby>で</span><ruby>働<rt>はたら</rt></ruby>きました。9<ruby>時<rt>じ</rt></ruby>から5<ruby>時<rt>じ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きました。<ruby>今日<rt>きょう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みです。<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>は<ruby>銀行<rt>ぎんこう</rt></ruby>です。<ruby>銀行<rt>ぎんこう</rt></ruby>は<ruby>土曜日<rt>どようび</rt></ruby>と<ruby>日曜日<rt>にちようび</rt></ruby>に<ruby>休<rt>やす</rt></ruby>みます。</p>",
        "quizzes": [
            {
                "question": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>からですか。",
                "target_id": "L04_03_Q1",
                "choices": [
                    "9<ruby>時<rt>じ</rt></ruby>",
                    "5<ruby>時<rt>じ</rt></ruby>"
                ],
                "answer_index": 0
            },
            {
                "question": "ジムさんは<ruby>昨日<rt>きのう</rt></ruby>、どこで<ruby>働<rt>はたら</rt></ruby>きましたか。",
                "target_id": "L04_03_Q2",
                "choices": [
                    "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>",
                    "<ruby>銀行<rt>ぎんこう</rt></ruby>",
                    "<ruby>学校<rt>がっこう</rt></ruby>"
                ],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "TEXTBOOK_L04_04",
        "level": 4,
        "title": "アナさんの<ruby>一日<rt>いちにち</rt></ruby>",
        "schema_activation": [
            "あなたは<ruby>昨日<rt>きのう</rt></ruby>、<ruby>勉強<rt>べんきょう</rt></ruby>しましたか。<ruby>何時間<rt>なんじかん</rt></ruby>しましたか。",
            "<ruby>明日<rt>あした</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。"
        ],
        "textbook_html": "<p>アナさんは<ruby>毎朝<rt>まいあさ</rt></ruby>7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。さくら<ruby>大学<rt>だいがく</rt></ruby>の<span id=\"L04_04_Q1\"><ruby>授業<rt>じゅぎょう</rt></ruby>は</span>9<ruby>時<rt>じ</rt></ruby>から4<ruby>時<rt>じ</rt></ruby>までです。<br>アナ「<ruby>山田<rt>やまだ</rt></ruby>さん、<ruby>昨日<rt>きのう</rt></ruby>の<ruby>晩<rt>ばん</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きましたか」<br><span id=\"L04_04_Q2\"><ruby>山田<rt>やまだ</rt></ruby>「8<ruby>時<rt>じ</rt></ruby>まで</span><ruby>働<rt>はたら</rt></ruby>きました。とても<ruby>疲<rt>つか</rt></ruby>れました」<br><ruby>山田<rt>やまだ</rt></ruby>さんは8<ruby>時<rt>じ</rt></ruby>に<ruby>終<rt>お</rt></ruby>わりました。アナさんは<ruby>昨日<rt>きのう</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>10<ruby>時<rt>じ</rt></ruby>から12<ruby>時<rt>じ</rt></ruby>まで<ruby>勉強<rt>べんきょう</rt></ruby>しました。<ruby>今日<rt>きょう</rt></ruby>は<ruby>金曜日<rt>きんようび</rt></ruby>です。<ruby>明日<rt>あした</rt></ruby>は<ruby>土曜日<rt>どようび</rt></ruby>です。<ruby>大学<rt>だいがく</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みです。<span id=\"L04_04_Q3\">アナさんは</span>10<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。<ruby>山田<rt>やまだ</rt></ruby>さんも<ruby>明日<rt>あした</rt></ruby>は<ruby>働<rt>はたら</rt></ruby>きません。</p>",
        "quizzes": [
            {
                "question": "アナさんの<ruby>授業<rt>じゅぎょう</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>からですか。",
                "target_id": "L04_04_Q1",
                "choices": [
                    "9<ruby>時<rt>じ</rt></ruby>",
                    "4<ruby>時<rt>じ</rt></ruby>"
                ],
                "answer_index": 0
            },
            {
                "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>昨日<rt>きのう</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きましたか。",
                "target_id": "L04_04_Q2",
                "choices": [
                    "7<ruby>時<rt>じ</rt></ruby>",
                    "8<ruby>時<rt>じ</rt></ruby>",
                    "10<ruby>時<rt>じ</rt></ruby>"
                ],
                "answer_index": 1
            },
            {
                "question": "<ruby>土曜日<rt>どようび</rt></ruby>、アナさんは<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。",
                "target_id": "L04_04_Q3",
                "choices": [
                    "7<ruby>時<rt>じ</rt></ruby>",
                    "12<ruby>時<rt>じ</rt></ruby>",
                    "10<ruby>時<rt>じ</rt></ruby>"
                ],
                "answer_index": 2
            }
        ]
    }
];
