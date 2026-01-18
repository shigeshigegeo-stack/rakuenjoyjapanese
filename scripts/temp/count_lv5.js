
const fs = require('fs');

const stories = [
    {
        id: "TEXTBOOK_L05_01",
        html: `<p>ここは さくら<ruby>駅<rt>えき</rt></ruby>です。<ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>今<rt>いま</rt></ruby> <ruby>駅<rt>えき</rt></ruby>から <ruby>名古屋<rt>なごや</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<br>アナ「<ruby>山田<rt>やまだ</rt></ruby>さん、どこへ <ruby>行<rt>い</rt></ruby>きますか」<br><ruby>山田<rt>やまだ</rt></ruby>「<ruby>名古屋<rt>なごや</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。あなたは どこへ <ruby>行<rt>い</rt></ruby>きますか」<br>アナ「そうですか。<ruby>私<rt>わたし</rt></ruby>は <ruby>今<rt>いま</rt></ruby>から <ruby>家<rt>うち</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>ります」<br>アナさんは <ruby>昨日<rt>きのう</rt></ruby> <ruby>友達<rt>ともだち</rt></ruby>と <ruby>大阪<rt>おおさか</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<br><ruby>今日<rt>きょう</rt></ruby>は <ruby>一人<rt>ひとり</rt></ruby>で <ruby>家<rt>うち</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>ります。<ruby>電車<rt>でんしゃ</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>ります。</p>`
    },
    {
        id: "TEXTBOOK_L05_02",
        html: `<p>エリックさんは <ruby>明日<rt>あした</rt></ruby> <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<ruby>山田<rt>やまだ</rt></ruby>さんに <ruby>会<rt>あ</rt></ruby>いました。<br><ruby>山田<rt>やまだ</rt></ruby>「エリックさん、<ruby>明日<rt>あした</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか」<br>エリック「<ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます」<br><ruby>山田<rt>やまだ</rt></ruby>「<ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか」<br>エリック「<ruby>新幹線<rt>しんかんせん</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます。あなたは？」<br><ruby>山田<rt>やまだ</rt></ruby>「<ruby>私<rt>わたし</rt></ruby>は <ruby>飛行機<rt>ひこうき</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます。<ruby>誰<rt>だれ</rt></ruby>と <ruby>行<rt>い</rt></ruby>きますか」<br>エリック「<ruby>私<rt>わたし</rt></ruby>は <ruby>一人<rt>ひとり</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます。<ruby>山田<rt>やまだ</rt></ruby>さん、あなたは いつ <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ましたか」<br><ruby>山田<rt>やまだ</rt></ruby>「<ruby>私<rt>わたし</rt></ruby>は <ruby>日本人<rt>にほんじん</rt></ruby>ですよ！ エリックさんは いつ <ruby>来<rt>き</rt></ruby>ましたか」<br>エリック「<ruby>私<rt>わたし</rt></ruby>は <ruby>去年<rt>きょねん</rt></ruby>の <ruby>九月<rt>くがつ</rt></ruby>に アメリカから <ruby>来<rt>き</rt></ruby>ました。<ruby>飛行機<rt>ひこうき</rt></ruby>で <ruby>家<rt>かぞく</rt></ruby>と <ruby>来<rt>き</rt></ruby>ました。それから、一月に <ruby>友達<rt>ともだち</rt></ruby>と <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。三月に <ruby>九州<rt>きゅうしゅう</rt></ruby>へも <ruby>行<rt>い</rt></ruby>きました。<ruby>毎日<rt>まいにち</rt></ruby> <ruby>大学<rt>だいがく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<ruby>自転<rt>じてん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます」</p>`
    },
    {
        id: "TEXTBOOK_L05_03",
        html: `<p>キムさんは <ruby>韓国人<rt>かんこくじん</rt></ruby>です。<ruby>去年<rt>きょねん</rt></ruby>の <ruby>四月<rt>しがつ</rt></ruby>に <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ました。<br>アナ「キムさん、<ruby>昨日<rt>きのう</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか」<br>キム「<ruby>九州<rt>きゅうしゅう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<ruby>家族<rt>かぞく</rt></ruby>と <ruby>行<rt>い</rt></ruby>きました」<br>アナ「<ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きましたか」<br>キム「<ruby>飛行機<rt>ひこうき</rt></ruby>で <ruby>行<rt>い</rt></ruby>きました。<ruby>今日<rt>きょう</rt></ruby> <ruby>九州<rt>きゅうしゅう</rt></ruby>から <ruby>帰<rt>かえ</rt></ruby>りました」<br>アナ「<ruby>一人<rt>ひとり</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>りましたか」<br>キム「いいえ、<ruby>一人<rt>ひとり</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>りませんでした。<ruby>家族<rt>かぞく</rt></ruby>と <ruby>帰<rt>かえ</rt></ruby>りました」<br>エリックさんも <ruby>先週<rt>せんしゅう</rt></ruby> <ruby>九州<rt>きゅうしゅう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。エリックさんは <ruby>新幹線<rt>しんかんせん</rt></ruby>で <ruby>行<rt>い</rt></ruby>きました。<ruby>友達<rt>ともだち</rt></ruby>の <ruby>山田<rt>やまだ</rt></ruby>さんと <ruby>行<rt>い</rt></ruby>きました。<ruby>先月<rt>せんげつ</rt></ruby>、エリックさんは <ruby>東京<rt>とうきょう</rt></ruby>へも <ruby>行<rt>い</rt></ruby>きました。<ruby>電車<rt>でんしゃ</rt></ruby>で <ruby>行<rt>い</rt></ruby>きました。<ruby>一人<rt>ひとり</rt></ruby>で <ruby>行<rt>い</rt></ruby>きました。</p>`
    },
    {
        id: "TEXTBOOK_L05_04",
        html: `<p>エリックさんは <ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>月曜日<rt>げつようび</rt></ruby>に <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<br><ruby>山田<rt>やまだ</rt></ruby>「エリックさん、<ruby>誕生日<rt>たんじょうび</rt></ruby>は <ruby>いつ<rt>いつ</rt></ruby>ですか」<br>エリック「<ruby>私<rt>わたし</rt></ruby>の <ruby>誕生日<rt>たんじょうび</rt></ruby>は <ruby>十月<rt>じゅうがつ</rt></ruby> <ruby>二十日<rt>はつか</rt></ruby>です。<ruby>山田<rt>やまだ</rt></ruby>さんは？」<br><ruby>山田<rt>やまだ</rt></ruby>「<ruby>私<rt>わたし</rt></ruby>は <ruby>一月<rt>いちがつ</rt></ruby> <ruby>一日<rt>ついたち</rt></ruby>ですよ。エリックさん、<ruby>来週<rt>らいしゅう</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか」<br>エリック「<ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます」<br><ruby>山田<rt>やまだ</rt></ruby>「<ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか」<br>エリック「<ruby>新幹線<rt>しんかんせん</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます。<ruby>京都<rt>きょうと</rt></ruby>から <ruby>奈良<rt>なら</rt></ruby>へも <ruby>行<rt>い</rt></ruby>きます。<ruby>奈良<rt>なら</rt></ruby>へは バスで <ruby>行<rt>い</rt></ruby>きます」<br>エリックさんは <ruby>去年<rt>きょねん</rt></ruby> アメリカから <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ました。<ruby>飛行機<rt>ひこうき</rt></ruby>で <ruby>来<rt>き</rt></ruby>ました。それから、<ruby>友達<rt>ともだち</rt></ruby>と <ruby>大阪<rt>おおさか</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<ruby>電車<rt>でんしゃ</rt></ruby>で <ruby>行<rt>い</rt></ruby>きました。<br>エリックさんは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>大学<rt>だいがく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<ruby>自転<rt>じてん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます。ときどき <ruby>歩<rt>ある</rt></ruby>いて <ruby>帰<rt>かえ</rt></ruby>ります。<ruby>日曜日<rt>にちようび</rt></ruby>は どこへも <ruby>行<rt>い</rt></ruby>きません。<ruby>家<rt>うち</rt></ruby>で <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>勉強<rt>べんきょう</rt></ruby>を します。<br><ruby>先週<rt>せんしゅう</rt></ruby>の <ruby>金曜日<rt>きんようび</rt></ruby>に、エリックさんは デパートへ <ruby>行<rt>い</rt></ruby>きました。そこで <ruby>山田<rt>やまだ</rt></ruby>さんに <ruby>会<rt>あ</rt></ruby>いました。<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>で タクシーで <ruby>駅<rt>えき</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。それから、<ruby>電車<rt>でんしゃ</rt></ruby>で レストランへ <ruby>行<rt>い</rt></ruby>きました。</p>`
    }
];

let output = '';

stories.forEach(story => {
    // 1. Remove Ruby Text Part (<rt>...</rt>)
    let textWithoutRt = story.html.replace(/<rt>.*?<\/rt>/g, '');

    // 2. Remove all remaining tags (<...>)
    let plainText = textWithoutRt.replace(/<[^>]+>/g, '');

    // Debug: Check plainText sample to ensure ruby is gone and chars are correct
    console.log(`[DEBUG] ${story.id} Sample: ${plainText.substring(0, 50)}...`);

    // Format 2: No spaces (strict content)
    // Remove spaces, tabs, newlines, zenkaku spaces
    let countNoSpace = plainText.replace(/[\s\u3000]+/g, '').length;

    // Format 1: With spaces (as they appear in text, but normalized)
    // This removes newlines but keeps spaces between words if any exist, although typically Japanese doesn't use spaces.
    // However, the source HTML has spaces like "あなたは どこへ".
    let countWithSpace = plainText.replace(/\n/g, '').length;

    output += `${story.id}: ${countNoSpace} (no spaces), ${countWithSpace} (with spaces)\n`;
});

console.log('--- Results ---');
console.log(output);
fs.writeFileSync('count_lv5_result.txt', output, 'utf8');
