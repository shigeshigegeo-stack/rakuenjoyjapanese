import { Textbook } from './types';

export const textbooks_level_01_10: Textbook[] = [
  {
    "id": "TEXTBOOK_L01_01",
    "level": 1,
    "title": "はじめまして",
    "schema_activation": [
      "コーヒーと<ruby>紅茶<rt>こうちゃ</rt></ruby>、どちらが<ruby>好<rt>す</rt></ruby>きですか？",
      "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>何<rt>なに</rt></ruby>か<ruby>楽<rt>たの</rt></ruby>しいことがありましたか？"
    ],
    "translation": "<p>Yamada-san is Japanese. He is a teacher at Sakura University. Yamada-san is 45 years old.<br>Ana-san is not Japanese. She is German. She is 20 years old. Ana-san is a student at Sakura University. She is not a teacher.<br>Yamada-san is not a student. He is a teacher.<br>Yamada-san is not a company employee. Ana-san is also not a company employee.<br>Ana-san is 20 years old. Yamada-san is not 20 years old. He is 45 years old.<br>Yamada-san is a teacher at Sakura University. Ana-san is a student at Sakura University.<br>Ana-san is a German student. Yamada-san is a Japanese teacher.<br>Ana-san is not a teacher. She is a student. Yamada-san is not a student. He is a teacher.</p>",
    "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>日本人<rt>にほんじん</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>です。45<ruby>歳<rt>さい</rt></ruby>です。<br>アナさんはドイツ<ruby>人<rt>じん</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。20<ruby>歳<rt>さい</rt></ruby>です。<br><span id=\"L01_01_Q1\">アナさんは</span><ruby>先生<rt>せんせい</rt></ruby>じゃありません。<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>学生<rt>がくせい</rt></ruby>じゃありません。<br><ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。アナさんも<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。</p>",
    "quizzes": [
      {
        "question": "アナさんは<ruby>先生<rt>せんせい</rt></ruby>ですか。",
        "target_id": "L01_01_Q1",
        "choices": [
          "はい、<ruby>先生<rt>せんせい</rt></ruby>です",
          "いいえ、<ruby>学生<rt>がくせい</rt></ruby>です"
        ],
        "answer_index": 1
      }
    ],
    "audio_file": "/audio/L01_01.mp3"
  },
  {
    "id": "TEXTBOOK_L01_02",
    "level": 1,
    "title": "<ruby>会社員<rt>かいしゃいん</rt></ruby>と<ruby>友達<rt>ともだち</rt></ruby>",
    "schema_activation": [
      "スポーツは<ruby>好<rt>す</rt></ruby>きですか？",
      "<ruby>最近<rt>さいきん</rt></ruby>、<ruby>忙<rt>いそが</rt></ruby>しいですか？"
    ],
    "translation": "<p>Jim-san is American. He is a bank employee. He is 28 years old. Jim-san is not a teacher or a student. He is a bank employee.<br>Kim-san is Korean. He is an IT company employee. He is 25 years old. Kim-san is not a teacher or a student. He is an IT company employee.<br>Jim-san is an office worker. Kim-san is also an office worker.<br>Jim-san is American. Kim-san is not American, he is Korean. Kim-san is Korean. Jim-san is not Korean, he is American.<br>Jim-san is 28 years old. Kim-san is 25 years old. Jim-san is not 25. Kim-san is not 28.<br>Jim-san is a bank employee. Kim-san is not a bank employee, he is an IT company employee.<br>Jim-san is an office worker at an American bank. Kim-san is an office worker in Korea.<br>Jim-san is an office worker. Kim-san is also an office worker.<br>Jim-san and Kim-san are friends. They are not students at Sakura University.</p>",
    "textbook_html": "<p>ジムさんはアメリカ<ruby>人<rt>じん</rt></ruby>です。<ruby>銀行<rt>ぎんこう</rt></ruby>の<span id=\"L01_02_Q1\"><ruby>会社員<rt>かいしゃいん</rt></ruby>です。</span>28<ruby>歳<rt>さい</rt></ruby>です。<br>キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。ITの<span id=\"L01_02_Q2\"><ruby>会社員<rt>かいしゃいん</rt></ruby>です。</span>25<ruby>歳<rt>さい</rt></ruby>です。<br>ジムさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>です。キムさんも<ruby>会社員<rt>かいしゃいん</rt></ruby>です。<br><ruby>二人<rt>ふたり</rt></ruby>は<ruby>先生<rt>せんせい</rt></ruby>じゃありません。<ruby>二人<rt>ふたり</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>じゃありません。<br>ジムさんはアメリカの<ruby>銀行<rt>ぎんこう</rt></ruby>の<ruby>会社員<rt>かいしゃいん</rt></ruby>です。<br>キムさんは<ruby>韓国<rt>かんこく</rt></ruby>のITの<ruby>会社員<rt>かいしゃいん</rt></ruby>です。<br>ジムさんは25<ruby>歳<rt>さい</rt></ruby>じゃありません。28<ruby>歳<rt>さい</rt></ruby>です。キムさんは25<ruby>歳<rt>さい</rt></ruby>です。<br>ジムさんとキムさんはさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>です。<br><ruby>二人<rt>ふたり</rt></ruby>はさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>じゃありません。</p>",
    "quizzes": [
      {
        "question": "ジムさんの<ruby>仕事<rt>しごと</rt></ruby>はなんですか。",
        "target_id": "L01_02_Q1",
        "choices": [
          "<ruby>先生<rt>せんせい</rt></ruby>",
          "<ruby>銀行<rt>ぎんこう</rt></ruby>の<ruby>会社員<rt>かいしゃいん</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "キムさんは<ruby>銀行<rt>ぎんこう</rt></ruby>の<ruby>会社員<rt>かいしゃいん</rt></ruby>ですか。",
        "target_id": "L01_02_Q2",
        "choices": [
          "はい、そうです",
          "いいえ、ITの<ruby>会社員<rt>かいしゃいん</rt></ruby>です"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "TEXTBOOK_L01_03",
    "level": 1,
    "title": "<ruby>病院<rt>びょういん</rt></ruby>のパクさん",
    "schema_activation": [
      "お<ruby>住<rt>す</rt></ruby>まいの<ruby>場所<rt>ばしょ</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>はどうですか？",
      "<ruby>日本<rt>にほん</rt></ruby>の<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>に<ruby>興味<rt>きょうみ</rt></ruby>がありますか？"
    ],
    "translation": "<p>Pak-san is Korean. Pak-san is a doctor. He is 30 years old. Pak-san is a doctor at a town hospital. He is not a teacher.<br>Kim-san is Korean. Pak-san is also Korean. Kim-san is an office worker. Pak-san is not an office worker, he is a doctor.<br>Pak-san is not a teacher or a student at Sakura University. He is a doctor at a town hospital.<br>Ana-san is German. She is 20 years old. She is a student at Sakura University.<br>Ana-san is not a doctor. Pak-san is not a student.<br>Pak-san is not 20 years old, he is 30. Ana-san is not 30 years old, she is 20.<br>Pak-san is Kim-san's friend. Kim-san is Pak-san's friend.<br>Jim-san is American. Kim-san and Pak-san are Korean.<br>Ana-san is 20. Kim-san is 25. Jim-san is 28. Pak-san is 30. Yamada-san is 45.<br>Everyone is friends.</p>",
    "textbook_html": "<p>パクさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。<ruby>医者<rt>いしゃ</rt></ruby>です。<span id=\"L01_03_Q1\">30<ruby>歳<rt>さい</rt></ruby>です。</span><ruby>町<rt>まち</rt></ruby>の<ruby>病院<rt>びょういん</rt></ruby>の<span id=\"L01_03_Q2\"><ruby>医者<rt>いしゃ</rt></ruby>です。</span><ruby>先生<rt>せんせい</rt></ruby>じゃありません。<br>キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。パクさんも<ruby>韓国人<rt>かんこくじん</rt></ruby>です。<br>キムさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>です。パクさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。<ruby>医者<rt>いしゃ</rt></ruby>です。<br>パクさんはさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>じゃありません。<ruby>学生<rt>がくせい</rt></ruby>じゃありません。<br>アナさんはドイツ<ruby>人<rt>じん</rt></ruby>です。20<ruby>歳<rt>さい</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。<br>パクさんはキムさんの<ruby>友達<rt>ともだち</rt></ruby>です。キムさんはパクさんの<ruby>友達<rt>ともだち</rt></ruby>です。<br>アナさんは20<ruby>歳<rt>さい</rt></ruby>です。キムさんは25<ruby>歳<rt>さい</rt></ruby>です。ジムさんは28<ruby>歳<rt>さい</rt></ruby>です。パクさんは30<ruby>歳<rt>さい</rt></ruby>です。<ruby>山田<rt>やまだ</rt></ruby>さんは45<ruby>歳<rt>さい</rt></ruby>です。</p>",
    "quizzes": [
      {
        "question": "パクさんは<ruby>何歳<rt>なんさい</rt></ruby>ですか。",
        "target_id": "L01_03_Q1",
        "choices": [
          "20<ruby>歳<rt>さい</rt></ruby>",
          "30<ruby>歳<rt>さい</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "パクさんは<ruby>学生<rt>がくせい</rt></ruby>ですか。",
        "target_id": "L01_03_Q2",
        "choices": [
          "いいえ、<ruby>医者<rt>いしゃ</rt></ruby>です",
          "はい、<ruby>学生<rt>がくせい</rt></ruby>です",
          "いいえ、<ruby>先生<rt>せんせい</rt></ruby>です"
        ],
        "answer_index": 0
      }
    ]
  },
  {
    "id": "TEXTBOOK_L01_04",
    "level": 1,
    "title": "<ruby>教室<rt>きょうしつ</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>",
    "schema_activation": [
      "<ruby>日本<rt>にほん</rt></ruby>のアニメや<ruby>映画<rt>えいが</rt></ruby>は<ruby>好<rt>す</rt></ruby>きですか？",
      "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は、<ruby>何<rt>なに</rt></ruby>をしますか？"
    ],
    "translation": "<p>Yamada-san is Japanese. He is a teacher at Sakura University. He is 45 years old.<br>Ana-san is German. She is a student at Sakura University. She is 20 years old.<br>Jim-san is American. He is a bank employee. He is 28 years old.<br>Kim-san is Korean. He is an IT company employee. He is 25 years old.<br>Pak-san is Korean. He is a doctor at a town hospital. He is 30 years old.<br>Jim-san is an office worker. Kim-san is also an office worker.<br>Kim-san is Korean. Pak-san is also Korean.<br>Ana-san is not a teacher, she is a student. Yamada-san is not a student, he is a teacher.<br>Pak-san is not an office worker, he is a doctor.<br>Jim-san is not Japanese, he is American. Jim-san is not 25, he is 28. Kim-san is not 28, he is 25.<br>Pak-san is 30. Yamada-san is 45. Ana-san is 20.<br>Ana-san is a student at Sakura University. Yamada-san is a teacher at Sakura University.<br>Jim-san is a bank employee. Kim-san is an IT company employee. Pak-san is a doctor at a town hospital.<br>Yamada-san is a 45-year-old teacher. Ana-san is a German student. Jim-san is an American office worker.<br>Kim-san is a Korean office worker. Pak-san is a Korean doctor.<br>Ana-san is not a teacher. Yamada-san is not a student. Pak-san is not a student. Jim-san is not a student.<br>Kim-san is not a teacher. Ana-san is not an office worker. Jim-san is a bank employee in America. Kim-san is an IT employee in Korea.<br>Everyone is friends. They are friends in the Sakura University classroom.</p>",
    "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>日本人<rt>にほんじん</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>です。<span id=\"L01_04_Q1\">45<ruby>歳<rt>さい</rt></ruby>です。</span><br>アナさんはドイツ<ruby>人<rt>じん</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>です。20<ruby>歳<rt>さい</rt></ruby>です。<br>ジムさんはアメリカ<ruby>人<rt>じん</rt></ruby>です。<ruby>銀行<rt>ぎんこう</rt></ruby>の<ruby>会社員<rt>かいしゃいん</rt></ruby>です。28<ruby>歳<rt>さい</rt></ruby>です。<br>キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。ITの<ruby>会社員<rt>かいしゃいん</rt></ruby>です。25<ruby>歳<rt>さい</rt></ruby>です。<br>パクさんは<span id=\"L01_04_Q2\"><ruby>韓国人<rt>かんこくじん</rt></ruby>です。</span><ruby>町<rt>まち</rt></ruby>の<ruby>病院<rt>びょういん</rt></ruby>の<ruby>医者<rt>いしゃ</rt></ruby>です。30<ruby>歳<rt>さい</rt></ruby>です。<br><span id=\"L01_04_Q3\">ジムさんは</span><ruby>会社員<rt>かいしゃいん</rt></ruby>です。キムさんも<ruby>会社員<rt>かいしゃいん</rt></ruby>です。<br>キムさんは<ruby>韓国人<rt>かんこくじん</rt></ruby>です。パクさんも<ruby>韓国人<rt>かんこくじん</rt></ruby>です。<br><ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>学生<rt>がくせい</rt></ruby>じゃありません。<ruby>先生<rt>せんせい</rt></ruby>です。<br>アナさんは<ruby>先生<rt>せんせい</rt></ruby>じゃありません。<ruby>学生<rt>がくせい</rt></ruby>です。<br>パクさんは<ruby>会社員<rt>かいしゃいん</rt></ruby>じゃありません。<ruby>医者<rt>いしゃ</rt></ruby>です。<br>ジムさんは<ruby>銀行<rt>ぎんこう</rt></ruby>の<ruby>会社員<rt>かいしゃいん</rt></ruby>です。キムさんはITの<ruby>会社員<rt>かいしゃいん</rt></ruby>です。パクさんは<ruby>病院<rt>びょういん</rt></ruby>の<ruby>医者<rt>いしゃ</rt></ruby>です。<br>みなさんは<ruby>友達<rt>ともだち</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>教室<rt>きょうしつ</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>です。</p>",
    "quizzes": [
      {
        "question": "<ruby>山田<rt>やまだ</rt></ruby>さんの<ruby>年齢<rt>ねんれい</rt></ruby>は<ruby>何歳<rt>なんさい</rt></ruby>ですか。",
        "target_id": "L01_04_Q1",
        "choices": [
          "30<ruby>歳<rt>さい</rt></ruby>",
          "45<ruby>歳<rt>さい</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "パクさんの<ruby>国籍<rt>こくせき</rt></ruby>はどこですか。",
        "target_id": "L01_04_Q2",
        "choices": [
          "<ruby>韓国<rt>かんこく</rt></ruby>",
          "ドイツ",
          "アメリカ"
        ],
        "answer_index": 0
      },
      {
        "question": "ジムさんはさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学生<rt>がくせい</rt></ruby>ですか。",
        "target_id": "L01_04_Q3",
        "choices": [
          "はい、<ruby>学生<rt>がくせい</rt></ruby>です",
          "いいえ、<ruby>会社員<rt>かいしゃいん</rt></ruby>です",
          "いいえ、<ruby>先生<rt>せんせい</rt></ruby>です"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "TEXTBOOK_L02_01",
    "level": 2,
    "title": "<ruby>教室<rt>きょうしつ</rt></ruby>の<ruby>物<rt>もの</rt></ruby>",
    "schema_activation": [
      "<ruby>普段<rt>ふだん</rt></ruby>、カバンの<ruby>中<rt>なか</rt></ruby>に<ruby>何<rt>なに</rt></ruby>がありますか？",
      "あなたの<ruby>国<rt>くに</rt></ruby>の<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？"
    ],
    "translation": "<p>This is a classroom. What is this? That is a book. It is a Japanese book.<br>What is that over there? That is a clock. It is Sakura University's clock.<br>Is that a dictionary? No, it's not a dictionary. It's a notebook.<br>Whose notebook is this? It's Ana-san's notebook.<br>Whose umbrella is that over there? It's Yamada-sensei's umbrella.<br>Is that a mechanical pencil? No, it's a ballpoint pen.<br>This is Yamada-sensei's ballpoint pen. It's not Ana-san's ballpoint pen.<br>That umbrella over there is also not Yamada-sensei's umbrella. It's Ana-san's umbrella.</p>",
    "textbook_html": "<p>ここは<ruby>教室<rt>きょうしつ</rt></ruby>です。これは<ruby>何<rt>なん</rt></ruby>ですか。<ruby>本<rt>ほん</rt></ruby>です。<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>です。<br>あれは<ruby>何<rt>なん</rt></ruby>ですか。<ruby>時計<rt>とけい</rt></ruby>です。さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>時計<rt>とけい</rt></ruby>です。<br>それは<ruby>辞書<rt>じしょ</rt></ruby>ですか。いいえ、<ruby>手帳<rt>てちょう</rt></ruby>です。<span id=\"L02_01_Q1\">アナさんの</span><ruby>手帳<rt>てちょう</rt></ruby>です。<br>あれは<ruby>誰<rt>だれ</rt></ruby>の<ruby>傘<rt>かさ</rt></ruby>ですか。<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>傘<rt>かさ</rt></ruby>じゃありません。アナさんの<ruby>傘<rt>かさ</rt></ruby>です。<br>これはボールペンです。アナさんのじゃありません。</p>",
    "quizzes": [
      {
        "question": "アナさんの<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>はなんですか。",
        "target_id": "L02_01_Q1",
        "choices": [
          "<ruby>手帳<rt>てちょう</rt></ruby>と<ruby>傘<rt>かさ</rt></ruby>",
          "<ruby>本<rt>ほん</rt></ruby>と<ruby>時計<rt>とけい</rt></ruby>"
        ],
        "answer_index": 0
      }
    ]
  },
  {
    "id": "TEXTBOOK_L02_02",
    "level": 2,
    "title": "<ruby>誰<rt>だれ</rt></ruby>の<ruby>物<rt>もの</rt></ruby>ですか",
    "schema_activation": [
      "<ruby>手帳<rt>てちょう</rt></ruby>やノートはよく<ruby>使<rt>つか</rt></ruby>いますか？",
      "あなたの<ruby>国<rt>くに</rt></ruby>の<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>お土産<rt>みやげ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？"
    ],
    "textbook_html": "<p>ここは<ruby>教室<rt>きょうしつ</rt></ruby>です。これは<ruby>誰<rt>だれ</rt></ruby>のカバンですか。それはジムさんのカバンです。アメリカのカバンです。<br>この<ruby>車<rt>くるま</rt></ruby>のカギもジムさんのですか。はい、そうです。<span id=\"L02_02_Q1\">この<ruby>新聞<rt>しんぶん</rt></ruby>も</span>ジムさんのです。<ruby>英語<rt>えいご</rt></ruby>の<ruby>新聞<rt>しんぶん</rt></ruby>です。<br>その<ruby>手帳<rt>てちょう</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか。キムさんのです。このボールペンもキムさんのです。<br>その<ruby>雑誌<rt>ざっし</rt></ruby>もキムさんのですか。いいえ、ちがいます。<span id=\"L02_02_Q2\"><ruby>韓国語<rt>かんこくご</rt></ruby>の<ruby>雑誌<rt>ざっし</rt></ruby>です。</span>キムさんのじゃありません。パクさんのです。<br>あの<ruby>机<rt>つくえ</rt></ruby>と<ruby>椅子<rt>いす</rt></ruby>は<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>のです。</p>",
    "quizzes": [
      {
        "question": "その<ruby>新聞<rt>しんぶん</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>の<ruby>新聞<rt>しんぶん</rt></ruby>ですか。",
        "target_id": "L02_02_Q1",
        "choices": [
          "ジムさん",
          "キムさん"
        ],
        "answer_index": 0
      },
      {
        "question": "<ruby>韓国語<rt>かんこくご</rt></ruby>の<ruby>雑誌<rt>ざっし</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか。",
        "target_id": "L02_02_Q2",
        "choices": [
          "ジムさん",
          "パクさん",
          "キムさん"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "TEXTBOOK_L02_03",
    "level": 2,
    "title": "お<ruby>土産<rt>みやげ</rt></ruby>と<ruby>名刺<rt>めいし</rt></ruby>",
    "schema_activation": [
      "カメラや<ruby>写真<rt>しゃしん</rt></ruby>は<ruby>好<rt>す</rt></ruby>きですか？",
      "どんなプレゼントが<ruby>嬉<rt>うれ</rt></ruby>しいですか？"
    ],
    "textbook_html": "<p>これは<ruby>何<rt>なん</rt></ruby>ですか。それはカードです。<ruby>名刺<rt>めいし</rt></ruby>ですか。はい、そうです。パクさんの<ruby>名刺<rt>めいし</rt></ruby>です。<span id=\"L02_03_Q1\">パクさんは</span><ruby>町<rt>まち</rt></ruby>の<ruby>病院<rt>びょういん</rt></ruby>の<ruby>医者<rt>いしゃ</rt></ruby>です。<br>これは<ruby>何<rt>なん</rt></ruby>ですか。お<ruby>土産<rt>みやげ</rt></ruby>です。このチョコレートはドイツのチョコレートです。アナさんのプレゼントです。<br>そのチョコレートもドイツの<ruby>物<rt>もの</rt></ruby>ですか。いいえ、<span id=\"L02_03_Q2\">これは</span>ベルギーのチョコレートです。<br>このコーヒーは<ruby>誰<rt>だれ</rt></ruby>のコーヒーですか。キムさんのです。<br>あのCDはジャズのCDです。ジムさんのです。<br>このペンはボールペンですか、シャープペンシルですか。それはボールペンです。<br>あの<ruby>時計<rt>とけい</rt></ruby>はスイスの<ruby>時計<rt>とけい</rt></ruby>です。<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>のです。</p>",
    "quizzes": [
      {
        "question": "パクさんの<ruby>仕事<rt>しごと</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。",
        "target_id": "L02_03_Q1",
        "choices": [
          "<ruby>医者<rt>いしゃ</rt></ruby>",
          "<ruby>先生<rt>せんせい</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "ベルギーの<ruby>物<rt>もの</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。",
        "target_id": "L02_03_Q2",
        "choices": [
          "コーヒー",
          "チョコレート",
          "CD"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "TEXTBOOK_L02_04",
    "level": 2,
    "title": "<ruby>教室<rt>きょうしつ</rt></ruby>の<ruby>物<rt>もの</rt></ruby>の<ruby>確認<rt>かくにん</rt></ruby>",
    "schema_activation": [
      "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>や<ruby>辞書<rt>じしょ</rt></ruby>はありますか？",
      "いつも<ruby>持<rt>も</rt></ruby>ち<ruby>歩<rt>ある</rt></ruby>く<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>物<rt>もの</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか？"
    ],
    "textbook_html": "<p>ここはさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>教室<rt>きょうしつ</rt></ruby>です。<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>はいろいろな<ruby>物<rt>もの</rt></ruby>です。<br>これは<ruby>誰<rt>だれ</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>ですか。<span id=\"L02_04_Q1\"><ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>です。</span>アナさんのです。その<ruby>辞書<rt>じしょ</rt></ruby>もアナさんのですか。いいえ、<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の<ruby>辞書<rt>じしょ</rt></ruby>です。<br>このボールペンは<ruby>誰<rt>だれ</rt></ruby>のですか。それはキムさんのです。このシャープペンシルもキムさんのですか。はい、そうです。<br>あのカバンはジムさんのカバンです。このカギもジムさんのですか。いいえ、<span id=\"L02_04_Q2\">それは</span>パクさんの<ruby>車<rt>くるま</rt></ruby>のカギです。<br>この<ruby>名刺<rt>めいし</rt></ruby>はキムさんのです。ITの<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>です。<br>あの<ruby>傘<rt>かさ</rt></ruby>はアナさんの<ruby>傘<rt>かさ</rt></ruby>です。この<ruby>傘<rt>かさ</rt></ruby>は<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>のです。<br><span id=\"L02_04_Q3\">この<ruby>時計<rt>とけい</rt></ruby>は</span>スイスの<ruby>時計<rt>とけい</rt></ruby>です。その<ruby>時計<rt>とけい</rt></ruby>は<ruby>日本<rt>にほん</rt></ruby>の<ruby>時計<rt>とけい</rt></ruby>です。<br>このコンピュータはキムさんのです。あの<ruby>椅子<rt>いす</rt></ruby>はパクさんのです。みなさんは<ruby>友達<rt>ともだち</rt></ruby>です。</p>",
    "quizzes": [
      {
        "question": "アナさんの<ruby>本<rt>ほん</rt></ruby>は<ruby>何<rt>なん</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>ですか。",
        "target_id": "L02_04_Q1",
        "choices": [
          "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>",
          "ドイツ<ruby>語<rt>ご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "パクさんのカギは<ruby>何<rt>なん</rt></ruby>のカギですか。",
        "target_id": "L02_04_Q2",
        "choices": [
          "<ruby>家<rt>いえ</rt></ruby>のカギ",
          "<ruby>車<rt>くるま</rt></ruby>のカギ",
          "<ruby>病院<rt>びょういん</rt></ruby>のカギ"
        ],
        "answer_index": 1
      },
      {
        "question": "スイスの<ruby>時計<rt>とけい</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>のですか。",
        "target_id": "L02_04_Q3",
        "choices": [
          "アナさん",
          "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>",
          "ジムさん"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "TEXTBOOK_L03_01",
    "level": 3,
    "title": "<ruby>大学<rt>だいがく</rt></ruby>の<ruby>案内<rt>あんない</rt></ruby>",
    "schema_activation": [
      "あなたの<ruby>国<rt>くに</rt></ruby>で<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>はどこですか。",
      "あなたの<ruby>国<rt>くに</rt></ruby>の<ruby>料理<rt>りょうり</rt></ruby>で、<ruby>何<rt>なに</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>人気<rt>にんき</rt></ruby>ですか。"
    ],
    "translation": "<p>This is Sakura University. <br>Yamada: \"Ana-san, this is my classroom.\"<br>Ana: \"Excuse me, where is the cafeteria?\"<br>Yamada: \"The cafeteria is on the second floor. It is over there.\"<br>Ana: \"Is the office also on the second floor?\"<br>Yamada: \"No, the office is on the first floor.\"<br>The reception is on the first floor. The restroom is on the second floor.</p>",
    "textbook_html": "<p><span style=\"display: inline-block;\">ここは さくら<ruby>大学<rt>だいがく</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>「アナさん、ここは <ruby>私<rt>わたし</rt></ruby>の <ruby>教室<rt>きょうしつ</rt></ruby>です」</span><br><span style=\"display: inline-block;\">アナ「すみません、<ruby>食堂<rt>しょくどう</rt></ruby>は どこですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>「<ruby>食堂<rt>しょくどう</rt></ruby>は <ruby>二階<rt>にかい</rt></ruby>です。</span><span style=\"display: inline-block;\">あそこですよ」</span><br><span style=\"display: inline-block;\">アナ「<ruby>事務室<rt>じむしつ</rt></ruby>も <ruby>二階<rt>にかい</rt></ruby>ですか」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>「いいえ、<ruby>事務室<rt>じむしつ</rt></ruby>は <ruby>一階<rt>いっかい</rt></ruby>です」</span><br><span style=\"display: inline-block;\"><ruby>受付<rt>うけつけ</rt></ruby>は <ruby>一階<rt>いっかい</rt></ruby>です。</span><span style=\"display: inline-block;\">お<ruby>手洗<rt>てあら</rt></ruby>いは <ruby>二階<rt>にかい</rt></ruby>です。</span></p>",
    "quizzes": [
      {
        "question": "<ruby>食堂<rt>しょくどう</rt></ruby>はどこですか。",
        "target_id": "L03_01_Q1",
        "choices": [
          "<ruby>一階<rt>いっかい</rt></ruby>",
          "<ruby>二階<rt>にかい</rt></ruby>"
        ],
        "answer_index": 1
      }
    ],
    "audio_file": "/audio/L03_01.mp3"
  },
  {
    "id": "TEXTBOOK_L03_02",
    "level": 3,
    "title": "<ruby>国<rt>くに</rt></ruby>と<ruby>会社<rt>かいしゃ</rt></ruby>",
    "schema_activation": [
      "あなたの<ruby>国<rt>くに</rt></ruby>で<ruby>一番<rt>いちばん</rt></ruby><ruby>人気<rt>にんき</rt></ruby>のスポーツは<ruby>何<rt>なん</rt></ruby>ですか。",
      "あなたのスマホは、どこの<ruby>国<rt>くに</rt></ruby>のメーカーですか。"
    ],
    "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby>「お<ruby>国<rt>くに</rt></ruby>は どちらですか」<br>ジム「アメリカです」<br>ジムさんは アメリカの <ruby>銀行<rt>ぎんこう</rt></ruby>の <ruby>会社員<rt>かいしゃいん</rt></ruby>です。<br><ruby>山田<rt>やまだ</rt></ruby>「キムさん、<ruby>会社<rt>かいしゃ</rt></ruby>は どちらですか」<br>キム「さくらITです。<span id=\"L03_02_Q2\"><ruby>東京<rt>とうきょう</rt></ruby>の <ruby>会社<rt>かいしゃ</rt></ruby>です」</span><br>パクさんは <ruby>病院<rt>びょういん</rt></ruby>の <ruby>医者<rt>いしゃ</rt></ruby>です。<span id=\"L03_02_Q1\"><ruby>病院<rt>びょういん</rt></ruby>は <ruby>神戸<rt>こうべ</rt></ruby>です。</span><br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の <ruby>大学<rt>だいがく</rt></ruby>は <ruby>奈良<rt>なら</rt></ruby>です。<br>みなさんの <ruby>国<rt>くに</rt></ruby>は アメリカ、<ruby>韓国<rt>かんこく</rt></ruby>、ドイツです。ここは <ruby>国際<rt>こくさい</rt></ruby><ruby>教室<rt>きょうしつ</rt></ruby>です。</p>",
    "quizzes": [
      {
        "question": "パクさんの<ruby>病院<rt>びょういん</rt></ruby>はどこですか。",
        "target_id": "L03_02_Q1",
        "choices": [
          "<ruby>神戸<rt>こうべ</rt></ruby>",
          "<ruby>奈良<rt>なら</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "キムさんの<ruby>会社<rt>かいしゃ</rt></ruby>はどこですか。",
        "target_id": "L03_02_Q2",
        "choices": [
          "アメリカ",
          "<ruby>東京<rt>とうきょう</rt></ruby>",
          "<ruby>神戸<rt>こうべ</rt></ruby>"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "TEXTBOOK_L03_03",
    "level": 3,
    "title": "デパートで <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>",
    "schema_activation": [
      "あなたの <ruby>国<rt>くに</rt></ruby>で <ruby>一番<rt>いちばん</rt></ruby> <ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。",
      "あなたの <ruby>国<rt>くに</rt></ruby>の コーヒーは いくらですか。"
    ],
    "translation": "<p>Clerk: \"Welcome!\"<br>Ana: \"Excuse me, where is the shoe department?\"<br>Clerk: \"It is on the first floor. The escalator is over there.\"<br>Ana: \"How much is this tie?\"<br>Clerk: \"It is 3,500 yen. It is from France.\"<br>Ana: \"How much is that watch?\"<br>Clerk: \"It is 12,000 yen. It is a Japanese watch.\"<br>Ana: \"Which country is that wine from?\"<br>Clerk: \"It is from Chile. It is 2,800 yen.\"<br>The office is in the basement.</p>",
    "textbook_html": "<p><ruby>店員<rt>てんいん</rt></ruby>「いらっしゃいませ」<br>アナ「すみません、<ruby>靴<rt>くつ</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>は どこですか」<br><span id=\"L03_03_Q1\"><ruby>店員<rt>てんいん</rt></ruby>「<ruby>一階<rt>いっかい</rt></ruby>です。</span>エスカレーターは あちらです」<br>アナ「このネクタイは いくらですか」<br><ruby>店員<rt>てんいん</rt></ruby>「3,500<ruby>円<rt>えん</rt></ruby>です。フランスの <ruby>物<rt>もの</rt></ruby>です」<br>アナ「その<ruby>時計<rt>とけい</rt></ruby>は いくらですか」<br><ruby>店員<rt>てんいん</rt></ruby>「12,000<ruby>円<rt>えん</rt></ruby>です。<ruby>日本<rt>にほん</rt></ruby>の <ruby>時計<rt>とけい</rt></ruby>です」<br>アナ「あのワインは どちらの <ruby>国<rt>くに</rt></ruby>の ですか」<br><ruby>店員<rt>てんいん</rt></ruby>「チリの です。<span id=\"L03_03_Q2\">2,800<ruby>円<rt>えん</rt></ruby>です」</span><br><ruby>事務所<rt>じむしょ</rt></ruby>は <ruby>地下<rt>ちか</rt></ruby>です。</p>",
    "quizzes": [
      {
        "question": "<ruby>靴<rt>くつ</rt></ruby><ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>は どこですか。",
        "target_id": "L03_03_Q1",
        "choices": [
          "<ruby>一階<rt>いっかい</rt></ruby>",
          "<ruby>地下<rt>ちか</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "チリの ワインは いくらですか。",
        "target_id": "L03_03_Q2",
        "choices": [
          "3,500<ruby>円<rt>えん</rt></ruby>",
          "2,800<ruby>円<rt>えん</rt></ruby>",
          "12,000<ruby>円<rt>えん</rt></ruby>"
        ],
        "answer_index": 1
      }
    ],
    "audio_file": "/audio/L03_03.mp3"
  },
  {
    "id": "TEXTBOOK_L03_04",
    "level": 3,
    "title": "<ruby>案内<rt>あんない</rt></ruby>",
    "schema_activation": [
      "あなたのカバンはどこの<ruby>国<rt>くに</rt></ruby>のメーカーですか。",
      "あなたの<ruby>家<rt>うち</rt></ruby>のパソコンはいくらですか。"
    ],
    "textbook_html": "<p>ここはさくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>事務所<rt>じむしょ</rt></ruby>です。<br>「<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はどこですか」<span id=\"L03_04_Q1\">「<ruby>会議室<rt>かいぎしつ</rt></ruby>です。あちらです」</span><br>「<ruby>電話<rt>でんわ</rt></ruby>はどこですか」「<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>です」<br>アナさんは<ruby>今<rt>いま</rt></ruby>どこですか。<span id=\"L03_04_Q3\"><ruby>食堂<rt>しょくどう</rt></ruby>です。<ruby>地下<rt>ちか</rt></ruby>です。</span><br>「このカバンはどちらの<ruby>国<rt>くに</rt></ruby>のですか」<br>「<ruby>韓国<rt>かんこく</rt></ruby>のです。8,900<ruby>円<rt>えん</rt></ruby>です」<br>「あのカメラはいくらですか」<br><span id=\"L03_04_Q2\">「54,000<ruby>円<rt>えん</rt></ruby>です。<ruby>日本<rt>にほん</rt></ruby>のです」</span><br>この<ruby>大学<rt>だいがく</rt></ruby>のトイレは<ruby>一階<rt>いっかい</rt></ruby>と<ruby>二階<rt>にかい</rt></ruby>です。<ruby>階段<rt>かいだん</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>です。<ruby>受付<rt>うけつけ</rt></ruby>はロビーです。<ruby>自動販売機<rt>じどうはんばいき</rt></ruby>はあそこです。ここはとても<ruby>広<rt>ひろ</rt></ruby>い<ruby>大学<rt>だいがく</rt></ruby>です。みなさんの<ruby>教室<rt>きょうしつ</rt></ruby>は<ruby>二階<rt>にかい</rt></ruby>です。</p>",
    "quizzes": [
      {
        "question": "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>はどこですか。",
        "target_id": "L03_04_Q1",
        "choices": [
          "<ruby>食堂<rt>しょくどう</rt></ruby>",
          "<ruby>会議室<rt>かいぎしつ</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "<ruby>日本<rt>にほん</rt></ruby>のカメラはいくらですか。",
        "target_id": "L03_04_Q2",
        "choices": [
          "8,900<ruby>円<rt>えん</rt></ruby>",
          "54,000<ruby>円<rt>えん</rt></ruby>",
          "12,000<ruby>円<rt>えん</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "<ruby>食堂<rt>しょくどう</rt></ruby>はどこですか。",
        "target_id": "L03_04_Q3",
        "choices": [
          "<ruby>一階<rt>いっかい</rt></ruby>",
          "<ruby>二階<rt>にかい</rt></ruby>",
          "<ruby>地下<rt>ちか</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "TEXTBOOK_L04_01",
    "level": 4,
    "title": "朝の<ruby>時間<rt>じかん</rt></ruby>",
    "schema_activation": [
      "<ruby>毎朝<rt>まいあさ</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。",
      "<ruby>今朝<rt>けさ</rt></ruby>、パンを<ruby>食<rt>た</rt></ruby>べましたか。"
    ],
    "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>毎日<rt>まいにち</rt></ruby>、6<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。<br><ruby>山田<rt>やまだ</rt></ruby>「アナさん、<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか」<br>アナ「7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます」<br><span id=\"L04_01_Q1\">アナさんは</span>7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。それからさくら<ruby>大学<rt>だいがく</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。</p>",
    "quizzes": [
      {
        "question": "アナさんは<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。",
        "target_id": "L04_01_Q1",
        "choices": [
          "6<ruby>時<rt>じ</rt></ruby>",
          "7<ruby>時<rt>じ</rt></ruby>"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "TEXTBOOK_L04_02",
    "level": 4,
    "title": "<ruby>図書館<rt>としょかん</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>までですか",
    "schema_activation": [
      "あなたの<ruby>町<rt>まち</rt></ruby>の<ruby>図書館<rt>としょかん</rt></ruby>は、<ruby>何時<rt>なんじ</rt></ruby>までですか。",
      "<ruby>今日<rt>きょう</rt></ruby>、<ruby>何時間<rt>なんじかん</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>しますか。"
    ],
    "textbook_html": "<p>さくら<ruby>大学<rt>だいがく</rt></ruby>の<ruby>図書館<rt>としょかん</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>は9<ruby>時<rt>じ</rt></ruby>から5<ruby>時<rt>じ</rt></ruby>までです。<br>アナ「すみません、<ruby>図書館<rt>としょかん</rt></ruby>は<ruby>土曜日<rt>どようび</rt></ruby>も<ruby>休<rt>やす</rt></ruby>みですか」<br><ruby>山田<rt>やまだ</rt></ruby>「いいえ、<span id=\"L04_02_Q1\"><ruby>休<rt>やす</rt></ruby>みは</span><ruby>月曜日<rt>げつようび</rt></ruby>です」<br>アナさんは<ruby>昨日<rt>きのう</rt></ruby>、<ruby>図書館<rt>としょかん</rt></ruby>で<span id=\"L04_02_Q2\">3<ruby>時間<rt>じかん</rt></ruby></span><ruby>勉強<rt>べんきょう</rt></ruby>しました。12<ruby>時<rt>じ</rt></ruby>に<ruby>終<rt>お</rt></ruby>わりました。<ruby>今日<rt>きょう</rt></ruby>も9<ruby>時<rt>じ</rt></ruby>から<ruby>勉強<rt>べんきょう</rt></ruby>します。</p>",
    "quizzes": [
      {
        "question": "<ruby>図書館<rt>としょかん</rt></ruby>の<ruby>休<rt>やす</rt></ruby>みは<ruby>何曜日<rt>なんようび</rt></ruby>ですか。",
        "target_id": "L04_02_Q1",
        "choices": [
          "<ruby>月曜日<rt>げつようび</rt></ruby>",
          "<ruby>土曜日<rt>どようび</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "アナさんは<ruby>昨日<rt>きのう</rt></ruby>、<ruby>何時間<rt>なんじかん</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>しましたか。",
        "target_id": "L04_02_Q2",
        "choices": [
          "12<ruby>時間<rt>じかん</rt></ruby>",
          "9<ruby>時間<rt>じかん</rt></ruby>",
          "3<ruby>時間<rt>じかん</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "TEXTBOOK_L04_03",
    "level": 4,
    "title": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>の<ruby>時間<rt>じかん</rt></ruby>",
    "schema_activation": [
      "あなたの<ruby>国<rt>くに</rt></ruby>の<ruby>銀行<rt>ぎんこう</rt></ruby>は、<ruby>土曜日<rt>どようび</rt></ruby>に<ruby>休<rt>やす</rt></ruby>みますか。",
      "あなたは<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きますか。"
    ],
    "textbook_html": "<p>ジムさんは<ruby>今<rt>いま</rt></ruby>、<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>にいます。<br>ジム「すみません、<span id=\"L04_03_Q1\"><ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は</span>9<ruby>時<rt>じ</rt></ruby>からですか」<br><ruby>店員<rt>てんいん</rt></ruby>「はい、9<ruby>時<rt>じ</rt></ruby>から5<ruby>時<rt>じ</rt></ruby>までです」<br>ジムさんは<ruby>昨日<rt>きのう</rt></ruby>、<span id=\"L04_03_Q2\"><ruby>銀行<rt>ぎんこう</rt></ruby>で</span><ruby>働<rt>はたら</rt></ruby>きました。9<ruby>時<rt>じ</rt></ruby>から5<ruby>時<rt>じ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きました。<ruby>今日<rt>きょう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みです。<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>は<ruby>銀行<rt>ぎんこう</rt></ruby>です。<ruby>銀行<rt>ぎんこう</rt></ruby>は<ruby>土曜日<rt>どようび</rt></ruby>と<ruby>日曜日<rt>にちようび</rt></ruby>に<ruby>休<rt>やす</rt></ruby>みます。</p>",
    "quizzes": [
      {
        "question": "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>からですか。",
        "target_id": "L04_03_Q1",
        "choices": [
          "9<ruby>時<rt>じ</rt></ruby>",
          "5<ruby>時<rt>じ</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "ジムさんは<ruby>昨日<rt>きのう</rt></ruby>、どこで<ruby>働<rt>はたら</rt></ruby>きましたか。",
        "target_id": "L04_03_Q2",
        "choices": [
          "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>",
          "<ruby>銀行<rt>ぎんこう</rt></ruby>",
          "<ruby>学校<rt>がっこう</rt></ruby>"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "TEXTBOOK_L04_04",
    "level": 4,
    "title": "アナさんの<ruby>一日<rt>いちにち</rt></ruby>",
    "schema_activation": [
      "あなたは<ruby>昨日<rt>きのう</rt></ruby>、<ruby>勉強<rt>べんきょう</rt></ruby>しましたか。<ruby>何時間<rt>なんじかん</rt></ruby>しましたか。",
      "<ruby>明日<rt>あした</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。"
    ],
    "textbook_html": "<p>アナさんは<ruby>毎朝<rt>まいあさ</rt></ruby>7<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。さくら<ruby>大学<rt>だいがく</rt></ruby>の<span id=\"L04_04_Q1\"><ruby>授業<rt>じゅぎょう</rt></ruby>は</span>9<ruby>時<rt>じ</rt></ruby>から4<ruby>時<rt>じ</rt></ruby>までです。<br>アナ「<ruby>山田<rt>やまだ</rt></ruby>さん、<ruby>昨日<rt>きのう</rt></ruby>の<ruby>晩<rt>ばん</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きましたか」<br><span id=\"L04_04_Q2\"><ruby>山田<rt>やまだ</rt></ruby>「8<ruby>時<rt>じ</rt></ruby>まで</span><ruby>働<rt>はたら</rt></ruby>きました。とても<ruby>疲<rt>つか</rt></ruby>れました」<br><ruby>山田<rt>やまだ</rt></ruby>さんは8<ruby>時<rt>じ</rt></ruby>に<ruby>終<rt>お</rt></ruby>わりました。アナさんは<ruby>昨日<rt>きのう</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>10<ruby>時<rt>じ</rt></ruby>から12<ruby>時<rt>じ</rt></ruby>まで<ruby>勉強<rt>べんきょう</rt></ruby>しました。<ruby>今日<rt>きょう</rt></ruby>は<ruby>金曜日<rt>きんようび</rt></ruby>です。<ruby>明日<rt>あした</rt></ruby>は<ruby>土曜日<rt>どようび</rt></ruby>です。<ruby>大学<rt>だいがく</rt></ruby>は<ruby>休<rt>やす</rt></ruby>みです。<span id=\"L04_04_Q3\">アナさんは</span>10<ruby>時<rt>じ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。<ruby>山田<rt>やまだ</rt></ruby>さんも<ruby>明日<rt>あした</rt></ruby>は<ruby>働<rt>はたら</rt></ruby>きません。</p>",
    "quizzes": [
      {
        "question": "アナさんの<ruby>授業<rt>じゅぎょう</rt></ruby>は<ruby>何時<rt>なんじ</rt></ruby>からですか。",
        "target_id": "L04_04_Q1",
        "choices": [
          "9<ruby>時<rt>じ</rt></ruby>",
          "4<ruby>時<rt>じ</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>昨日<rt>きのう</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きましたか。",
        "target_id": "L04_04_Q2",
        "choices": [
          "7<ruby>時<rt>じ</rt></ruby>",
          "8<ruby>時<rt>じ</rt></ruby>",
          "10<ruby>時<rt>じ</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "<ruby>土曜日<rt>どようび</rt></ruby>、アナさんは<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きますか。",
        "target_id": "L04_04_Q3",
        "choices": [
          "7<ruby>時<rt>じ</rt></ruby>",
          "12<ruby>時<rt>じ</rt></ruby>",
          "10<ruby>時<rt>じ</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "TEXTBOOK_L05_01",
    "level": 5,
    "title": "<ruby>駅<rt>えき</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます",
    "schema_activation": [
      "あなたは <ruby>明日<rt>あした</rt></ruby>、どこへ <ruby>行<rt>い</rt></ruby>きますか。",
      "<ruby>昨日<rt>きのう</rt></ruby>、どこかへ <ruby>行<rt>い</rt></ruby>きましたか。"
    ],
    "translation": "<p>This is Sakura Station. Yamada-san is at the station now.<br>Ana: \"Yamada-san, where are you going?\"<br>Yamada: \"I am going to Nagoya.\"<br>Ana: \"I see. I am going home now.\"<br>Ana went to Osaka yesterday. Today she is going back to her house.</p>",
    "textbook_html": "<p><span style=\"display: inline-block;\">ここは さくら<ruby>駅<rt>えき</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>今<rt>いま</rt></ruby> <ruby>駅<rt>えき</rt></ruby>に います。</span><br><span style=\"display: inline-block;\">アナ「<ruby>山田<rt>やまだ</rt></ruby>さん、どこへ <ruby>行<rt>い</rt></ruby>きますか」</span><br><span id=\"L05_01_Q1\" style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>「<ruby>名古屋<rt>なごや</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます」</span><br><span style=\"display: inline-block;\">アナ「そうですか。</span><span style=\"display: inline-block;\"><ruby>私<rt>わたし</rt></ruby>は <ruby>今<rt>いま</rt></ruby>から <ruby>家<rt>うち</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>ります」</span><br><span style=\"display: inline-block;\">アナさんは <ruby>昨日<rt>きのう</rt></ruby> <ruby>大阪<rt>おおさか</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。</span><span style=\"display: inline-block;\"><ruby>今日<rt>きょう</rt></ruby>は <ruby>家<rt>うち</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>ります。</span></p>",
    "quizzes": [
      {
        "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは どこへ <ruby>行<rt>い</rt></ruby>きますか。",
        "target_id": "L05_01_Q1",
        "choices": [
          "<ruby>大阪<rt>おおさか</rt></ruby>",
          "<ruby>名古屋<rt>なごや</rt></ruby>"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "TEXTBOOK_L05_02",
    "level": 5,
    "title": "<ruby>東京<rt>とうきょう</rt></ruby>への <ruby>旅行<rt>りょこう</rt></ruby>",
    "schema_activation": [
      "<ruby>旅行<rt>りょこう</rt></ruby>の <ruby>時<rt>とき</rt></ruby>、<ruby>何<rt>なん</rt></ruby>で <ruby>行<rt>い</rt></ruby>くのが <ruby>一番<rt>いちばん</rt></ruby> <ruby>好<rt>す</rt></ruby>きですか。",
      "あなたは <ruby>一人<rt>ひとり</rt></ruby>で <ruby>旅行<rt>りょこう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。それとも <ruby>家族<rt>かぞく</rt></ruby>や <ruby>友達<rt>ともだち</rt></ruby>と <ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "translation": "<p>Jim is going to Tokyo tomorrow.<br>Yamada: \"Jim-san, how will you go?\"<br>Jim: \"I will go by Shinkansen.\"<br>Yamada: \"Who will you go with?\"<br>Jim: \"I will go alone.\"<br>Jim came from America. He came by plane. He came in September of last year. He is a very busy person.</p>",
    "textbook_html": "<p><span style=\"display: inline-block;\">ジムさんは <ruby>明日<rt>あした</rt></ruby> <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>「ジムさん、<ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか」</span><br><span id=\"L05_02_Q1\" style=\"display: inline-block;\">ジム「<ruby>新幹線<rt>しんかんせん</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます」</span><br><span style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby>「<ruby>誰<rt>だれ</rt></ruby>と <ruby>行<rt>い</rt></ruby>きますか」</span><br><span style=\"display: inline-block;\">ジム「<ruby>一人<rt>ひとり</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます」</span><br><span style=\"display: inline-block;\">ジムさんは アメリカから <ruby>来<rt>き</rt></ruby>ました。</span><span style=\"display: inline-block;\"><ruby>飛行機<rt>ひこうき</rt></ruby>で <ruby>来<rt>き</rt></ruby>ました。</span><span id=\"L05_02_Q2\" style=\"display: inline-block;\"><ruby>去年<rt>きょねん</rt></ruby>の <ruby>九月<rt>くがつ</rt></ruby>に <ruby>来<rt>き</rt></ruby>ました。</span><span style=\"display: inline-block;\">とても <ruby>忙<rt>いそが</rt></ruby>しい <ruby>人<rt>ひと</rt></ruby>です。</span></p>",
    "quizzes": [
      {
        "question": "ジムさんは <ruby>何<rt>なに</rt></ruby>で <ruby>東京<rt>とうきょう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。",
        "target_id": "L05_02_Q1",
        "choices": [
          "<ruby>新幹線<rt>しんかんせん</rt></ruby>",
          "<ruby>飛行機<rt>ひこうき</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "ジムさんは いつ <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ましたか。",
        "target_id": "L05_02_Q2",
        "choices": [
          "<ruby>明日<rt>あした</rt></ruby>",
          "9<ruby>月<rt>がつ</rt></ruby>",
          "<ruby>去年<rt>きょねん</rt></ruby>の 9<ruby>月<rt>がつ</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "TEXTBOOK_L05_03",
    "level": 5,
    "title": "<ruby>九州<rt>きゅうしゅう</rt></ruby>から <ruby>来<rt>き</rt></ruby>ました",
    "schema_activation": [
      "あなたの<ruby>国<rt>くに</rt></ruby>の <ruby>長<rt>なが</rt></ruby>い<ruby>休<rt>やす</rt></ruby>み（お<ruby>正月<rt>しょうがつ</rt></ruby>や お<ruby>祭<rt>まつ</rt></ruby>りなど）は いつですか。",
      "あなたの<ruby>町<rt>まち</rt></ruby>から <ruby>空港<rt>くうこう</rt></ruby>まで、<ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "translation": "<p>Kim is Korean. He came to Japan last year.<br>Ana: \"Kim-san, where did you go yesterday?\"<br>Kim: \"I went to Kyushu. I went with my family.\"<br>They went by plane. Kim came back from Kyushu today. He returned by taxi at night. Kyushu was very beautiful.</p>",
    "textbook_html": "<p><span style=\"display: inline-block;\">キムさんは <ruby>韓国人<rt>かんこくじん</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>去年<rt>きょねん</rt></ruby> <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ました。</span><br><span style=\"display: inline-block;\">アナ「キムさん、<ruby>昨日<rt>きのう</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きましたか」</span><br><span id=\"L05_03_Q1\" style=\"display: inline-block;\">キム「<ruby>九州<rt>きゅうしゅう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。</span><span style=\"display: inline-block;\"><ruby>家族<rt>かぞく</rt></ruby>と <ruby>行<rt>い</rt></ruby>きました」</span><br><span style=\"display: inline-block;\"><ruby>飛行機<rt>ひこうき</rt></ruby>で <ruby>行<rt>い</rt></ruby>きました。</span><br><span style=\"display: inline-block;\">キムさんは <ruby>今日<rt>きょう</rt></ruby> <ruby>九州<rt>きゅうしゅう</rt></ruby>から <ruby>帰<rt>かえ</rt></ruby>りました。</span><span id=\"L05_03_Q2\" style=\"display: inline-block;\"><ruby>夜<rt>よる</rt></ruby>、タクシーで <ruby>帰<rt>かえ</rt></ruby>りました。</span><br><span style=\"display: inline-block;\"><ruby>九州<rt>きゅうしゅう</rt></ruby>は とても <ruby>綺麗<rt>きれい</rt></ruby>でした。</span></p>",
    "quizzes": [
      {
        "question": "キムさんは <ruby>昨日<rt>きのう</rt></ruby>、どこへ <ruby>行<rt>い</rt></ruby>きましたか。",
        "target_id": "L05_03_Q1",
        "choices": [
          "<ruby>九州<rt>きゅうしゅう</rt></ruby>",
          "<ruby>韓国<rt>かんこく</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "キムさんは <ruby>何<rt>なに</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>りましたか。",
        "target_id": "L05_03_Q2",
        "choices": [
          "<ruby>電車<rt>でんしゃ</rt></ruby>",
          "タクシー",
          "新幹線"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "TEXTBOOK_L05_04",
    "level": 5,
    "title": "<ruby>京都<rt>きょうと</rt></ruby>の <ruby>旅行<rt>りょこう</rt></ruby>",
    "schema_activation": [
      "あなたの <ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。",
      "<ruby>週末<rt>しゅうまつ</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と どこかへ <ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "translation": "<p>Ana is going to Kyoto next Wednesday. <br>Yamada: \"Ana-san, who are you going with?\"<br>Ana: \"I am going with my friend Pak-san.\"<br>Yamada: \"How will you go?\"<br>Ana: \"We will go by train.\"<br>Ana's birthday is October 15th. This trip to Kyoto is a present. The two of them will return on Thursday. Next Sunday, she will not go anywhere. She will rest at home. Kyoto is a very famous town.</p>",
    "textbook_html": "<p>アナさんは <ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>水曜日<rt>すいようび</rt></ruby>に <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<br><ruby>山田<rt>やまだ</rt></ruby>「アナさん、<ruby>誰<rt>だれ</rt></ruby>と <ruby>行<rt>い</rt></ruby>きますか」<br><span id=\"L05_04_Q1\">アナ「<ruby>友達<rt>ともだち</rt></ruby>の パクさんと <ruby>行<rt>い</rt></ruby>きます」</span><br><ruby>山田<rt>やまだ</rt></ruby>「<ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか」<br><span id=\"L05_04_Q2\">アナ「<ruby>電車<rt>でんしゃ</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます」</span><br>アナさんの <ruby>誕生日<rt>たんじょうび</rt></ruby>は 10<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>です。<ruby>京都<rt>きょうと</rt></ruby>の <ruby>旅行<rt>りょこう</rt></ruby>は プレゼントです。<ruby>二人<rt>ふたり</rt></ruby>は <ruby>木曜日<rt>もくようび</rt></ruby>に <ruby>帰<rt>かえ</rt></ruby>ります。<span id=\"L05_04_Q3\"><ruby>次<rt>つぎ</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>は どこへも <ruby>行<rt>い</rt></ruby>きません。</span><ruby>家<rt>うち</rt></ruby>で <ruby>休<rt>やす</rt></ruby>みます。<ruby>京都<rt>きょうと</rt></ruby>は とても <ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>町<rt>まち</rt></ruby>です。</p>",
    "quizzes": [
      {
        "question": "アナさんは いつ <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。",
        "choices": [
          "<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>水曜日<rt>すいようび</rt></ruby>",
          "<ruby>木曜日<rt>もくようび</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "アナさんは <ruby>誰<rt>だれ</rt></ruby>と <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。",
        "choices": [
          "<ruby>山田<rt>やまだ</rt></ruby>さん",
          "パクさん",
          "<ruby>一人<rt>ひとり</rt></ruby>で"
        ],
        "answer_index": 1
      },
      {
        "question": "アナさんの <ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。",
        "choices": [
          "10<ruby>月<rt>がつ</rt></ruby> 1<ruby>日<rt>ついたち</rt></ruby>",
          "10<ruby>月<rt>がつ</rt></ruby> 10<ruby>日<rt>にち</rt></ruby>",
          "10<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "TEXTBOOK_L06_01",
    "level": 6,
    "title": "<ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べます",
    "schema_activation": [
      "あなたの <ruby>国<rt>くに</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>で、<ruby>何<rt>なに</rt></ruby>が <ruby>一番<rt>いちばん</rt></ruby> <ruby>人気<rt>にんき</rt></ruby>ですか。",
      "<ruby>毎日<rt>まいにち</rt></ruby>、コーヒーを <ruby>飲<rt>の</rt></ruby>みますか。"
    ],
    "translation": "<p>Ana is at the cafeteria now.<br>Ana: \"I will eat fish and rice.\"<br>Yamada ate bread. He drank coffee.<br>Ana: \"Yamada-san, do you drink tea?\"<br>Yamada: \"No, I don't drink tea. I drink water.\"<br>They eat lunch at the cafeteria every day.</p>",
    "textbook_html": "<p><span>アナさんは <ruby>今<rt>いま</rt></ruby> <ruby>食堂<rt>しょくどう</rt></ruby>に います。</span><span id=\"L06_01_Q1\">アナ「<ruby>魚<rt>さかな</rt></ruby>と ごはんを <ruby>食<rt>た</rt></ruby>べます」</span><span><ruby>山田<rt>やまだ</rt></ruby>さんは パンを <ruby>食<rt>た</rt></ruby>べました。</span><span>コーヒーを <ruby>飲<rt>の</rt></ruby>みました。</span><span>アナ「<ruby>山田<rt>やまだ</rt></ruby>さん、お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みますか」</span><span><ruby>山田<rt>やまだ</rt></ruby>「いいえ、お<ruby>茶<rt>ちゃ</rt></ruby>は <ruby>飲<rt>の</rt></ruby>みません。</span><span><ruby>水<rt>みず</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みます」</span><span><ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>は <ruby>毎日<rt>まいにち</rt></ruby> <ruby>食堂<rt>しょくどう</rt></ruby>で <ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べます。</span></p>",
    "quizzes": [
      {
        "question": "アナさんは <ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べますか。",
        "target_id": "L06_01_Q1",
        "choices": [
          "<ruby>魚<rt>さかな</rt></ruby>と ごはん",
          "パンと コーヒー"
        ],
        "answer_index": 0
      }
    ],
    "audio_file": "/audio/L06_01.mp3"
  },
  {
    "id": "TEXTBOOK_L06_02",
    "level": 6,
    "title": "デパートで <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>",
    "schema_activation": [
      "あなたは どこで <ruby>服<rt>ふく</rt></ruby>を <ruby>買<rt>か</rt></ruby>いますか。",
      "<ruby>晩<rt>ばん</rt></ruby>ごはんの <ruby>前<rt>まえ</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みますか。"
    ],
    "translation": "<p>Jim bought a new bag at a large department store in town yesterday. It's a blue bag and a black bag.<br>Clerk: \"How about this white shirt too? It's very cheap.\"<br>Jim: \"No, I won't buy a shirt today. I'll just buy the bags.\"<br>Then, Jim went to the basement by elevator. He bought a lot of delicious alcohol and sweet fruits at the basement shop. Tomorrow, he will drink that alcohol with his friends in his garden. Since tomorrow is Sunday, he is looking forward to it.</p>",
    "textbook_html": "<p><span id=\"L06_02_Q1\">ジムさんは <ruby>昨日<rt>きのう</rt></ruby>、<ruby>町<rt>まち</rt></ruby>にある <ruby>大<rt>おお</rt></ruby>きな デパートで <ruby>新<rt>あたら</rt></ruby>しい カバンを <ruby>買<rt>か</rt></ruby>いました。</span><ruby>青<rt>あお</rt></ruby>い カバンと <ruby>黒<rt>くろ</rt></ruby>い カバンです。<ruby>店員<rt>てんいん</rt></ruby>「こちらの <ruby>白<rt>しろ</rt></ruby>い シャツも いかがですか。とても <ruby>安<rt>やす</rt></ruby>いですよ」ジム「いいえ、<ruby>今日<rt>きょう</rt></ruby>は シャツは <ruby>買<rt>か</rt></ruby>いません。カバンだけ <ruby>買<rt>か</rt></ruby>みます」それから、ジムさんは エレベーターで <ruby>地下<rt>ちか</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<span id=\"L06_02_Q2\"><ruby>地下<rt>ちか</rt></ruby>の <ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>で おいしい お<ruby>酒<rt>さけ</rt></ruby>と <ruby>甘<rt>あま</rt></ruby>い <ruby>果物<rt>くだもの</rt></ruby>を たくさん <ruby>買<rt>か</rt></ruby>いました。</span><ruby>明日<rt>あした</rt></ruby>、<ruby>自宅<rt>じたく</rt></ruby>の <ruby>庭<rt>にわ</rt></ruby>で <ruby>友達<rt>ともだち</rt></ruby>と <ruby>一緒<rt>いっしょ</rt></ruby>に その お<ruby>酒<rt>さけ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みます。<ruby>明日<rt>あした</rt></ruby>は <ruby>日曜日<rt>にちようび</rt></ruby>ですから、とても <ruby>楽<rt>たの</rt></ruby>しみです。</p>",
    "quizzes": [
      {
        "question": "ジムさんは どこで カバンを <ruby>買<rt>か</rt></ruby>いましたか。",
        "target_id": "L06_02_Q1",
        "choices": [
          "デパート",
          "<ruby>庭<rt>にわ</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "ジムさんは <ruby>地下<rt>ちか</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を <ruby>買<rt>か</rt></ruby>いましたか。",
        "target_id": "L06_02_Q2",
        "choices": [
          "シャツ",
          "お<ruby>酒<rt>さけ</rt></ruby>と <ruby>果物<rt>くだもの</rt></ruby>",
          "カバン"
        ],
        "answer_index": 1
      }
    ],
    "audio_file": "/audio/L06_02.mp3"
  },
  {
    "id": "TEXTBOOK_L06_03",
    "level": 6,
    "title": "いっしょに <ruby>食<rt>た</rt></ruby>べませんか",
    "schema_activation": [
      "あなたは どこで <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しますか。",
      "<ruby>肉<rt>にく</rt></ruby>と<ruby>魚<rt>さかな</rt></ruby>どちらが<ruby>好<rt>す</rt></ruby>きですか。"
    ],
    "translation": "<p>Pak works as a doctor at a large hospital nearby every day.<br>Pak: \"Kim-san, won't you eat dinner together near the station today?\"<br>Kim: \"That sounds good. Let's eat. What shall we eat?\"<br>Pak: \"Let's eat fish. That shop over there is very delicious.\"<br>The two of them ate fish at a shop near the station. They also drank a lot of cold beer. Kim bought today's newspaper at the station on his way home. Then, he read the newspaper slowly inside the night train.</p>",
    "textbook_html": "<p>パクさんは <ruby>毎日<rt>まいにち</rt></ruby>、<ruby>近<rt>ちか</rt></ruby>くの <ruby>大<rt>おお</rt></ruby>きな <ruby>病院<rt>びょういん</rt></ruby>で <ruby>医者<rt>いしゃ</rt></ruby>として <ruby>働<rt>はたら</rt></ruby>きます。パク「キムさん、<ruby>今日<rt>きょう</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>ごはんを <ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くで <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>食<rt>た</rt></ruby>べませんか」キム「いいですね。<ruby>食<rt>た</rt></ruby>べましょう。<ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べますか」パク「<ruby>魚<rt>さかな</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましょう。あそこの お<ruby>店<rt>みせ</rt></ruby>は とても おいしいですよ」<span id=\"L06_03_Q1\"><ruby>二人<rt>ふたり</rt></ruby>は <ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くの <ruby>店<rt>みせ</rt></ruby>で <ruby>魚<rt>さかな</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました。</span><ruby>冷<rt>つめ</rt></ruby>たい ビールも たくさん <ruby>飲<rt>の</rt></ruby>みました。キムさんは <ruby>帰<rt>かえ</rt></ruby>りに <ruby>駅<rt>えき</rt></ruby>で <ruby>今日<rt>きょう</rt></ruby>の <ruby>新聞<rt>しんぶん</rt></ruby>を <ruby>買<rt>か</rt></ruby>いました。<span id=\"L06_03_Q2\">それから、<ruby>夜<rt>よる</rt></ruby>の <ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>で ゆっくり <ruby>新聞<rt>しんぶん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みました。</span></p>",
    "quizzes": [
      {
        "question": "<ruby>二人<rt>ふたり</rt></ruby>は どこで <ruby>魚<rt>さかな</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。",
        "target_id": "L06_03_Q1",
        "choices": [
          "<ruby>病院<rt>びょういん</rt></ruby>",
          "<ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>く"
        ],
        "answer_index": 1
      },
      {
        "question": "キムさんは どこで <ruby>新聞<rt>しんぶん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みましたか。",
        "target_id": "L06_03_Q2",
        "choices": [
          "<ruby>病院<rt>びょういん</rt></ruby>",
          "<ruby>電車<rt>でんしゃ</rt></ruby>",
          "<ruby>駅<rt>えき</rt></ruby>"
        ],
        "answer_index": 1
      }
    ],
    "audio_file": "/audio/L06_03.mp3"
  },
  {
    "id": "TEXTBOOK_L06_04",
    "level": 6,
    "title": "<ruby>日曜日<rt>にちようび</rt></ruby>の <ruby>予定<rt>よてい</rt></ruby>",
    "schema_activation": [
      "<ruby>先週<rt>せんしゅう</rt></ruby>の <ruby>土曜日<rt>どようび</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を しましたか。",
      "あなたは<ruby>公園<rt>こうえん</rt></ruby>によく<ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "translation": "<p>Last Sunday, Ana read a difficult book for three hours at the town library. Then, she wrote a long letter to her family.<br>Jim: \"Ana-san, won't you play soccer together at the park now? The weather is nice.\"<br>Ana: \"That sounds good. Let's do it by all means.\"<br>The two of them walked to a nearby spacious park. They played soccer for an hour. They were very tired, but it was fun. Jim took many photos of Ana with his smartphone.<br>Ana: \"Jim-san, won't you play tennis too?\"<br>Jim: \"Sorry, tennis is a bit... I don't like it very much.\"<br>Jim did not play tennis. The two of them drank cold juice at a small shop next to the park. Then, they went home. It was a very fun Sunday.</p>",
    "textbook_html": "<p><span id=\"L06_04_Q1\">アナさんは <ruby>先週<rt>せんしゅう</rt></ruby>の <ruby>日曜日<rt>にちようび</rt></ruby>に、<ruby>町<rt>まち</rt></ruby>の <ruby>図書館<rt>としょかん</rt></ruby>で <ruby>難<rt>むずか</rt></ruby>しい <ruby>本<rt>ほん</rt></ruby>を <ruby>三時間<rt>さんじかん</rt></ruby> <ruby>読<rt>よ</rt></ruby>みました。</span>それから、<ruby>家族<rt>かぞく</rt></ruby>に <ruby>長<rt>なが</rt></ruby>い <ruby>手紙<rt>てがみ</rt></ruby>を <ruby>書<rt>か</rt></ruby>きました。ジム「アナさん、<ruby>今<rt>いま</rt></ruby>から <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>で サッカーを しませんか。いい <ruby>天気<rt>てんき</rt></ruby>ですよ」アナ「いいですね。ぜい しましょう」<ruby>二人<rt>ふたり</rt></ruby>は <ruby>歩<rt>ある</rt></ruby>いて <ruby>近<rt>ちか</rt></ruby>くの <ruby>広<rt>ひろ</rt></ruby>い <ruby>公園<rt>こうえん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<span id=\"L06_04_Q2\"><ruby>一時間<rt>いちじかん</rt></ruby> サッカーを しました。</span>とても <ruby>疲<rt>つか</rt></ruby>れましたが、<ruby>楽<rt>たの</rt></ruby>しかったです。<span id=\"L06_04_Q3\">ジムさんは スマホで アナさんの <ruby>写真<rt>しゃしん</rt></ruby>を たくさん <ruby>撮<rt>と</rt></ruby>りました。</span>アナ「ジムさん、テニスも <ruby>一緒<rt>いっしょ</rt></ruby>に しませんか」ジム「すみません、テニスは ちょっと。あまり <ruby>好<rt>す</rt></ruby>きじゃありません」ジムさんは テニスを しませんでした。<ruby>二人<rt>ふたり</rt></ruby>は <ruby>公園<rt>こうえん</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>にある <ruby>小<rt>ちい</rt></ruby>さな <ruby>店<rt>みせ</rt></ruby>で <ruby>冷<rt>つめ</rt></ruby>たい ジュースを <ruby>飲<rt>の</rt></ruby>みました。それから、<ruby>家<rt>うち</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>りました。とても <ruby>楽<rt>たの</rt></ruby>しい <ruby>日曜日<rt>にちようび</rt></ruby>でした。</p>",
    "quizzes": [
      {
        "question": "アナさんは <ruby>日曜日<rt>にちようび</rt></ruby>に <ruby>何<rt>なに</rt></ruby>を しましたか。",
        "target_id": "L06_04_Q1",
        "choices": [
          "<ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みました",
          "サッカーを しました"
        ],
        "answer_index": 0
      },
      {
        "question": "<ruby>二人<rt>ふたり</rt></ruby>は どこで サッカーを しましたか。",
        "target_id": "L06_04_Q2",
        "choices": [
          "<ruby>図書館<rt>としょかん</rt></ruby>",
          "<ruby>公園<rt>こうえん</rt></ruby>",
          "<ruby>店<rt>みせ</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "ジムさんは <ruby>何<rt>なに</rt></ruby>を しましたか。",
        "target_id": "L06_04_Q3",
        "choices": [
          "テニスを しました",
          "サッカーを しませんでした",
          "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りました"
        ],
        "answer_index": 2
      }
    ],
    "audio_file": "/audio/L06_04.mp3"
  },
  {
    "id": "TEXTBOOK_L07_01",
    "level": 7,
    "title": "<ruby>箸<rt>はし</rt></ruby>で <ruby>食<rt>た</rt></ruby>べます",
    "schema_activation": [
      "あなたの <ruby>国<rt>くに</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は、<ruby>何<rt>なに</rt></ruby>で ごはんを <ruby>食<rt>た</rt></ruby>べますか。",
      "日本の<ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べたことが ありますか。"
    ],
    "translation": "<p>Yamada: \"Ana-san, here is a present. I give you some chocolate.\"<br>Ana: \"Thank you very much. I'll eat it right away.\"<br>Yamada: \"Will you eat it with your hands?\"<br>Ana: \"No, I will eat it with a fork. In my country, we don't use chopsticks.\"<br>Ana ate the chocolate. It was very delicious.</p>",
    "textbook_html": "<p><span><ruby>山田<rt>やまだ</rt></ruby>「アナさん、プレゼントです。チョコレートを あげます」</span><span>アナ「ありがとうございます。すぐに <ruby>食<rt>た</rt></ruby>べます」</span><span><ruby>山田<rt>やまだ</rt></ruby>「<ruby>手<rt>て</rt></ruby>で <ruby>食<rt>た</rt></ruby>べますか」</span><span id=\"L07_01_Q1\">アナ「いいえ、フォークで <ruby>食<rt>た</rt></ruby>べます。<ruby>私<rt>わたし</rt></ruby>の <ruby>国<rt>くに</rt></ruby>では <ruby>箸<rt>はし</rt></ruby>を <ruby>使<rt>つか</rt></ruby>いません」</span><span>アナさんは チョコレートを <ruby>食<rt>た</rt></ruby>べました。とても おいしかったです。</span></p>",
    "quizzes": [
      {
        "question": "アナさんは <ruby>何<rt>なん</rt></ruby>で チョコレートを <ruby>食<rt>た</rt></ruby>べますか。",
        "target_id": "L07_01_Q1",
        "choices": [
          "<ruby>箸<rt>はし</rt></ruby>",
          "フォーク",
          "<ruby>手<rt>て</rt></ruby>"
        ],
        "answer_index": 1
      }
    ],
    "audio_file": "/audio/L07_01.mp3"
  },
  {
    "id": "TEXTBOOK_L07_02",
    "level": 7,
    "title": "<ruby>家族<rt>かぞく</rt></ruby>への プレゼント",
    "schema_activation": [
      "あなたは<ruby>人<rt>ひと</rt></ruby>の<ruby>誕生<rt>たんじょう</rt></ruby><ruby>日<rt>び</rt></ruby>に<ruby>何<rt>なに</rt></ruby>かあげますか。",
      "<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>新<rt>あたら</rt></ruby>しい <ruby>言葉<rt>ことば</rt></ruby>を もう <ruby>習<rt>なら</rt></ruby>いましたか。"
    ],
    "translation": "<p>Last week, Kim bought wonderful presents for his family. He bought a beautiful tie and a red bag at a large department store in town.<br>Kim: \"Ana-san, I already sent the package to my family in Korea by mail.\"<br>Ana: \"That's nice. Who did you give that tie to?\"<br>Kim: \"I gave it to my father. I gave the red bag to my mother.\"<br>Kim also received a small present from his mother yesterday. He received some very delicious sweets. Kim happily eats those sweets with his friends every day.</p>",
    "textbook_html": "<p>キムさんは <ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>に <ruby>素敵<rt>すてき</rt></ruby>な プレゼントを <ruby>買<rt>か</rt></ruby>いました。<ruby>町<rt>まち</rt></ruby>にある <ruby>大<rt>おお</rt></ruby>きな デパートで きれいな ネクタイと <ruby>赤<rt>あか</rt></ruby>い カバンを <ruby>買<rt>か</rt></ruby>いました。キム「アナさん、もう <ruby>郵便<rt>ゆうびん</rt></ruby>で <ruby>韓国<rt>かんこく</rt></ruby>の <ruby>家族<rt>かぞく</rt></ruby>へ <ruby>荷物<rt>にもつ</rt></ruby>を <ruby>送<rt>おく</rt></ruby>りました」アナ「いいですね。その ネクタイは <ruby>誰<rt>だれ</rt></ruby>に あげましたか」<span id=\"L07_02_Q1\">キム「<ruby>父<rt>ちち</rt></ruby>に あげました。<ruby>赤<rt>あか</rt></ruby>い カバンは <ruby>母<rt>はは</rt></ruby>に あげました」</span><span id=\"L07_02_Q2\">キムさんも <ruby>昨日<rt>きのう</rt></ruby>、<ruby>母<rt>はは</rt></ruby>から <ruby>小<rt>ちい</rt></ruby>さな プレゼントを もらいました。</span>とても おいしい お<ruby>菓子<rt>かし</rt></ruby>を もらいました。キムさんは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>友達<rt>ともだち</rt></ruby>と その お<ruby>菓子<rt>かし</rt></ruby>を <ruby>楽<rt>たの</rt></ruby>しく <ruby>食<rt>た</rt></ruby>べます。</p>",
    "quizzes": [
      {
        "question": "キムさんは お<ruby>父<rt>とう</rt></ruby>さんに <ruby>何<rt>なに</rt></ruby>を あげましたか。",
        "target_id": "L07_02_Q1",
        "choices": [
          "ネクタイ",
          "カバン"
        ],
        "answer_index": 0
      },
      {
        "question": "キムさんは <ruby>誰<rt>だれ</rt></ruby>に お<ruby>菓子<rt>かし</rt></ruby>を もらいましたか。",
        "target_id": "L07_02_Q2",
        "choices": [
          "お<ruby>父<rt>とう</rt></ruby>さん",
          "お<ruby>母<rt>かあ</rt></ruby>さん",
          "アナさん"
        ],
        "answer_index": 1
      }
    ],
    "audio_file": "/audio/L07_02.mp3"
  },
  {
    "id": "TEXTBOOK_L07_03",
    "level": 7,
    "title": "レポートを <ruby>送<rt>おく</rt></ruby>ります",
    "schema_activation": [
      "あなたは いつも <ruby>何<rt>なに</rt></ruby>で <ruby>友達<rt>ともだち</rt></ruby>と <ruby>連絡<rt>れんらく</rt></ruby>を しますか。",
      "あなたは <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>歌<rt>うた</rt></ruby>を <ruby>知<rt>し</rt></ruby>っていますか。"
    ],
    "translation": "<p>Jim is working in his room today. He wrote a report for his company in Japanese. That report was a little difficult, but he worked very hard.<br>Yamada: \"Jim-san, have you already written that report?\"<br>Jim: \"Yes, I have already written it. I am sending it to my boss now.\"<br>Yamada: \"Will you send it by mail?\"<br>Jim: \"No, I will send it by email on my computer.\"<br>Jim sent the report to his boss a short while ago. After that, he called his family using his smartphone. He talks with his family every day in Japanese or English.</p>",
    "textbook_html": "<p>ジムさんは <ruby>今日<rt>きょう</rt></ruby>、<ruby>自分<rt>じぶん</rt></ruby>の <ruby>部屋<rt>へや</rt></ruby>で <ruby>仕事<rt>しごと</rt></ruby>を しています。<ruby>日本語<rt>にほんご</rt></ruby>で <ruby>会社<rt>かいしゃ</rt></ruby>の レポートを <ruby>書<rt>か</rt></ruby>きました。その レポートは <ruby>少<rt>すこ</rt></ruby>し <ruby>難<rt>むずか</rt></ruby>しかったですが、とても <ruby>頑張<rt>がんば</rt></ruby>りました。<ruby>山田<rt>やまだ</rt></ruby>「ジムさん、もう その レポートを <ruby>書<rt>か</rt></ruby>きましたか」<span id=\"L07_03_Q2\">ジム「はい、もう <ruby>書<rt>か</rt></ruby>きました。<ruby>今<rt>いま</rt></ruby>から <ruby>上司<rt>じょうし</rt></ruby>に <ruby>送<rt>おく</rt></ruby>ります」</span><ruby>山田<rt>やまだ</rt></ruby>「<ruby>郵便<rt>ゆうびん</rt></ruby>で <ruby>送<rt>おく</rt></ruby>りますか」<span id=\"L07_03_Q1\">ジム「いいえ、パソコンの メールで <ruby>送<rt>おく</rt></ruby>ります」</span>ジムさんは <ruby>先<rt>さき</rt></ruby>ほど <ruby>上司<rt>じょうし</rt></ruby>に レポートを <ruby>送<rt>おく</rt></ruby>りました。それから、スマホで <ruby>家族<rt>かぞく</rt></ruby>に <ruby>電話<rt>でんわ</rt></ruby>を かけました。ジムさんは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>家族<rt>かぞく</rt></ruby>と <ruby>日本語<rt>にほんご</rt></ruby>や <ruby>英語<rt>えいご</rt></ruby>で <ruby>楽<rt>たの</rt></ruby>しく <ruby>話<rt>はな</rt></ruby>します。</p>",
    "quizzes": [
      {
        "question": "ジムさんは <ruby>何<rt>なに</rt></ruby>で レポートを <ruby>送<rt>おく</rt></ruby>りましたか。",
        "target_id": "L07_03_Q1",
        "choices": [
          "<ruby>郵便<rt>ゆうびん</rt></ruby>",
          "メール"
        ],
        "answer_index": 1
      },
      {
        "question": "ジムさんは <ruby>誰<rt>だれ</rt></ruby>に レポートを <ruby>送<rt>おく</rt></ruby>りましたか。",
        "target_id": "L07_03_Q2",
        "choices": [
          "<ruby>山田<rt>やまだ</rt></ruby>さん",
          "<ruby>上司<rt>じょうし</rt></ruby>",
          "<ruby>家族<rt>かぞく</rt></ruby>"
        ],
        "answer_index": 1
      }
    ],
    "audio_file": "/audio/L07_03.mp3"
  },
  {
    "id": "TEXTBOOK_L07_04",
    "level": 7,
    "title": "<ruby>素敵<rt>すてき</rt></ruby>な お<ruby>土産<rt>みやげ</rt></ruby>",
    "schema_activation": [
      "<ruby>日本<rt>にほん</rt></ruby>の アニメや <ruby>映画<rt>えいが</rt></ruby>を もう <ruby>見<rt>み</rt></ruby>ましたか。",
      "<ruby>友達<rt>ともだち</rt></ruby>への お<ruby>祝<rt>いわ</rt></ruby>いを <ruby>何<rt>なに</rt></ruby>で <ruby>送<rt>おく</rt></ruby>りますか。"
    ],
    "translation": "<p>Ana is at a restaurant in town with Pak now. They are talking about their friend Jim.<br>Ana: \"By the way, did you receive a souvenir from Jim?\"<br>Pak: \"Yes, I did. I received a book from England. Jim sent it to me by mail last week.\"<br>Ana: \"Have you already read that book?\"<br>Pak: \"No, not yet. I will read it slowly at home tonight. What did you get, Ana-san?\"<br>Ana: \"I received some famous tea from Jim. Tomorrow, I will drink it with everyone.\"<br>The two of them ate lunch at the restaurant. Ana paid for the meal. Pak said \"Thank you\" in Japanese. After that, Pak taught Ana some new Japanese for about an hour. It was a very good time. Ana wants to send a thank-you gift to Jim soon.</p>",
    "textbook_html": "<p>アナさんは <ruby>今<rt>いま</rt></ruby>、<ruby>町<rt>まち</rt></ruby>の レストランに います。<ruby>友達<rt>ともだち</rt></ruby>の ジムさんに ついて <ruby>話<rt>はな</rt></ruby>しています。アナ「そういえば、ジムさんに お<ruby>土産<rt>みやげ</rt></ruby>を もらいましたか」<span id=\"L07_04_Q1\">パク「はい、もらいました。 イギリスの <ruby>本<rt>ほん</rt></ruby>を もらいました。</span>ジムさんは <ruby>先週<rt>せんしゅう</rt></ruby> <ruby>郵便<rt>ゆうびん</rt></ruby>で <ruby>送<rt>おく</rt></ruby>りました」アナ「もう その <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みましたか」<span id=\"L07_04_Q2\">パク「いいえ、まだです。 <ruby>今日<rt>きょう</rt></ruby>の <ruby>夜<rt>よる</rt></ruby>、<ruby>家<rt>うち</rt></ruby>で ゆっくり <ruby>読<rt>よ</rt></ruby>みます。</span>アナさんは <ruby>何<rt>なに</rt></ruby>を もらいましたか」アナ「<ruby>私<rt>わたし</rt></ruby>は ジムさんに <ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>紅茶<rt>こうちゃ</rt></ruby>を もらいました。<ruby>明日<rt>あした</rt></ruby>、みんなで <ruby>飲<rt>の</rt></ruby>みます」<ruby>二人<rt>ふたり</rt></ruby>は レストランで ごはんを <ruby>食<rt>た</rt></ruby>べました。<span id=\"L07_04_Q3\">アナさんが お<ruby>金<rt>かね</rt></ruby>を はらいました。</span>パクさんは <ruby>日本語<rt>にほんご</rt></ruby>で 「ありがとう」と <ruby>言<rt>い</rt></ruby>いました。そのあと、パクさんは アナさんに <ruby>新<rt>あたら</rt></ruby>しい <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えました。<ruby>一時間<rt>いちじかん</rt></ruby>くらい <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>勉強<rt>べんきょう</rt></ruby>しました。とても いい <ruby>時間<rt>じかん</rt></ruby>でした。アナさんは もうすぐ ジムさんに お<ruby>礼<rt>れい</rt></ruby>を <ruby>送<rt>おく</rt></ruby>りたいです。</p>",
    "quizzes": [
      {
        "question": "パクさんは ジムさんに <ruby>何<rt>なに</rt></ruby>を もらいましたか。",
        "target_id": "L07_04_Q1",
        "choices": [
          "<ruby>紅茶<rt>こうちゃ</rt></ruby>",
          "<ruby>本<rt>ほん</rt></ruby>",
          "お<ruby>金<rt>かね</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "パクさんは もう <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みましたか。",
        "target_id": "L07_04_Q2",
        "choices": [
          "はい、もう <ruby>読<rt>よ</rt></ruby>みました",
          "いいえ、まだです"
        ],
        "answer_index": 1
      },
      {
        "question": "アナさんは どこで お<ruby>金<rt>かね</rt></ruby>を はらいましたか。",
        "target_id": "L07_04_Q3",
        "choices": [
          "イギリス",
          "<ruby>郵便局<rt>ゆうびんきょく</rt></ruby>",
          "レストラン"
        ],
        "answer_index": 2
      }
    ],
    "audio_file": "/audio/L07_04.mp3"
  },

  {
    "id": "TEXTBOOK_L8_01",
    "level": 8,
    "title": "さくら<ruby>大学<rt>だいがく</rt></ruby>は どんな <ruby>大学<rt>だいがく</rt></ruby>ですか",
    "schema_activation": [
      "あなたの<ruby>街<rt>まち</rt></ruby>にある<ruby>大学<rt>だいがく</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きいですか。",
      "あなたの <ruby>町<rt>まち</rt></ruby>は <ruby>静<rt>しず</rt></ruby>かですか。"
    ],
    "translation": "<p>Ana's Sakura University is a very famous university. And it is very beautiful. It is not very new, but it is very quiet.<br>Professor Yamada is a very kind teacher. University life is very busy, but it is fun.</p>",
    "textbook_html": "<p><span style=\"display: inline-block;\">アナさんの さくら<ruby>大学<rt>だいがく</rt></ruby>は とても <ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>大学<rt>だいがく</rt></ruby>です。</span><span style=\"display: inline-block;\">そして、とても <ruby>綺麗<rt>きれい</rt></ruby>です。</span><span id=\"L08_01_Q1\" style=\"display: inline-block;\">あまり <ruby>新<rt>あたら</rt></ruby>しくないですが、とても <ruby>静<rt>しず</rt></ruby>かですよ。</span><br><span id=\"L08_01_Q2\" style=\"display: inline-block;\"><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は とても <ruby>親切<rt>しんせつ</rt></ruby>な <ruby>先生<rt>せんせい</rt></ruby>です。</span><span style=\"display: inline-block;\"><ruby>大学<rt>だいがく</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は とても <ruby>忙<rt>いそが</rt></ruby>しいですが、<ruby>楽<rt>たの</rt></ruby>しいです。</span></p>",
    "quizzes": [
      {
        "question": "さくら<ruby>大学<rt>だいがく</rt></ruby>は <ruby>新<rt>あたら</rt></ruby>しいですか。",
        "target_id": "L08_01_Q1",
        "choices": [
          "はい、とても <ruby>新<rt>あたら</rt></ruby>しいです",
          "いいえ、あまり <ruby>新<rt>あたら</rt></ruby>しくないです"
        ],
        "answer_index": 1
      },
      {
        "question": "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は どんな <ruby>先生<rt>せんせい</rt></ruby>ですか。",
        "target_id": "L08_01_Q2",
        "choices": [
          "<ruby>厳<rt>きび</rt></ruby>しい <ruby>先生<rt>せんせい</rt></ruby>",
          "<ruby>親切<rt>しんせつ</rt></ruby>な <ruby>先生<rt>せんせい</rt></ruby>",
          "<ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>先生<rt>せんせい</rt></ruby>"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "TEXTBOOK_L8_02",
    "level": 8,
    "title": "おいしい レストラン",
    "schema_activation": [
      "<ruby>日本<rt>にほん</rt></ruby><ruby>料理<rt>りょうり</rt></ruby>は<ruby>好<rt>す</rt></ruby>きですか。",
      "よく レストランへ <ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "translation": "<p>Ana and Jim went to Shinjuku today.<br>Shinjuku is a very lively town.<br>The two of them ate dinner at a restaurant.<br>That shop is not very new, but it is very famous.<br>The inside is very beautiful.<br>Jim ate a fish dish.<br>Ana ate a meat dish.<br>Jim said, \"This fish is very delicious.\"<br>Ana said, \"The meat is very delicious, too.\"<br>The coffee was very hot.<br>The food at this shop is a little expensive, but it is very good.<br>The two of them had a very fun time.</p>",
    "textbook_html": "<p>アナさんと ジムさんは <ruby>今日<rt>きょう</rt></ruby> <ruby>新宿<rt>しんじゅく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<ruby>新宿<rt>しんじゅく</rt></ruby>は とても にぎやかな <ruby>町<rt>まち</rt></ruby>です。<ruby>二人<rt>ふたり</rt></ruby>は レストランで <ruby>晩<rt>ばん</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べました。その <ruby>店<rt>みせ</rt></ruby>は あまり <ruby>新<rt>あたら</rt></ruby>しくないですが、とても <ruby>有名<rt>ゆうめい</rt></ruby>です。<ruby>中<rt>なか</rt></ruby>は とても きれいです。<span id=\"L08_02_Q1\">ジムさんは <ruby>魚<rt>さかな</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました。</span>アナさんは <ruby>肉<rt>にく</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました。ジムさんは 「この <ruby>魚<rt>さかな</rt></ruby>は とても おいしいです」と <ruby>言<rt>い</rt></ruby>いました。アナさんは 「<ruby>肉<rt>にく</rt></ruby>も とても おいしいですよ」と <ruby>言<rt>い</rt></ruby>いました。コーヒーは とても <ruby>熱<rt>あつ</rt></ruby>かったです。<span id=\"L08_02_Q2\">この <ruby>店<rt>みせ</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>は <ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>いですが、とても いいです。</span><ruby>二人<rt>ふたり</rt></ruby>は とても <ruby>楽<rt>たの</rt></ruby>しかったです。</p>",
    "quizzes": [
      {
        "question": "ジムさんは <ruby>何<rt>なに</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。",
        "target_id": "L08_02_Q1",
        "choices": [
          "<ruby>魚<rt>さかな</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>",
          "<ruby>肉<rt>にく</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>",
          "野菜の <ruby>料理<rt>りょうり</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "この <ruby>店<rt>みせ</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>は いくらですか。",
        "target_id": "L08_02_Q2",
        "choices": [
          "とても <ruby>安<rt>やす</rt></ruby>いです",
          "<ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>いです",
          "<ruby>全然<rt>ぜんぜん</rt></ruby> <ruby>高<rt>たか</rt></ruby>くないです"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "TEXTBOOK_L08_03",
    "level": 8,
    "title": "<ruby>冷<rt>つめ</rt></ruby>たい お<ruby>茶<rt>ちゃ</rt></ruby>は いかがですか",
    "schema_activation": [
      "<ruby>今日<rt>きょう</rt></ruby>の <ruby>天気<rt>てんき</rt></ruby>は どうですか。 <ruby>暑<rt>あつ</rt></ruby>いですか。",
      "あなたは お<ruby>茶<rt>ちゃ</rt></ruby>や コーヒーが <ruby>好<rt>す</rt></ruby>きですか。"
    ],
    "translation": "<p>Today is a very hot day. Kim is at home.<br>Ana: \"Kim-san, it's hot today, isn't it? Is your room cool?\"<br>Kim: \"Yes, my room is cool and very comfortable. Please come in.\"<br>Kim: \"Would you like some cold tea? Or would you like some hot coffee?\"<br>Ana: \"Then, I'll have some cold tea, please. Thank you very much.\"<br>Kim's room is clean and very quiet. The tea was very delicious. The two of them talked enjoyably in the cool room.</p>",
    "textbook_html": "<p><span id=\"L08_03_Q1\"><ruby>今日<rt>きょう</rt></ruby>は とても <ruby>暑<rt>あつ</rt></ruby>い <ruby>日<rt>ひ</rt></ruby>です。</span>キムさんは <ruby>家<rt>うち</rt></ruby>に います。アナ「キムさん、<ruby>今日<rt>きょう</rt></ruby>は <ruby>暑<rt>あつ</rt></ruby>いですね。キムさんの <ruby>部屋<rt>へや</rt></ruby>は <ruby>涼<rt>すず</rt></ruby>しいですか」キム「はい、<ruby>私<rt>わたし</rt></ruby>の <ruby>部屋<rt>へや</rt></ruby>は <ruby>涼<rt>すず</rt></ruby>しくて とても <ruby>気持<rt>きも</rt></ruby>ちが いいですよ。どうぞ <ruby>入<rt>はい</rt></ruby>ってください」キム「<ruby>冷<rt>つめ</rt></ruby>たい お<ruby>茶<rt>ちゃ</rt></ruby>は いかがですか。それとも <ruby>熱<rt>あつ</rt></ruby>い コーヒーが いいですか」アナ「じゃあ、<ruby>冷<rt>つめ</rt></ruby>たい お<ruby>茶<rt>ちゃ</rt></ruby>を お<ruby>願<rt>ねが</rt></ruby>いします。ありがとうございます」<span id=\"L08_03_Q2\">キムさんの <ruby>部屋<rt>へや</rt></ruby>は <ruby>綺麗<rt>きれい</rt></ruby>で とても <ruby>静<rt>しず</rt></ruby>かです。</span><span id=\"L08_03_Q3\">お<ruby>茶<rt>ちゃ</rt></ruby>は とても おいしかったです。</span><ruby>涼<rt>すず</rt></ruby>しい <ruby>部屋<rt>へや</rt></ruby>で <ruby>二人<rt>ふたり</rt></ruby>は <ruby>楽<rt>たの</rt></ruby>しく <ruby>話<rt>はな</rt></ruby>しました。</p>",
    "quizzes": [
      {
        "question": "<ruby>今日<rt>きょう</rt></ruby>は どんな <ruby>日<rt>ひ</rt></ruby>ですか。",
        "target_id": "L08_03_Q1",
        "choices": [
          "<ruby>暑<rt>あつ</rt></ruby>い <ruby>日<rt>ひ</rt></ruby>です",
          "<ruby>寒<rt>さむ</rt></ruby>い <ruby>日<rt>ひ</rt></ruby>です"
        ],
        "answer_index": 0
      },
      {
        "question": "キムさんの <ruby>部屋<rt>へや</rt></ruby>は どうですか。",
        "target_id": "L08_03_Q2",
        "choices": [
          "<ruby>賑<rt>にぎ</rt></ruby>やかです",
          "<ruby>綺麗<rt>きれい</rt></ruby>で <ruby>静<rt>しず</rt></ruby>かです"
        ],
        "answer_index": 1
      },
      {
        "question": "アナさんは <ruby>何<rt>なに</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みましたか。",
        "target_id": "L08_03_Q3",
        "choices": [
          "<ruby>熱<rt>あつ</rt></ruby>い コーヒー",
          "<ruby>冷<rt>つめ</rt></ruby>たい お<ruby>茶<rt>ちゃ</rt></ruby>"
        ],
        "answer_index": 1
      }
    ],
    "audio_file": "/audio/L08_03.mp3"
  },
  {
    "id": "TEXTBOOK_L08_04",
    "level": 8,
    "title": "<ruby>賑<rt>にぎ</rt></ruby>やかな <ruby>町<rt>まち</rt></ruby>と <ruby>静<rt>しず</rt></ruby>かな <ruby>町<rt>まち</rt></ruby>",
    "schema_activation": [
      "あなたの <ruby>国<rt>くに</rt></ruby>の <ruby>地下鉄<rt>ちかてつ</rt></ruby>は <ruby>綺麗<rt>きれい</rt></ruby>ですか。",
      "あなたの <ruby>町<rt>まち</rt></ruby>の <ruby>公園<rt>こうえん</rt></ruby>は <ruby>広<rt>ひろ</rt></ruby>いですか。"
    ],
    "translation": "<p>Pak is from a small town in Korea. His town is very quiet and beautiful. On the other hand, the town he lives in now is a very big city in Japan. It is lively and very convenient.<br>Pak: \"Jim-san, your town in America is also big, isn't it? Is it a lively place?\"<br>Jim: \"No, my town is not very lively. But there are many trees and it is a very pretty town.\"<br>Pak: \"I see. Japanese cities are convenient, but they are a little noisy. My town in Korea is very quiet and I like it very much.\"<br>Jim: \"Is the food in your town delicious?\"<br>Pak: \"Yes, the food in my town is very cheap and delicious. The people are also very kind.\"<br>Next week, the two of them will go to a famous and quiet temple together by bus. Jim will take many photos there. Pak is already very happy. It will be a wonderful trip.</p>",
    "textbook_html": "<p><span id=\"L08_04_Q1\">パクさんは <ruby>韓国<rt>かんこく</rt></ruby>の <ruby>小<rt>ちい</rt></ruby>さな <ruby>町<rt>まち</rt></ruby>から <ruby>来<rt>き</rt></ruby>ました。</span>パクさんの <ruby>町<rt>まち</rt></ruby>は とても <ruby>静<rt>しず</rt></ruby>かで <ruby>綺麗<rt>きれい</rt></ruby>な <ruby>場所<rt>ばしょ</rt></ruby>です。でも、<ruby>今<rt>いま</rt></ruby> <ruby>住<rt>す</rt></ruby>んでいる <ruby>日本<rt>にほん</rt></ruby>の <ruby>町<rt>まち</rt></ruby>は とても <ruby>大<rt>おお</rt></ruby>きいです。<ruby>賑<rt>にぎ</rt></ruby>やかで とても <ruby>便利<rt>べんり</rt></ruby>な <ruby>所<rt>ところ</rt></ruby>ですよ。<br>パク「ジムさんの アメリカの <ruby>町<rt>まち</rt></ruby>も <ruby>大<rt>おお</rt></ruby>きいですね。<br> <ruby>賑<rt>にぎ</rt></ruby>やかな <ruby>場所<rt>ばしょ</rt></ruby>ですか」<br>ジム「いいえ、あまり <ruby>賑<rt>にぎ</rt></ruby>やかじゃありません。 でも、<ruby>木<rt>き</rt></ruby>が たくさん あって、とても きれいな <ruby>町<rt>まち</rt></ruby>ですよ」<br>パク「そうですか。 <ruby>日本<rt>にほん</rt></ruby>の <ruby>町<rt>まち</rt></ruby>は <ruby>便利<rt>べんり</rt></ruby>ですが、<ruby>少<rt>すこ</rt></ruby>し うるさいです。 <ruby>韓国<rt>かんこく</rt></ruby>の <ruby>町<rt>まち</rt></ruby>は とても <ruby>静<rt>しず</rt></ruby>かですから、<ruby>私<rt>わたし</rt></ruby>は とても <ruby>好<rt>す</rt></ruby>きです」<br>ジム「パクさんの <ruby>町<rt>まち</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>は おいしいですか」<br><span id=\"L08_04_Q2\">パク「はい、とても <ruby>安<rt>やす</rt></ruby>くて おいしいです。 <ruby>人<rt>ひと</rt></ruby>も とても <ruby>親切<rt>しんせつ</rt></ruby>ですよ」</span><br><span id=\"L08_04_Q3\"><ruby>来週<rt>らいしゅう</rt></ruby>、<ruby>二人<rt>ふたり</rt></ruby>は <ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>静<rt>しず</rt></ruby>かな お<ruby>寺<rt>てら</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。</span>ジムさんは そこで <ruby>写真<rt>しゃしん</rt></ruby>を たくさん <ruby>撮<rt>と</rt></ruby>ります。パクさんは もう とても <ruby>嬉<rt>うれ</rt></ruby>しいです。お<ruby>寺<rt>てら</rt></ruby>まで バスで <ruby>行<rt>い</rt></ruby>きます。 とても すばらしい <ruby>旅行<rt>りょこう</rt></ruby>に なります。</p>",
    "quizzes": [
      {
        "question": "パクさんの <ruby>国<rt>くに</rt></ruby>の <ruby>町<rt>まち</rt></ruby>は どうですか。",
        "target_id": "L08_04_Q1",
        "choices": [
          "<ruby>賑<rt>にぎ</rt></ruby>やかで うるさいです",
          "<ruby>静<rt>しず</rt></ruby>かで <ruby>綺麗<rt>きれい</rt></ruby>です"
        ],
        "answer_index": 1
      },
      {
        "question": "パクさんの <ruby>町<rt>まち</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>は どうですか。",
        "target_id": "L08_04_Q2",
        "choices": [
          "<ruby>高<rt>たか</rt></ruby>いですが、おいしいです",
          "<ruby>安<rt>やす</rt></ruby>くて おいしいです"
        ],
        "answer_index": 1
      },
      {
        "question": "<ruby>二人<rt>ふたり</rt></ruby>は どこへ <ruby>行<rt>い</rt></ruby>きますか。",
        "target_id": "L08_04_Q3",
        "choices": [
          "<ruby>静<rt>しず</rt></ruby>かな お<ruby>寺<rt>てら</rt></ruby>",
          "アメリカの <ruby>町<rt>まち</rt></ruby>",
          "<ruby>賑<rt>にぎ</rt></ruby>やかな <ruby>デパート<rt></rt></ruby>"
        ],
        "answer_index": 0
      }
    ],
    "audio_file": "/audio/L08_04.mp3"
  },
  {
    "id": "TEXTBOOK_L09_01",
    "level": 9,
    "title": "アナさんの <ruby>好<rt>す</rt></ruby>きな <ruby>音楽<rt>おんがく</rt></ruby>",
    "schema_activation": [
      "<ruby>音楽<rt>おんがく</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。",
      "カラオケに よく <ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "translation": "<p>Ana likes music very much. She listens to classical music every day. She doesn't like rock very much.<br>Mr. Jim is very good at singing. Ana said, \"I have two tickets, so won't you go with me?\"</p>",
    "textbook_html": "<p><span id=\"L09_01_Q1\" style=\"display: inline-block;\">アナさんは <ruby>音楽<rt>おんがく</rt></ruby>が とても <ruby>好<rt>す</rt></ruby>きです。</span><span style=\"display: inline-block;\"><ruby>毎日<rt>まいにち</rt></ruby> クラシックを <ruby>聞<rt>き</rt></ruby>きます。</span><span style=\"display: inline-block;\">ロックは あまり <ruby>好<rt>す</rt></ruby>きじゃありません。</span><br><span id=\"L09_01_Q2\" style=\"display: inline-block;\">ジムさんは <ruby>歌<rt>うた</rt></ruby>が とても <ruby>上手<rt>じょうず</rt></ruby>です。</span><br><span style=\"display: inline-block;\">アナ「<ruby>切符<rt>きっぷ</rt></ruby>が <ruby>二枚<rt>にまい</rt></ruby> ありますから、<ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>行<rt>い</rt></ruby>きませんか」</span></p>",
    "quizzes": [
      {
        "question": "アナさんは どんな <ruby>音楽<rt>おんがく</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。",
        "target_id": "L09_01_Q1",
        "choices": [
          "クラシック",
          "ロック",
          "ジャズ"
        ],
        "answer_index": 0
      },
      {
        "question": "ジムさんは <ruby>歌<rt>うた</rt></ruby>が <ruby>上手<rt>じょうず</rt></ruby>ですか。",
        "target_id": "L09_01_Q2",
        "choices": [
          "はい、とても <ruby>上手<rt>じょうず</rt></ruby>です",
          "いいえ、あまり <ruby>上手<rt>じょうず</rt></ruby>じゃありません"
        ],
        "answer_index": 0
      }
    ],
    "audio_file": "/audio/L09_01.mp3"
  },
  {
    "id": "TEXTBOOK_L09_02",
    "level": 9,
    "title": "コンサートの チケットが あります",
    "schema_activation": [
      "あなたは クラシックや ジャズが <ruby>好<rt>す</rt></ruby>きですか。",
      "<ruby>今日<rt>きょう</rt></ruby>、<ruby>用事<rt>ようじ</rt></ruby>が ありますか。 <ruby>忙<rt>いそが</rt></ruby>しいですか。"
    ],
    "translation": "<p>Yamada: \"Kim-san, do you have some time tonight?\"<br>Kim: \"Yes, I'm free. Why?\"<br>Yamada: \"I have two tickets for a classical concert. Won't you go with me?\"<br>Kim: \"I'm sorry. I don't understand classical music very much, so...\"<br>Yamada: \"Oh, that's okay. What kind of music do you like?\"<br>Kim: \"I like Jazz. I have many Jazz CDs at home.\"<br>Yamada: \"I see. Then let's go to a Jazz club next time.\"<br>Kim: \"Yes, let's do that!\"</p>",
    "textbook_html": "<p><ruby>山田<rt>やまだ</rt></ruby>「キムさん、<ruby>今晩<rt>こんばん</rt></ruby> <ruby>時間<rt>じかん</rt></ruby>が ありますか」<br><span id=\"L09_02_Q1\">キム「はい、<ruby>暇<rt>ひま</rt></ruby>ですよ。 どうしてですか」</span><br><ruby>山田<rt>やまだ</rt></ruby>「クラシックの コンサートの チケットが <ruby>二枚<rt>にまい</rt></ruby> あります。<br><ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>行<rt>い</rt></ruby>きませんか」<br><span id=\"L09_02_Q2\">キム「すみません。 <ruby>私<rt>わたし</rt></ruby>は クラシックが あまり わかりませんから……」</span><br><ruby>山田<rt>やまだ</rt></ruby>「そうですか。 どんな <ruby>音楽<rt>おんがく</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか」<br>キム「ジャズが <ruby>好<rt>す</rt></ruby>きです。 <ruby>家<rt>うち</rt></ruby>に ジャズの CDが たくさん ありますよ」<br><ruby>山田<rt>やまだ</rt></ruby>「そうですか。 じゃあ、<ruby>次<rt>つぎ</rt></ruby>は ジャズの お<ruby>店<rt>みせ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きましょう」<br>キム「はい、ぜひ！」</p>",
    "quizzes": [
      {
        "question": "キムさんは <ruby>今晩<rt>こんばん</rt></ruby> <ruby>用事<rt>ようじ</rt></ruby>が ありますか。",
        "target_id": "L09_02_Q1",
        "choices": [
          "はい、あります",
          "いいえ、<ruby>暇<rt>ひま</rt></ruby>です"
        ],
        "answer_index": 1
      },
      {
        "question": "キムさんは どうして コンサートへ <ruby>行<rt>い</rt></ruby>きませんか。",
        "target_id": "L09_02_Q2",
        "choices": [
          "<ruby>時間<rt>じかん</rt></ruby>が ありませんから",
          "クラシックが あまり わかりませんから",
          "チケットが ありませんから"
        ],
        "answer_index": 1
      }
    ],
    "audio_file": "/audio/L09_02.mp3"
  },
  {
    "id": "TEXTBOOK_L09_03",
    "level": 9,
    "title": "<ruby>日本語<rt>にほんご</rt></ruby>が よく わかりますか",
    "schema_activation": [
      "あなたは <ruby>漢字<rt>かんじ</rt></ruby>が よく わかりますか。",
      "あなたは <ruby>今<rt>いま</rt></ruby>、<ruby>自分<rt>じぶん</rt></ruby>の <ruby>部屋<rt>へや</rt></ruby>に <ruby>辞書<rt>じしょ</rt></ruby>が ありますか。"
    ],
    "translation": "<p>Ana is looking at a difficult Japanese document in her room.<br>Yamada: \"Ana-san, do you understand that document?\"<br>Ana: \"No, I don't understand the kanji at all because it is very difficult.\"<br>Yamada: \"I see. I have some time now, so shall I help you?\"<br>Ana: \"Yes, please! Thank you very much.\"<br>Ana understands English well, but she is not very good at Japanese kanji yet. Yamada kindly taught her the meaning of the words.</p>",
    "textbook_html": "<p>アナさんは <ruby>部屋<rt>へや</rt></ruby>で <ruby>難<rt>むずか</rt></ruby>しい <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>書類<rt>しょるい</rt></ruby>を <ruby>見<rt>み</rt></ruby>ています。<br><ruby>山田<rt>やまだ</rt></ruby>「アナさん、その <ruby>書類<rt>しょるい</rt></ruby>が わかりますか」<br><span id=\"L09_03_Q1\">アナ「いいえ、とても <ruby>難<rt>むずか</rt></ruby>しいですから、<ruby>漢字<rt>かんじ</rt></ruby>が <ruby>全然<rt>ぜんぜん</rt></ruby> わかりません」</span><br><span id=\"L09_03_Q2\"><ruby>山田<rt>やまだ</rt></ruby>「そうですか。 <ruby>私<rt>わたし</rt></ruby>は <ruby>今<rt>いま</rt></ruby> <ruby>時間<rt>じかん</rt></ruby>が ありますから、</span><br><ruby>少<rt>すこ</rt></ruby>し <ruby>手伝<rt>てつだ</rt></ruby>いましょうか」<br>アナ「はい、おねがいします！ ありがとうございます」<br>アナさんは <ruby>英語<rt>えいご</rt></ruby>は よく わかりますが、<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>漢字<rt>かんじ</rt></ruby>は まだ あまり <ruby>上手<rt>じょうず</rt></ruby>じゃありません。<ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>親切<rt>しんせつ</rt></ruby>に <ruby>言葉<rt>ことば</rt></ruby>の <ruby>意味<rt>いみ</rt></ruby>を おしえました。</p>",
    "quizzes": [
      {
        "question": "アナさんは どうして <ruby>書類<rt>しょるい</rt></ruby>が わかりませんか。",
        "target_id": "L09_03_Q1",
        "choices": [
          "<ruby>時間<rt>じかん</rt></ruby>が ありませんから",
          "<ruby>漢字<rt>かんじ</rt></ruby>が <ruby>難<rt>むずか</rt></ruby>しいですから"
        ],
        "answer_index": 1
      },
      {
        "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは どうして アナさんを <ruby>手伝<rt>てつだ</rt></ruby>いますか。",
        "target_id": "L09_03_Q2",
        "choices": [
          "<ruby>今<rt>いま</rt></ruby> <ruby>時間<rt>じかん</rt></ruby>が ありますから",
          "<ruby>漢字<rt>かんじ</rt></ruby>が <ruby>上手<rt>じょうず</rt></ruby>ですから"
        ],
        "answer_index": 0
      }
    ],
    "audio_file": "/audio/L09_03.mp3"
  },
  {
    "id": "TEXTBOOK_L09_04",
    "level": 9,
    "title": "<ruby>写真<rt>しゃしん</rt></ruby>の <ruby>展覧<rt>てんらん</rt></ruby><ruby>会<rt>かい</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きませんか",
    "schema_activation": [
      "あなたは <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>るのが <ruby>好<rt>す</rt></ruby>きですか。",
      "どうして <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しますか。"
    ],
    "translation": "<p>Jim likes photography very much. He has many photos of mountains and flowers at home.<br>Jim: \"Pak-san, I have tickets for a photo exhibition. Won't you go with me this weekend?\"<br>Pak: \"A photo exhibition? That sounds good. Where is it?\"<br>Jim: \"It's at a gallery near the station. My friend's photos are there.\"<br>Pak: \"I'm sorry, I have plans this Saturday, so I can't go.\"<br>Jim: \"I see. Then how about Sunday?\"<br>Pak: \"Sunday is fine. I have a lot of free time. I like photos, so I'm looking forward to it.\"<br>Jim: \"Great. Let's meet at the station on Sunday. I will also bring my new camera because I want to take photos of the town.\"<br>Pak: \"That's nice. See you then!\"</p>",
    "textbook_html": "<p>ジムさんは <ruby>写真<rt>しゃしん</rt></ruby>が とても <ruby>好<rt>す</rt></ruby>きです。<ruby>家<rt>うち</rt></ruby>に <ruby>山<rt>やま</rt></ruby>や <ruby>花<rt>はな</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>が たくさん あります。<br>ジム「パクさん、<ruby>写真<rt>しゃしん</rt></ruby>の <ruby>展覧<rt>てんらん</rt></ruby><ruby>会<rt>かい</rt></ruby>の <ruby>切符<rt>きっぷ</rt></ruby>が あります。 <ruby>今週<rt>こんしゅう</rt></ruby>の <ruby>週末<rt>しゅうまつ</rt></ruby>、<ruby>一緒<rt>いっしょ</rt></ruby>に <ruby>行<rt>い</rt></ruby>きませんか」<br>パク「<ruby>展覧<rt>てんらん</rt></ruby><ruby>会<rt>かい</rt></ruby>ですか。 いいですね。 どこに ありますか」<br>ジム「<ruby>駅<rt>えき</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くの ギャラリーに あります。 <ruby>私<rt>わたし</rt></ruby>の <ruby>友達<rt>ともだち</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>が ありますよ」<br><span id=\"L09_04_Q1\">パク「すみません。 <ruby>土曜日<rt>どようび</rt></ruby>は <ruby>用事<rt>ようじ</rt></ruby>が ありますから、<ruby>行<rt>い</rt></ruby>くことが できません」</span><br>ジム「そうですか。 じゃあ、<ruby>日曜日<rt>にちようび</rt></ruby>は どうですか」<br><span id=\"L09_04_Q2\">パク「<ruby>日曜日<rt>にちようび</rt></ruby>は <ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。 <ruby>時間<rt>じかん</rt></ruby>が たくさん ありますから。 <ruby>私<rt>わたし</rt></ruby>も <ruby>写真<rt>しゃしん</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですから、とても <ruby>楽<rt>たの</rt></ruby>しみです」</span><br><span id=\"L09_04_Q3\">ジム「よかった。 じゃあ、<ruby>日曜日<rt>にちようび</rt></ruby>に <ruby>駅<rt>えき</rt></ruby>で <ruby>会<rt>あ</rt></ruby>いましょう。 <ruby>私<rt>わたし</rt></ruby>も <ruby>町<rt>まち</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りたいですから、<ruby>新<rt>あたら</rt></ruby>しい カメラを <ruby>持<rt>も</rt></ruby>って <ruby>行<rt>い</rt></ruby>きます」</span><br>パク「いいですね。 また <ruby>日曜日<rt>にちようび</rt></ruby>に！」</p>",
    "quizzes": [
      {
        "question": "パクさんは どうして <ruby>土曜日<rt>どようび</rt></ruby>に <ruby>行<rt>い</rt></ruby>きませんか。",
        "target_id": "L09_04_Q1",
        "choices": [
          "<ruby>用事<rt>ようじ</rt></ruby>が ありますから",
          "<ruby>写真<rt>しゃしん</rt></ruby>が <ruby>嫌<rt>きら</rt></ruby>いですから",
          "<ruby>切符<rt>きっぷ</rt></ruby>が ありませんから"
        ],
        "answer_index": 0
      },
      {
        "question": "パクさんは どうして <ruby>日曜日<rt>にちようび</rt></ruby>が <ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。",
        "target_id": "L09_04_Q2",
        "choices": [
          "<ruby>暇<rt>ひま</rt></ruby>じゃありませんから",
          "<ruby>時間<rt>じかん</rt></ruby>が たくさん ありますから",
          "<ruby>新<rt>あたら</rt></ruby>しい カメラが ありますから"
        ],
        "answer_index": 1
      },
      {
        "question": "ジムさんは どうして <ruby>新<rt>あたら</rt></ruby>しい カメラを <ruby>持<rt>も</rt></ruby>って <ruby>行<rt>い</rt></ruby>きますか。",
        "target_id": "L09_04_Q3",
        "choices": [
          "<ruby>友達<rt>ともだち</rt></ruby>に あげますから",
          "<ruby>町<rt>まち</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りたいですから"
        ],
        "answer_index": 1
      }
    ],
    "audio_file": "/audio/L09_04.mp3"
  },
  {
    "id": "TEXTBOOK_L10_01",
    "level": 10,
    "title": "アナさんの <ruby>部屋<rt>へや</rt></ruby>と <ruby>箱<rt>はこ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>",
    "schema_activation": [
      "あなたの <ruby>部屋<rt>へや</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
      "あなたの <ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>写真<rt>しゃしん</rt></ruby>が ありますか。"
    ],
    "textbook_html": "<p>ここは アナさんの <ruby>部屋<rt>へや</rt></ruby>です。<br><ruby>部屋<rt>へや</rt></ruby>の <ruby>真ん中<rt>まんなか</rt></ruby>に <ruby>机<rt>つくえ</rt></ruby>が あります。<br><ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に パソコンと ノートが あります。<br><ruby>机<rt>つくえ</rt></ruby>の <ruby>右<rt>みぎ</rt></ruby>に ベッドが あります。<br>ベッドの <ruby>下<rt>した</rt></ruby>に <ruby>小<rt>ちい</rt></ruby>さい <ruby>箱<rt>はこ</rt></ruby>が あります。<br>その <ruby>箱<rt>はこ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>家族<rt>かぞく</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>が あります。</p>",
    "quizzes": [
      {
        "question": "<ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
        "choices": [
          "パソコンと ノート",
          "パソコンと <ruby>写真<rt>しゃしん</rt></ruby>",
          "ベッド"
        ],
        "answer_index": 0
      },
      {
        "question": "<ruby>箱<rt>はこ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
        "choices": [
          "ノート",
          "パソコン",
          "<ruby>家族<rt>かぞく</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "TEXTBOOK_L10_02",
    "level": 10,
    "title": "ワトソンさんの <ruby>部屋<rt>へや</rt></ruby>",
    "schema_activation": [
      "あなたの <ruby>家<rt>うち</rt></ruby>に <ruby>猫<rt>ねこ</rt></ruby>が いますか。",
      "<ruby>部屋<rt>へや</rt></ruby>に <ruby>時計<rt>とけい</rt></ruby>が ありますか。"
    ],
    "translation": "<p>This is Watson's room.<br>There is a bed, a desk, and a chair in the room.<br>There is a computer on the desk.<br>There is a notebook next to the computer.<br>There is a clock on the wall.<br>The clock is very old.<br>There is a bookshelf under the window.<br>There are many books in the bookshelf.<br>There is a cat under the desk.<br>The cat is sleeping.<br>Is there anyone in the room?<br>No, there is no one.<br>Watson is in the kitchen now.</p>",
    "textbook_html": "<p>This is Watson's room.<br>There is a bed, a desk, and a chair in the room.<br>There is a computer on the desk.<br>There is a notebook next to the computer.<br>There is a clock on the wall.<br>The clock is very old.<br>There is a bookshelf under the window.<br>There are many books in the bookshelf.<br>There is a cat under the desk.<br>The cat is sleeping.<br>Is there anyone in the room?<br>No, there is no one.<br>Watson is in the kitchen now.</p>",
    "quizzes": [
      {
        "question": "<ruby>壁<rt>かべ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
        "choices": [
          "パソコン",
          "<ruby>時計<rt>とけい</rt></ruby>",
          "いす"
        ],
        "answer_index": 1
      },
      {
        "question": "ねこは どこに いますか。",
        "choices": [
          "<ruby>机<rt>つくえ</rt></ruby>の <ruby>下<rt>した</rt></ruby>",
          "<ruby>本棚<rt>ほんだな</rt></ruby>の <ruby>中<rt>なか</rt></ruby>",
          "<ruby>台所<rt>だいどころ</rt></ruby>"
        ],
        "answer_index": 0
      }
    ]
  },
  {
    "id": "TEXTBOOK_L10_03",
    "level": 10,
    "title": "<ruby>公園<rt>こうえん</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くに <ruby>何<rt>なに</rt></ruby>が ありますか",
    "schema_activation": [
      "あなたの <ruby>家<rt>うち</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くに <ruby>公園<rt>こうえん</rt></ruby>が ありますか。",
      "コンビニが <ruby>近<rt>ちか</rt></ruby>くに ありますか。"
    ],
    "translation": "<p>Watson and Ana are in the park.<br>This park is very large and beautiful.<br>There are many trees and flowers in the park.<br>There is a large pond in the middle of the park.<br>There are fish in the pond.<br>There are many people in the park today.<br>Children are playing in front of the pond.<br>Ana is taking photos under a tree.<br>Watson is sitting on a bench.<br>There is a dog next to Watson.<br>The dog is very cute.<br>Is there a supermarket near the park?<br>Yes, there is a large supermarket behind the park.<br>Next to the supermarket, there is a small bakery.<br>There is also a post office nearby.<br>Between the bakery and the post office, there is a mailbox.<br>Ana said, \"There is a department store over there too, isn't there?\"<br>Watson replied, \"Yes, there is everything in this town.\"<br>It is a very convenient place.<br>They will stay in the park for one more hour.</p>",
    "textbook_html": "<p>ワトソンさんと アナさんは <ruby>公園<rt>こうえん</rt></ruby>に います。<br>この <ruby>公園<rt>こうえん</rt></ruby>は とても <ruby>大<rt>おお</rt></ruby>きくて きれいです。<br><ruby>公園<rt>こうえん</rt></ruby>に <ruby>木<rt>き</rt></ruby>や <ruby>花<rt>はな</rt></ruby>が たくさん あります。<br><ruby>公園<rt>こうえん</rt></ruby>の <ruby>真<rt>ま</rt>ん中<rt>なか</rt></ruby>に <ruby>大<rt>おお</rt></ruby>きい <ruby>池<rt>いけ</rt></ruby>が あります。<br><ruby>池<rt>いけ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>魚<rt>さかな</rt></ruby>が います。<br><ruby>今日<rt>きょう</rt></ruby>は <ruby>公園<rt>こうえん</rt></ruby>に <ruby>人<rt>ひと</rt></ruby>が たくさん います。<br><ruby>池<rt>いけ</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>で <ruby>子供<rt>こども</rt></ruby>が <ruby>遊<rt>あそ</rt></ruby>んでいます。<br>アナさんは <ruby>木<rt>き</rt></ruby>の <ruby>下<rt>した</rt></ruby>で <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>っています。<br>ワトソンさんは ベンチに <ruby>座<rt>すわ</rt></ruby>っています。<br>ワトソンさんの <ruby>隣<rt>となり</rt></ruby>に いぬが います。<br>いぬは とても <ruby>可愛<rt>かわい</rt></ruby>いです。<br><ruby>公園<rt>こうえん</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くに スーパーが ありますか。<br>はい、<ruby>公園<rt>こうえん</rt></ruby>の <ruby>後<rt>うしろ</rt></ruby>に <ruby>大<rt>おお</rt></ruby>きい スーパーが あります。<br>スーパーの <ruby>隣<rt>となり</rt></ruby>に <ruby>小<rt>ちい</rt></ruby>さい パン<ruby>屋<rt>や</rt></ruby>が あります。<br><ruby>近<rt>ちか</rt></ruby>くに <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>も あります。<br>パン<ruby>屋<rt>や</rt></ruby>と <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>の <ruby>間<rt>あいだ</rt></ruby>に ポストが あります。<br>アナさんは 「あそこに デパートも ありますね」と <ruby>言<rt>い</rt></ruby>いました。<br>ワトソンさんは 「ええ、この <ruby>町<rt>まち</rt></ruby>には <ruby>何<rt>なに</rt></ruby>でも ありますよ」と <ruby>答<rt>こた</rt></ruby>えました。<br>とても <ruby>便利<rt>べんり</rt></ruby>な <ruby>所<rt>ところ</rt></ruby>です。<br><ruby>二人<rt>ふたり</rt></ruby>は もう 1<ruby>時間<rt>じかん</rt></ruby> <ruby>公園<rt>こうえん</rt></ruby>に います。</p>",
    "quizzes": [
      {
        "question": "アナさんは <ruby>どこ<rt>どこ</rt></ruby>で <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>っていますか。",
        "choices": [
          "ベンチ",
          "<ruby>池<rt>いけ</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>",
          "<ruby>木<rt>き</rt></ruby>の <ruby>下<rt>した</rt></ruby>"
        ],
        "answer_index": 2
      },
      {
        "question": "パン<ruby>屋<rt>や</rt></ruby>と <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>の <ruby>間<rt>あいだ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
        "choices": [
          "ポスト",
          "スーパー",
          "デパート"
        ],
        "answer_index": 0
      }
    ]
  },
  {
    "id": "TEXTBOOK_L10_04",
    "level": 10,
    "title": "ワトソンさんの<ruby>家<rt>うち</rt></ruby>の<ruby>中<rt>なか</rt></ruby>",
    "schema_activation": [
      "あなたの <ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
      "あなたの <ruby>家<rt>うち</rt></ruby>は <ruby>広<rt>ひろ</rt></ruby>いですか。"
    ],
    "translation": "<p>Today, Watson is introducing his house. \"This is my house. Please come in.\" There is a living room first. There is a large television in the living room. Under the television, there are many DVDs. There is a sofa. On the sofa, there is a blue cushion. There is a table in front of the sofa. There is a newspaper and a cup on the table. Watson's wife is in the living room. She is reading a book. Watson's children are in the yard. They are playing with a dog. There is a large tree in the yard. Under the tree, there is a bicycle. Next, there is the kitchen. There is a large refrigerator in the kitchen. Inside the refrigerator, there is milk and beer. There are also eggs and vegetables. There is a window above the sink. There are small flowers next to the window. Next, there is Watson's room. There is a desk in the room. Inside the drawer of the desk, there is a passport and keys. There is a computer on the desk. Next to the computer, there is a family photo. There is a bed on the right side of the room. Under the bed, there is a small box. There are old toys inside the box. There is a bookshelf on the left side of the room. There are English books and Japanese books in the bookshelf. \"There are many things in my house,\" Watson said. Watson's house is very clean. Ana and Kim came to Watson's house. They came at 3:00. Kim asked, \"Is there a restroom nearby?\" Watson said, \"Yes, it is over there. Next to the stairs.\" There is a bathroom on the second floor too. Everyone will drink tea in the living room. Is there any cake? Yes, there is cake in the refrigerator. Everyone is very happy. Watson's house is very lively today.</p>",
    "textbook_html": "<p><ruby>今日<rt>きょう</rt></ruby>、ワトソンさんは<ruby>家<rt>うち</rt></ruby>を<ruby>紹介<rt>しょうかい</rt></ruby>しています。<br>「ここはわたしの<ruby>家<rt>うち</rt></ruby>です。どうぞ<ruby>入<rt>はい</rt></ruby>ってください。」<br>まず<ruby>居間<rt>いま</rt></ruby>があります。<ruby>居間<rt>いま</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きいテレビがあります。<br>テレビの<ruby>下<rt>した</rt></ruby>にDVDがたくさんあります。<br>ソファーがあります。ソファーの<ruby>上<rt>うえ</rt></ruby>に<ruby>青<rt>あお</rt></ruby>いクッションがあります。<br>ソファーの<ruby>前<rt>まえ</rt></ruby>にテーブルがあります。<br>テーブルの<ruby>上<rt>うえ</rt></ruby>に<ruby>新聞<rt>しんぶん</rt></ruby>とコップがあります。<br><ruby>居間<rt>いま</rt></ruby>にワトソンさんの<ruby>奥<rt>おく</rt></ruby>さんがいます。<ruby>奥<rt>おく</rt></ruby>さんは<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んでいます。<br>ワトソンさんの<ruby>子供<rt>こども</rt></ruby>は<ruby>庭<rt>にわ</rt></ruby>にいます。いぬと<ruby>遊<rt>あそ</rt></ruby>んでいます。<br><ruby>庭<rt>にわ</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きい<ruby>木<rt>き</rt></ruby>があります。<ruby>木<rt>き</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>自転車<rt>じてんしゃ</rt></ruby>があります。<br><ruby>次<rt>つぎ</rt></ruby>に<ruby>台所<rt>だいどころ</rt></ruby>があります。<ruby>台所<rt>だいどころ</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きい<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>があります。<br><ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>とビールがあります。<br><ruby>卵<rt>たまご</rt></ruby>や<ruby>野菜<rt>やさい</rt></ruby>もあります。<ruby>流<rt>なが</rt></ruby>し<ruby>台<rt>だい</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>窓<rt>まど</rt></ruby>があります。<br><ruby>窓<rt>まど</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>に<ruby>小<rt>ちい</rt></ruby>さい<ruby>花<rt>はな</rt></ruby>があります。<br><ruby>次<rt>つぎ</rt></ruby>にワトソンさんの<ruby>部屋<rt>へや</rt></ruby>があります。<ruby>部屋<rt>へや</rt></ruby>に<ruby>机<rt>つくえ</rt></ruby>があります。<br><ruby>机<rt>つくえ</rt></ruby>の<ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しの<ruby>中<rt>なか</rt></ruby>にパスポートと<ruby>鍵<rt>かぎ</rt></ruby>があります。<br><ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>にパソコンがあります。<br>パソコンの<ruby>隣<rt>となり</rt></ruby>に<ruby>家族<rt>かぞく</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>があります。<br><ruby>部屋<rt>へや</rt></ruby>の<ruby>右<rt>みぎ</rt></ruby>にベッドがあります。<br>ベッドの<ruby>下<rt>した</rt></ruby>に<ruby>小<rt>ちい</rt></ruby>さい<ruby>箱<rt>はこ</rt></ruby>があります。<br><ruby>箱<rt>ほこ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>古<rt>ふる</rt></ruby>いおもちゃがあります。<br><ruby>部屋<rt>へや</rt></ruby>の<ruby>左<rt>ひだり</rt></ruby>に<ruby>本棚<rt>ほんだな</rt></ruby>があります。<br><ruby>本棚<rt>ほんだな</rt></ruby>に<ruby>英語<rt>えいご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>と<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>があります。<br>「わたしの<ruby>家<rt>うち</rt></ruby>にはいろいろな<ruby>物<rt>もの</rt></ruby>がありますね」とワトソンさんは<ruby>言<rt>い</rt></ruby>いました。<br>ワトソンさんの<ruby>家<rt>うち</rt></ruby>はとてもきれいです。<br>アナさんとキムさんがワトソンさんの<ruby>家<rt>うち</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ました。<br>3<ruby>時<rt>じ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ました。<br>キムさんは「<ruby>近<rt>ちか</rt></ruby>くにお<ruby>手洗<rt>てあらい</rt></ruby>がありますか」と<ruby>聞<rt>き</rt></ruby>きました。<br>ワトソンさんは「はい、あそこにありますよ。<ruby>階段<rt>かいだん</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>です」と<ruby>言<rt>い</rt></ruby>いました。<br>2<ruby>階<rt>かい</rt></ruby>にもお<ruby>手洗<rt>てあらい</rt></ruby>があります。<br>みんなで<ruby>居間<rt>いま</rt></ruby>でお<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みます。<br>ケーキがありますか。はい、<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>にケーキがあります。<br>みんなとても<ruby>嬉<rt>うれ</rt></ruby>しいです。<ruby>今日<rt>きょう</rt></ruby>のワトソンさんの<ruby>家<rt>うち</rt></ruby>はとてもにぎやかです。</p>",
    "quizzes": [
      {
        "question": "<ruby>机<rt>つくえ</rt></ruby>の <ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しの <ruby>中<rt>なか</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
        "choices": [
          "パソコン",
          "パスポートと <ruby>鍵<rt>かぎ</rt></ruby>",
          "<ruby>写真<rt>しゃしん</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>が ありますか。",
        "choices": [
          "はい、<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>と ビールが あります",
          "いいえ、ありません"
        ],
        "answer_index": 0
      }
    ]
  }
];
