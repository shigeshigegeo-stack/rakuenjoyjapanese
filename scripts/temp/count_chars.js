
const fs = require('fs');

const story = `<p>アナさんは さくら<ruby>大学<rt>だいがく</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>です。<ruby>毎朝<rt>まいあさ</rt></ruby> ７<ruby>時<rt>じ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きます。<ruby>朝<rt>あさ</rt></ruby>ごはんは ７<ruby>時<rt>じ</rt></ruby><ruby>半<rt>はん</rt></ruby>に <ruby>食<rt>た</rt></ruby>べます。それから <ruby>大学<rt>だいがく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<ruby>大学<rt>だいがく</rt></ruby>の <ruby>授業<rt>じゅぎょう</rt></ruby>は <ruby>毎日<rt>まいにち</rt></ruby> ９<ruby>時<rt>じ</rt></ruby>から ４<ruby>時<rt>じ</rt></ruby>までです。<br><ruby>昨日<rt>きのう</rt></ruby>、アナさんは <ruby>学校<rt>がっこう</rt></ruby>で <ruby>山田<rt>やまだ</rt></ruby>さんに <ruby>会<rt>あ</rt></ruby>いました。<br>アナ「<ruby>山田<rt>やまだ</rt></ruby>さん、<ruby>昨日<rt>きのう</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>まで <ruby>働<rt>はたら</rt></ruby>きましたか」<br><ruby>山田<rt>やまだ</rt></ruby>「<ruby>昨日<rt>きのう</rt></ruby>は ８<ruby>時<rt>じ</rt></ruby>まで <ruby>働<rt>はたら</rt></ruby>きました。とても <ruby>疲<rt>つか</rt></ruby>れました」<br><ruby>山田<rt>やまだ</rt></ruby>さんの <ruby>仕事<rt>しごと</rt></ruby>は ８<ruby>時<rt>じ</rt></ruby>に <ruby>終<rt>お</rt></ruby>わりました。<br>アナさんは <ruby>昨日<rt>きのう</rt></ruby>の <ruby>夜<rt>よる</rt></ruby>、１０<ruby>時<rt>じ</rt></ruby>から １２<ruby>時<rt>じ</rt></ruby>まで <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しました。<ruby>今日<rt>きょう</rt></ruby>は <ruby>金曜日<rt>きんようび</rt></ruby>です。<ruby>明日<rt>あした</rt></ruby>と <ruby>明後日<rt>あさって</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みです。<ruby>大学<rt>だいがく</rt></ruby>は ありません。アナさんは <ruby>明日<rt>あした</rt></ruby>、１０<ruby>時<rt>じ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きます。<br>エリックさんも <ruby>明日<rt>あした</rt></ruby>は <ruby>働<rt>はたら</rt></ruby>きません。<br>エリック「<ruby>明日<rt>あした</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みです。どこへも <ruby>行<rt>い</rt></ruby>きません。<ruby>家<rt>うち</rt></ruby>で <ruby>休<rt>やす</rt></ruby>みます」<br>アナ「そうですか。いいですね。<ruby>私<rt>わたし</rt></ruby>も <ruby>明日<rt>あした</rt></ruby>は ゆっくり <ruby>休<rt>やす</rt></ruby>みます」</p>`;

// Remove rt tags and their content
let textWithoutRt = story.replace(/<rt>.*?<\/rt>/g, '');
// Remove all other tags
let plainText = textWithoutRt.replace(/<[^>]+>/g, '');
// Decode html entities if any (not strictly needed here but good practice)
// plainText = plainText.replace(/&nbsp;/g, ' '); 

// Count characters, excluding whitespace if desired? Assuming user wants content char count.
// Usually spaces in Japanese text are significant or used for separation, let's include them if they are part of the sentence structure,
// but usually `plainText.length` is what is asked.
// However, let's remove newlines or excessive spaces if any.
plainText = plainText.replace(/\s+/g, '');

console.log('Original Length:', story.length);
console.log('Plain Text:', plainText);
console.log('Plain Text Length:', plainText.length);
