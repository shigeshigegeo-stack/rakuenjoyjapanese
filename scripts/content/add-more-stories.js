const fs = require('fs');
const path = require('path');

const storiesPath = path.join('src', 'data', 'stories.json');
const rawData = fs.readFileSync(storiesPath, 'utf8');
let stories = JSON.parse(rawData);

// Filter out existing Level 5 stories as requested
const initialCount = stories.length;
stories = stories.filter(s => s.level !== 5);
const afterDeleteCount = stories.length;
console.log(`Removed ${initialCount - afterDeleteCount} existing Level 5 stories.`);

const newStories = [
    {
        "id": "STORY_L04_01",
        "level": 4,
        "title": "<ruby>今<rt>いま</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>ですか",
        "schema_activation": [
            "あなたは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きますか。",
            "<ruby>日本<rt>にほん</rt></ruby>は <ruby>今<rt>いま</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>ですか。"
        ],
        "translation": "<p>Watson: \"Excuse me, what time is it now?\"<br>Staff: \"It is 10:30.\"<br>Watson: \"What time is it in New York now?\"<br>Staff: \"It is 8:30 PM.\"</p>",
        "story_html": "<p>ワトソン「すみません、<ruby>今<rt>いま</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>ですか。」<br><ruby>人<rt>ひと</rt></ruby>「10<ruby>時半<rt>じはん</rt></ruby>です。」<br>ワトソン「ニューヨークは <ruby>今<rt>いま</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>ですか。」<br><ruby>人<rt>ひと</rt></ruby>「<ruby>午後<rt>ごご</rt></ruby> 8<ruby>時半<rt>じはん</rt></ruby>ですよ。」</p>",
        "quizzes": [
            {
                "question": "<ruby>今<rt>いま</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>ですか。",
                "choices": ["9<ruby>時<rt>じ</rt></ruby>", "10<ruby>時半<rt>じはん</rt></ruby>", "11<ruby>時<rt>じ</rt></ruby>"],
                "answer_index": 1
            },
            {
                "question": "ニューヨークは <ruby>今<rt>いま</rt></ruby> <ruby>午前<rt>ごぜん</rt></ruby>ですか、<ruby>午後<rt>ごご</rt></ruby>ですか。",
                "choices": ["<ruby>午前<rt>ごぜん</rt></ruby>", "<ruby>午後<rt>ごご</rt></ruby>"],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "STORY_L04_02",
        "level": 4,
        "title": "<ruby>会社<rt>かいしゃ</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>からですか",
        "schema_activation": [
            "あなたの <ruby>会社<rt>かいしゃ</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>からですか。",
            "<ruby>土曜日<rt>どようび</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みですか。"
        ],
        "translation": "<p>Watson's company is from 9:00 to 5:00.<br>The break is from 12:00 to 1:00.<br>The company is closed on Saturdays and Sundays.<br>Watson works every day.</p>",
        "story_html": "<p>ワトソンさんの <ruby>会社<rt>かいしゃ</rt></ruby>は 9<ruby>時<rt>じ</rt></ruby>から 5<ruby>時<rt>じ</rt></ruby>までです。<br><ruby>昼<rt>ひる</rt></ruby><ruby>休<rt>やす</rt></ruby>みは 12<ruby>時<rt>じ</rt></ruby>から 1<ruby>時<rt>じ</rt></ruby>までです。<br><ruby>土曜日<rt>どようび</rt></ruby>と <ruby>日曜日<rt>にちようび</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みです。<br>ワトソンさんは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>働<rt>はたら</rt></ruby>きます。</p>",
        "quizzes": [
            {
                "question": "<ruby>会社<rt>かいしゃ</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>までですか。",
                "choices": ["5<ruby>時<rt>じ</rt></ruby>", "9<ruby>時<rt>じ</rt></ruby>", "12<ruby>時<rt>じ</rt></ruby>"],
                "answer_index": 0
            },
            {
                "question": "<ruby>日曜日<rt>にちようび</rt></ruby>は <ruby>働<rt>はたら</rt></ruby>きますか。",
                "choices": ["はい、はたらきます", "いいえ、やすみです"],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "STORY_L04_03",
        "level": 4,
        "title": "<ruby>毎朝<rt>まいあさ</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きますか",
        "schema_activation": [
            "あなたは <ruby>昨日<rt>きのう</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>寝<rt>ね</rt></ruby>ましたか。",
            "<ruby>今日<rt>きょう</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きましたか。"
        ],
        "translation": "<p>Watson gets up at 6:30 every morning.<br>He studies Japanese from 7:00 to 8:00.<br>Yesterday, he studied until 11:00 PM.<br>He slept at 12:00.</p>",
        "story_html": "<p>ワトソンさんは <ruby>毎朝<rt>まいあさ</rt></ruby> 6<ruby>時半<rt>じはん</rt></ruby>に <ruby>起<rt>お</rt></ruby>きます。<br>7<ruby>時<rt>じ</rt></ruby>から 8<ruby>時<rt>じ</rt></ruby>まで <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>します。<br><ruby>昨日<rt>きのう</rt></ruby>は <ruby>夜<rt>よる</rt></ruby> 11<ruby>時<rt>じ</rt></ruby>まで <ruby>勉強<rt>べんきょう</rt></ruby>しました。<br>12<ruby>時<rt>じ</rt></ruby>に <ruby>寝<rt>ね</rt></ruby>ました。</p>",
        "quizzes": [
            {
                "question": "ワトソンさんは <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きますか。",
                "choices": ["6<ruby>時<rt>じ</rt></ruby>", "6<ruby>時半<rt>じはん</rt></ruby>", "7<ruby>時<rt>じ</rt></ruby>"],
                "answer_index": 1
            },
            {
                "question": "<ruby>昨日<rt>きのう</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>まで <ruby>勉強<rt>べんきょう</rt></ruby>しましたか。",
                "choices": ["10<ruby>時<rt>じ</rt></ruby>", "11<ruby>時<rt>じ</rt></ruby>", "12<ruby>時<rt>じ</rt></ruby>"],
                "answer_index": 1
            }
        ]
    },
    {
        "id": "STORY_L04_04",
        "level": 4,
        "title": "<ruby>図書館<rt>としょかん</rt></ruby>の <ruby>電話番号<rt>でんわばんごう</rt></ruby>",
        "schema_activation": [
            "<ruby>大学<rt>だいがく</rt></ruby>は <ruby>何曜日<rt>なんようび</rt></ruby>から <ruby>何曜日<rt>なんようび</rt></ruby>までですか。",
            "<ruby>図書館<rt>としょかん</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>に <ruby>終<rt>お</rt></ruby>わりますか。"
        ],
        "translation": "<p>Ana: \"Watson, what is the telephone number of the library?\"<br>Watson: \"It's 03-1234-5678.\"<br>Ana: \"What time does the library finish?\"<br>Watson: \"It finishes at 7:00 PM.\"</p>",
        "story_html": "<p>アナ「ワトソンさん、<ruby>図書館<rt>としょかん</rt></ruby>の <ruby>電話番号<rt>でんわばんごう</rt></ruby>は <ruby>何番<rt>なんばん</rt></ruby>ですか。」<br>ワトソン「03の 1234の 5678です。」<br>アナ「<ruby>図書館<rt>としょかん</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>に <ruby>終<rt>お</rt></ruby>わりますか。」<br>ワトソン「<ruby>午後<rt>ごご</rt></ruby> 7<ruby>時<rt>じ</rt></ruby>に <ruby>終<rt>お</rt></ruby>わりますよ。」</p>",
        "quizzes": [
            {
                "question": "<ruby>図書館<rt>としょかん</rt></ruby>の <ruby>電話番号<rt>でんわばんごう</rt></ruby>は <ruby>何番<rt>なんばん</rt></ruby>ですか。",
                "choices": ["03-1234-5678", "03-5678-1234", "090-1234-5678"],
                "answer_index": 0
            },
            {
                "question": "<ruby>図書館<rt>としょかん</rt></ruby>は <ruby>午後<rt>ごご</rt></ruby> 7<ruby>時<rt>じ</rt></ruby>に <ruby>終<rt>お</rt></ruby>わりますか。",
                "choices": ["はい、おわります", "いいえ、おわりません"],
                "answer_index": 0
            }
        ]
    },
    {
        "id": "STORY_L05_01",
        "level": 5,
        "title": "<ruby>明日<rt>あした</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか",
        "schema_activation": [
            "<ruby>明日<rt>あした</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか。",
            "<ruby>誰<rt>だれ</rt></ruby>と <ruby>行<rt>い</rt></ruby>きますか。"
        ],
        "translation": "<p>Watson: \"Where are you going tomorrow?\"<br>Ana: \"I am going to Shinjuku.\"<br>Watson: \"What are you going by?\"<br>Ana: \"I am going by train. I am going alone.\"</p>",
        "story_html": "<p>ワトソン「<ruby>明日<rt>あした</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか。」<br>アナ「<ruby>新宿<rt>しんじゅく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。」<br>ワトソン「<ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか。」<br>アナ「<ruby>電車<rt>でんしゃ</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます。<ruby>一人<rt>ひとり</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます。」</p>",
        "quizzes": [
            {
                "question": "アナさんは どこへ <ruby>行<rt>い</rt></ruby>きますか。",
                "choices": ["<ruby>銀座<rt>ぎんざ</rt></ruby>", "<ruby>新宿<rt>しんじゅく</rt></ruby>", "<ruby>渋谷<rt>しぶや</rt></ruby>"],
                "answer_index": 1
            },
            {
                "question": "アナさんは <ruby>誰<rt>だれ</rt></ruby>と <ruby>行<rt>い</rt></ruby>きますか。",
                "choices": ["ワトソンさん", "キムさん", "<ruby>一人<rt>ひとり</rt></ruby>で"],
                "answer_index": 2
            }
        ]
    },
    {
        "id": "STORY_L05_02",
        "level": 5,
        "title": "<ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました",
        "schema_activation": [
            "<ruby>先週<rt>せんしゅう</rt></ruby> どこかへ <ruby>行<rt>い</rt></ruby>きましたか。",
            "いつ <ruby>家<rt>うち</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>りましたか。"
        ],
        "translation": "<p>Watson went to Kyoto last week.<br>He went with Mr. Yamada.<br>They went by Shinkansen.<br>He returned home at 9:00 yesterday.</p>",
        "story_html": "<p>ワトソンさんは <ruby>先週<rt>せんしゅう</rt></ruby> <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<br><ruby>山田<rt>やまだ</rt></ruby>さんと <ruby>行<rt>い</rt></ruby>きました。<br><ruby>新幹線<rt>しんかんせん</rt></ruby>で <ruby>行<rt>い</rt></ruby>きました。<br><ruby>昨日<rt>きのう</rt></ruby> 9<ruby>時<rt>じ</rt></ruby>に <ruby>家<rt>うち</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>りました。</p>",
        "quizzes": [
            {
                "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きましたか。",
                "choices": ["バス", "タクシー", "<ruby>新幹線<rt>しんかんせん</rt></ruby>"],
                "answer_index": 2
            },
            {
                "question": "ワトソンさんは <ruby>誰<rt>だれ</rt></ruby>と <ruby>行<rt>い</rt></ruby>きましたか。",
                "choices": ["アナさん", "キムさん", "<ruby>山田<rt>やまだ</rt></ruby>さん"],
                "answer_index": 2
            }
        ]
    },
    {
        "id": "STORY_L05_03",
        "level": 5,
        "title": "お<ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか",
        "schema_activation": [
            "あなたの お<ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。",
            "いつ <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ましたか。"
        ],
        "translation": "<p>Watson: \"Ana, when is your birthday?\"<br>Ana: \"It is August 15th.\"<br>Watson: \"I see. When did you come to Japan?\"<br>Ana: \"I came on April 1st.\"</p>",
        "story_html": "<p>ワトソン「アナさん、お<ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。」<br>アナ「8<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>です。」<br>ワトソン「そうですか。<ruby>日本<rt>にほん</rt></ruby>へ いつ <ruby>来<rt>き</rt></ruby>ましたか。」<br>アナ「4<ruby>月<rt>がつ</rt></ruby> 1<ruby>日<rt>ついたち</rt></ruby>に <ruby>来<rt>き</rt></ruby>ました。」</p>",
        "quizzes": [
            {
                "question": "アナさんの お<ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。",
                "choices": ["4<ruby>月<rt>がつ</rt></ruby> 1<ruby>日<rt>ついたち</rt></ruby>", "8<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>", "10<ruby>月<rt>がつ</rt></ruby> 5<ruby>日<rt>いつか</rt></ruby>"],
                "answer_index": 1
            },
            {
                "question": "アナさんは いつ <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ましたか。",
                "choices": ["4<ruby>月<rt>がつ</rt></ruby> 1<ruby>日<rt>ついたち</rt></ruby>", "8<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>", "1<ruby>月<rt>いちがつ</rt></ruby>"],
                "answer_index": 0
            }
        ]
    },
    {
        "id": "STORY_L05_04",
        "level": 5,
        "title": "タクシーで <ruby>帰<rt>かえ</rt></ruby>ります",
        "schema_activation": [
            "あなたは <ruby>歩<rt>ある</rt></ruby>いて <ruby>帰<rt>かえ</rt></ruby>りますか。",
            "<ruby>毎日<rt>まいにち</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか。"
        ],
        "translation": "<p>Watson and Kim are at the station.<br>Kim: \"Are you going home by bus?\"<br>Watson: \"No, I am going home by taxi.\"<br>Kim: \"I see. I will walk home.\"</p>",
        "story_html": "<p>ワトソンさんと キムさんは <ruby>駅<rt>えき</rt></ruby>に います。<br>キム「バスで <ruby>帰<rt>かえ</rt></ruby>りますか。」<br>ワトソン「いいえ、タクシーで <ruby>帰<rt>かえ</rt></ruby>ります。」<br>キム「そうですか。わたしは <ruby>歩<rt>ある</rt></ruby>いて <ruby>帰<rt>かえ</rt></ruby>ります。」</p>",
        "quizzes": [
            {
                "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>りますか。",
                "choices": ["バス", "タクシー", "<ruby>電車<rt>でんしゃ</rt></ruby>"],
                "answer_index": 1
            },
            {
                "question": "キムさんは <ruby>歩<rt>ある</rt></ruby>いて <ruby>帰<rt>かえ</rt></ruby>りますか。",
                "choices": ["はい、あるいて かえります", "いいえ、タクシーで かえります"],
                "answer_index": 0
            }
        ]
    }
];

stories = stories.concat(newStories);

// Sort again by level
stories.sort((a, b) => {
    // Sort logic: numeric levels first, then N levels
    const getLvlNum = (lvl) => {
        if (typeof lvl === 'number') return lvl;
        if (typeof lvl === 'string' && lvl.startsWith('Level')) {
            return parseInt(lvl.match(/\d+/)[0], 10);
        }
        return 9999;
    };
    const diff = getLvlNum(a.level) - getLvlNum(b.level);
    if (diff !== 0) return diff;

    // Secondary sort by ID to keep order
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
});

fs.writeFileSync(storiesPath, JSON.stringify(stories, null, 2), 'utf8');
console.log(`Final story count: ${stories.length}`);
