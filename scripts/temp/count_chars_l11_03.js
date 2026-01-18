
const htmlContent = `<p><span style="display: inline-block;">エリックさんは <ruby>去年<rt>きょねん</rt></ruby>の <ruby>九月<rt>くがつ</rt></ruby>に <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ました。</span><span style="display: inline-block;"><ruby>今<rt>いま</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>に <ruby>六<rt>ろっ</rt></ruby>か<ruby>月<rt>げつ</rt></ruby> います。</span><br><span style="display: inline-block;">アナ「エリックさん、どのくらい <ruby>日本<rt>にほん</rt></ruby>に いますか」</span><br><span style="display: inline-block;">エリック「<ruby>六<rt>ろっ</rt></ruby>か<ruby>月<rt>げつ</rt></ruby> いますよ」</span><br><span style="display: inline-block;">アナ「<ruby>一年<rt>いちねん</rt></ruby> いますか」</span><br><span style="display: inline-block;">エリック「いいえ、<ruby>一年<rt>いちねん</rt></ruby>じゃありません。</span><span style="display: inline-block;"><ruby>六<rt>ろっ</rt></ruby>か<ruby>月<rt>げつ</rt></ruby> います」</span><br><span style="display: inline-block;">エリックさんは アメリカで <ruby>三<rt>さん</rt></ruby>か<ruby>月<rt>げつ</rt></ruby> <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しました。</span><span style="display: inline-block;">それから <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ました。</span><span style="display: inline-block;"><ruby>毎日<rt>まいにち</rt></ruby> <ruby>三時間<rt>さんじかん</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby>します。</span><span style="display: inline-block;"><ruby>一週間<rt>いっしゅうかん</rt></ruby>に <ruby>一回<rt>いっかい</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>の <ruby>山田<rt>やまだ</rt></ruby>さんに <ruby>会<rt>あ</rt></ruby>します。</span><span style="display: inline-block;"><ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>は <ruby>一時間<rt>いちじかん</rt></ruby>くらい <ruby>日本語<rt>にほんご</rt></ruby>で <ruby>話<rt>はな</rt></ruby>します。</span><span style="display: inline-block;">エリックさんは <ruby>日本語<rt>にほんご</rt></ruby>が とても <ruby>上手<rt>じょうず</rt></ruby>です。</span></p>`;

// Remove <rt>...</rt> content
const contentWithoutRt = htmlContent.replace(/<rt>.*?<\/rt>/g, '');

// Remove all tags
const contentTextOnly = contentWithoutRt.replace(/<[^>]+>/g, '');

// Remove whitespace
const cleanText = contentTextOnly.replace(/\s+/g, '');

console.log('COUNT:' + cleanText.length);
console.log('TEXT:' + cleanText);
