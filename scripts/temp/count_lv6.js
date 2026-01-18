
const fs = require('fs');

const stories_l06 = [
    {
        id: "TEXTBOOK_L06_01",
        html: `<p>アナさんは <ruby>今<rt>いま</rt></ruby> <ruby>食堂<rt>しょくどう</rt></ruby>に います。<br><span id=\"L06_01_Q1\">アナ「<ruby>魚<rt>さかな</rt></ruby>と ごはんを <ruby>食<rt>た</rt></ruby>べます」</span><br><ruby>山田<rt>やまだ</rt></ruby>さんは パンを <ruby>食<rt>た</rt></ruby>べました。コーヒーを <ruby>飲<rt>の</rt></ruby>みました。<br>アナ「<ruby>山田<rt>やまだ</rt></ruby>さん、お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みますか」<br><ruby>山田<rt>やまだ</rt></ruby>「いいえ、お<ruby>茶<rt>ちゃ</rt></ruby>は <ruby>飲<rt>の</rt></ruby>みません。<ruby>水<rt>みず</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みます」<br><ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>は <ruby>毎日<rt>まいにち</rt></ruby> <ruby>食堂<rt>しょくどう</rt></ruby>で <ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べます。</p>`
    },
    {
        id: "TEXTBOOK_L06_02",
        html: `<p><span id=\"L06_02_Q1\">ジムさんは <ruby>昨日<rt>きのう</rt></ruby>、<ruby>町<rt>まち</rt></ruby>にある <ruby>大<rt>おお</rt></ruby>きな デパートで <ruby>新<rt>あたら</rt></ruby>しい カバンを <ruby>買<rt>か</rt></ruby>いました。</span><ruby>青<rt>あお</rt></ruby>い カバンと <ruby>黒<rt>くろ</rt></ruby>い カバンです。<br><ruby>店員<rt>てんいん</rt></ruby>「こちらの <ruby>白<rt>しろ</rt></ruby>い シャツも いかがですか。とても <ruby>安<rt>やす</rt></ruby>いですよ」<br>ジム「いいえ、<ruby>今日<rt>きょう</rt></ruby>は シャツは <ruby>買<rt>か</rt></ruby>いません。カバンだけ <ruby>買<rt>か</rt></ruby>みます」<br>それから、ジムさんは エレベーターで <ruby>地下<rt>ちか</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<span id=\"L06_02_Q2\"><ruby>地下<rt>ちか</rt></ruby>の <ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>で おいしい お<ruby>酒<rt>さけ</rt></ruby>と <ruby>甘<rt>あま</rt></ruby>い <ruby>果物<rt>くだもの</rt></ruby>を たくさん <ruby>買<rt>か</rt></ruby>いました。</span><br><ruby>明日<rt>あした</rt></ruby>、<ruby>自宅<rt>じたく</rt></ruby>の <ruby>庭<rt>にわ</rt></ruby>で <ruby>友達<rt>ともだち</rt></ruby>と <ruby>一緒<rt>いっしょ</rt></ruby>に その お<ruby>酒<rt>さけ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みます。<ruby>明日<rt>あした</rt></ruby>は <ruby>日曜日<rt>にちようび</rt></ruby>ですから、とても <ruby>楽<rt>たの</rt></ruby>しみです。</p>`
    },
    {
        id: "TEXTBOOK_L06_03",
        html: `<p>パクさんは <ruby>毎日<rt>まいにち</rt></ruby>、<ruby>近<rt>ちか</rt></ruby>くの <ruby>大<rt>おお</rt></ruby>きな <ruby>病院<rt>びょういん</rt></ruby>で <ruby>医者<rt>いしゃ</rt></ruby>として <ruby>働<rt>はたら</rt></ruby>きます。<br>パク「キムさん、<ruby>今日<rt>きょう</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>ごはんを <ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くで <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>食<rt>た</rt></ruby>べませんか」<br>キム「いいですね。<ruby>食<rt>た</rt></ruby>べましょう。<ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べますか」<br>パク「<ruby>魚<rt>さかな</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましょう。あそこの お<ruby>店<rt>みせ</rt></ruby>は とても おいしいですよ」<br><span id=\"L06_03_Q1\"><ruby>二人<rt>ふたり</rt></ruby>は <ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くの <ruby>店<rt>みせ</rt></ruby>で <ruby>魚<rt>さかな</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました。</span><ruby>冷<rt>つめ</rt></ruby>たい ビールも たくさん <ruby>飲<rt>の</rt></ruby>みました。キムさんは <ruby>帰<rt>かえ</rt></ruby>りに <ruby>駅<rt>えき</rt></ruby>で <ruby>今日<rt>きょう</rt></ruby>の <ruby>新聞<rt>しんぶん</rt></ruby>を <ruby>買<rt>か</rt></ruby>いました。<span id=\"L06_03_Q2\">それから、<ruby>夜<rt>よる</rt></ruby>の <ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>で ゆっくり <ruby>新聞<rt>しんぶん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みました。</span></p>`
    },
    {
        id: "TEXTBOOK_L06_04",
        html: `<p><span id=\"L06_04_Q1\">アナさんは <ruby>先週<rt>せんしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>に、<ruby>町<rt>まち</rt></ruby>の <ruby>図書館<rt>としょかん</rt></ruby>で <ruby>難<rt>むずか</rt></ruby>しい <ruby>本<rt>ほん</rt></ruby>を <ruby>三時間<rt>さんじかん</rt></ruby> <ruby>読<rt>よ</rt></ruby>みました。</span>それから、<ruby>家族<rt>かぞく</rt></ruby>に <ruby>長<rt>なが</rt></ruby>い <ruby>手紙<rt>てがみ</rt></ruby>を <ruby>書<rt>か</rt></ruby>きました。<br>ジム「アナさん、<ruby>今<rt>いま</rt></ruby>から <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>で サッカーを しませんか。いい <ruby>天気<rt>てんき</rt></ruby>ですよ」<br>アナ「いいですね。ぜひ しましょう」<br><ruby>二人<rt>ふたり</rt></ruby>は <ruby>歩<rt>ある</rt></ruby>いて <ruby>近<rt>ちか</rt></ruby>くの <ruby>広<rt>ひろ</rt></ruby>い <ruby>公園<rt>こうえん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<span id=\"L06_04_Q2\"><ruby>一時間<rt>いちじかん</rt></ruby> サッカーを しました。</span>とても <ruby>疲<rt>つか</rt></ruby>れましたが、<ruby>楽<rt>たの</rt></ruby>しかったです。<br><span id=\"L06_04_Q3\">ジムさんは スマホで アナさんの <ruby>写真<rt>しゃしん</rt></ruby>を たくさん <ruby>撮<rt>と</rt></ruby>りました。</span><br>アナ「ジムさん、テニスも <ruby>一緒<rt>いっしょ</rt></ruby>に しませんか」<br>ジム「すみません、テニスは ちょっと。あまり <ruby>好<rt>す</rt></ruby>きじゃありません」<br>ジムさんは テニスを しませんでした。<ruby>二人<rt>ふたり</rt></ruby>は <ruby>公園<rt>こうえん</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>にある <ruby>小<rt>ちい</rt></ruby>さな <ruby>店<rt>みせ</rt></ruby>で <ruby>冷<rt>つめ</rt></ruby>たい ジュースを <ruby>飲<rt>の</rt></ruby>みました。それから、<ruby>家<rt>うち</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>りました。とても <ruby>楽<rt>たの</rt></ruby>しい <ruby>日曜日<rt>にちようび</rt></ruby>でした。</p>`
    }
];

let output = '';

stories_l06.forEach(story => {
    // 1. Remove Ruby Text Part (<rt>...</rt>)
    let textWithoutRt = story.html.replace(/<rt>.*?<\/rt>/g, '');

    // 2. Remove all remaining tags (<...>)
    let plainText = textWithoutRt.replace(/<[^>]+>/g, '');

    // Debug: Check plainText sample
    // console.log(`[DEBUG] ${story.id} Sample: ${plainText.substring(0, 50)}...`);

    // Format 2: No spaces (strict content)
    // Remove whitespace characters including ideographic space
    let countNoSpace = plainText.replace(/[\s\u3000]+/g, '').length;

    // Format 1: With spaces (as they appear in text, but normalized)
    // Normally Japanese doesn't use spaces but HTML often contains them for readability or separation.
    let countWithSpace = plainText.replace(/\n/g, '').length;

    output += `${story.id}: ${countNoSpace} (no spaces), ${countWithSpace} (with spaces)\n`;
});

console.log('--- Level 6 Results ---');
console.log(output);
fs.writeFileSync('count_lv6_result.txt', output, 'utf8');
