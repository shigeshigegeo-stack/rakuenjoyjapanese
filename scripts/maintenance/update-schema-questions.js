const fs = require('fs');
const path = 'src/data/stories/level_01_10.ts';
let content = fs.readFileSync(path, 'utf8');

const replacements = {
    "STORY_L01_01": [
        "あなたは <ruby>学生<rt>がくせい</rt></ruby>ですか。",
        "お<ruby>仕事<rt>しごと</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。"
    ],
    "STORY_L01_02": [
        "あの <ruby>人<rt>ひと</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>ですか。",
        "あなたは <ruby>何<rt>なに</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しますか。"
    ],
    "STORY_L01_03": [
        "あなたは <ruby>先生<rt>せんせい</rt></ruby>ですか。",
        "あなたの <ruby>先生<rt>せんせい</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>ですか。"
    ],
    "STORY_L01_04": [
        "あなたは <ruby>学生<rt>がくせい</rt></ruby>ですか。",
        "あなたの <ruby>友達<rt>ともだち</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>ですか。"
    ],
    "STORY_L02_02": [
        "その <ruby>傘<rt>かさ</rt></ruby>は あなたのですか。",
        "これは あなたの ノートですか。"
    ],
    "STORY_L03_03": [
        "お<ruby>国<rt>くに</rt></ruby>は どちらですか。",
        "あそこに <ruby>何<rt>なに</rt></ruby>が ありますか。"
    ],
    "STORY_L04_02": [
        "あなたの <ruby>会社<rt>かいしゃ</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>からですか。",
        "<ruby>日曜日<rt>にちようび</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みですか。"
    ],
    "STORY_L04_03": [
        "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>から <ruby>働<rt>はたら</rt></ruby>きますか。",
        "<ruby>今日<rt>きょう</rt></ruby>の <ruby>朝<rt>あさ</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きましたか。"
    ],
    "STORY_L05_01": [
        "<ruby>明日<rt>あした</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか。",
        "<ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。"
    ],
    "STORY_L05_02": [
        "<ruby>先週<rt>せんしゅう</rt></ruby> どこかへ <ruby>行<rt>い</rt></ruby>きましたか。",
        "<ruby>電車<rt>でんしゃ</rt></ruby>で <ruby>学校<rt>がっこう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "STORY_L05_03": [
        "あなたの お<ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。",
        "<ruby>旅行<rt>りょこう</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。"
    ],
    "STORY_L05_04": [
        "あなたは <ruby>歩<rt>ある</rt></ruby>いて <ruby>帰<rt>かえ</rt></ruby>りますか。",
        "だれと <ruby>旅行<rt>りょこう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "STORY_L6_01": [
        "あなたは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>朝<rt>あさ</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べますか。",
        "<ruby>何<rt>なに</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。"
    ],
    "STORY_L6_02": [
        "よく <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>を しますか。",
        "<ruby>週末<rt>しゅうまつ</rt></ruby>は どこへ <ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "STORY_L6_03": [
        "<ruby>花見<rt>はなみ</rt></ruby>を したことが ありますか。",
        "<ruby>公園<rt>こうえん</rt></ruby>で <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りますか。"
    ],
    "STORY_L6_04": [
        "よく カフェへ <ruby>行<rt>い</rt></ruby>きますか。",
        "どこで <ruby>勉強<rt>べんきょう</rt></ruby>しますか。"
    ],
    "STORY_L7_01": [
        "<ruby>誕生日<rt>たんじょうび</rt></ruby>に プレゼントを あげますか。",
        "ケーキが <ruby>好<rt>す</rt></ruby>きですか。"
    ],
    "STORY_L7_02": [
        "あなたは パソコンを <ruby>持<rt>も</rt></ruby>っていますか。",
        "よく レポートを <ruby>書<rt>か</rt></ruby>きますか。"
    ],
    "STORY_L7_03": [
        "<ruby>英語<rt>えいご</rt></ruby>が わかりますか。",
        "<ruby>外国語<rt>がいこくご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しますか。"
    ],
    "STORY_L7_04": [
        "もう <ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べましたか。",
        "カレーが <ruby>好<rt>す</rt></ruby>きですか。"
    ],
    "STORY_L8_01": [
        "あなたの <ruby>大学<rt>だいがく</rt></ruby>は <ruby>大<rt>おお</rt></ruby>きいですか。",
        "<ruby>大学<rt>だいがく</rt></ruby>は <ruby>楽<rt>たの</rt></ruby>しいですか。"
    ],
    "STORY_L8_02": [
        "レストランで <ruby>食事<rt>しょくじ</rt></ruby>を しますか。",
        "<ruby>魚<rt>さかな</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。"
    ],
    "STORY_L8_03": [
        "あなたの <ruby>町<rt>まち</rt></ruby>は どんな <ruby>町<rt>まち</rt></ruby>ですか。",
        "<ruby>古<rt>ふる</rt></ruby>い <ruby>建物<rt>たてもの</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。"
    ],
    "STORY_L8_04": [
        "<ruby>新<rt>あたら</rt></ruby>しい パソコンが ほしいですか。",
        "<ruby>映画<rt>えいが</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。"
    ],
    "STORY_L9_01": [
        "<ruby>音楽<rt>おんがく</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。",
        "どんな <ruby>歌<rt>うた</rt></ruby>を <ruby>歌<rt>うた</rt></ruby>いますか。"
    ],
    "STORY_L9_02": [
        "スポーツが <ruby>好<rt>す</rt></ruby>きですか。",
        "なんの スポーツを しますか。"
    ],
    "STORY_L9_03": [
        "<ruby>日本<rt>にほん</rt></ruby>の <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。",
        "<ruby>納豆<rt>なっとう</rt></ruby>を <ruby>食<rt>た</rt></ruby>べたことが ありますか。"
    ],
    "STORY_L9_04": [
        "<ruby>漢字<rt>かんじ</rt></ruby>は <ruby>難<rt>むずか</rt></ruby>しいですか。",
        "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby>しますか。"
    ]
};

const lines = content.split(/\r?\n/);
let inSchema = false;
let currentId = null;
let schemaStartIdx = -1;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('"id": "STORY_')) {
        // Regex updated to catch single digit level like L7_01 or L01_01
        const match = line.match(/"id": "(STORY_L[0-9]+_[0-9]{2})"/);
        if (match) {
            currentId = match[1];
        }
    }

    if (line.includes('"schema_activation": [')) {
        inSchema = true;
        schemaStartIdx = i;
    }

    if (inSchema && line.trim().endsWith('],')) {
        inSchema = false;
        if (currentId && replacements[currentId]) {
            // Found a block to replace
            // Construct new lines
            const newLines = [
                '    "schema_activation": [',
                `      "${replacements[currentId][0]}",`,
                `      "${replacements[currentId][1]}"`,
                '    ],'
            ];

            lines.splice(schemaStartIdx, i - schemaStartIdx + 1, ...newLines);

            i = schemaStartIdx + newLines.length - 1;

            console.log(`Updated schema activation for ${currentId}`);
        }
    }
}

fs.writeFileSync(path, lines.join('\n'), 'utf8');
