
import re
import json

file_path = r'c:\Users\aubyi\Desktop\japanese-stories\src\data\stories\level_01_10.ts'

# The user provided input string
input_data = r'''
  // STORY_L01_01
  "quizzes": [
    {
      "question": "ワトソンさんは どこから <ruby>来<rt>き</rt></ruby>ましたか。",
      "choices": ["アメリカ", "ブラジル", "ドイツ"],
      "answer_index": 0
    },
    {
      "question": "ワトソンさんの お<ruby>仕事<rt>しごと</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
      "choices": ["<ruby>先生<rt>せんせい</rt></ruby>", "<ruby>学生<rt>がくせい</rt></ruby>", "<ruby>会社員<rt>かいしゃいん</rt></ruby>"],
      "answer_index": 2
    }
  ],

  // STORY_L01_02
  "quizzes": [
    {
      "question": "アナさんは どこの <ruby>大学<rt>だいがく</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>ですか。",
      "choices": ["さくら<ruby>大学<rt>だいがく</rt></ruby>", "ふじ<ruby>大学<rt>だいがく</rt></ruby>", "あさひ<ruby>大学<rt>だいがく</rt></ruby>"],
      "answer_index": 0
    },
    {
      "question": "アナさんは どこの <ruby>国<rt>くに</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>ですか。",
      "choices": ["アメリカ<ruby>人<rt>じん</rt></ruby>", "ドイツ<ruby>人<rt>じん</rt></ruby>", "フランス<ruby>人<rt>じん</rt></ruby>"],
      "answer_index": 1
    }
  ],

  // STORY_L01_03
  "quizzes": [
    {
      "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>何<rt>なに</rt></ruby>ですか。",
      "choices": ["エンジニア", "<ruby>会社員<rt>かいしゃいん</rt></ruby>", "<ruby>先生<rt>せんせい</rt></ruby>"],
      "answer_index": 2
    },
    {
      "question": "ワトソンさんの お<ruby>仕事<rt>しごと</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
      "choices": ["エンジニア", "<ruby>先生<rt>せんせい</rt></ruby>", "<ruby>学生<rt>がくせい</rt></ruby>"],
      "answer_index": 0
    }
  ],

  // STORY_L01_04
  "quizzes": [
    {
      "question": "キムさんは どこから <ruby>来<rt>き</rt></ruby>ましたか。",
      "choices": ["ドイツ", "<ruby>日本<rt>にほん</rt></ruby>", "<ruby>韓国<rt>かんこく</rt></ruby>"],
      "answer_index": 2
    },
    {
      "question": "キムさんは <ruby>先生<rt>せんせい</rt></ruby>ですか。",
      "choices": ["はい", "いいえ"],
      "answer_index": 1
    }
  ],

  // STORY_L02_01
  "quizzes": [
    {
      "question": "アナさんの <ruby>辞書<rt>じしょ</rt></ruby>は <ruby>何語<rt>なにご</rt></ruby>ですか。",
      "choices": ["<ruby>日本語<rt>にほんご</rt></ruby>", "<ruby>英語<rt>えいご</rt></ruby>", "ドイツ<ruby>語<rt>ご</rt></ruby>"],
      "answer_index": 1
    },
    {
      "question": "それは <ruby>誰<rt>だれ</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>ですか。",
      "choices": ["ワトソンさんの", "アナさんの", "<ruby>山田<rt>やまだ</rt></ruby>さんの"],
      "answer_index": 1
    }
  ],

  // STORY_L02_02
  "quizzes": [
    {
      "question": "この <ruby>傘<rt>かさ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>のですか。",
      "choices": ["ワトソンさんの", "キムさんの", "アナさんの"],
      "answer_index": 2
    },
    {
      "question": "この ノートも アナさんのですか。",
      "choices": ["はい", "いいえ"],
      "answer_index": 0
    }
  ],

  // STORY_L02_03
  "quizzes": [
    {
      "question": "お<ruby>土産<rt>みやげ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。",
      "choices": ["チョコレート", "ケーキ", "ワイン"],
      "answer_index": 0
    },
    {
      "question": "それは どこの チョコレートですか。",
      "choices": ["ドイツの", "<ruby>日本<rt>にほん</rt></ruby>の", "アメリカの"],
      "answer_index": 2
    }
  ],

  // STORY_L02_04
  "quizzes": [
    {
      "question": "この <ruby>鍵<rt>かぎ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>のですか。",
      "choices": ["ワトソンさんの", "<ruby>山田<rt>やまだ</rt></ruby>さんの", "アナさんの"],
      "answer_index": 1
    },
    {
      "question": "カードは <ruby>誰<rt>だれ</rt></ruby>のですか。",
      "choices": ["ワトソンさんの", "アナさんの", "<ruby>山田<rt>やまだ</rt></ruby>さんの"],
      "answer_index": 0
    }
  ],

  // STORY_L03_01
  "quizzes": [
    {
      "question": "<ruby>受付<rt>うけつけ</rt></ruby>は どこに ありますか。",
      "choices": ["ここ", "そこ", "あそこ"],
      "answer_index": 2
    },
    {
      "question": "トイレは どこに ありますか。",
      "choices": ["ここ", "そこ", "あそこ"],
      "answer_index": 0
    }
  ],

  // STORY_L03_02
  "quizzes": [
    {
      "question": "<ruby>教室<rt>きょうしつ</rt></ruby>は <ruby>何階<rt>なんかい</rt></ruby>ですか。",
      "choices": ["1<ruby>階<rt>かい</rt></ruby>", "2<ruby>階<rt>かい</rt></ruby>", "3<ruby>階<rt>かい</rt></ruby>"],
      "answer_index": 1
    },
    {
      "question": "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は どこに いますか。",
      "choices": ["<ruby>教室<rt>きょうしつ</rt></ruby>", "<ruby>食堂<rt>しょくどう</rt></ruby>", "<ruby>事務室<rt>じむしつ</rt></ruby>"],
      "answer_index": 2
    }
  ],

  // STORY_L03_03
  "quizzes": [
    {
      "question": "ワトソンさんの お<ruby>国<rt>くに</rt></ruby>は どちらですか。",
      "choices": ["<ruby>日本<rt>にほん</rt></ruby>", "アメリカ", "ドイツ"],
      "answer_index": 1
    },
    {
      "question": "<ruby>会社<rt>かいしゃ</rt></ruby>は どこに ありますか。",
      "choices": ["<ruby>新宿<rt>しんじゅく</rt></ruby>", "<ruby>渋谷<rt>しぶヤ</rt></ruby>", "<ruby>銀座<rt>ぎんざ</rt></ruby>"],
      "answer_index": 2
    }
  ],

  // STORY_L03_04
  "quizzes": [
    {
      "question": "パソコンは いくらですか。",
      "choices": ["100,000<ruby>円<rt>えん</rt></ruby>", "150,000<ruby>円<rt>えん</rt></ruby>", "200,000<ruby>円<rt>えん</rt></ruby>"],
      "answer_index": 1
    },
    {
      "question": "それは どこの パソコンですか。",
      "choices": ["<ruby>日本<rt>にほん</rt></ruby>の", "アメリカの", "<ruby>韓国<rt>かんこく</rt></ruby>の"],
      "answer_index": 0
    }
  ],

  // STORY_L04_01
  "quizzes": [
    {
      "question": "<ruby>今<rt>いま</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>ですか。",
      "choices": ["10<ruby>時<rt>じ</rt></ruby>", "10<ruby>時半<rt>じはん</rt></ruby>", "11<ruby>時<rt>じ</rt></ruby>"],
      "answer_index": 1
    },
    {
      "question": "ニューヨークは <ruby>今<rt>いま</rt></ruby> <ruby>午前<rt>ごぜん</rt></ruby>ですか、<ruby>午後<rt>ごご</rt></ruby>ですか。",
      "choices": ["<ruby>午前<rt>ごぜん</rt></ruby>", "<ruby>午後<rt>ごご</rt></ruby>"],
      "answer_index": 1
    }
  ],

  // STORY_L04_02
  "quizzes": [
    {
      "question": "<ruby>会社<rt>かいしゃ</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>までですか。",
      "choices": ["1<ruby>時<rt>じ</rt></ruby>", "5<ruby>時<rt>じ</rt></ruby>", "9<ruby>時<rt>じ</rt></ruby>"],
      "answer_index": 1
    },
    {
      "question": "<ruby>会社<rt>かいしゃ</rt></ruby>は <ruby>何曜日<rt>なにようび</rt></ruby>が <ruby>休<rt>やす</rt></ruby>みですか。",
      "choices": ["<ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>火曜日<rt>かようび</rt></ruby>", "<ruby>水曜日<rt>すいようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>", "<ruby>土曜日<rt>どようび</rt></ruby>と <ruby>日曜日<rt>にちようび</rt></ruby>"],
      "answer_index": 2
    }
  ],

  // STORY_L04_03
  "quizzes": [
    {
      "question": "ワトソンさんは <ruby>毎朝<rt>まいあさ</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きますか。",
      "choices": ["6<ruby>時<rt>じ</rt></ruby>", "6<ruby>時半<rt>じはん</rt></ruby>", "7<ruby>時<rt>じ</rt></ruby>"],
      "answer_index": 1
    },
    {
      "question": "<ruby>昨日<rt>きのう</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>寝<rt>ね</rt></ruby>ましたか。",
      "choices": ["11<ruby>時<rt>じ</rt></ruby>", "12<ruby>時<rt>じ</rt></ruby>", "1<ruby>時<rt>じ</rt></ruby>"],
      "answer_index": 1
    }
  ],

  // STORY_L04_04
  "quizzes": [
    {
      "question": "<ruby>図書館<rt>としょかん</rt></ruby>の <ruby>電話番号<rt>でんわばんごう</rt></ruby>は <ruby>何番<rt>なんばん</rt></ruby>ですか。",
      "choices": ["03-1234-5678", "03-5678-1234", "090-1234-5678"],
      "answer_index": 0
    },
    {
      "question": "<ruby>図書館<rt>としょかん</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>に <ruby>終<rt>お</rt></ruby>わりますか。",
      "choices": ["<ruby>午後<rt>ごご</rt></ruby> 5<ruby>時<rt>じ</rt></ruby>", "<ruby>午後<rt>ごご</rt></ruby> 6<ruby>時<rt>じ</rt></ruby>", "<ruby>午後<rt>ごご</rt></ruby> 7<ruby>時<rt>じ</rt></ruby>"],
      "answer_index": 2
    }
  ],

  // STORY_L05_01
  "quizzes": [
    {
      "question": "アナさんは <ruby>明日<rt>あした</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか。",
      "choices": ["<ruby>新宿<rt>しんじゅく</rt></ruby>", "<ruby>渋谷<rt>しぶヤ</rt></ruby>", "<ruby>銀座<rt>ぎんざ</rt></ruby>"],
      "answer_index": 0
    },
    {
      "question": "アナさんは <ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか。",
      "choices": ["バス", "<ruby>電車<rt>でんしゃ</rt></ruby>", "<ruby>一人<rt>ひとり</rt></ruby>"],
      "answer_index": 1
    }
  ],

  // STORY_L05_02
  "quizzes": [
    {
      "question": "ワトソンさんは どこへ <ruby>行<rt>い</rt></ruby>きましたか。",
      "choices": ["<ruby>東京<rt>とうきょう</rt></ruby>", "<ruby>大阪<rt>おおさか</rt></ruby>", "<ruby>京都<rt>きょうと</rt></ruby>"],
      "answer_index": 2
    },
    {
      "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きましたか。",
      "choices": ["バス", "<ruby>電車<rt>でんしゃ</rt></ruby>", "<ruby>新幹線<rt>しんかんせん</rt></ruby>"],
      "answer_index": 2
    }
  ],

  // STORY_L05_03
  "quizzes": [
    {
      "question": "アナさんの お<ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。",
      "choices": ["4<ruby>月<rt>がつ</rt></ruby> 1<ruby>日<rt>ついたち</rt></ruby>", "8<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>", "10<ruby>月<rt>がつ</rt></ruby> 5<ruby>日<rt>にち</rt></ruby>"],
      "answer_index": 1
    },
    {
      "question": "アナさんは いつ <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ましたか。",
      "choices": ["4<ruby>月<rt>がつ</rt></ruby> 1<ruby>日<rt>ついたち</rt></ruby>", "8<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>", "1<ruby>月<rt>がつ</rt></ruby>"],
      "answer_index": 0
    }
  ],

  // STORY_L05_04
  "quizzes": [
    {
      "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>りますか。",
      "choices": ["バス", "タクシー", "<ruby>電車<rt>でんしゃ</rt></ruby>"],
      "answer_index": 1
    },
    {
      "question": "キムさんは <ruby>何<rt>なに</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>りますか。",
      "choices": ["タクシー", "<ruby>バス<rt>ばす</rt></ruby>", "<ruby>歩<rt>ある</rt></ruby>いて"],
      "answer_index": 2
    }
  ],

  // STORY_L6_01
  "quizzes": [
    {
      "question": "アナさんは <ruby>何<rt>なに</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みますか。",
      "choices": ["お<ruby>茶<rt>ちゃ</rt></ruby>", "コーヒー", "<ruby>水<rt>みず</rt></ruby>"],
      "answer_index": 0
    },
    {
      "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べますか。",
      "choices": ["カレー", "<ruby>魚<rt>さかな</rt></ruby>", "パスタ"],
      "answer_index": 1
    }
  ],

  // STORY_L6_02
  "quizzes": [
    {
      "question": "キムさんは <ruby>何<rt>なに</rt></ruby>を <ruby>買<rt>か</rt></ruby>いましたか。",
      "choices": ["<ruby>本<rt>ほん</rt></ruby>", "カード", "<ruby>時計<rt>とけい</rt></ruby>"],
      "answer_index": 2
    },
    {
      "question": "アナさんは <ruby>何<rt>なに</rt></ruby>を <ruby>買<rt>か</rt></ruby>いましたか。",
      "choices": ["<ruby>時計<rt>とけい</rt></ruby>", "<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>本<rt>ほん</rt></ruby>と カード", "<ruby>雑誌<rt>ざっし</rt></ruby>"],
      "answer_index": 1
    }
  ],

  // STORY_L6_03
  "quizzes": [
    {
      "question": "<ruby>二人<rt>ふたり</rt></ruby>は <ruby>公園<rt>こうえん</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を しましたか。",
      "choices": ["テニスを しました", "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りました", "<ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みました"],
      "answer_index": 1
    },
    {
      "question": "ワトソンさんは <ruby>来<rt>き</rt></ruby>ましたか。",
      "choices": ["はい、<ruby>来<rt>き</rt></ruby>ました", "いいえ、<ruby>来<rt>き</rt></ruby>ませんでした"],
      "answer_index": 1
    }
  ],

  // STORY_L6_04
  "quizzes": [
    {
      "question": "カフェは どこに ありますか。",
      "choices": ["<ruby>大学<rt>だいがく</rt></ruby>の <ruby>中<rt>なか</rt></ruby>", "<ruby>駅<rt>えき</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>", "<ruby>公園<rt>こうえん</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>"],
      "answer_index": 1
    },
    {
      "question": "アナさんは <ruby>何<rt>なに</rt></ruby>を <ruby>書<rt>か</rt></ruby>きましたか。",
      "choices": ["<ruby>名前<rt>なまえ</rt></ruby>", "<ruby>手紙<rt>てがみ</rt></ruby>", "<ruby>漢字<rt>かんじ</rt></ruby>"],
      "answer_index": 2
    }
  ],

  // STORY_L7_01
  "quizzes": [
    {
      "question": "アナさんは <ruby>山田<rt>やまだ</rt></ruby>さんに <ruby>何<rt>なに</rt></ruby>を あげましたか。",
      "choices": ["<ruby>花<rt>はな</rt></ruby>", "ネクタイ", "ケーキ"],
      "answer_index": 1
    },
    {
      "question": "アナさんは <ruby>何<rt>なに</rt></ruby>で ケーキを <ruby>切<rt>き</rt></ruby>りましたか。",
      "choices": ["フォーク", "スプーン", "ナイフ"],
      "answer_index": 2
    }
  ],

  // STORY_L7_02
  "quizzes": [
    {
      "question": "アナさんは <ruby>何<rt>なに</rt></ruby>で レポートを <ruby>書<rt>か</rt></ruby>きますか。",
      "choices": ["ペン", "パソコン", "スマホ"],
      "answer_index": 1
    },
    {
      "question": "レポートは もう <ruby>終<rt>お</rt></ruby>わりましたか。",
      "choices": ["はい、もう <ruby>終<rt>お</rt></ruby>わりました", "いいえ、まだです"],
      "answer_index": 0
    }
  ],

  // STORY_L7_03
  "quizzes": [
    {
      "question": "『ありがとう』は ドイツ<ruby>語<rt>ご</rt></ruby>で <ruby>何<rt>なん</rt></ruby>ですか。",
      "choices": ["Danke", "Tschüss", "Hello"],
      "answer_index": 0
    },
    {
      "question": "ワトソンさんは アナさんに <ruby>何<rt>なに</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えていますか。",
      "choices": ["<ruby>日本語<rt>にほんご</rt></ruby>", "ギター", "ピアノ"],
      "answer_index": 1
    }
  ],

  // STORY_L7_04
  "quizzes": [
    {
      "question": "キムさんは <ruby>誰<rt>だれ</rt></ruby>に お<ruby>金<rt>かね</rt></ruby>を <ruby>借<rt>か</rt></ruby>りましたか。",
      "choices": ["ワトソンさんに", "アナさんに", "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に"],
      "answer_index": 2
    },
    {
      "question": "キムさんは カレーを <ruby>何<rt>なに</rt></ruby>で <ruby>食<rt>た</rt></ruby>べましたか。",
      "choices": ["お<ruby>箸<rt>はし</rt></ruby>", "スプーンと フォーク", "ナイフ"],
      "answer_index": 1
    }
  ],

  // STORY_L8_01
  "quizzes": [
    {
      "question": "さくら<ruby>大学<rt>だいがく</rt></ruby>は <ruby>新<rt>あたら</rt></ruby>しいですか。",
      "choices": ["はい、とても <ruby>新<rt>あたら</rt></ruby>しいです", "いいえ、あまり <ruby>新<rt>あたら</rt></ruby>しくないです"],
      "answer_index": 1
    },
    {
      "question": "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は どんな <ruby>先生<rt>せんせい</rt></ruby>ですか。",
      "choices": ["<ruby>厳<rt>きび</rt></ruby>しい <ruby>先生<rt>せんせい</rt></ruby>", "<ruby>親切<rt>しんせつ</rt></ruby>な <ruby>先生<rt>せんせい</rt></ruby>", "<ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>先生<rt>せんせい</rt></ruby>"],
      "answer_index": 1
    }
  ],

  // STORY_L8_02
  "quizzes": [
    {
      "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。",
      "choices": ["<ruby>魚<rt>さかな</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>", "<ruby>肉<rt>にく</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>", "野菜の <ruby>料理<rt>りょうり</rt></ruby>"],
      "answer_index": 0
    },
    {
      "question": "この <ruby>店<rt>みせ</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>は いくらですか。",
      "choices": ["とても <ruby>安<rt>やす</rt></ruby>いです", "<ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>いです", "<ruby>全然<rt>ぜんぜん</rt></ruby> <ruby>高<rt>たか</rt></ruby>くないです"],
      "answer_index": 1
    }
  ],

  // STORY_L8_03
  "quizzes": [
    {
      "question": "<ruby>鎌倉<rt>かまくら</rt></ruby>は どんな <ruby>町<rt>まち</rt></ruby>ですか。",
      "choices": ["にぎやかな <ruby>町<rt>まち</rt></ruby>", "<ruby>静<rt>しず</rt></ruby>かで きれいな <ruby>町<rt>まち</rt></ruby>", "あまり <ruby>有名<rt>ゆうめい</rt></ruby>じゃありません"],
      "answer_index": 1
    },
    {
      "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。",
      "choices": ["<ruby>冷<rt>つめ</rt></ruby>たい お<ruby>茶<rt>ちゃ</rt></ruby>", "<ruby>甘<rt>あま</rt></ruby>い お<ruby>菓子<rt>かし</rt></ruby>", "お<ruby>弁当<rt>べんとう</rt></ruby>"],
      "answer_index": 1
    }
  ],

  // STORY_L8_04
  "quizzes": [
    {
      "question": "<ruby>日本<rt>にほん</rt></ruby>の パソコンは どうですか。",
      "choices": ["<ruby>大<rt>おお</rt></ruby>きくて <ruby>重<rt>おも</rt></ruby>いです", "<ruby>小<rt>ちい</rt></ruby>さくて <ruby>軽<rt>かる</rt></ruby>いです", "あまり <ruby>便利<rt>べんり</rt></ruby>じゃありません"],
      "answer_index": 1
    },
    {
      "question": "パソコンは いくらでしたか。",
      "choices": ["100,000<ruby>円<rt>えん</rt></ruby>", "150,000<ruby>円<rt>えん</rt></ruby>", "200,000<ruby>円<rt>えん</rt></ruby>"],
      "answer_index": 1
    }
  ],

  // STORY_L9_01
  "quizzes": [
    {
      "question": "アナさんは どんな <ruby>音楽<rt>おんがく</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。",
      "choices": ["クラシック", "ロック", "ジャズ"],
      "answer_index": 0
    },
    {
      "question": "ワトソンさんは <ruby>歌<rt>うた</rt></ruby>が <ruby>上手<rt>じょうず</rt></ruby>ですか。",
      "choices": ["はい、とても <ruby>上手<rt>じょうず</rt></ruby>です", "いいえ、あまり <ruby>上手<rt>じょうず</rt></ruby>じゃありません"],
      "answer_index": 0
    }
  ],

  // STORY_L9_02
  "quizzes": [
    {
      "question": "キムさんは <ruby>何<rt>なに</rt></ruby>が とても <ruby>上手<rt>じょうず</rt></ruby>ですか。",
      "choices": ["サッカー", "<ruby>野球<rt>やきゅう</rt></ruby>", "テニス"],
      "answer_index": 1
    },
    {
      "question": "キムさんは どうして <ruby>毎日<rt>まいにち</rt></ruby> <ruby>練習<rt>れんしゅう</rt></ruby>を しますか。",
      "choices": ["ひまだから", "もっと <ruby>上手<rt>じょうず</rt></ruby>に なりたいから", "<ruby>野球<rt>やきゅう</rt></ruby>が <ruby>嫌<rt>きら</rt></ruby>いだから"],
      "answer_index": 1
    }
  ],

  // STORY_L9_03
  "quizzes": [
    {
      "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>が あまり <ruby>好<rt>す</rt></ruby>きじゃありませんか。",
      "choices": ["すし", "てんぷら", "<ruby>納豆<rt>なっとう</rt></ruby>"],
      "answer_index": 2
    },
    {
      "question": "アナさんは <ruby>何<rt>なに</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みましたか。",
      "choices": ["ビール", "ワイン", "ジュース"],
      "answer_index": 2
    }
  ],

  // STORY_L9_04
  "quizzes": [
    {
      "question": "アナさんは どうして <ruby>漢字<rt>かんじ</rt></ruby>が <ruby>難<rt>むずか</rt></ruby>しいと <ruby>言<rt>い</rt></ruby>いましたか。",
      "choices": ["<ruby>絵<rt>え</rt></ruby>がないから", "<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>が たくさん あるから", "<ruby>嫌<rt>きら</rt></ruby>いだから"],
      "answer_index": 1
    },
    {
      "question": "アナさんは いつか <ruby>何<rt>なに</rt></ruby>が <ruby>読<rt>よ</rt></ruby>みたいですか。",
      "choices": ["<ruby>雑誌<rt>ざっし</rt></ruby>", "<ruby>手紙<rt>てがみ</rt></ruby>", "<ruby>新聞<rt>しんぶん</rt></ruby>"],
      "answer_index": 2
    }
  ],

  // STORY_L10_01
  "quizzes": [
    {
      "question": "<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
      "choices": ["パソコンと ノート", "パソコンと <ruby>写真<rt>しゃしん</rt></ruby>", "ベッド"],
      "answer_index": 0
    },
    {
      "question": "<ruby>箱<rt>はこ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
      "choices": ["ノート", "パソコン", "<ruby>家族<rt>かぞく</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>"],
      "answer_index": 2
    }
  ],

  // STORY_L10_02
  "quizzes": [
    {
      "question": "<ruby>壁<rt>かべ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
      "choices": ["パソコン", "<ruby>時計<rt>とけい</rt></ruby>", "いす"],
      "answer_index": 1
    },
    {
      "question": "ねこは どこに いますか。",
      "choices": ["<ruby>机<rt>つくえ</rt></ruby>の <ruby>下<rt>した</rt></ruby>", "<ruby>本棚<rt>ほんだな</rt></ruby>の <ruby>中<rt>なか</rt></ruby>", "<ruby>台所<rt>だいどころ</rt></ruby>"],
      "answer_index": 0
    }
  ],

  // STORY_L10_03
  "quizzes": [
    {
      "question": "アナさんは <ruby>どこ<rt>どこ</rt></ruby>で <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>っていますか。",
      "choices": ["ベンチ", "<ruby>池<rt>いけ</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>", "<ruby>木<rt>き</rt></ruby>の <ruby>下<rt>した</rt></ruby>"],
      "answer_index": 2
    },
    {
      "question": "パン<ruby>屋<rt>や</rt></ruby>と <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>の <ruby>間<rt>あいだ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
      "choices": ["ポスト", "スーパー", "デパート"],
      "answer_index": 0
    }
  ],

  // STORY_L10_04
  "quizzes": [
    {
      "question": "<ruby>机<rt>つくえ</rt></ruby>の <ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しの <ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
      "choices": ["パソコン", "パスポートと <ruby>鍵<rt>かぎ</rt></ruby>", "<ruby>写真<rt>しゃしん</rt></ruby>"],
      "answer_index": 1
    },
    {
      "question": "<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>が ありますか。",
      "choices": ["はい、<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>と ビールが あります", "いいえ、ありません"],
      "answer_index": 0
    }
  ]
'''

