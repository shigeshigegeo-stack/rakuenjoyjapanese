
const fs = require('fs');

const stories = [
    {
        id: "TEXTBOOK_L04_01",
        html: `<p><ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>毎朝<rt>まいあさ</rt></ruby>、6<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。<br><ruby>山田<rt>やまだ</rt></ruby>「アナさん、<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか」<br>アナ「7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます」<br>アナさんは7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。9<ruby>時<rt>じ</rt></ruby>にさくら<ruby>大学<rt>だいがく</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。</p>`
    },
    {
        id: "TEXTBOOK_L04_02",
        html: `<p>さくら<ruby>大学<rt>だいがく</rt></ruby>の <ruby>図書館<rt>としょかん</rt></ruby>は <ruby>毎日<rt>まいにち</rt></ruby> ９<ruby>時<rt>じ</rt></ruby>から ５<ruby>時<rt>じ</rt></ruby>までです。アナさんは <ruby>昨日<rt>きのう</rt></ruby>、<ruby>山田<rt>やまだ</rt></ruby>さんに <ruby>聞<rt>き</rt></ruby>きました。<br>アナ「すみません、<ruby>図書館<rt>としょかん</rt></ruby>は <ruby>土曜日<rt>どようび</rt></ruby> <ruby>休<rt>やす</rt></ruby>みですか」<br><span id="L04_02_Q1"><ruby>山田<rt>やまだ</rt></ruby>「いいえ、<ruby>土曜日<rt>どようび</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みじゃありません。<ruby>休<rt>やす</rt></ruby>みは <ruby>月曜日<rt>げつようび</rt></ruby>ですよ」</span><br>アナ「そうですか。ありがとうございます」<br>アナさんは <ruby>昨日<rt>きのう</rt></ruby>、７<ruby>時<rt>じ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きました。それから ９<ruby>時<rt>じ</rt></ruby>から １１<ruby>時<rt>じ</rt></ruby>まで <ruby>図書館<rt>としょかん</rt></ruby>で <ruby>勉強<rt>べんきょう</rt></ruby>しました。<ruby>昨日<rt>きのう</rt></ruby>の <ruby>夜<rt>よる</rt></ruby>は １０<ruby>時<rt>じ</rt></ruby>に <ruby>寝<rt>ね</rt></ruby>ました。<ruby>今日<rt>きょう</rt></ruby>も ９<ruby>時<rt>じ</rt></ruby>から <ruby>勉強<rt>べんきょう</rt></ruby>しました。<br>エリックさんも <ruby>毎日<rt>まいにち</rt></ruby> <ruby>図書館<rt>としょかん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<ruby>昨日<rt>きのう</rt></ruby>は １０<ruby>時<rt>じ</rt></ruby>から １２<ruby>時<rt>じ</rt></ruby>まで <ruby>勉強<rt>べんきょう</rt></ruby>しました。<br><span id="L04_02_Q2">エリック「<ruby>昨日<rt>きのう</rt></ruby>は １２<ruby>時<rt>じ</rt></ruby><ruby>半<rt>はん</rt></ruby>に <ruby>寝<rt>ね</rt></ruby>ました。</span><ruby>今日<rt>きょう</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みます」</p>`
    },
    {
        id: "TEXTBOOK_L04_03",
        html: `<p>エリックさんは<ruby>昨日<rt>きのう</rt></ruby>、7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きました。8<ruby>時<rt>じ</rt></ruby>から4<ruby>時<rt>じ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きました。<ruby>今日<rt>きょう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みです。<br>ここは<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>です。<br>エリック「すみません、<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>までですか」<br><ruby>郵便局員<rt>ゆうびんきょくいん</rt></ruby>「はい、9<ruby>時<rt>じ</rt></ruby>から5<ruby>時<rt>じ</rt></ruby>までです」<br>エリック「<ruby>休<rt>やす</rt></ruby>みは<ruby>何曜日<rt>なんようび</rt></ruby>ですか」<br><ruby>郵便局員<rt>ゆうびんきょく</rt></ruby>「<ruby>土曜日<rt>どようび</rt></ruby>と<ruby>日曜日<rt>にちようび</rt></ruby>です」<br>エリック「どうもありがとうございます」</p>`
    },
    {
        id: "TEXTBOOK_L04_04",
        html: `<p>アナさんは さくら<ruby>大学<rt>だいがく</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>です。<ruby>毎朝<rt>まいあさ</rt></ruby> ７<ruby>時<rt>じ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きます。<ruby>朝<rt>あさ</rt></ruby>ごはんは ７<ruby>時<rt>じ</rt></ruby><ruby>半<rt>はん</rt></ruby>に <ruby>食<rt>た</rt></ruby>べます。それから <ruby>大学<rt>だいがく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<ruby>大学<rt>だいがく</rt></ruby>の <ruby>授業<rt>じゅぎょう</rt></ruby>は <ruby>毎日<rt>まいにち</rt></ruby> ９<ruby>時<rt>じ</rt></ruby>から ４<ruby>時<rt>じ</rt></ruby>までです。<br><ruby>昨日<rt>きのう</rt></ruby>、アナさんは <ruby>学校<rt>がっこう</rt></ruby>で <ruby>山田<rt>やまだ</rt></ruby>さんに <ruby>会<rt>あ</rt></ruby>いました。<br>アナ「<ruby>山田<rt>やまだ</rt></ruby>さん、<ruby>昨日<rt>きのう</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>まで <ruby>働<rt>はたら</rt></ruby>きましたか」<br><ruby>山田<rt>やまだ</rt></ruby>「<ruby>昨日<rt>きのう</rt></ruby>は ８<ruby>時<rt>じ</rt></ruby>まで <ruby>働<rt>はたら</rt></ruby>きました。とても <ruby>疲<rt>つか</rt></ruby>れました」<br><ruby>山田<rt>やまだ</rt></ruby>さんの <ruby>仕事<rt>しごと</rt></ruby>は ８<ruby>時<rt>じ</rt></ruby>に <ruby>終<rt>お</rt></ruby>わりました。<br>アナさんは <ruby>昨日<rt>きのう</rt></ruby>の <ruby>夜<rt>よる</rt></ruby>、１０<ruby>時<rt>じ</rt></ruby>から １２<ruby>時<rt>じ</rt></ruby>まで <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しました。<ruby>今日<rt>きょう</rt></ruby>は <ruby>金曜日<rt>きんようび</rt></ruby>です。<ruby>明日<rt>あした</rt></ruby>と <ruby>明後日<rt>あさって</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みです。<ruby>大学<rt>だいがく</rt></ruby>は ありません。アナさんは <ruby>明日<rt>あした</rt></ruby>、１０<ruby>時<rt>じ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きます。<br>エリックさんも <ruby>明日<rt>あした</rt></ruby>は <ruby>働<rt>はたら</rt></ruby>きません。<br>エリック「<ruby>明日<rt>あした</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みです。どこへも <ruby>行<rt>い</rt></ruby>きません。<ruby>家<rt>うち</rt></ruby>で <ruby>休<rt>やす</rt></ruby>みます」<br>アナ「そうですか。いいですね。<ruby>私<rt>わたし</rt></ruby>も <ruby>明日<rt>あした</rt></ruby>は ゆっくり <ruby>休<rt>やす</rt></ruby>みます」</p>`
    }
];

let output = '';

stories.forEach(story => {
    let textWithoutRt = story.html.replace(/<rt>.*?<\/rt>/g, '');
    let plainText = textWithoutRt.replace(/<[^>]+>/g, '');
    // Format 2: No spaces (strict content)
    let countNoSpace = plainText.replace(/\s+/g, '').length;
    // Format 1: With spaces (as they appear in text)
    let countWithSpace = plainText.replace(/\n/g, '').length;

    output += `${story.id}: ${countNoSpace} (no spaces), ${countWithSpace} (with spaces)\n`;
});

fs.writeFileSync('count_result.txt', output, 'utf8');
