import { Textbook } from './types';

export const textbooks_level_04: Textbook[] = [
    {
        "id": "TEXTBOOK_L04_01",
        "level": 4,
        "title": "<ruby>朝<rt>あさ</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>",
        "schema_activation": [
            "<ruby>今<rt>いま</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>ですか。",
            "<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。"
        ],
        "translation": "<p>Yamada-sensei: &quot;Ana-san, what time do you wake up every morning?&quot;<br>Ana: &quot;I wake up at 7 o'clock. What time do you wake up, Yamada-sensei?&quot;<br>Yamada-sensei: &quot;I wake up at 6 o'clock.&quot;<br>Yamada-sensei wakes up at 6 o'clock every morning. He goes to bed at 10 o'clock.<br>Ana-san wakes up at 7 o'clock every morning. She goes to bed at 11 o'clock.<br>Sakura University starts at 9:00 AM. It finishes at 5:00 PM.</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「アナさん、<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか」</span><br><span id=\"L04_01_Q1\" style=\"display: inline-block;\">アナ「7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。</span><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「6<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>毎朝<rt>まいあさ</rt></ruby>6<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。</span><span style=\"display: inline-block;\">10<ruby>時<rt>じ</rt></ruby>に<ruby>寝<rt>ね</rt></ruby>ます。</span><br><span style=\"display: inline-block;\">アナさんは<ruby>毎朝<rt>まいあさ</rt></ruby>7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。</span><span style=\"display: inline-block;\">11<ruby>時<rt>じ</rt></ruby>に<ruby>寝<rt>ね</rt></ruby>ます。</span><br><span id=\"L04_01_Q2\" style=\"display: inline-block;\">さくら<ruby>大学<rt>だいがく</rt></ruby>は<ruby>午前<rt>ごぜん</rt></ruby>9<ruby>時<rt>じ</rt></ruby>に<ruby>始<rt>はじ</rt></ruby>まります。</span><span style=\"display: inline-block;\"><ruby>午後<rt>ごご</rt></ruby>5<ruby>時<rt>じ</rt></ruby>に<ruby>終<rt>お</rt></ruby>わります。</span></p>",
        "quizzes": [
            {
                "question": "アナさんは<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。",
                "choices": [
                    "6<ruby>時<rt>じ</rt></ruby>",
                    "7<ruby>時<rt>じ</rt></ruby>",
                    "8<ruby>時<rt>じ</rt></ruby>"
                ],
                "answer_index": 1,
                "target_id": "L04_01_Q1"
            },
            {
                "question": "さくら<ruby>大学<rt>だいがく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>に<ruby>始<rt>はじ</rt></ruby>まりますか。",
                "choices": [
                    "7<ruby>時<rt>じ</rt></ruby>",
                    "8<ruby>時<rt>じ</rt></ruby>",
                    "9<ruby>時<rt>じ</rt></ruby>"
                ],
                "answer_index": 2,
                "target_id": "L04_01_Q2"
            }
        ],
        "audio_file": "/audio/L04_01.mp3"
    },
    {
        "id": "TEXTBOOK_L04_02",
        "level": 4,
        "title": "<ruby>図書館<rt>としょかん</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>からですか",
        "schema_activation": [
            "あなたの<ruby>町<rt>まち</rt></ruby>(<ruby>大学<rt>だいがく</rt></ruby>)の<ruby>図書館<rt>としょかん</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>からですか。",
            "<ruby>今日<rt>きょう</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>まで<ruby>勉強<rt>べんきょう</rt></ruby>しますか。"
        ],
        "translation": "<p>This is Sakura University Library.<br>Ana: &quot;Excuse me, from what time until what time is the library open?&quot;<br>Receptionist: &quot;It is from 9:00 AM to 5:00 PM.&quot;<br>Ana: &quot;Is it closed on Saturdays?&quot;<br>Receptionist: &quot;No, it is not closed. It is closed on Mondays.&quot;<br>Ana: &quot;Hello, Yamada-sensei.&quot;<br>Yamada-sensei: &quot;Hello. Ana-san, what time did you wake up today?&quot;<br>Ana: &quot;I woke up at 7 o'clock. Yamada-sensei, until what time will you work today?&quot;<br>Yamada-sensei: &quot;I will work until 6 o'clock. What time does the Japanese class start?&quot;<br>Ana: &quot;It starts at 4 o'clock. It finishes at 5 o'clock.&quot;</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\">ここはさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>図書館<rt>としょかん</rt></ruby>です。</span><br><span style=\"display: inline-block;\">アナ「すみません、<ruby>図書館<rt>としょかん</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>までですか」</span><br><span style=\"display: inline-block;\"><ruby>受付<rt>うけつけ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>「<ruby>午前<rt>ごぜん</rt></ruby>9<ruby>時<rt>じ</rt></ruby>から<ruby>午後<rt>ごご</rt></ruby>5<ruby>時<rt>じ</rt></ruby>までです」</span><br><span style=\"display: inline-block;\">アナ「<ruby>土曜日<rt>どようび</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みですか」</span><br><span id=\"L04_02_Q1\" style=\"display: inline-block;\"><ruby>受付<rt>うけつけ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>「いいえ、<ruby>休<rt>やす</rt></ruby>みじゃありません。</span><span style=\"display: inline-block;\"><ruby>休<rt>やす</rt></ruby>みは<ruby>月曜日<rt>げつようび</rt></ruby>です」</span><br><span style=\"display: inline-block;\">アナ「<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>、こんにちは」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「こんにちは。アナさん、<ruby>今日<rt>きょう</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きましたか」</span><br><span style=\"display: inline-block;\">アナ「7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きました。</span><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>今日<rt>きょう</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きますか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「6<ruby>時<rt>じ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きます。</span><span style=\"display: inline-block;\"><ruby>日本語<rt>にほんご</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>に<ruby>始<rt>はじ</rt></ruby>まりますか」</span><br><span id=\"L04_02_Q2\" style=\"display: inline-block;\">アナ「4<ruby>時<rt>じ</rt></ruby>に<ruby>始<rt>はじ</rt></ruby>まります。</span><span style=\"display: inline-block;\">5<ruby>時<rt>じ</rt></ruby>に<ruby>終<rt>お</rt></ruby>わります」</span></p>",
        "quizzes": [
            {
                "question": "<ruby>図書館<rt>としょかん</rt></ruby>の<ruby>休<rt>やす</rt></ruby>みは<ruby>何曜日<rt>なんようび</rt></ruby>ですか。",
                "choices": [
                    "<ruby>土曜日<rt>どようび</rt></ruby>",
                    "<ruby>日曜日<rt>にちようび</rt></ruby>",
                    "<ruby>月曜日<rt>げつようび</rt></ruby>"
                ],
                "answer_index": 2,
                "target_id": "L04_02_Q1"
            },
            {
                "question": "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>までですか。",
                "choices": [
                    "1<ruby>時<rt>じ</rt></ruby>から2<ruby>時<rt>じ</rt></ruby>",
                    "3<ruby>時<rt>じ</rt></ruby>から4<ruby>時<rt>じ</rt></ruby>",
                    "4<ruby>時<rt>じ</rt></ruby>から5<ruby>時<rt>じ</rt></ruby>"
                ],
                "answer_index": 2,
                "target_id": "L04_02_Q2"
            }
        ],
        "audio_file": "/audio/L04_02.mp3"
    },
    {
        "id": "TEXTBOOK_L04_03",
        "level": 4,
        "title": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>までですか",
        "schema_activation": [
            "<ruby>土曜日<rt>どようび</rt></ruby>、<ruby>働<rt>はたら</rt></ruby>きますか(<ruby>勉強<rt>べんきょう</rt></ruby>しますか)。",
            "<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きますか(<ruby>勉強<rt>べんきょう</rt></ruby>しますか)。"
        ],
        "translation": "<p>John got up at 7:00 yesterday. He works from 8:00 AM to 5:00 PM every day. He finished work at 4:00 PM yesterday. Today is a day off.<br>This is the post office.<br>John: &quot;Excuse me, until what time is the post office open?&quot;<br>Post Office Clerk: &quot;It is until 4:00 PM.&quot;<br>John: &quot;What days are you closed?&quot;<br>Post Office Clerk: &quot;Saturdays and Sundays.&quot;<br>John: &quot;Thank you very much.&quot;<br>This is a department store.<br>John: &quot;Excuse me. From what time until what time is the department store open?&quot;<br>Clerk: &quot;It is from 10:00 AM to 6:00 PM.&quot;<br>John: &quot;What day are you closed?&quot;<br>Clerk: &quot;It is closed on Tuesdays.&quot;</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\">ジョンさんは<ruby>昨日<rt>きのう</rt></ruby>7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きました。</span><span style=\"display: inline-block;\"><ruby>毎日<rt>まいにち</rt></ruby><ruby>午前<rt>ごぜん</rt></ruby>8<ruby>時<rt>じ</rt></ruby>から<ruby>午後<rt>ごご</rt></ruby>5<ruby>時<rt>じ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きます。</span><span style=\"display: inline-block;\"><ruby>昨日<rt>きのう</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>は<ruby>午後<rt>ごご</rt></ruby>4<ruby>時<rt>じ</rt></ruby>に<ruby>終<rt>お</rt></ruby>わりました。</span><span style=\"display: inline-block;\"><ruby>今日<rt>きょう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みです。</span><br><br><span style=\"display: inline-block;\">ここは<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>です。</span><br><span style=\"display: inline-block;\">ジョン「すみません、<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>までですか」</span><br><span id=\"L04_03_Q1\" style=\"display: inline-block;\"><ruby>郵便局員<rt>ゆうびんきょくいん</rt></ruby>「<ruby>午後<rt>ごご</rt></ruby>5<ruby>時<rt>じ</rt></ruby>までですよ」</span><br><span style=\"display: inline-block;\">ジョン「<ruby>休<rt>やす</rt></ruby>みは<ruby>何曜日<rt>なんようび</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\"><ruby>郵便局員<rt>ゆうびんきょくいん</rt></ruby>「<ruby>土曜日<rt>どようび</rt></ruby>と<ruby>日曜日<rt>にちようび</rt></ruby>です」</span><br><span style=\"display: inline-block;\">ジョン「どうもありがとうございます」</span><br><span style=\"display: inline-block;\">ここはデパートです。</span><br><span style=\"display: inline-block;\">ジョン「すみません。</span><span style=\"display: inline-block;\">デパートは<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>までですか」</span><br><span style=\"display: inline-block;\"><ruby>店員<rt>てんいん</rt></ruby>「<ruby>午前<rt>ごぜん</rt></ruby>10<ruby>時<rt>じ</rt></ruby>から<ruby>午後<rt>ごご</rt></ruby>6<ruby>時<rt>じ</rt></ruby>までです」</span><br><span style=\"display: inline-block;\">ジョン「<ruby>休<rt>やす</rt></ruby>みは<ruby>何曜日<rt>なんようび</rt></ruby>ですか」</span><br><span id=\"L04_03_Q2\" style=\"display: inline-block;\"><ruby>店員<rt>てんいん</rt></ruby>「<ruby>火曜日<rt>かようび</rt></ruby>です」</span></p>",
        "quizzes": [
            {
                "question": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>までですか。",
                "choices": [
                    "<ruby>午後<rt>ごご</rt></ruby>4<ruby>時<rt>じ</rt></ruby>まで",
                    "<ruby>午後<rt>ごご</rt></ruby>5<ruby>時<rt>じ</rt></ruby>まで",
                    "<ruby>午後<rt>ごご</rt></ruby>6<ruby>時<rt>じ</rt></ruby>まで"
                ],
                "answer_index": 1,
                "target_id": "L04_03_Q1"
            },
            {
                "question": "デパートの<ruby>休<rt>やす</rt></ruby>みは<ruby>何曜日<rt>なんようび</rt></ruby>ですか。",
                "choices": [
                    "<ruby>月曜日<rt>げつようび</rt></ruby>",
                    "<ruby>火曜日<rt>かようび</rt></ruby>",
                    "<ruby>水曜日<rt>すいようび</rt></ruby>"
                ],
                "answer_index": 1,
                "target_id": "L04_03_Q2"
            }
        ],
        "audio_file": "/audio/L04_03.mp3"
    },
    {
        "id": "TEXTBOOK_L04_04",
        "level": 4,
        "title": "アナさんの<ruby>一日<rt>いちにち</rt></ruby>",
        "schema_activation": [
            "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>まで<ruby>勉強<rt>べんきょう</rt></ruby>しましたか。",
            "<ruby>明日<rt>あした</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。"
        ],
        "translation": "<p>Ana-san is a student at Sakura University. She wakes up at 7:00 every morning. Breakfast is at 7:30.<br>Ana: &quot;Good morning, Yamada-sensei. From what time to what time did you sleep?&quot;<br>Yamada-sensei: &quot;I slept from 10:00 to 6:00. How about you, Ana-san?&quot;<br>Ana: &quot;I slept from 11:00 to 7:00.&quot;<br>Yamada-sensei: &quot;From what time to what time is university today?&quot;<br>Ana: &quot;It is from 9:00 to 3:00. From what time to what time will you work today, Yamada-sensei?&quot;<br>Yamada-sensei: &quot;I will work from 9:00 to 6:00.&quot;<br>Ana: &quot;Until what time did you work yesterday?&quot;<br>Yamada-sensei: &quot;I worked until 5:00. What time will you go to sleep today, Ana-san?&quot;<br>Ana: &quot;I will go to sleep at 9:00. I will wake up at 6:00 tomorrow. What time will you go to sleep, Yamada-sensei?&quot;<br>Yamada-sensei: &quot;I will also go to sleep at 9:00. The day after tomorrow is Saturday. Is the university closed?&quot;<br>Ana: &quot;Yes, it is closed on Saturdays.&quot;</p>",
        "textbook_html": "<p><span style=\"display: inline-block;\">アナさんはさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。</span><span id=\"L04_04_Q1\" style=\"display: inline-block;\"><ruby>毎朝<rt>まいあさ</rt></ruby>７<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。</span><span style=\"display: inline-block;\"><ruby>朝<rt>あさ</rt></ruby>ごはんは７<ruby>時<rt>じ</rt></ruby><ruby>半<rt>はん</rt></ruby>です。</span><br><br><span style=\"display: inline-block;\">ここはさくら<ruby>大学<rt>だいがく</rt></ruby>です。</span><br><span style=\"display: inline-block;\">アナ「<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>、おはようございます。</span><span style=\"display: inline-block;\"><ruby>昨日<rt>きのう</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>まで<ruby>寝<rt>ね</rt></ruby>ましたか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「10<ruby>時<rt>じ</rt></ruby>から6<ruby>時<rt>じ</rt></ruby>まで<ruby>寝<rt>ね</rt></ruby>ました。</span><span style=\"display: inline-block;\">アナさんはどうですか」</span><br><span style=\"display: inline-block;\">アナ「<ruby>私<rt>わたし</rt></ruby>は11<ruby>時<rt>じ</rt></ruby>から7<ruby>時<rt>じ</rt></ruby>まで<ruby>寝<rt>ね</rt></ruby>ました」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>今日<rt>きょう</rt></ruby><ruby>大学<rt>だいがく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>までですか」</span><br><span style=\"display: inline-block;\">アナ「9<ruby>時<rt>じ</rt></ruby>から3<ruby>時<rt>じ</rt></ruby>までです。</span><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きますか」</span><br><span id=\"L04_04_Q2\" style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「9<ruby>時<rt>じ</rt></ruby>から6<ruby>時<rt>じ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きます」</span><br><span style=\"display: inline-block;\">アナ「<ruby>昨日<rt>きのう</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きましたか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「5<ruby>時<rt>じ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きました。</span><span style=\"display: inline-block;\">アナさんは<ruby>今日<rt>きょう</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>寝<rt>ね</rt></ruby>ますか」</span><br><span id=\"L04_04_Q3\" style=\"display: inline-block;\">アナ「9<ruby>時<rt>じ</rt></ruby>に<ruby>寝<rt>ね</rt></ruby>ます。</span><span style=\"display: inline-block;\"><ruby>明日<rt>あした</rt></ruby>６<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。</span><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>に<ruby>寝<rt>ね</rt></ruby>ますか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>「<ruby>私<rt>わたし</rt></ruby>も9<ruby>時<rt>じ</rt></ruby>に<ruby>寝<rt>ね</rt></ruby>ます。</span><span style=\"display: inline-block;\"><ruby>明後日<rt>あさって</rt></ruby>は<ruby>土曜日<rt>どようび</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>大学<rt>だいがく</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みですか」</span><br><span style=\"display: inline-block;\">アナ「はい、<ruby>土曜日<rt>どようび</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みです」</span></p>",
        "quizzes": [
            {
                "question": "アナさんは<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。",
                "choices": [
                    "6<ruby>時<rt>じ</rt></ruby>",
                    "7<ruby>時<rt>じ</rt></ruby>",
                    "8<ruby>時<rt>じ</rt></ruby>"
                ],
                "answer_index": 1,
                "target_id": "L04_04_Q1"
            },
            {
                "question": "<ruby>今日<rt>きょう</rt></ruby><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きますか。",
                "choices": [
                    "9<ruby>時<rt>じ</rt></ruby>から4<ruby>時<rt>じ</rt></ruby>",
                    "9<ruby>時<rt>じ</rt></ruby>から5<ruby>時<rt>じ</rt></ruby>",
                    "9<ruby>時<rt>じ</rt></ruby>から6<ruby>時<rt>じ</rt></ruby>"
                ],
                "answer_index": 2,
                "target_id": "L04_04_Q2"
            },
            {
                "question": "アナさんは<ruby>今日<rt>きょう</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>寝<rt>ね</rt></ruby>ますか。",
                "choices": [
                    "9<ruby>時<rt>じ</rt></ruby>",
                    "10<ruby>時<rt>じ</rt></ruby>",
                    "11<ruby>時<rt>じ</rt></ruby>"
                ],
                "answer_index": 0,
                "target_id": "L04_04_Q3"
            }
        ],
        "audio_file": "/audio/L04_04.mp3"
    },
];
