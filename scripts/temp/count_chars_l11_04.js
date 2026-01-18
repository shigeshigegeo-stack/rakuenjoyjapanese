
const htmlContent = `<p><span style="display: inline-block;">エリックさんは <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。</span><span style="display: inline-block;"><ruby>切手<rt>きって</rt></ruby>と はがきを <ruby>買<rt>か</rt></ruby>います。</span><br><span style="display: inline-block;">エリック「すみません、この <ruby>切手<rt>きって</rt></ruby>を <ruby>五枚<rt>ごまい</rt></ruby> ください」</span><br><span style="display: inline-block;"><ruby>郵便局員<rt>ゆうびんきょくいん</rt></ruby>「<ruby>五枚<rt>ごまい</rt></ruby>ですか」</span><br><span style="display: inline-block;">エリック「いいえ、<ruby>五枚<rt>ごまい</rt></ruby>じゃありません。</span><span style="display: inline-block;"><ruby>四枚<rt>よんまい</rt></ruby> ください」</span><br><span style="display: inline-block;">エリックさんは <ruby>切手<rt>きって</rt></ruby>を <ruby>四枚<rt>よんまい</rt></ruby>と はがきを <ruby>二枚<rt>にまい</rt></ruby> <ruby>買<rt>か</rt></ruby>いました。</span><br><span style="display: inline-block;">エリック「はがきは アメリカまで いくらですか」</span><br><span style="display: inline-block;"><ruby>郵便局員<rt>ゆうびんきょくいん</rt></ruby>「<ruby>百円<rt>ひゃくえん</rt></ruby>です」</span><br><span style="display: inline-block;">エリックさんは <ruby>一週間<rt>いっしゅうかん</rt></ruby>に <ruby>二回<rt>にかい</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>に <ruby>手紙<rt>てがみ</rt></ruby>を <ruby>書<rt>か</rt></ruby>きます。</span><span style="display: inline-block;">エアメールで <ruby>一週間<rt>いっしゅうかん</rt></ruby>くらい かかります。</span><span style="display: inline-block;"><ruby>船<rt>ふね</rt></ruby>で <ruby>一<rt>いっ</rt></ruby>か<ruby>月<rt>げつ</rt></ruby>くらい かかります。</span><span style="display: inline-block;">エリックさんの <ruby>国<rt>くに</rt></ruby>に <ruby>家族<rt>かぞく</rt></ruby>が <ruby>五人<rt>ごにん</rt></ruby> います。</span><span style="display: inline-block;">お<ruby>父<rt>とう</rt></ruby>さんと お<ruby>母<rt>かあ</rt></ruby>さんと お<ruby>弟<rt>とうと</rt></ruby>さんが <ruby>二人<rt>ふたり</rt></ruby> います。</span><span style="display: inline-block;">エリックさんは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>一時間<rt>いちじかん</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>と <ruby>電話<rt>でんわ</rt></ruby>で <ruby>話<rt>はな</rt></ruby>します。</span><span style="display: inline-block;"><ruby>昨日<rt>きのう</rt></ruby>の <ruby>夜<rt>よる</rt></ruby>も <ruby>一時間<rt>いちじかん</rt></ruby>くらい <ruby>話<rt>はな</rt></ruby>しました。</span><span style="display: inline-block;">エリックさんは <ruby>家族<rt>かぞく</rt></ruby>が <ruby>大好<rt>だいす</rt></ruby>きです。</span></p>`;

// Remove <rt>...</rt> content
const contentWithoutRt = htmlContent.replace(/<rt>.*?<\/rt>/g, '');

// Remove all tags
const contentTextOnly = contentWithoutRt.replace(/<[^>]+>/g, '');

// Remove whitespace
const cleanText = contentTextOnly.replace(/\s+/g, '');

console.log('COUNT:' + cleanText.length);
console.log('TEXT:' + cleanText);