def update():
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = content
    
    # Parse input data
    # Split by // STORY_...
    sections = re.split(r'// (STORY_[^\s]+)', input_data)
    
    # Iterate pairs (ID, CONTENT)
    # sections[0] is empty or whitespace
    # sections[1] = ID, sections[2] = Content
    
    for i in range(1, len(sections), 2):
        story_id = sections[i]
        quizzes_json_str = sections[i+1].strip()
        
        # quizzes_json_str starts with "quizzes": [ ... ]
        # We want to extract just the list part so we can insert it nicely.
        # However, the input format includes keys like "quizzes":
        # Let's clean it up to be just the array content to replace in the file.
        
        # Find the list part
        match_json = re.search(r'\[.*\]', quizzes_json_str, re.DOTALL)
        if not match_json:
            print(f"Could not parse quizzes for {story_id}")
            continue
            
        quizzes_array_str = match_json.group(0)
        
        # Ensure it is valid JSON (sanity check)
        # However, the input might contain trailing commas which standard JSON doesn't like? 
        # The input looks like standard JSON-ish but keys are quoted.
        # Let's try to trust the string structure but indentation might be off.
        # To make it look nice in the TS file, we should indent it.
        
        # Parse it to object to re-serialize with correct indentation
        try:
             # The input has Japanese characters, ensuring unicode handling
             # Also strict=False allows control characters etc if any
            quizzes_obj = json.loads(quizzes_array_str)
        except Exception as e:
            print(f"Error parsing JSON for {story_id}: {e}")
            # Fallback: Just use the string but try to fix indentation
            quizzes_formatted = quizzes_array_str
            # continue or fail?
            # Actually, standard json.loads requires double quotes. Input has double quotes.
            # But "answer_index": 0 might be number. valid json.
            # let's try.
        
        # Re-format nicely
        # Indentation: 4 spaces for the array, 6 spaces for objects?
        # The file uses 2 spaces or 4 spaces? Looking at previous view_file, looks like 2 spaces indent?
        # Line 9: "      " (6 spaces?) 
        # Line 4: "  {" (2 spaces) -> Level 1
        # Line 8: "    "schema_activation": [" (4 spaces) -> Level 2
        # So Quizzes array is at Level 2 (4 spaces indent).
        # Objects inside are Level 3 (6 spaces indent).
        
        # Construct the replacement string
        # We need to replace the EXISTING "quizzes": [ ... ] block for this story ID.
        
        # Regex to find the story block in the file
        # We look for "id": "STORY_ID" ... "quizzes": [ ... ]
        # Be careful not to match too far.
        
        # Strategy: Find "id": "STORY_ID", then look for "quizzes": [ ... ] closely following it before the next "id": or end of object.
        
        story_pattern = re.compile(
            r'("id":\s*"' + re.escape(story_id) + r'".*?"quizzes":\s*)(\[.*?\])',
            re.DOTALL
        )
        
        # Formatting the new quizzes array
        # JSON dump
        formatted_json = json.dumps(quizzes_obj, ensure_ascii=False, indent=2)
        # This will give us:
        # [
        #   {
        #     "question": ...
        #   }
        # ]
        # We need to indent this whole block to match the file structure.
        # The opening bracket usually follows the key.
        # The closing bracket should be aligned with the key.
        
        # Indent all lines by 4 spaces (since keys are at 4 spaces)
        # But looking at file:
        #     "quizzes": [
        #       {
        #         "question": ...
        
        lines = formatted_json.split('\n')
        indented_lines = []
        for idx, line in enumerate(lines):
            if idx == 0:
                indented_lines.append(line) # First line [ starts locally
            else:
                indented_lines.append('    ' + line) # Add 4 spaces to match the 4 base + 2 extra?
                
        # Actually, let's look at the file style from view_file output:
        # 14:     "quizzes": [
        # 15:       {
        
        # "quizzes": is at 4 spaces.
        # [ is on the same line or next? Usually same line in this file?
        # The previous view showed: 
        # 14:     "quizzes": [
        
        # So we want:
        # [
        #   {
        #     ...
        #   }
        # ]
        # shifted to:
        # [
        #       {
        #         ...
        #       }
        #     ]
        
        # Let's easier just serialize with indent=2, then split and add 4 spaces to every line except the first one?
        # Or better: Indent everything by 4 spaces, strip the first line's leading spaces so it can attach to "quizzes":
        
        formatted_json = json.dumps(quizzes_obj, ensure_ascii=False, indent=2)
        lines = formatted_json.split('\n')
        final_lines = []
        final_lines.append(lines[0]) # '['
        for line in lines[1:]:
            final_lines.append('    ' + line)
            
        replacement_str = '\n'.join(final_lines)
        
        # Perform replacement
        # \1 captures ("id": ... "quizzes": )
        # \2 captures the old [ ... ]
        
        # Note: The old [ ... ] regex needs to handle nested brackets if any?
        # Luckily quizzes usually don't have nested arrays inside choices (choices is simple array).
        # But we need to be careful with greedy matching.
        
        # Find the specific story block start
        curr_content = new_content
        match_story = story_pattern.search(curr_content)
        if match_story:
            # Check if we matched the right thing
            # We replace group 2
            
            # Use string replacement on the matched span to avoid regex recursion issues or modifying other parts
            span = match_story.span(2)
            
            new_content = new_content[:span[0]] + replacement_str + new_content[span[1]:]
            print(f"Updated quizzes for {story_id}")
        else:
            print(f"Could not find story block for {story_id}")

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

if __name__ == "__main__":
    import sys
    import traceback
    try:
        sys.stdout.reconfigure(encoding='utf-8')
        update()
    except Exception:
        traceback.print_exc()
