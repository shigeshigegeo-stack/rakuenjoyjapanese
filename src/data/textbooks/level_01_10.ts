import { Story } from './types';

export const stories_level_01_10: Story[] = [
  {
    "id": "STORY_L01_01",
    "level": 1,
    "title": "はじめまして",
    "schema_activation": [
      "あなたは <ruby>学生<rt>がくせい</rt></ruby>ですか。",
      "お<ruby>仕事<rt>しごと</rt></ruby>はしていますか。"
    ],
    "translation": "<p>Watson: \"Nice to meet you. I am Watson.<br>I came from America.<br>I am a company employee. Nice to meet you.\"</p>",
    "story_html": "<p>ワトソン「はじめまして。ワトソンです。<br>アメリカから <ruby>来<rt>き</rt></ruby>ました。<br>わたしは <ruby>会社員<rt>かいしゃいん</rt></ruby>です。<br>どうぞ よろしく お<ruby>願<rt>ねが</rt></ruby>いします。」</p>",
    "quizzes": [
      {
        "question": "ワトソンさんは どこから <ruby>来<rt>き</rt></ruby>ましたか。",
        "choices": [
          "アメリカ",
          "ブラジル",
          "ドイツ"
        ],
        "answer_index": 0
      },
      {
        "question": "ワトソンさんの お<ruby>仕事<rt>しごと</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "choices": [
          "<ruby>先生<rt>せんせい</rt></ruby>",
          "<ruby>学生<rt>がくせい</rt></ruby>",
          "<ruby>会社員<rt>かいしゃいん</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "STORY_L01_02",
    "level": 1,
    "title": "アナさんは <ruby>学生<rt>がくせい</rt></ruby>です",
    "schema_activation": [
      "あなたの <ruby>名前<rt>なまえ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
      "あなたは どこの <ruby>国<rt>くに</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>ですか。"
    ],
    "translation": "<p>Watson: \"Who is that person?\"<br>Mr. Yamada: \"That is Ana. She is a student at Sakura University.\"<br>Watson: \"Is she American?\"<br>Mr. Yamada: \"No, she is not American. She is German.\"</p>",
    "story_html": "<p>ワトソン「あの <ruby>人<rt>ひと</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>ですか。」<br><ruby>山田<rt>やまだ</rt></ruby>「あの方は アナさんです。<br>さくら<ruby>大学<rt>だいがく</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>です。」<br>ワトソン「アメリカ<ruby>人<rt>じん</rt></ruby>ですか。」<br><ruby>山田<rt>やまだ</rt></ruby>「いいえ、アメリカ<ruby>人<rt>じん</rt></ruby>じゃありません。<br>ドイツ<ruby>人<rt>じん</rt></ruby>です。」</p>",
    "quizzes": [
      {
        "question": "アナさんは どこの <ruby>大学<rt>だいがく</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>ですか。",
        "choices": [
          "さくら<ruby>大学<rt>だいがく</rt></ruby>",
          "ふじ<ruby>大学<rt>だいがく</rt></ruby>",
          "あさひ<ruby>大学<rt>だいがく</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "アナさんは どこの <ruby>国<rt>くに</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>ですか。",
        "choices": [
          "アメリカ<ruby>人<rt>じん</rt></ruby>",
          "ドイツ<ruby>人<rt>じん</rt></ruby>",
          "フランス<ruby>人<rt>じん</rt></ruby>"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L01_03",
    "level": 1,
    "title": "<ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>先生<rt>せんせい</rt></ruby>です",
    "schema_activation": [
      "あなたは <ruby>先生<rt>せんせい</rt></ruby>ですか。",
      "あなたの <ruby>先生<rt>せんせい</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>ですか。"
    ],
    "translation": "<p>Professor Yamada: \"I am Yamada. I am a teacher.\"<br>Professor Yamada: \"Watson, are you a teacher, too?\"<br>Watson: \"No, I am not a teacher. I am an engineer.\"</p>",
    "story_html": "<p><ruby>山田<rt>やまだ</rt></ruby>「わたしは <ruby>山田<rt>やまだ</rt></ruby>です。<ruby>先生<rt>せんせい</rt></ruby>です。」<br><ruby>山田<rt>やまだ</rt></ruby>「ワトソンさんも <ruby>先生<rt>せんせい</rt></ruby>ですか。」<br>ワトソン「いいえ、わたしは <ruby>先生<rt>せんせい</rt></ruby>じゃありません。<br>エンジニアです。」</p>",
    "quizzes": [
      {
        "question": "<ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>何<rt>なん</rt></ruby>ですか。",
        "choices": [
          "エンジニア",
          "<ruby>会社員<rt>かいしゃいん</rt></ruby>",
          "<ruby>先生<rt>せんせい</rt></ruby>"
        ],
        "answer_index": 2
      },
      {
        "question": "ワトソンさんの お<ruby>仕事<rt>しごと</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。",
        "choices": [
          "エンジニア",
          "<ruby>先生<rt>せんせい</rt></ruby>",
          "<ruby>学生<rt>がくせい</rt></ruby>"
        ],
        "answer_index": 0
      }
    ]
  },
  {
    "id": "STORY_L01_04",
    "level": 1,
    "title": "キムさんは <ruby>韓国人<rt>かんこくじん</rt></ruby>です",
    "schema_activation": [
      "あなたの <ruby>友達<rt>ともだち</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>ですか。",
      "あなたの <ruby>友達<rt>ともだち</rt></ruby>は <ruby>学生<rt>がくせい</rt></ruby>ですか。"
    ],
    "translation": "<p>Kim: \"Nice to meet you. I am Kim.\"<br>Kim: \"I am from Korea.\"<br>Watson: \"Kim is a student, too. She is not a teacher.\"</p>",
    "story_html": "<p>キム「はじめまして。キムです。」<br>キム「<ruby>韓国<rt>かんこく</rt></ruby>から <ruby>来<rt>き</rt></ruby>ました。」<br>ワトソン「キムさんも <ruby>学生<rt>がくせい</rt></ruby>です。<br><ruby>先生<rt>せんせい</rt></ruby>じゃありません。」</p>",
    "quizzes": [
      {
        "question": "キムさんは どこから <ruby>来<rt>き</rt></ruby>ましたか。",
        "choices": [
          "ドイツ",
          "<ruby>日本<rt>にほん</rt></ruby>",
          "<ruby>韓国<rt>かんこく</rt></ruby>"
        ],
        "answer_index": 2
      },
      {
        "question": "キムさんは <ruby>先生<rt>せんせい</rt></ruby>ですか。",
        "choices": [
          "はい",
          "いいえ"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L02_01",
    "level": 2,
    "title": "これは <ruby>何<rt>なん</rt></ruby>ですか？",
    "schema_activation": [
      "あなたは よく <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みますか。",
      "あなたは <ruby>辞書<rt>じしょ</rt></ruby>を <ruby>持<rt>も</rt></ruby>っていますか。"
    ],
    "translation": "<p>Watson: \"What is this?\"<br>Ana: \"That is a dictionary.\"<br>Watson: \"Is it a Japanese dictionary?\"<br>Ana: \"No, it is an English dictionary. It is my dictionary.\"</p>",
    "story_html": "<p>ワトソン「これは <ruby>何<rt>なに</rt></ruby>ですか。」<br>アナ「それは <ruby>辞書<rt>じしょ</rt></ruby>です。」<br>ワトソン「<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>ですか。」<br>アナ「いいえ、<ruby>英語<rt>えいご</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>です。<br>わたしの <ruby>辞書<rt>じしょ</rt></ruby>です。」</p>",
    "quizzes": [
      {
        "question": "アナさんの <ruby>辞書<rt>じしょ</rt></ruby>は <ruby>何語<rt>なにご</rt></ruby>ですか。",
        "choices": [
          "<ruby>日本語<rt>にほんご</rt></ruby>",
          "<ruby>英語<rt>えいご</rt></ruby>",
          "ドイツ<ruby>語<rt>ご</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "それは <ruby>誰<rt>だれ</rt></ruby>の <ruby>辞書<rt>じしょ</rt></ruby>ですか。",
        "choices": [
          "ワトソンさんの",
          "アナさんの",
          "<ruby>山田<rt>やまだ</rt></ruby>さんの"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L02_02",
    "level": 2,
    "title": "この <ruby>傘<rt>かさ</rt></ruby>は あなたのですか",
    "schema_activation": [
      "あなたは <ruby>傘<rt>かさ</rt></ruby>を <ruby>持<rt>も</rt></ruby>っていますか。",
      "あなたは ノートを <ruby>持<rt>も</rt></ruby>っていますか。"
    ],
    "translation": "<p>Kim: \"Watson, is this umbrella yours?\"<br>Watson: \"No, it is not mine. It is Ana's.\"<br>Kim: \"Is this notebook Ana's, too?\"<br>Watson: \"Yes, that is hers.\"</p>",
    "story_html": "<p>キム「ワトソンさん、この <ruby>傘<rt>かさ</rt></ruby>は あなたのですか。」<br>ワトソン「いいえ、わたしのじゃありません。<br>アナさんのです。」<br>キム「この ノートも アナさんのですか。」<br>ワトソン「はい、それは アナさんのです。」</p>",
    "quizzes": [
      {
        "question": "この <ruby>傘<rt>かさ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>のですか。",
        "choices": [
          "ワトソンさんの",
          "キムさんの",
          "アナさんの"
        ],
        "answer_index": 2
      },
      {
        "question": "この ノートも アナさんのですか。",
        "choices": [
          "はい",
          "いいえ"
        ],
        "answer_index": 0
      }
    ]
  },
  {
    "id": "STORY_L02_03",
    "level": 2,
    "title": "お<ruby>土産<rt>みやげ</rt></ruby>の チョコレート",
    "schema_activation": [
      "あなたは チョコレートが <ruby>好<rt>す</rt></ruby>きですか。",
      "よく お<ruby>土産<rt>みやげ</rt></ruby>を <ruby>買<rt>か</rt></ruby>いますか。"
    ],
    "translation": "<p>Watson: \"Ana, this is a souvenir for you.\"<br>Ana: \"Thank you. What is this?\"<br>Watson: \"It is chocolate. It is chocolate from America.\"</p>",
    "story_html": "<p>ワトソン「アナさん、これは お<ruby>土産<rt>みやげ</rt></ruby>です。」<br>アナ「ありがとうございます。<ruby>何<rt>なに</rt></ruby>ですか。」<br>ワトソン「チョコレートです。<br>アメリカの チョコレートです。」</p>",
    "quizzes": [
      {
        "question": "お<ruby>土産<rt>みやげ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。",
        "choices": [
          "チョコレート",
          "ケーキ",
          "ワイン"
        ],
        "answer_index": 0
      },
      {
        "question": "それは どこの チョコレートですか。",
        "choices": [
          "ドイツの",
          "<ruby>日本<rt>にほん</rt></ruby>の",
          "アメリカの"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "STORY_L02_04",
    "level": 2,
    "title": "この <ruby>鍵<rt>かぎ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>のですか",
    "schema_activation": [
      "あなたは <ruby>家<rt>うち</rt></ruby>の <ruby>鍵<rt>かぎ</rt></ruby>を <ruby>持<rt>も</rt></ruby>っていますか。",
      "あなたは カードを <ruby>持<rt>も</rt></ruby>っていますか。"
    ],
    "translation": "<p>Ana: \"Whose key is this? Is it yours, Watson?\"<br>Watson: \"No, it's not. It is Mr. Yamada's key.\"<br>Ana: \"I see. And this card?\"<br>Watson: \"That is my card.\"</p>",
    "story_html": "<p>アナ「この <ruby>鍵<rt>かぎ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>のですか。<br>ワトソンさんのですか。」<br>ワトソン「いいえ、ちがいます。<ruby>山田<rt>やまだ</rt></ruby>さんの <ruby>鍵<rt>かぎ</rt></ruby>です。」<br>アナ「そうですか。じゃあ、この カードは？」<br>ワトソン「それは わたしの カードです。」</p>",
    "quizzes": [
      {
        "question": "この <ruby>鍵<rt>かぎ</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>のですか。",
        "choices": [
          "ワトソンさんの",
          "<ruby>山田<rt>やまだ</rt></ruby>さんの",
          "アナさんの"
        ],
        "answer_index": 1
      },
      {
        "question": "カードは <ruby>誰<rt>だれ</rt></ruby>のですか。",
        "choices": [
          "ワトソンさんの",
          "アナさんの",
          "<ruby>山田<rt>やまだ</rt></ruby>さんの"
        ],
        "answer_index": 0
      }
    ]
  },
  {
    "id": "STORY_L03_01",
    "level": 3,
    "title": "<ruby>受付<rt>うけつけ</rt></ruby>は あそこです",
    "schema_activation": [
      "あなたの<ruby>好<rt>す</rt></ruby>きな<ruby>場所<rt>ばしょ</rt></ruby>はどこですか。",
      "あなたの <ruby>家<rt>うち</rt></ruby>は どこですか。"
    ],
    "translation": "<p>Watson: \"Where is the reception?\"<br>Staff: \"The reception is over there.\"<br>Watson: \"Thank you. And where is the toilet?\"<br>Staff: \"It is right here.\"</p>",
    "story_html": "<p>ワトソン「すみません、<ruby>受付<rt>うけつけ</rt></ruby>は どこですか。」<br><ruby>案内<rt>あんない</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>「<ruby>受付<rt>うけつけ</rt></ruby>は あそこです。」<br>ワトソン「ありがとうございます。<br>トイレは どこですか。」<br><ruby>案内<rt>あんない</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>「トイレは ここです。」</p>",
    "quizzes": [
      {
        "question": "<ruby>受付<rt>うけつけ</rt></ruby>は どこに ありますか。",
        "choices": [
          "ここ",
          "そこ",
          "あそこ"
        ],
        "answer_index": 2
      },
      {
        "question": "トイレは どこに ありますか。",
        "choices": [
          "ここ",
          "そこ",
          "あそこ"
        ],
        "answer_index": 0
      }
    ]
  },
  {
    "id": "STORY_L03_02",
    "level": 3,
    "title": "<ruby>教室<rt>きょうしつ</rt></ruby>は 2<ruby>階<rt>かい</rt></ruby>です",
    "schema_activation": [
      "あなたの <ruby>教室<rt>きょうしつ</rt></ruby>は <ruby>何階<rt>なんかい</rt></ruby>ですか。",
      "あなたの <ruby>部屋<rt>へや</rt></ruby>は <ruby>何階<rt>なんかい</rt></ruby>ですか。"
    ],
    "translation": "<p>Ana: \"Watson, where is the classroom?\"<br>Watson: \"The classroom is on the 2nd floor.\"<br>Ana: \"Where is Professor Yamada?\"<br>Watson: \"He is in the office. The office is on the 1st floor.\"</p>",
    "story_html": "<p>アナ「ワトソンさん、<ruby>教室<rt>きょうしつ</rt></ruby>は どこですか。」<br>ワトソン「<ruby>教室<rt>きょうしつ</rt></ruby>は 2<ruby>階<rt>かい</rt></ruby>です。」<br>アナ「<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は どこですか。」<br>ワトソン「<ruby>事務室<rt>じむしつ</rt></ruby>です。<br><ruby>事務室<rt>じむしつ</rt></ruby>は 1<ruby>階<rt>かい</rt></ruby>です。」</p>",
    "quizzes": [
      {
        "question": "<ruby>教室<rt>きょうしつ</rt></ruby>は <ruby>何階<rt>なんかい</rt></ruby>ですか。",
        "choices": [
          "1<ruby>階<rt>かい</rt></ruby>",
          "2<ruby>階<rt>かい</rt></ruby>",
          "3<ruby>階<rt>かい</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は どこに いますか。",
        "choices": [
          "<ruby>教室<rt>きょうしつ</rt></ruby>",
          "<ruby>食堂<rt>しょくどう</rt></ruby>",
          "<ruby>事務室<rt>じむしつ</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "STORY_L03_03",
    "level": 3,
    "title": "ワトソンさんの <ruby>会社<rt>かいしゃ</rt></ruby>",
    "schema_activation": [
      "お<ruby>国<rt>くに</rt></ruby>は どちらですか。",
      "あなたの <ruby>会社<rt>かいしゃ</rt></ruby>は どこに ありますか。"
    ],
    "translation": "<p>Professor Yamada: \"Watson, which country are you from?\"<br>Watson: \"My country is America.\"<br>Professor Yamada: \"Where is your company?\"<br>Watson: \"It is in Ginza.\"</p>",
    "story_html": "<p><ruby>山田<rt>やまだ</rt></ruby>「ワトソンさん、お<ruby>国<rt>くに</rt></ruby>は どちらですか。」<br>ワトソン「アメリカです。」<br><ruby>山田<rt>やまだ</rt></ruby>「<ruby>会社<rt>かいしゃ</rt></ruby>は どこですか。」<br>ワトソン「<ruby>銀座<rt>ぎんざ</rt></ruby>に あります。」</p>",
    "quizzes": [
      {
        "question": "ワトソンさんの お<ruby>国<rt>くに</rt></ruby>は どちらですか。",
        "choices": [
          "<ruby>日本<rt>にほん</rt></ruby>",
          "アメリカ",
          "ドイツ"
        ],
        "answer_index": 1
      },
      {
        "question": "<ruby>会社<rt>かいしゃ</rt></ruby>は どこに ありますか。",
        "choices": [
          "<ruby>新宿<rt>しんじゅく</rt></ruby>",
          "<ruby>渋谷<rt>しぶヤ</rt></ruby>",
          "<ruby>銀座<rt>ぎんざ</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "STORY_L03_04",
    "level": 3,
    "title": "この コンピューターは いくらですか",
    "schema_activation": [
      "あなたは パソコンを <ruby>持<rt>も</rt></ruby>っていますか。",
      "あなたは パソコンが <ruby>欲<rt>ほ</rt></ruby>しいですか。"
    ],
    "translation": "<p>Watson: \"How much is this computer?\"<br>Staff: \"It is 150,000 yen.\"<br>Watson: \"Is it a Japanese computer?\"<br>Staff: \"Yes, that's right.\"</p>",
    "story_html": "<p>ワトソン「この パソコンは いくらですか。」<br><ruby>人<rt>ひと</rt></ruby>「150,000<ruby>円<rt>えん</rt></ruby>です。」<br>ワトソン「日本の パソコンですか。」<br><ruby>人<rt>ひと</rt></ruby>「はい、そうです。」</p>",
    "quizzes": [
      {
        "question": "パソコンは いくらですか。",
        "choices": [
          "100,000<ruby>円<rt>えん</rt></ruby>",
          "150,000<ruby>円<rt>えん</rt></ruby>",
          "200,000<ruby>円<rt>えん</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "それは どこの パソコンですか。",
        "choices": [
          "<ruby>日本<rt>にほん</rt></ruby>の",
          "アメリカの",
          "<ruby>韓国<rt>かんこく</rt></ruby>の"
        ],
        "answer_index": 0
      }
    ]
  },
  {
    "id": "STORY_L04_01",
    "level": 4,
    "title": "<ruby>今<rt>いま</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>ですか",
    "schema_activation": [
      "あなたの<ruby>国<rt>くに</rt></ruby>では<ruby>今<rt>いま</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>ですか。",
      "あなたは <ruby>何時<rt>なんじ</rt></ruby>に <ruby>寝<rt>ね</rt></ruby>ますか。"
    ],
    "translation": "<p>Watson: \"Excuse me, what time is it now?\"<br>Staff: \"It is 10:30.\"<br>Watson: \"What time is it in New York now?\"<br>Staff: \"It is 8:30 PM.\"</p>",
    "story_html": "<p>ワトソン「すみません、<ruby>今<rt>いま</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>ですか。」<br><ruby>人<rt>ひと</rt></ruby>「10<ruby>時半<rt>じはん</rt></ruby>です。」<br>ワトソン「ニューヨークは <ruby>今<rt>いま</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>ですか。」<br><ruby>人<rt>ひと</rt></ruby>「<ruby>午後<rt>ごご</rt></ruby> 8<ruby>時半<rt>じはん</rt></ruby>ですよ。」</p>",
    "quizzes": [
      {
        "question": "<ruby>今<rt>いま</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>ですか。",
        "choices": [
          "10<ruby>時<rt>じ</rt></ruby>",
          "10<ruby>時半<rt>じはん</rt></ruby>",
          "11<ruby>時<rt>じ</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "ニューヨークは <ruby>今<rt>いま</rt></ruby> <ruby>午前<rt>ごぜん</rt></ruby>ですか、<ruby>午後<rt>ごご</rt></ruby>ですか。",
        "choices": [
          "<ruby>午前<rt>ごぜん</rt></ruby>",
          "<ruby>午後<rt>ごご</rt></ruby>"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L04_02",
    "level": 4,
    "title": "<ruby>会社<rt>かいしゃ</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>からですか",
    "schema_activation": [
      "あなたの <ruby>学校<rt>がっこう</rt></ruby>/<ruby>会社<rt>かいしゃ</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>までですか。",
      "<ruby>日曜日<rt>にちようび</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みですか。"
    ],
    "translation": "<p>Watson's company is from 9:00 to 5:00.<br>The break is from 12:00 to 1:00.<br>The company is closed on Saturdays and Sundays.<br>Watson works every day.</p>",
    "story_html": "<p>ワトソンさんの <ruby>会社<rt>かいしゃ</rt></ruby>は 9<ruby>時<rt>じ</rt></ruby>から 5<ruby>時<rt>じ</rt></ruby>までです。<br><ruby>昼<rt>ひる</rt></ruby><ruby>休<rt>やす</rt></ruby>みは 12<ruby>時<rt>じ</rt></ruby>から 1<ruby>時<rt>じ</rt></ruby>までです。<br><ruby>土曜日<rt>どようび</rt></ruby>と <ruby>日曜日<rt>にちようび</rt></ruby>は <ruby>休<rt>やす</rt></ruby>みです。<br>ワトソンさんは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>働<rt>はたら</rt></ruby>きます。</p>",
    "quizzes": [
      {
        "question": "<ruby>会社<rt>かいしゃ</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>までですか。",
        "choices": [
          "1<ruby>時<rt>じ</rt></ruby>",
          "5<ruby>時<rt>じ</rt></ruby>",
          "9<ruby>時<rt>じ</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "<ruby>会社<rt>かいしゃ</rt></ruby>は <ruby>何曜日<rt>なにようび</rt></ruby>が <ruby>休<rt>やす</rt></ruby>みですか。",
        "choices": [
          "<ruby>月曜日<rt>げつようび</rt></ruby>と <ruby>火曜日<rt>かようび</rt></ruby>",
          "<ruby>水曜日<rt>すいようび</rt></ruby>と <ruby>木曜日<rt>もくようび</rt></ruby>",
          "<ruby>土曜日<rt>どようび</rt></ruby>と <ruby>日曜日<rt>にちようび</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "STORY_L04_03",
    "level": 4,
    "title": "<ruby>毎朝<rt>まいあさ</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きますか",
    "schema_activation": [
      "あなたは <ruby>毎朝<rt>まいあさ</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きますか。",
      "<ruby>昨日<rt>きのう</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>まで <ruby>勉強<rt>べんきょう</rt></ruby>しましたか。"
    ],
    "translation": "<p>Watson gets up at 6:30 every morning.<br>He studies Japanese from 7:00 to 8:00.<br>Yesterday, he studied until 11:00 PM.<br>He slept at 12:00.</p>",
    "story_html": "<p>ワトソンさんは <ruby>毎朝<rt>まいあさ</rt></ruby> 6<ruby>時半<rt>じはん</rt></ruby>に <ruby>起<rt>お</rt></ruby>きます。<br>7<ruby>時<rt>じ</rt></ruby>から 8<ruby>時<rt>じ</rt></ruby>まで <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>します。<br><ruby>昨日<rt>きのう</rt></ruby>は <ruby>夜<rt>よる</rt></ruby> 11<ruby>時<rt>じ</rt></ruby>まで <ruby>勉強<rt>べんきょう</rt></ruby>しました。<br>12<ruby>時<rt>じ</rt></ruby>に <ruby>寝<rt>ね</rt></ruby>ました。</p>",
    "quizzes": [
      {
        "question": "ワトソンさんは <ruby>毎朝<rt>まいあさ</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きますか。",
        "choices": [
          "6<ruby>時<rt>じ</rt></ruby>",
          "6<ruby>時半<rt>じはん</rt></ruby>",
          "7<ruby>時<rt>じ</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "<ruby>昨日<rt>きのう</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>寝<rt>ね</rt></ruby>ましたか。",
        "choices": [
          "11<ruby>時<rt>じ</rt></ruby>",
          "12<ruby>時<rt>じ</rt></ruby>",
          "1<ruby>時<rt>じ</rt></ruby>"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L04_04",
    "level": 4,
    "title": "<ruby>図書館<rt>としょかん</rt></ruby>の <ruby>電話番号<rt>でんわばんごう</rt></ruby>",
    "schema_activation": [
      "あなたは よく <ruby>電話<rt>でんわ</rt></ruby>を かけますか。",
      "<ruby>図書館<rt>としょかん</rt></ruby>へ よく <ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "translation": "<p>Ana: \"Watson, what is the telephone number of the library?\"<br>Watson: \"It's 03-1234-5678.\"<br>Ana: \"What time does the library finish?\"<br>Watson: \"It finishes at 7:00 PM.\"</p>",
    "story_html": "<p>アナ「ワトソンさん、<ruby>図書館<rt>としょかん</rt></ruby>の <ruby>電話番号<rt>でんわばんごう</rt></ruby>は <ruby>何番<rt>なんばん</rt></ruby>ですか。」<br>ワトソン「03の 1234の 5678です。」<br>アナ「<ruby>図書館<rt>としょかん</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>に <ruby>終<rt>お</rt></ruby>わりますか。」<br>ワトソン「<ruby>午後<rt>ごご</rt></ruby> 7<ruby>時<rt>じ</rt></ruby>に <ruby>終<rt>お</rt></ruby>わりますよ。」</p>",
    "quizzes": [
      {
        "question": "<ruby>図書館<rt>としょかん</rt></ruby>の <ruby>電話番号<rt>でんわばんごう</rt></ruby>は <ruby>何番<rt>なんばん</rt></ruby>ですか。",
        "choices": [
          "03-1234-5678",
          "03-5678-1234",
          "090-1234-5678"
        ],
        "answer_index": 0
      },
      {
        "question": "<ruby>図書館<rt>としょかん</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>に <ruby>終<rt>お</rt></ruby>わりますか。",
        "choices": [
          "<ruby>午後<rt>ごご</rt></ruby> 5<ruby>時<rt>じ</rt></ruby>",
          "<ruby>午後<rt>ごご</rt></ruby> 6<ruby>時<rt>じ</rt></ruby>",
          "<ruby>午後<rt>ごご</rt></ruby> 7<ruby>時<rt>じ</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "STORY_L05_01",
    "level": 5,
    "title": "<ruby>明日<rt>あした</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか",
    "schema_activation": [
      "<ruby>明日<rt>あした</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか。",
      "<ruby>週末<rt>しゅうまつ</rt></ruby> <ruby>何<rt>なに</rt></ruby>を しますか。"
    ],
    "translation": "<p>Watson: \"Where are you going tomorrow?\"<br>Ana: \"I am going to Shinjuku.\"<br>Watson: \"What are you going by?\"<br>Ana: \"I am going by train. I am going alone.\"</p>",
    "story_html": "<p>ワトソン「<ruby>明日<rt>あした</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか。」<br>アナ「<ruby>新宿<rt>しんじゅく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。」<br>ワトソン「<ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか。」<br>アナ「<ruby>電車<rt>でんしゃ</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます。<ruby>一人<rt>ひとり</rt></ruby>で <ruby>行<rt>い</rt></ruby>きます。」</p>",
    "quizzes": [
      {
        "question": "アナさんは <ruby>明日<rt>あした</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きますか。",
        "choices": [
          "<ruby>新宿<rt>しんじゅく</rt></ruby>",
          "<ruby>渋谷<rt>しぶヤ</rt></ruby>",
          "<ruby>銀座<rt>ぎんざ</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "アナさんは <ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか。",
        "choices": [
          "バス",
          "<ruby>電車<rt>でんしゃ</rt></ruby>",
          "<ruby>一人<rt>ひとり</rt></ruby>"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L05_02",
    "level": 5,
    "title": "<ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました",
    "schema_activation": [
      "<ruby>先週<rt>せんしゅう</rt></ruby> どこへ <ruby>行<rt>い</rt></ruby>きましたか。",
      "<ruby>何<rt>なに</rt></ruby>で <ruby>学校<rt>がっこう</rt></ruby>/<ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "translation": "<p>Watson went to Kyoto last week.<br>He went with Mr. Yamada.<br>They went by Shinkansen.<br>He returned home at 9:00 yesterday.</p>",
    "story_html": "<p>ワトソンさんは <ruby>先週<rt>せんしゅう</rt></ruby> <ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<br><ruby>山田<rt>やまだ</rt></ruby>さんと <ruby>行<rt>い</rt></ruby>きました。<br><ruby>新幹線<rt>しんかんせん</rt></ruby>で <ruby>行<rt>い</rt></ruby>きました。<br><ruby>昨日<rt>きのう</rt></ruby> 9<ruby>時<rt>じ</rt></ruby>に <ruby>家<rt>うち</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>りました。</p>",
    "quizzes": [
      {
        "question": "ワトソンさんは どこへ <ruby>行<rt>い</rt></ruby>きましたか。",
        "choices": [
          "<ruby>東京<rt>とうきょう</rt></ruby>",
          "<ruby>大阪<rt>おおさか</rt></ruby>",
          "<ruby>京都<rt>きょうと</rt></ruby>"
        ],
        "answer_index": 2
      },
      {
        "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きましたか。",
        "choices": [
          "バス",
          "<ruby>電車<rt>でんしゃ</rt></ruby>",
          "<ruby>新幹線<rt>しんかんせん</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "STORY_L05_03",
    "level": 5,
    "title": "お<ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか",
    "schema_activation": [
      "あなたの <ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。",
      "<ruby>誕生日<rt>たんじょうび</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ほしいですか。"
    ],
    "translation": "<p>Watson: \"Ana, when is your birthday?\"<br>Ana: \"It is August 15th.\"<br>Watson: \"I see. When did you come to Japan?\"<br>Ana: \"I came on April 1st.\"</p>",
    "story_html": "<p>ワトソン「アナさん、お<ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。」<br>アナ「8<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>です。」<br>ワトソン「そうですか。<ruby>日本<rt>にほん</rt></ruby>へ いつ <ruby>来<rt>き</rt></ruby>ましたか。」<br>アナ「4<ruby>月<rt>がつ</rt></ruby> 1<ruby>日<rt>ついたち</rt></ruby>に <ruby>来<rt>き</rt></ruby>ました。」</p>",
    "quizzes": [
      {
        "question": "アナさんの お<ruby>誕生日<rt>たんじょうび</rt></ruby>は いつですか。",
        "choices": [
          "4<ruby>月<rt>がつ</rt></ruby> 1<ruby>日<rt>ついたち</rt></ruby>",
          "8<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>",
          "10<ruby>月<rt>がつ</rt></ruby> 5<ruby>日<rt>にち</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "アナさんは いつ <ruby>日本<rt>にほん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ましたか。",
        "choices": [
          "4<ruby>月<rt>がつ</rt></ruby> 1<ruby>日<rt>ついたち</rt></ruby>",
          "8<ruby>月<rt>がつ</rt></ruby> 15<ruby>日<rt>にち</rt></ruby>",
          "1<ruby>月<rt>がつ</rt></ruby>"
        ],
        "answer_index": 0
      }
    ]
  },
  {
    "id": "STORY_L05_04",
    "level": 5,
    "title": "タクシーで <ruby>帰<rt>かえ</rt></ruby>ります",
    "schema_activation": [
      "あなたは バスで <ruby>帰<rt>かえ</rt></ruby>りますか。",
      "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>何<rt>なに</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>りますか。"
    ],
    "translation": "<p>Watson and Kim are at the station.<br>Kim: \"Are you going home by bus?\"<br>Watson: \"No, I am going home by taxi.\"<br>Kim: \"I see. I will walk home.\"</p>",
    "story_html": "<p>ワトソンさんと キムさんは <ruby>駅<rt>えき</rt></ruby>に います。<br>キム「バスで <ruby>帰<rt>かえ</rt></ruby>りますか。」<br>ワトソン「いいえ、タクシーで <ruby>帰<rt>かえ</rt></ruby>ります。」<br>キム「そうですか。わたしは <ruby>歩<rt>ある</rt></ruby>いて <ruby>帰<rt>かえ</rt></ruby>ります。」</p>",
    "quizzes": [
      {
        "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>りますか。",
        "choices": [
          "バス",
          "タクシー",
          "<ruby>電車<rt>でんしゃ</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "キムさんは <ruby>何<rt>なに</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>りますか。",
        "choices": [
          "タクシー",
          "<ruby>バス<rt>ばす</rt></ruby>",
          "<ruby>歩<rt>ある</rt></ruby>いて"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "STORY_L6_01",
    "level": 6,
    "title": "<ruby>大学<rt>だいがく</rt></ruby>の <ruby>食堂<rt>しょくどう</rt></ruby>で",
    "schema_activation": [
      "あなたは <ruby>朝<rt>あさ</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べますか。",
      "<ruby>今日<rt>きょう</rt></ruby> <ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。"
    ],
    "translation": "<p>Ana goes to the university cafeteria at 12:30 every day.<br>She eats lunch at the cafeteria.</p><p>Ana eats curry.<br>Watson eats fish.</p><p>After that, Ana drinks tea.<br>Watson drinks coffee.</p>",
    "story_html": "<p>アナさんは <ruby>毎日<rt>まいにち</rt></ruby> 12<ruby>時半<rt>じはん</rt></ruby>に <ruby>大学<rt>だいがく</rt></ruby>の <ruby>食堂<rt>しょくどう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きます。<br><ruby>食堂<rt>しょくどう</rt></ruby>で <ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べます。</p><p>アナさんは カレーを <ruby>食<rt>た</rt></ruby>べます。<br>ワトソンさんは <ruby>魚<rt>さかな</rt></ruby>を <ruby>食<rt>た</rt></ruby>べます。</p><p>それから、アナさんは お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みます。<br>ワトソンさんは コーヒーを <ruby>飲<rt>の</rt></ruby>みます。</p>",
    "quizzes": [
      {
        "question": "アナさんは <ruby>何<rt>なに</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みますか。",
        "choices": [
          "お<ruby>茶<rt>ちゃ</rt></ruby>",
          "コーヒー",
          "<ruby>水<rt>みず</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べますか。",
        "choices": [
          "カレー",
          "<ruby>魚<rt>さかな</rt></ruby>",
          "パスタ"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L6_02",
    "level": 6,
    "title": "<ruby>新宿<rt>しんじゅく</rt></ruby>で <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>",
    "schema_activation": [
      "よく <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>を しますか。",
      "<ruby>最近<rt>さいきん</rt></ruby> <ruby>何<rt>なに</rt></ruby>を <ruby>買<rt>か</rt></ruby>いましたか。"
    ],
    "translation": "<p>Today is Saturday.<br>Ana went to Shinjuku with Kim.<br>They went shopping at a department store.</p><p>Kim bought a watch.<br>Ana bought a Japanese book and a card.</p><p>After that, they had dinner at a restaurant.</p>",
    "story_html": "<p><ruby>今日<rt>きょう</rt></ruby>は <ruby>土曜日<rt>どようび</rt></ruby>です。<br>アナさんは キムさんと <ruby>新宿<rt>しんじゅく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<br>デパートで <ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>を しました。</p><p>キムさんは <ruby>時計<rt>とけい</rt></ruby>を <ruby>買<rt>か</rt></ruby>いました。<br>アナさんは <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>本<rt>ほん</rt></ruby>と カードを <ruby>買<rt>か</rt></ruby>いました。</p><p>それから、レストランで <ruby>晩<rt>ばん</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べました。</p>",
    "quizzes": [
      {
        "question": "キムさんは <ruby>何<rt>なに</rt></ruby>を <ruby>買<rt>か</rt></ruby>いましたか。",
        "choices": [
          "<ruby>本<rt>ほん</rt></ruby>",
          "カード",
          "<ruby>時計<rt>とけい</rt></ruby>"
        ],
        "answer_index": 2
      },
      {
        "question": "アナさんは <ruby>何<rt>なに</rt></ruby>を <ruby>買<rt>か</rt></ruby>いましたか。",
        "choices": [
          "<ruby>時計<rt>とけい</rt></ruby>",
          "<ruby>日本語<rt>にほんご</rt></ruby>の <ruby>本<rt>ほん</rt></ruby>と カード",
          "<ruby>雑誌<rt>ざっし</rt></ruby>"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L6_03",
    "level": 6,
    "title": "<ruby>公園<rt>こうえん</rt></ruby>で お<ruby>花見<rt>はなみ</rt></ruby>",
    "schema_activation": [
      "<ruby>花見<rt>はなみ</rt></ruby>を したことが ありますか。",
      "<ruby>写真<rt>しゃしん</rt></ruby>は <ruby>誰<rt>だれ</rt></ruby>と <ruby>撮<rt>と</rt></ruby>りますか。"
    ],
    "translation": "<p>Ana and Mr. Yamada went to the park on Sunday.<br>They viewed the cherry blossoms in the park.<br>Mr. Yamada took photos there.</p><p>The two of them ate a bento under a tree.<br>They also drank sake.<br>Watson did not come.</p>",
    "story_html": "<p>アナさんと <ruby>山田<rt>やまだ</rt></ruby>さんは <ruby>日曜日<rt>にちようび</rt></ruby>に <ruby>公園<rt>こうえん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<br><ruby>公園<rt>こうえん</rt></ruby>で お<ruby>花<rt>はな</rt></ruby>を <ruby>見<rt>み</rt></ruby>ました。<br><ruby>山田<rt>やまだ</rt></ruby>さんは そこで <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りました。</p><p><ruby>二人<rt>ふたり</rt></ruby>は <ruby>木<rt>き</rt></ruby>の <ruby>下<rt>した</rt></ruby>で お<ruby>弁当<rt>べんとう</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました。<br>お<ruby>酒<rt>さけ</rt></ruby>も <ruby>飲<rt>の</rt></ruby>みました。<br>ワトソンさんは <ruby>来<rt>き</rt></ruby>ませんでした。</p>",
    "quizzes": [
      {
        "question": "<ruby>二人<rt>ふたり</rt></ruby>は <ruby>公園<rt>こうえん</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を しましたか。",
        "choices": [
          "テニスを しました",
          "<ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>りました",
          "<ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みました"
        ],
        "answer_index": 1
      },
      {
        "question": "ワトソンさんは <ruby>来<rt>き</rt></ruby>ましたか。",
        "choices": [
          "はい、<ruby>来<rt>き</rt></ruby>ました",
          "いいえ、<ruby>来<rt>き</rt></ruby>ませんでした"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L6_04",
    "level": 6,
    "title": "カフェで <ruby>勉強<rt>べんきょう</rt></ruby>",
    "schema_activation": [
      "よく カフェへ <ruby>行<rt>い</rt></ruby>きますか。",
      "どこで <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しますか。"
    ],
    "translation": "<p>Ana went to the cafe next to the station.<br>She drank coffee and read a newspaper.</p><p>She met Watson at 10:00.<br>The two of them studied Japanese.<br>Watson listened to music.<br>Ana wrote Kanji.</p>",
    "story_html": "<p>アナさんは <ruby>駅<rt>えき</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>の カフェへ <ruby>行<rt>い</rt></ruby>きました。<br>コーヒーを <ruby>飲<rt>の</rt></ruby>んで、<ruby>新聞<rt>しんぶん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みました。</p><p>10<ruby>時<rt>じ</rt></ruby>に ワトソンさんに <ruby>会<rt>あ</rt></ruby>いました。<br><ruby>二人<rt>ふたり</rt></ruby>は <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しました。<br>ワトソンさんは <ruby>音楽<rt>おんがく</rt></ruby>を <ruby>聞<rt>き</rt></ruby>きました。<br>アナさんは <ruby>漢字<rt>かんじ</rt></ruby>を <ruby>書<rt>か</rt></ruby>きました。</p>",
    "quizzes": [
      {
        "question": "カフェは どこに ありますか。",
        "choices": [
          "<ruby>大学<rt>だいがく</rt></ruby>の <ruby>中<rt>なか</rt></ruby>",
          "<ruby>駅<rt>えき</rt></ruby>の <ruby>隣<rt>となり</rt></ruby>",
          "<ruby>公園<rt>こうえん</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>"
        ],
        "answer_index": 1
      },
      {
        "question": "アナさんは <ruby>何<rt>なに</rt></ruby>を <ruby>書<rt>か</rt></ruby>きましたか。",
        "choices": [
          "<ruby>名前<rt>なまえ</rt></ruby>",
          "<ruby>手紙<rt>てがみ</rt></ruby>",
          "<ruby>漢字<rt>かんじ</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "STORY_L7_01",
    "level": 7,
    "title": "<ruby>山田<rt>やまだ</rt></ruby>さんへの プレゼント",
    "schema_activation": [
      "<ruby>友達<rt>ともだち</rt></ruby>に プレゼントを あげましたか。",
      "<ruby>母<rt>はは</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>を あげますか。"
    ],
    "translation": "<p>Today is Mr. Yamada's birthday. Ana gave Mr. Yamada a necktie. She bought that necktie in Germany.<br>Watson gave Mr. Yamada flowers. Mr. Yamada was very happy. Everyone ate cake together. Ana cut the cake with a knife.</p>",
    "story_html": "<p><ruby>今日<rt>きょう</rt></ruby>は <ruby>山田<rt>やまだ</rt></ruby>さんの <ruby>誕生日<rt>たんじょうび</rt></ruby>です。<br>アナさんは <ruby>山田<rt>やまだ</rt></ruby>さんに ネクタイを あげました。<br>その ネクタイは ドイツで <ruby>買<rt>か</rt></ruby>いました。</p><p>ワトソンさんは <ruby>山田<rt>やまだ</rt></ruby>さんに <ruby>花<rt>はな</rt></ruby>を あげました。<br><ruby>山田<rt>やまだ</rt></ruby>さんは とても <ruby>喜<rt>よろこ</rt></ruby>びました。<br>みんなで ケーキを <ruby>食<rt>た</rt></ruby>べました。<br>アナさんは ナイフで ケーキを <ruby>切<rt>き</rt></ruby>りました。</p>",
    "quizzes": [
      {
        "question": "アナさんは <ruby>山田<rt>やまだ</rt></ruby>さんに <ruby>何<rt>なに</rt></ruby>を あげましたか。",
        "choices": [
          "<ruby>花<rt>はな</rt></ruby>",
          "ネクタイ",
          "ケーキ"
        ],
        "answer_index": 1
      },
      {
        "question": "アナさんは <ruby>何<rt>なに</rt></ruby>で ケーキを <ruby>切<rt>き</rt></ruby>りましたか。",
        "choices": [
          "フォーク",
          "スプーン",
          "ナイフ"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "STORY_L7_02",
    "level": 7,
    "title": "パソコンで レポートを <ruby>書<rt>か</rt></ruby>きます",
    "schema_activation": [
      "パソコンを <ruby>持<rt>も</rt></ruby>っていますか。",
      "よく <ruby>手紙<rt>てがみ</rt></ruby>を <ruby>書<rt>か</rt></ruby>きますか。"
    ],
    "translation": "<p>Ana is in the university library now.<br>She writes a Japanese report in the library.<br>Ana has a computer.<br>She writes the report using the computer.<br>Last week, she learned Kanji from Watson.<br>She wrote those Kanji in the report.<br>The report is already finished.<br>Then, she made a phone call to Watson.<br>\"Watson, the report is already finished.\"<br>\"Won't you eat dinner together?\"</p>",
    "story_html": "<p>アナさんは <ruby>今<rt>いま</rt></ruby> <ruby>大学<rt>だいがく</rt></ruby>の <ruby>図書館<rt>としょかん</rt></ruby>に います。<br><ruby>図書館<rt>としょかん</rt></ruby>で <ruby>日本語<rt>にほんご</rt></ruby>の レポートを <ruby>書<rt>か</rt></ruby>きます。<br>アナさんは パソコンを <ruby>持<rt>も</rt></ruby>っています。<br>パソコンで レポートを <ruby>書<rt>か</rt></ruby>きます。<br><ruby>先週<rt>せんしゅう</rt></ruby> ワトソンさんに <ruby>漢字<rt>かんじ</rt></ruby>を <ruby>習<rt>なら</rt></ruby>いました。<br>その <ruby>漢字<rt>かんじ</rt></ruby>を レポートに <ruby>書<rt>か</rt></ruby>きました。<br>レポートは もう <ruby>終<rt>お</rt></ruby>わりました。<br>それから、ワトソンさんに <ruby>電話<rt>でんわ</rt></ruby>を かけました。<br>「ワトソンさん、レポートは もう <ruby>終<rt>お</rt></ruby>わりましたよ。」<br>「いっしょに <ruby>晩<rt>ばん</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べませんか。」</p>",
    "quizzes": [
      {
        "question": "アナさんは <ruby>何<rt>なに</rt></ruby>で レポートを <ruby>書<rt>か</rt></ruby>きますか。",
        "choices": [
          "ペン",
          "パソコン",
          "スマホ"
        ],
        "answer_index": 1
      },
      {
        "question": "レポートは もう <ruby>終<rt>お</rt></ruby>わりましたか。",
        "choices": [
          "はい、もう <ruby>終<rt>お</rt></ruby>わりました",
          "いいえ、まだです"
        ],
        "answer_index": 0
      }
    ]
  },
  {
    "id": "STORY_L7_03",
    "level": 7,
    "title": "いろいろな <ruby>言葉<rt>ことば</rt></ruby>",
    "schema_activation": [
      "<ruby>手<rt>て</rt></ruby>で <ruby>食<rt>た</rt></ruby>べますか。",
      "<ruby>何<rt>なに</rt></ruby>で ご<ruby>飯<rt>はん</rt></ruby>を <ruby>食<rt>た</rt></ruby>べますか。"
    ],
    "translation": "<p>Watson and Ana are in the cafeteria.<br>Watson learns various words.<br>Watson asked,<br>\"Ana, what is 'Thank you' in German?\"<br>Ana said,<br>\"It is 'Danke'.\"<br>Watson said,<br>\"I see. Then, what is 'Goodbye'?\"<br>Ana said, \"It is 'Tschüss'.\"<br>Watson wrote in his notebook with a pen.<br>Next, Ana asked,<br>\"Watson, what is 'Hello' in American English?\"<br>Watson said, \"It is 'Hello'.\"<br>Ana wrote a letter in English.<br>Yesterday, she sent that letter to a friend.<br>Watson is teaching guitar to Ana.<br>He taught her at his house last Sunday.<br>Ana learned guitar from Watson.<br>Ana received a CD from Watson.<br>Watson received a book from Mr. Yamada.<br>New words are very interesting.<br>Everyone talks a lot every day.<br>They talk in Japanese.<br>They talk in English, too.</p>",
    "story_html": "<p>ワトソンさんと アナさんは <ruby>食堂<rt>しょくどう</rt></ruby>に います。<br>ワトソンさんは いろいろな <ruby>言葉<rt>ことば</rt></ruby>を <ruby>習<rt>なら</rt></ruby>います。<br>ワトソンさんは <ruby>聞<rt>き</rt></ruby>きました。<br>「アナさん、『ありがとう』は ドイツ<ruby>語<rt>ご</rt></ruby>で <ruby>何<rt>なん</rt></ruby>ですか。」<br>アナさんは <ruby>言<rt>い</rt></ruby>いました。<br>「『Danke』です。」<br>ワトソンさんは <ruby>言<rt>い</rt></ruby>いました。<br>「そうですか。じゃあ、『さようなら』は <ruby>何<rt>なん</rt></ruby>ですか。」<br>アナさんは 「『Tschüss』です」と <ruby>言<rt>い</rt></ruby>いました。<br>ワトソンさんは ノートに ペンで <ruby>書<rt>か</rt></ruby>きました。<br><ruby>次<rt>つぎ</rt></ruby>に、アナさんは <ruby>聞<rt>き</rt></ruby>きました。<br>「ワトソンさん、アメリカの <ruby>言葉<rt>ことば</rt></ruby>で 『こんにちは』は <ruby>何<rt>なん</rt></ruby>ですか。」<br>ワトソンさんは 「『Hello』です」と <ruby>言<rt>い</rt></ruby>いました。<br>アナさんは <ruby>英語<rt>えいご</rt></ruby>で <ruby>手紙<rt>てがみ</rt></ruby>を <ruby>書<rt>か</rt></ruby>きました。<br><ruby>昨日<rt>きのう</rt></ruby> <ruby>友達<rt>ともだち</rt></ruby>に その <ruby>手紙<rt>てがみ</rt></ruby>を <ruby>出<rt>だ</rt></ruby>しました。<br>ワトソンさんは アナさんに ギターを <ruby>教<rt>おし</rt></ruby>えています。<br><ruby>先週<rt>せんしゅう</rt></ruby> アナさんの <ruby>家<rt>うち</rt></ruby>で <ruby>教<rt>おし</rt></ruby>えました。<br>アナさんは ワトソンさんに ギターを <ruby>習<rt>なら</rt></ruby>いました。<br>アナさんは ワトソンさんに CDを もらいました。<br>ワトソンさんは <ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に <ruby>本<rt>ほん</rt></ruby>を もらいました。<br><ruby>新<rt>あたら</rt></ruby>しい <ruby>言葉<rt>ことば</rt></ruby>は とても おもしろいです。<br>みんなで <ruby>毎日<rt>まいにち</rt></ruby> たくさん <ruby>話<rt>はな</rt></ruby>します。<br><ruby>日本語<rt>にほんご</rt></ruby>で <ruby>話<rt>はな</rt></ruby>します。<br><ruby>英語<rt>えいご</rt></ruby>でも <ruby>話<rt>はな</rt></ruby>します。</p>",
    "quizzes": [
      {
        "question": "『ありがとう』は ドイツ<ruby>語<rt>ご</rt></ruby>で <ruby>何<rt>なん</rt></ruby>ですか。",
        "choices": [
          "Danke",
          "Tschüss",
          "Hello"
        ],
        "answer_index": 0
      },
      {
        "question": "ワトソンさんは アナさんに <ruby>何<rt>なに</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えていますか。",
        "choices": [
          "<ruby>日本語<rt>にほんご</rt></ruby>",
          "ギター",
          "ピアノ"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L7_04",
    "level": 7,
    "title": "もう <ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べましたか",
    "schema_activation": [
      "もう <ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べましたか。",
      "カレーが <ruby>好<rt>す</rt></ruby>きですか。"
    ],
    "translation": "<p>Kim is at the university now. It became 12:00. She got hungry. Kim has not eaten lunch yet. Kim met Watson. \"Watson, have you already eaten lunch?\" Watson said, \"Yes, I have already eaten. I ate it with Ana.\" Kim said, \"I see. I haven't yet.\" Kim had no money. Today, she forgot her wallet at home. She said to Watson, \"Watson, lend me some money.\" Watson said, \"Sorry, I have no money either. Borrow it from Mr. Yamada.\" Kim went to Mr. Yamada's office. She borrowed 1000 yen from Mr. Yamada. Kim said to Yamada-sensei, \"Thank you.\" Kim went to a restaurant. She met Ana at the restaurant. Ana already ate lunch. So, Ana drank coffee. Kim ate curry. She ate it with a spoon. She also used a fork. She did not use chopsticks. The curry was very delicious. After the meal, she met Mr. Yamada. She received a souvenir from Mr. Yamada. Kim said, \"Teacher, thank you.\" The souvenir is sweet chocolate. Mr. Yamada bought that chocolate at a department store. Kim gave some chocolate to Ana. Ana ate the chocolate. They ate together happily. It was very fun. Kim said, \"I will return the money tomorrow.\" She will return it to Mr. Yamada. Tomorrow she will not forget her wallet. She will bring money from home. Everyone went back to the classroom.</p>",
    "story_html": "<p>キムさんは <ruby>今<rt>いま</rt></ruby> <ruby>大学<rt>だいがく</rt></ruby>に います。<br>12<ruby>時<rt>じ</rt></ruby>に なりました。<br>おなかが すきました。<br>キムさんは まだ <ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べません。<br>キムさんは ワトソンさんに <ruby>会<rt>あ</rt></ruby>いました。<br>「ワトソンさん、もう <ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べましたか。」<br>ワトソンさんは <ruby>言<rt>い</rt></ruby>いました。<br>「はい、もう <ruby>食<rt>た</rt></ruby>べました。」<br>「アナさんと いっしょに <ruby>食<rt>た</rt></ruby>べました。」<br>キムさんは <ruby>言<rt>い</rt></ruby>いました。<br>「そうですか。わたしは まだです。」<br>キムさんは お<ruby>金<rt>かね</rt></ruby>が ありません。<br><ruby>今日<rt>きょう</rt></ruby> <ruby>家<rt>うち</rt></ruby>に <ruby>財布<rt>さいふ</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れました。<br>キムさんは <ruby>言<rt>い</rt></ruby>いました。<br>「ワトソンさん、お<ruby>金<rt>かね</rt></ruby>を <ruby>貸<rt>か</rt></ruby>しますか。」<br>ワトソンさんは <ruby>言<rt>い</rt></ruby>いました。<br>「すみません、わたしも お<ruby>金<rt>かね</rt></ruby>が ありません。」<br>「<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に <ruby>借<rt>か</rt></ruby>ります。」<br>キムさんは <ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の <ruby>事務室<rt>じむしつ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に 1000<ruby>円<rt>えん</rt></ruby> <ruby>借<rt>か</rt></ruby>りました。<br>キムさんは <ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に 「ありがとうございます」と <ruby>言<rt>い</rt></ruby>いました。<br>キムさんは レストランへ <ruby>行<rt>い</rt></ruby>きました。<br>レストランで アナさんに <ruby>会<rt>あ</rt></ruby>いました。<br>アナさんは もう <ruby>昼<rt>ひる</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べました。<br>それから、アナさんは コーヒーを <ruby>飲<rt>の</rt></ruby>みました。<br>キムさんは カレーを <ruby>食<rt>た</rt></ruby>べました。<br>スプーンで <ruby>食<rt>た</rt></ruby>べました。<br>フォークも <ruby>使<rt>つか</rt></ruby>いました。<br>お<ruby>箸<rt>はし</rt></ruby>は <ruby>使<rt>つか</rt></ruby>いませんでした。<br>カレーは とても おいしかったです。<br>ご<ruby>飯<rt>はん</rt></ruby>の <ruby>後<rt>あと</rt></ruby>で、<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に <ruby>会<rt>あ</rt></ruby>いました。<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に お<ruby>土産<rt>みやげ</rt></ruby>を もらいました。<br>キムさんは <ruby>言<rt>い</rt></ruby>いました。<br>「<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>、ありがとうございます。」<br>お<ruby>土産<rt>みやげ</rt></ruby>は <ruby>甘<rt>あま</rt></ruby>い チョコレートです。<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は デパートで その チョコレートを <ruby>買<rt>か</rt></ruby>いました。<br>キムさんは アナさんに チョコレートを あげました。<br>アナさんは チョコレートを <ruby>食<rt>た</rt></ruby>べました。<br>みんなで いっしょに <ruby>食<rt>た</rt></ruby>べました。<br>とても <ruby>楽<rt>たの</rt></ruby>しかったです。<br>キムさんは <ruby>言<rt>い</rt></ruby>いました。<br>「<ruby>明日<rt>あした</rt></ruby> お<ruby>金<rt>かね</rt></ruby>を <ruby>返<rt>かえ</rt></ruby>します。」<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に <ruby>返<rt>かえ</rt></ruby>します。<br><ruby>明日<rt>あした</rt></ruby>は <ruby>財布<rt>さいふ</rt></ruby>を <ruby>忘<rt>わす</rt></ruby>れません。<br><ruby>家<rt>うち</rt></ruby>から お<ruby>金<rt>かね</rt></ruby>を <ruby>持<rt>も</rt></ruby>って <ruby>来<rt>き</rt></ruby>ます。<br>みんな <ruby>教室<rt>きょうしつ</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>りました。</p>",
    "quizzes": [
      {
        "question": "キムさんは <ruby>誰<rt>だれ</rt></ruby>に お<ruby>金<rt>かね</rt></ruby>を <ruby>借<rt>か</rt></ruby>りましたか。",
        "choices": [
          "ワトソンさんに",
          "アナさんに",
          "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に"
        ],
        "answer_index": 2
      },
      {
        "question": "キムさんは カレーを <ruby>何<rt>なに</rt></ruby>で <ruby>食<rt>た</rt></ruby>べましたか。",
        "choices": [
          "お<ruby>箸<rt>はし</rt></ruby>",
          "スプーンと フォーク",
          "ナイフ"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L8_01",
    "level": 8,
    "title": "さくら<ruby>大学<rt>だいがく</rt></ruby>は どんな <ruby>大学<rt>だいがく</rt></ruby>ですか",
    "schema_activation": [
      "あなたの <ruby>大学<rt>だいがく</rt></ruby>は <ruby>大<rt>おお</rt></ruby>きいですか。",
      "あなたの <ruby>町<rt>まち</rt></ruby>は <ruby>静<rt>しず</rt></ruby>かですか。"
    ],
    "translation": "<p>Ana's Sakura University is a very famous university. And it is very beautiful. It is not very new, but it is very quiet.<br>Professor Yamada is a very kind teacher. University life is very busy, but it is fun.</p>",
    "story_html": "<p>アナさんの さくら<ruby>大学<rt>だいがく</rt></ruby>は とても <ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>大学<rt>だいがく</rt></ruby>です。<br>そして、とても きれいです。<br>あまり <ruby>新<rt>あたら</rt></ruby>しくないですが、とても <ruby>静<rt>しず</rt></ruby>かです。</p><p><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は とても <ruby>親切<rt>しんせつ</rt></ruby>な <ruby>先生<rt>せんせい</rt></ruby>です。<br><ruby>大学<rt>だいがく</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は とても <ruby>忙<rt>いそが</rt></ruby>しいですが、<ruby>楽<rt>たの</rt></ruby>しいです。</p>",
    "quizzes": [
      {
        "question": "さくら<ruby>大学<rt>だいがく</rt></ruby>は <ruby>新<rt>あたら</rt></ruby>しいですか。",
        "choices": [
          "はい、とても <ruby>新<rt>あたら</rt></ruby>しいです",
          "いいえ、あまり <ruby>新<rt>あたら</rt></ruby>しくないです"
        ],
        "answer_index": 1
      },
      {
        "question": "<ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は どんな <ruby>先生<rt>せんせい</rt></ruby>ですか。",
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
    "id": "STORY_L8_02",
    "level": 8,
    "title": "おいしい レストラン",
    "schema_activation": [
      "<ruby>日本<rt>にほん</rt></ruby><ruby>料理<rt>りょうり</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。",
      "よく レストランへ <ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "translation": "<p>Ana and Watson went to Shinjuku today.<br>Shinjuku is a very lively town.<br>The two of them ate dinner at a restaurant.<br>That shop is not very new, but it is very famous.<br>The inside is very beautiful.<br>Watson ate a fish dish.<br>Ana ate a meat dish.<br>Watson said, \"This fish is very delicious.\"<br>Ana said, \"The meat is very delicious, too.\"<br>The coffee was very hot.<br>The food at this shop is a little expensive, but it is very good.<br>The two of them had a very fun time.</p>",
    "story_html": "<p>アナさんと ワトソンさんは <ruby>今日<rt>きょう</rt></ruby> <ruby>新宿<rt>しんじゅく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<br><ruby>新宿<rt>しんじゅく</rt></ruby>は とても にぎやかな <ruby>町<rt>まち</rt></ruby>です。<br><ruby>二人<rt>ふたり</rt></ruby>は レストランで <ruby>晩<rt>ばん</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べました。<br>その <ruby>店<rt>みせ</rt></ruby>は あまり <ruby>新<rt>あたら</rt></ruby>しくないですが、とても <ruby>有名<rt>ゆうめい</rt></ruby>です。<br><ruby>中<rt>なか</rt></ruby>は とても きれいです。<br>ワトソンさんは <ruby>魚<rt>さかな</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました。<br>アナさんは <ruby>肉<rt>にく</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました。<br>ワトソンさんは 「この <ruby>魚<rt>さかな</rt></ruby>は とても おいしいです」と <ruby>言<rt>い</rt></ruby>いました。<br>アナさんは 「<ruby>肉<rt>にく</rt></ruby>も とても おいしいですよ」と <ruby>言<rt>い</rt></ruby>いました。<br>コーヒーは とても <ruby>熱<rt>あつ</rt></ruby>かったです。<br>この <ruby>店<rt>みせ</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>は <ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>いですが、とても いいです。<br><ruby>二人<rt>ふたり</rt></ruby>は とても <ruby>楽<rt>たの</rt></ruby>しかったです。</p>",
    "quizzes": [
      {
        "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。",
        "choices": [
          "<ruby>魚<rt>さかな</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>",
          "<ruby>肉<rt>にく</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>",
          "野菜の <ruby>料理<rt>りょうり</rt></ruby>"
        ],
        "answer_index": 0
      },
      {
        "question": "この <ruby>店<rt>みせ</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>は いくらですか。",
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
    "id": "STORY_L8_03",
    "level": 8,
    "title": "<ruby>山田<rt>やまだ</rt></ruby>さんの <ruby>町<rt>まち</rt></ruby>",
    "schema_activation": [
      "あなたの <ruby>町<rt>まち</rt></ruby>は どんな <ruby>町<rt>まち</rt></ruby>ですか。",
      "<ruby>京都<rt>きょうと</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きたいですか。"
    ],
    "translation": "<p>Mr. Yamada's town is in Kamakura.<br>Kamakura is a very quiet and beautiful town.<br>Watson and Ana went to Kamakura yesterday.<br>There are many old temples.<br>Those temples are very famous.<br>The buildings are not very new, but they are wonderful.<br>The garden was very beautiful, too.<br>The mountains are green and high.<br>The sky was blue and very beautiful.<br>The sea is also close by.<br>The sea is very large.<br>The two of them saw the temples.<br>The temples were very quiet.<br>There were not many people.<br>After that, they took a break at a tea house.<br>Ana drank cold tea.<br>Watson ate a sweet snack.<br>The snack was very delicious.<br>The shop person was a very kind person.<br>The trip to Kamakura was very fun.</p>",
    "story_html": "<p><ruby>山田<rt>やまだ</rt></ruby>さんの <ruby>町<rt>まち</rt></ruby>は <ruby>鎌倉<rt>かまくら</rt></ruby>に あります。<br><ruby>鎌倉<rt>かまくら</rt></ruby>は とても <ruby>静<rt>しず</rt></ruby>かで きれいな <ruby>町<rt>まち</rt></ruby>です。<br>ワトソンさんと アナさんは <ruby>昨日<rt>きのう</rt></ruby> <ruby>鎌倉<rt>かまくら</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<br><ruby>古<rt>ふる</rt></ruby>い お<ruby>寺<rt>てら</rt></ruby>が たくさん あります。<br>その お<ruby>寺<rt>てら</rt></ruby>は とても <ruby>有名<rt>ゆうめい</rt></ruby>です。<br><ruby>建物<rt>たてもの</rt></ruby>は あまり <ruby>新<rt>あたら</rt></ruby>しくないですが、とても すばらしいです。<br><ruby>庭<rt>にわ</rt></ruby>も とても きれいでした。<br><ruby>山<rt>やま</rt></ruby>は みどりで <ruby>高<rt>たか</rt></ruby>いです。<br><ruby>空<rt>そら</rt></ruby>は <ruby>青<rt>あお</rt></ruby>くて とても きれいでした。<br><ruby>海<rt>うみ</rt></ruby>も <ruby>近<rt>ちか</rt></ruby>いです。<br><ruby>海<rt>うみ</rt></ruby>は とても <ruby>大<rt>おお</rt></ruby>きいです。<br><ruby>二人<rt>ふたり</rt></ruby>は お<ruby>寺<rt>てら</rt></ruby>を <ruby>見<rt>み</rt></ruby>ました。<br>お<ruby>寺<rt>てら</rt></ruby>は とても <ruby>静<rt>しず</rt></ruby>かでした。<br><ruby>人<rt>ひと</rt></ruby>は あまり <ruby>多<rt>おお</rt></ruby>くなかったです。<br>それから、<ruby>茶店<rt>ちゃみせ</rt></ruby>で <ruby>休<rt>やす</rt></ruby>みました。<br>アナさんは <ruby>冷<rt>つめ</rt></ruby>たい お<ruby>茶<rt>ちゃ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みました。<br>ワトソンさんは <ruby>甘<rt>あま</rt></ruby>い お<ruby>菓子<rt>かし</rt></ruby>を <ruby>食<rt>た</rt></ruby>べました。<br>お<ruby>菓子<rt>かし</rt></ruby>は とても おいしかったです。<br><ruby>店<rt>みせ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は とても <ruby>親切<rt>しんせつ</rt></ruby>な <ruby>人<rt>ひと</rt></ruby>でした。<br><ruby>鎌倉<rt>かまくら</rt></ruby>の <ruby>旅行<rt>りょこう</rt></ruby>は とても <ruby>楽<rt>たの</rt></ruby>しかったです。</p>",
    "quizzes": [
      {
        "question": "<ruby>鎌倉<rt>かまくら</rt></ruby>は どんな <ruby>町<rt>まち</rt></ruby>ですか。",
        "choices": [
          "にぎやかな <ruby>町<rt>まち</rt></ruby>",
          "<ruby>静<rt>しず</rt></ruby>かで きれいな <ruby>町<rt>まち</rt></ruby>",
          "あまり <ruby>有名<rt>ゆうめい</rt></ruby>じゃありません"
        ],
        "answer_index": 1
      },
      {
        "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。",
        "choices": [
          "<ruby>冷<rt>つめ</rt></ruby>たい お<ruby>茶<rt>ちゃ</rt></ruby>",
          "<ruby>甘<rt>あま</rt></ruby>い お<ruby>菓子<rt>かし</rt></ruby>",
          "お<ruby>弁当<rt>べんとう</rt></ruby>"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L8_04",
    "level": 8,
    "title": "キムさんの <ruby>新<rt>あたら</rt></ruby>しい パソコン",
    "schema_activation": [
      "<ruby>新<rt>あたら</rt></ruby>しい パソコンが ほしいですか。",
      "どんな <ruby>映画<rt>えいが</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。"
    ],
    "translation": "<p>Kim bought a new computer yesterday. He went to a shop in Akihabara with Watson. Akihabara is a very lively and famous town. There are many electronics shops. That shop is very large and new. There were many computers inside. Japanese computers are very famous. Every computer is very small and light. And they are very convenient. Kim looked at various computers. This computer is black. That computer is white. \"How is this computer?\" Watson asked. \"That is very light, but not very new,\" Kim answered. \"Then, how about that one?\" \"That is very beautiful, but very expensive.\" Kim chose a small white computer. The design was very nice. \"How much is this?\" he asked the shop clerk. \"It is 150,000 yen,\" the clerk said. It was a little expensive, but Kim bought that computer. The shop person was very kind. Today Kim brought that computer to the university. He showed it to Ana. Ana said, \"Wow, it is a very beautiful computer.\" Watson also said, \"It is very light. It's convenient.\" Kim is very happy. The university library is very quiet. Kim uses the computer every day in the library. He writes Japanese reports. He also studies Kanji. Studying Japanese is difficult, but very interesting. Because he has a computer, it has become very convenient. School life is busy, but very fun. Kim also watches movies on the internet. The movies are not very old. There are many very interesting movies. He watches them together with Watson. The new computer is very good. Kim is happy every day.</p>",
    "story_html": "<p>キムさんは <ruby>昨日<rt>きのう</rt></ruby> <ruby>新<rt>あたら</rt></ruby>しい パソコンを <ruby>買<rt>か</rt></ruby>いました。<br>ワトソンさんと いっしょに <ruby>秋葉原<rt>あきはばら</rt></ruby>の <ruby>店<rt>みせ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<br><ruby>秋葉原<rt>あきはばら</rt></ruby>は とても にぎやかで <ruby>有名<rt>ゆうめい</rt></ruby>な <ruby>町<rt>まち</rt></ruby>です。<br><ruby>電気屋<rt>でんきや</rt></ruby>が たくさん あります。<br>その <ruby>店<rt>みせ</rt></ruby>は とても <ruby>大<rt>おお</rt></ruby>きいし、<ruby>新<rt>あたら</rt></ruby>しいです。<br><ruby>中<rt>なか</rt></ruby>に パソコンが たくさん ありました。<br><ruby>日本<rt>にほん</rt></ruby>の パソコンは とても <ruby>有名<rt>ゆうめい</rt></ruby>です。<br>どの パソコンも とても <ruby>小<rt>ちい</rt></ruby>さくて <ruby>軽<rt>かる</rt></ruby>いです。<br>そして、とても <ruby>便利<rt>べんり</rt></ruby>です。<br>キムさんは いろいろな パソコンを <ruby>見<rt>み</rt></ruby>ました。<br>この パソコンは <ruby>黒<rt>くろ</rt></ruby>いです。<br>あの パソコンは <ruby>白<rt>しろ</rt></ruby>いです。<br>「この パソコンは どうですか」と ワトソンさんが <ruby>聞<rt>き</rt></ruby>きました。<br>「それは とても <ruby>軽<rt>かる</rt></ruby>いですが、あまり <ruby>新<rt>あたら</rt></ruby>くないです」と キムさんは <ruby>答<rt>こた</rt></ruby>えました。<br>「じゃあ、あれは？」<br>「あれは とても きれいですが、とても <ruby>高<rt>たか</rt></ruby>いです。」<br>キムさんは <ruby>小<rt>ちい</rt></ruby>さくて <ruby>白<rt>しろ</rt></ruby>い パソコンを <ruby>選<rt>えら</rt></ruby>びました。<br>デザインが とても すてきでした。<br>「これは いくらですか」と <ruby>店員<rt>てんいん</rt></ruby>に <ruby>聞<rt>き</rt></ruby>きました。<br>「150,000<ruby>円<rt>えん</rt></ruby>です」と <ruby>店員<rt>てんいん</rt></ruby>は <ruby>言<rt>い</rt></ruby>いました。<br><ruby>少<rt>すこ</rt></ruby>し <ruby>高<rt>たか</rt></ruby>かったですが、キムさんは その パソコンを <ruby>買<rt>か</rt></ruby>いました。<br><ruby>店<rt>みせ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>は とても <ruby>親切<rt>しんせつ</rt></ruby>でした。<br><ruby>今日<rt>きょう</rt></ruby> キムさんは <ruby>大学<rt>だいがく</rt></ruby>へ その パソコンを <ruby>持<rt>も</rt></ruby>って <ruby>来<rt>き</rt></ruby>ました。<br>アナさんに <ruby>見<rt>み</rt></ruby>せました。<br>アナさんは 「わあ、とても きれいな パソコンですね」と <ruby>言<rt>い</rt></ruby>いました。<br>ワトソンさんも 「とても <ruby>軽<rt>かる</rt></ruby>いですね。<ruby>便利<rt>べんり</rt></ruby>ですよ」と <ruby>言<rt>い</rt></ruby>いました。<br>キムさんは とても <ruby>嬉<rt>うれ</rt></ruby>しいです。<br><ruby>大学<rt>だいがく</rt></ruby>の <ruby>図書館<rt>としょかん</rt></ruby>は とても <ruby>静<rt>しず</rt></ruby>かです。<br>キムさんは <ruby>図書館<rt>としょかん</rt></ruby>で <ruby>毎日<rt>まいにち</rt></ruby> パソコンを <ruby>使<rt>つか</rt></ruby>います。<br><ruby>日本語<rt>にほんご</rt></ruby>の レポートを <ruby>書<rt>か</rt></ruby>きます。<br><ruby>漢字<rt>かんじ</rt></ruby>の <ruby>勉強<rt>べんきょう</rt></ruby>も します。<br><ruby>日本語<rt>にほんご</rt></ruby>の <ruby>勉強<rt>べんきょう</rt></ruby>は <ruby>難<rt>むずか</rt></ruby>しいですが、とても おもしろいです。<br>パソコンが ありますから、とても <ruby>便利<rt>べんり</rt></ruby>に なりました。<br><ruby>学校<rt>がっこう</rt></ruby>の <ruby>生活<rt>せいかつ</rt></ruby>は <ruby>忙<rt>いそが</rt></ruby>しいですが、とても <ruby>楽<rt>たの</rt></ruby>しいです。<br>キムさんは ネットで <ruby>映画<rt>えいが</rt></ruby>も <ruby>見<rt>み</rt></ruby>ます。<br><ruby>映画<rt>えいが</rt></ruby>は あまり <ruby>古<rt>ふる</rt></ruby>くないです。<br>とても おもしろい <ruby>映画<rt>えいが</rt></ruby>が たくさん あります。<br>ワトソンさんと いっしょに <ruby>見<rt>み</rt></ruby>ます。<br><ruby>新<rt>あたら</rt></ruby>しい パソコンは とても いいです。<br>キムさんは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>幸<rt>しあわ</rt></ruby>せです。</p>",
    "quizzes": [
      {
        "question": "<ruby>日本<rt>にほん</rt></ruby>の パソコンは どうですか。",
        "choices": [
          "<ruby>大<rt>おお</rt></ruby>きくて <ruby>重<rt>おも</rt></ruby>いです",
          "<ruby>小<rt>ちい</rt></ruby>さくて <ruby>軽<rt>かる</rt></ruby>いです",
          "あまり <ruby>便利<rt>べんり</rt></ruby>じゃありません"
        ],
        "answer_index": 1
      },
      {
        "question": "パソコンは いくらでしたか。",
        "choices": [
          "100,000<ruby>円<rt>えん</rt></ruby>",
          "150,000<ruby>円<rt>えん</rt></ruby>",
          "200,000<ruby>円<rt>えん</rt></ruby>"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L9_01",
    "level": 9,
    "title": "アナさんの <ruby>好<rt>す</rt></ruby>きな <ruby>音楽<rt>おんがく</rt></ruby>",
    "schema_activation": [
      "<ruby>音楽<rt>おんがく</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。",
      "カラオケに よく <ruby>行<rt>い</rt></ruby>きますか。"
    ],
    "translation": "<p>Ana likes music very much. She listens to classical music every day. She doesn't like rock very much.<br>Mr. Watson is very good at singing. Ana said, \"I have two tickets, so won't you go with me?\"</p>",
    "story_html": "<p>アナさんは <ruby>音楽<rt>おんがく</rt></ruby>が とても <ruby>好<rt>す</rt></ruby>きです。<br><ruby>毎日<rt>まいにち</rt></ruby> クラシックを <ruby>聞<rt>き</rt></ruby>きます。<br>ロックは あまり <ruby>好<rt>す</rt></ruby>きじゃありません。</p><p>ワトソンさんは <ruby>歌<rt>うた</rt></ruby>が とても <ruby>上手<rt>じょうず</rt></ruby>です。<br>アナさんは <ruby>言<rt>い</rt></ruby>いました。<br>「チケットが 2<ruby>枚<rt>まい</rt></ruby> ありますから、いっしょに <ruby>行<rt>い</rt></ruby>きませんか。」</p>",
    "quizzes": [
      {
        "question": "アナさんは どんな <ruby>音楽<rt>おんがく</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。",
        "choices": [
          "クラシック",
          "ロック",
          "ジャズ"
        ],
        "answer_index": 0
      },
      {
        "question": "ワトソンさんは <ruby>歌<rt>うた</rt></ruby>が <ruby>上手<rt>じょうず</rt></ruby>ですか。",
        "choices": [
          "はい、とても <ruby>上手<rt>じょうず</rt></ruby>です",
          "いいえ、あまり <ruby>上手<rt>じょうず</rt></ruby>じゃありません"
        ],
        "answer_index": 0
      }
    ]
  },
  {
    "id": "STORY_L9_02",
    "level": 9,
    "title": "キムさんの スポーツ",
    "schema_activation": [
      "スポーツが <ruby>好<rt>す</rt></ruby>きですか。",
      "<ruby>週末<rt>しゅうまつ</rt></ruby> サッカーを しますか。"
    ],
    "translation": "<p>Kim is very good at baseball.<br>He has loved baseball since he was a child.<br>Every Sunday, he plays baseball with his friends at a nearby park.<br>Watson is not very good at sports.<br>Therefore, he always watches Kim's matches.<br>Watson asked, \"Kim, why do you practice every day?\"<br>Kim answered, \"Because I want to become better at it.\"<br>\"Besides, sports are good for health.\"<br>Kim is also good at tennis, but he doesn't know much about soccer.<br>Watson said, \"I like soccer, so let's play together next time.\"<br>But Kim is busy today.<br>Because he has company work from the afternoon.</p>",
    "story_html": "<p>キムさんは <ruby>野球<rt>やきゅう</rt></ruby>が とても <ruby>上手<rt>じょうず</rt></ruby>です。<br><ruby>子供<rt>こども</rt></ruby>の <ruby>時<rt>とき</rt></ruby>から <ruby>野球<rt>やきゅう</rt></ruby>が <ruby>大好<rt>だいす</rt></ruby>きでした。<br><ruby>毎週<rt>まいしゅう</rt></ruby> <ruby>日曜日<rt>にちようび</rt></ruby>に <ruby>近<rt>ちか</rt></ruby>くの <ruby>公園<rt>こうえん</rt></ruby>で <ruby>友達<rt>ともだち</rt></ruby>と <ruby>野球<rt>やきゅう</rt></ruby>を します。<br>ワトソンさんは スポーツが あまり <ruby>上手<rt>じょうず</rt></ruby>じゃありません。<br>ですから、いつも キムさんの <ruby>試合<rt>しあい</rt></ruby>を <ruby>見<rt>み</rt></ruby>ます。<br>ワトソンさんは 「キムさん、どうして <ruby>毎日<rt>まいにち</rt></ruby> <ruby>練習<rt>れんしゅう</rt></ruby>を しますか」と <ruby>聞<rt>き</rt></ruby>きました。<br>キムさんは 「もっと <ruby>上手<rt>じょうず</rt></ruby>に なりたいですから」と <ruby>答<rt>こた</rt></ruby>えました。<br>「それに、スポーツは <ruby>健康<rt>けんこう</rt></ruby>に いいですから。」<br>キムさんは テニスも <ruby>上手<rt>じょうず</rt></ruby>ですが、サッカーは あまり わかりません。<br>ワトソンさんは 「わたしは サッカーが <ruby>好<rt>す</rt></ruby>きですから、<ruby>今度<rt>こんど</rt></ruby> いっしょに しましょう」と <ruby>言<rt>い</rt></ruby>いました。<br>でも、キムさんは <ruby>今日<rt>きょう</rt></ruby>は <ruby>忙<rt>いそが</rt></ruby>しいです。<br><ruby>午後<rt>ごご</rt></ruby>から <ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>仕事<rt>しごと</rt></ruby>が ありますから。</p>",
    "quizzes": [
      {
        "question": "キムさんは <ruby>何<rt>なに</rt></ruby>が とても <ruby>上手<rt>じょうず</rt></ruby>ですか。",
        "choices": [
          "サッカー",
          "<ruby>野球<rt>やきゅう</rt></ruby>",
          "テニス"
        ],
        "answer_index": 1
      },
      {
        "question": "キムさんは どうして <ruby>毎日<rt>まいにち</rt></ruby> <ruby>練習<rt>れんしゅう</rt></ruby>を しますか。",
        "choices": [
          "ひまだから",
          "もっと <ruby>上手<rt>じょうず</rt></ruby>に なりたいから",
          "<ruby>野球<rt>やきゅう</rt></ruby>が <ruby>嫌<rt>きら</rt></ruby>いだから"
        ],
        "answer_index": 1
      }
    ]
  },
  {
    "id": "STORY_L9_03",
    "level": 9,
    "title": "<ruby>日本<rt>にほん</rt></ruby>の <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>",
    "schema_activation": [
      "<ruby>日本<rt>にほん</rt></ruby>の <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。",
      "<ruby>寿司<rt>すし</rt></ruby>を <ruby>食<rt>た</rt></ruby>べたことが ありますか。"
    ],
    "translation": "<p>Watson loves Japanese food.<br>He likes sushi, tempura, and udon very much.<br>He often says, \"Because Japanese food is good for the body.\"<br>However, he doesn't like Natto very much.<br>Because the smell is a little strange.<br>Watson also dislikes spicy food.<br>What kind of food does Ana like?<br>Ana loves Italian food.<br>She wants to eat pasta every day, but she doesn't have much money.<br>Therefore, she sometimes eats at the university cafeteria.<br>Ana cannot drink alcohol at all.<br>She says, \"Because I don't like alcohol very much.\"<br>Today is Mr. Yamada's birthday.<br>Everyone went to a new Japanese restaurant.<br>There are many drinks in this shop.<br>There are beer, wine, and tea.<br>Watson drank a lot of beer.<br>Ana drank juice.<br>Kim said, \"Teacher, happy birthday.\"<br>Mr. Yamada looked very happy.<br>Since the food was very delicious, everyone ate a lot.<br>Ana said, \"The fish in this shop is not spicy at all, is it?\"<br>Watson also replied, \"Yes, and the smell is not strange either.\"<br>Everyone had a fun meal together.</p>",
    "story_html": "<p>ワトソンさんは <ruby>日本<rt>にほん</rt></ruby>の <ruby>料理<rt>りょうり</rt></ruby>が <ruby>大好<rt>だいす</rt></ruby>きです。<br>すしや てんぷらや うどんが とても <ruby>好<rt>す</rt></ruby>きです。<br>「<ruby>日本<rt>にほん</rt></ruby>の <ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>は <ruby>体<rt>からだ</rt></ruby>に いいですから」と よく <ruby>言<rt>い</rt></ruby>います。<br>でも、<ruby>納豆<rt>なっとう</rt></ruby>は あまり <ruby>好<rt>す</rt></ruby>きじゃありません。<br>においが <ruby>少<rt>すこ</rt></ruby>し <ruby>変<rt>へん</rt></ruby>ですから。<br>ワトソンさんは <ruby>辛<rt>から</rt></ruby>い <ruby>料理<rt>りょうり</rt></ruby>も <ruby>嫌<rt>きら</rt></ruby>いです。<br>アナさんは どんな <ruby>料理<rt>りょうり</rt></ruby>が <ruby>好<rt>す</rt></ruby>きですか。<br>アナさんは イタリア<ruby>料理<rt>りょうり</rt></ruby>が <ruby>大好<rt>だいす</rt></ruby>きです。<br><ruby>毎日<rt>まいにち</rt></ruby> パスタを <ruby>食<rt>た</rt></ruby>べたいですが、お<ruby>金<rt>かね</rt></ruby>が あまり ありません。<br>ですから、<ruby>時々<rt>ときどき</rt></ruby> <ruby>大学<rt>だいがく</rt></ruby>の <ruby>食堂<rt>しょくどう</rt></ruby>で <ruby>食<rt>た</rt></ruby>べます。<br>アナさんは お<ruby>酒<rt>さけ</rt></ruby>が <ruby>全然<rt>ぜんぜん</rt></ruby> <ruby>飲<rt>の</rt></ruby>めません。<br>「お<ruby>酒<rt>さけ</rt></ruby>は あまり <ruby>好<rt>す</rt></ruby>きじゃありませんから」と <ruby>言<rt>い</rt></ruby>います。<br><ruby>今日<rt>きょう</rt></ruby>は <ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>の <ruby>誕生日<rt>たんじょうび</rt></ruby>です。<br>みんなで <ruby>新<rt>あたら</rt></ruby>しい <ruby>和食<rt>わしょく</rt></ruby>の <ruby>店<rt>みせ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<br>この <ruby>店<rt>みせ</rt></ruby>には <ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>が たくさん あります。<br>ビールや ワインや お<ruby>茶<rt>ちゃ</rt></ruby>が あります。<br>ワトソンさんは ビールを たくさん <ruby>飲<rt>の</rt></ruby>ました。<br>アナさんは ジュースを <ruby>飲<rt>の</rt></ruby>みました。<br>キムさんは 「<ruby>先生<rt>せんせい</rt></ruby>、お<ruby>誕生日<rt>たんじょうび</rt></ruby> おめでとうございます」と <ruby>言<rt>い</rt></ruby>いました。<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>は とても <ruby>嬉<rt>うれ</rt></ruby>しそうでした。<br><ruby>料理<rt>りょうり</rt></ruby>は とても おいしかったですから、みんな たくさん <ruby>食<rt>た</rt></ruby>べました。<br>アナさんは 「この <ruby>店<rt>みせ</rt></ruby>の <ruby>魚<rt>さかな</rt></ruby>は <ruby>全然<rt>ぜんぜん</rt></ruby> <ruby>辛<rt>から</rt></ruby>くないですね」と <ruby>言<rt>い</rt></ruby>いました。<br>ワトソンさんも 「ええ、においも <ruby>変<rt>へん</rt></ruby>じゃありませんね」と <ruby>答<rt>こた</rt></ruby>えました。<br>みんなで <ruby>楽<rt>たの</rt></ruby>しく <ruby>食事<rt>しょくじ</rt></ruby>を しました。</p>",
    "quizzes": [
      {
        "question": "ワトソンさんは <ruby>何<rt>なに</rt></ruby>が あまり <ruby>好<rt>す</rt></ruby>きじゃありませんか。",
        "choices": [
          "すし",
          "てんぷら",
          "<ruby>納豆<rt>なっとう</rt></ruby>"
        ],
        "answer_index": 2
      },
      {
        "question": "アナさんは <ruby>何<rt>なに</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みますか。",
        "choices": [
          "ビール",
          "ワイン",
          "ジュース"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "STORY_L9_04",
    "level": 9,
    "title": "<ruby>漢字<rt>かんじ</rt></ruby>の <ruby>勉強<rt>べんきょう</rt></ruby>",
    "schema_activation": [
      "<ruby>漢字<rt>かんじ</rt></ruby>は <ruby>難<rt>むずか</rt></ruby>しいですか。",
      "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>漢字<rt>かんじ</rt></ruby>を <ruby>覚<rt>おぼ</rt></ruby>えますか。"
    ],
    "translation": "<p>Ana studies Japanese at the university every day. She likes studying Japanese very much. She wakes up early every morning and studies for an hour. She mostly understands Hiragana and Katakana. However, she doesn't understand Kanji at all. \"Because Kanji is very difficult,\" Ana said. There are many ways to read them, and the way to write them is also difficult. She couldn't do yesterday's test at all. Ana was a little sad. She met Watson at the library. Watson works at a large car company. Watson understands Kanji a little. \"Watson, why do you understand Kanji?\" Ana asked. \"Because I have a Chinese friend,\" Watson answered. His friend's name is Mr. Chen. Mr. Chen is very good at Kanji. Watson sometimes learns Kanji from Mr. Chen. Mr. Chen is a very kind person. Watson said, \"Kanji is interesting.\" Ana asked, \"Is that true?\" Watson wrote Kanji in his notebook. \"This is the Kanji for 'mountain'. Since it's the shape of a mountain, it's easy, right?\" Ana said, \"Wow, it's true. It's like a picture!\" Next, Watson wrote 'river' and 'tree'. Ana said, \"I can understand this. It's interesting.\" Then, the two studied Kanji for an hour. Ana memorized twenty Kanji. Watson is very good at teaching. Professor Yamada came to the library. \"What are the two of you doing?\" the professor asked. \"We are practicing Kanji,\" Ana answered. The professor said, \"That's good.\" Ana said, \"Because I want to read newspapers someday.\" The professor said, \"Please do your best slowly.\" Ana felt much better. \"Watson, thank you very much.\" Watson said, \"No, you're welcome.\" Ana has come to like Kanji a little. She practices a little bit every day. The two went to the cafeteria together. Because they got hungry. While eating curry, they talked in Japanese again. Studying is hard, but it's fun if you have friends. Ana is looking forward to tomorrow's class too.</p>",
    "story_html": "<p>アナさんは <ruby>毎日<rt>まいにち</rt></ruby> <ruby>大学<rt>だいがく</rt></ruby>で <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>します。<br>アナさんは <ruby>日本語<rt>にほんご</rt></ruby>の <ruby>勉強<rt>べんきょう</rt></ruby>が とても <ruby>好<rt>す</rt></ruby>きです。<br><ruby>毎朝<rt>まいあさ</rt></ruby> <ruby>早<rt>はや</rt></ruby>く <ruby>起<rt>お</rt></ruby>きて、1<ruby>時間<rt>じかん</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby>します。<br>ひらがなと カタカナは だいたい わかります。<br>でも、<ruby>漢字<rt>かんじ</rt></ruby>は <ruby>全然<rt>ぜんぜん</rt></ruby> わからいません。<br>「<ruby>漢字<rt>かんじ</rt></ruby>は とても <ruby>難<rt>むずか</rt></ruby>しいですから」と アナさんは <ruby>言<rt>い</rt></ruby>いました。<br><ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>も たくさん あるし、<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>も <ruby>難<rt>むずか</rt></ruby>しいです。<br><ruby>昨日<rt>きのう</rt></ruby>の テストは <ruby>全然<rt>ぜんぜん</rt></ruby> できませんでした。<br>アナさんは <ruby>少<rt>すこ</rt></ruby>し <ruby>悲<rt>かな</rt></ruby>しかったです。<br><ruby>図書館<rt>としょかん</rt></ruby>で ワトソンさんに <ruby>会<rt>あ</rt></ruby>いました。<br>ワトソンさんは <ruby>大<rt>おお</rt></ruby>きい <ruby>自動車<rt>じどうしゃ</rt></ruby>の <ruby>会社<rt>かいしゃ</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>いています。<br>ワトソンさんは <ruby>漢字<rt>かんじ</rt></ruby>が <ruby>少<rt>すこ</rt></ruby>し わかります。<br>「ワトソンさん、どうして <ruby>漢字<rt>かんじ</rt></ruby>が わかるんですか」と アナさんは <ruby>聞<rt>き</rt></ruby>きました。<br>「わたしは <ruby>中国人<rt>ちゅうごくじん</rt></ruby>の <ruby>友達<rt>ともだち</rt></ruby>が いますから」と ワトソンさんは <ruby>答<rt>こた</rt></ruby>えました。<br><ruby>友達<rt>ともだち</rt></ruby>の <ruby>名前<rt>なまえ</rt></ruby>は <ruby>陳<rt>ちん</rt></ruby>さんです。<br><ruby>陳<rt>ちん</rt></ruby>さんは <ruby>漢字<rt>かんじ</rt></ruby>が とても <ruby>上手<rt>じょうず</rt></ruby>です。<br>ワトソンさんは <ruby>時々<rt>ときどき</rt></ruby> <ruby>陳<rt>ちん</rt></ruby>さんに <ruby>漢字<rt>かんじ</rt></ruby>を <ruby>習<rt>なら</rt></ruby>います。<br><ruby>陳<rt>ちん</rt></ruby>さんは とても <ruby>親切<rt>しんせつ</rt></ruby>な <ruby>人<rt>ひと</rt></ruby>です。<br>ワトソンさんは 「<ruby>漢字<rt>かんじ</rt></ruby>は おもしろいですよ」と <ruby>言<rt>い</rt></ruby>いました。<br>アナさんは 「<ruby>本当<rt>ほんとう</rt></ruby>ですか」と <ruby>聞<rt>き</rt></ruby>きました。<br>ワトソンさんは ノートに <ruby>漢字<rt>かんじ</rt></ruby>を <ruby>書<rt>か</rt></ruby>きました。<br>「これは『<ruby>山<rt>やま</rt></ruby>』という <ruby>漢字<rt>かんじ</rt></ruby>です。<ruby>山<rt>やま</rt></ruby>の <ruby>形<rt>かたち</rt></ruby>ですから、<ruby>簡単<rt>かんたん</rt></ruby>でしょう？」<br>アナさんは 「わあ、<ruby>本当<rt>ほんとう</rt></ruby>ですね。えみたいです！」と <ruby>言<rt>い</rt></ruby>いました。<br><ruby>次<rt>つぎ</rt></ruby>に ワトソンさんは 『<ruby>川<rt>かわ</rt></ruby>』と 『<ruby>木<rt>き</rt></ruby>』を <ruby>書<rt>か</rt></ruby>きました。<br>アナさんは 「これなら わかります。おもしろいですね」と <ruby>言<rt>い</rt></ruby>いました。<br>それから <ruby>二人<rt>ふたり</rt></ruby>は 1<ruby>時間<rt>じかん</rt></ruby> <ruby>漢字<rt>かんじ</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>しました。<br>アナさんは 20<ruby>個<rt>こ</rt></ruby> <ruby>漢字<rt>かんじ</rt></ruby>を <ruby>覚<rt>おぼ</rt></ruby>えました。<br>ワトソンさんは <ruby>教<rt>おし</rt></ruby>えるのが とても <ruby>上手<rt>じょうず</rt></ruby>です。<br><ruby>山田<rt>やまだ</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>が <ruby>図書館<rt>としょかん</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ました。<br>「<ruby>二人<rt>ふたり</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を していますか」と <ruby>先生<rt>せんせい</rt></ruby>は <ruby>聞<rt>き</rt></ruby>きました。<br>「<ruby>漢字<rt>かんじ</rt></ruby>の <ruby>練習<rt>れんしゅう</rt></ruby>を しています」と アナさんは <ruby>答<rt>こた</rt></ruby>えました。<br><ruby>先生<rt>せんせい</rt></ruby>は 「それは いいですね」と <ruby>言<rt>い</rt></ruby>いました。<br>アナさんは 「いつか <ruby>新聞<rt>しんぶん</rt></ruby>が <ruby>読<rt>よ</rt></ruby>みたいですから」と <ruby>言<rt>い</rt></ruby>いました。<br><ruby>先生<rt>せんせい</rt></ruby>は 「ゆっくり <ruby>頑張<rt>がんば</rt></ruby>ってください」と <ruby>言<rt>い</rt></ruby>いました。<br>アナさんは とても <ruby>元気<rt>げんき</rt></ruby>に なりました。<br>「ワトソンさん、<ruby>本当<rt>ほんとう</rt></ruby>に ありがとうございました。」<br>ワトソンさんは 「いいえ、どういたしまして」と <ruby>言<rt>い</rt></ruby>いました。<br>アナさんは <ruby>漢字<rt>かんじ</rt></ruby>が <ruby>少<rt>すこ</rt></ruby>し <ruby>好<rt>す</rt></ruby>きに なりました。<br><ruby>毎日<rt>まいにち</rt></ruby> <ruby>少<rt>すこ</rt>しずつ</ruby> <ruby>練習<rt>れんしゅう</rt></ruby>します。<br><ruby>二人<rt>ふたり</rt></ruby>は いっしょに <ruby>食堂<rt>しょくどう</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きました。<br>おなかが <ruby>空<rt>す</rt></ruby>きましたから。<br>カレーを <ruby>食<rt>た</rt></ruby>べながら、また <ruby>日本語<rt>にほんご</rt></ruby>で <ruby>話<rt>はな</rt></ruby>しました。<br><ruby>勉強<rt>べんきょう</rt></ruby>は <ruby>大変<rt>たいへん</rt></ruby>ですが、<ruby>友達<rt>ともだち</rt></ruby>が いれば <ruby>楽<rt>たの</rt></ruby>しいです。<br>アナさんは <ruby>明日<rt>あした</rt></ruby>の <ruby>授業<rt>じゅぎょう</rt></ruby>も <ruby>楽<rt>たの</rt>しみ</ruby>です。</p>",
    "quizzes": [
      {
        "question": "アナさんは どうして <ruby>漢字<rt>かんじ</rt></ruby>が <ruby>難<rt>むずか</rt></ruby>しいと <ruby>言<rt>い</rt></ruby>いましたか。",
        "choices": [
          "<ruby>絵<rt>え</rt></ruby>がないから",
          "<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>が たくさん あるから",
          "<ruby>嫌<rt>きら</rt></ruby>いだから"
        ],
        "answer_index": 1
      },
      {
        "question": "アナさんは いつか <ruby>何<rt>なに</rt></ruby>が <ruby>読<rt>よ</rt></ruby>みたいですか。",
        "choices": [
          "<ruby>雑誌<rt>ざっし</rt></ruby>",
          "<ruby>手紙<rt>てがみ</rt></ruby>",
          "<ruby>新聞<rt>しんぶん</rt></ruby>"
        ],
        "answer_index": 2
      }
    ]
  },
  {
    "id": "STORY_L10_01",
    "level": 10,
    "title": "アナさんの <ruby>部屋<rt>へや</rt></ruby>と <ruby>箱<rt>はこ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>",
    "schema_activation": [
      "あなたの <ruby>部屋<rt>へや</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
      "あなたの <ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に <ruby>写真<rt>しゃしん</rt></ruby>が ありますか。"
    ],
    "story_html": "<p>ここは アナさんの <ruby>部屋<rt>へや</rt></ruby>です。<br><ruby>部屋<rt>へや</rt></ruby>の <ruby>真ん中<rt>まんなか</rt></ruby>に <ruby>机<rt>つくえ</rt></ruby>が あります。<br><ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に パソコンと ノートが あります。<br><ruby>机<rt>つくえ</rt></ruby>の <ruby>右<rt>みぎ</rt></ruby>に ベッドが あります。<br>ベッドの <ruby>下<rt>した</rt></ruby>に <ruby>小<rt>ちい</rt></ruby>さい <ruby>箱<rt>はこ</rt></ruby>が あります。<br>その <ruby>箱<rt>はこ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>家族<rt>かぞく</rt></ruby>の <ruby>写真<rt>しゃしん</rt></ruby>が あります。</p>",
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
    "id": "STORY_L10_02",
    "level": 10,
    "title": "ワトソンさんの <ruby>部屋<rt>へや</rt></ruby>",
    "schema_activation": [
      "あなたの <ruby>家<rt>うち</rt></ruby>に <ruby>猫<rt>ねこ</rt></ruby>が いますか。",
      "<ruby>部屋<rt>へや</rt></ruby>に <ruby>時計<rt>とけい</rt></ruby>が ありますか。"
    ],
    "translation": "<p>This is Watson's room.<br>There is a bed, a desk, and a chair in the room.<br>There is a computer on the desk.<br>There is a notebook next to the computer.<br>There is a clock on the wall.<br>The clock is very old.<br>There is a bookshelf under the window.<br>There are many books in the bookshelf.<br>There is a cat under the desk.<br>The cat is sleeping.<br>Is there anyone in the room?<br>No, there is no one.<br>Watson is in the kitchen now.</p>",
    "story_html": "<p>ここは ワトソンさんの <ruby>部屋<rt>へや</rt></ruby>です。<br><ruby>部屋<rt>へや</rt></ruby>に ベッドと <ruby>机<rt>つくえ</rt></ruby>と いすが あります。<br><ruby>机<rt>つくえ</rt></ruby>の <ruby>上<rt>うえ</rt></ruby>に パソコンが あります。<br>パソコンの <ruby>隣<rt>となり</rt></ruby>に ノートが あります。<br><ruby>壁<rt>かべ</rt></ruby>に <ruby>時計<rt>とけい</rt></ruby>が あります。<br><ruby>時計<rt>とけい</rt></ruby>は とても <ruby>古<rt>ふる</rt></ruby>いです。<br><ruby>窓<rt>まど</rt></ruby>の <ruby>下<rt>した</rt></ruby>に <ruby>本棚<rt>ほんだな</rt></ruby>が あります。<br><ruby>本棚<rt>ほんだな</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>本<rt>ほん</rt></ruby>が たくさん あります。<br><ruby>机<rt>つくえ</rt></ruby>の <ruby>下<rt>した</rt></ruby>に ねこが います。<br>ねこは <ruby>寝<rt>ね</rt></ruby>ています。<br><ruby>部屋<rt>へや</rt></ruby>に <ruby>誰<rt>だれ</rt></ruby>か いますか。<br>いいえ、<ruby>誰<rt>だれ</rt></ruby>も いません。<br>ワトソンさんは <ruby>今<rt>いま</rt></ruby> <ruby>台所<rt>だいどころ</rt></ruby>に います。</p>",
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
    "id": "STORY_L10_03",
    "level": 10,
    "title": "<ruby>公園<rt>こうえん</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くに <ruby>何<rt>なに</rt></ruby>が ありますか",
    "schema_activation": [
      "あなたの <ruby>家<rt>うち</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くに <ruby>公園<rt>こうえん</rt></ruby>が ありますか。",
      "コンビニが <ruby>近<rt>ちか</rt></ruby>くに ありますか。"
    ],
    "translation": "<p>Watson and Ana are in the park.<br>This park is very large and beautiful.<br>There are many trees and flowers in the park.<br>There is a large pond in the middle of the park.<br>There are fish in the pond.<br>There are many people in the park today.<br>Children are playing in front of the pond.<br>Ana is taking photos under a tree.<br>Watson is sitting on a bench.<br>There is a dog next to Watson.<br>The dog is very cute.<br>Is there a supermarket near the park?<br>Yes, there is a large supermarket behind the park.<br>Next to the supermarket, there is a small bakery.<br>There is also a post office nearby.<br>Between the bakery and the post office, there is a mailbox.<br>Ana said, \"There is a department store over there too, isn't there?\"<br>Watson replied, \"Yes, there is everything in this town.\"<br>It is a very convenient place.<br>They will stay in the park for one more hour.</p>",
    "story_html": "<p>ワトソンさんと アナさんは <ruby>公園<rt>こうえん</rt></ruby>に います。<br>この <ruby>公園<rt>こうえん</rt></ruby>は とても <ruby>大<rt>おお</rt></ruby>きくて きれいです。<br><ruby>公園<rt>こうえん</rt></ruby>に <ruby>木<rt>き</rt></ruby>や <ruby>花<rt>はな</rt></ruby>が たくさん あります。<br><ruby>公園<rt>こうえん</rt></ruby>の <ruby>真<rt>ま</rt>ん中<rt>なか</rt></ruby>に <ruby>大<rt>おお</rt></ruby>きい <ruby>池<rt>いけ</rt></ruby>が あります。<br><ruby>池<rt>いけ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>に <ruby>魚<rt>さかな</rt></ruby>が います。<br><ruby>今日<rt>きょう</rt></ruby>は <ruby>公園<rt>こうえん</rt></ruby>に <ruby>人<rt>ひと</rt></ruby>が たくさん います。<br><ruby>池<rt>いけ</rt></ruby>の <ruby>前<rt>まえ</rt></ruby>で <ruby>子供<rt>こども</rt></ruby>が <ruby>遊<rt>あそ</rt></ruby>んでいます。<br>アナさんは <ruby>木<rt>き</rt></ruby>の <ruby>下<rt>した</rt></ruby>で <ruby>写真<rt>しゃしん</rt></ruby>を <ruby>撮<rt>と</rt></ruby>っています。<br>ワトソンさんは ベンチに <ruby>座<rt>すわ</rt></ruby>っています。<br>ワトソンさんの <ruby>隣<rt>となり</rt></ruby>に いぬが います。<br>いぬは とても <ruby>可愛<rt>かわい</rt></ruby>いです。<br><ruby>公園<rt>こうえん</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>くに スーパーが ありますか。<br>はい、<ruby>公園<rt>こうえん</rt></ruby>の <ruby>後<rt>うしろ</rt></ruby>に <ruby>大<rt>おお</rt></ruby>きい スーパーが あります。<br>スーパーの <ruby>隣<rt>となり</rt></ruby>に <ruby>小<rt>ちい</rt></ruby>さい パン<ruby>屋<rt>や</rt></ruby>が あります。<br><ruby>近<rt>ちか</rt></ruby>くに <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>も あります。<br>パン<ruby>屋<rt>や</rt></ruby>と <ruby>郵便局<rt>ゆうびんきょく</rt></ruby>の <ruby>間<rt>あいだ</rt></ruby>に ポストが あります。<br>アナさんは 「あそこに デパートも ありますね」と <ruby>言<rt>い</rt></ruby>いました。<br>ワトソンさんは 「ええ、この <ruby>町<rt>まち</rt></ruby>には <ruby>何<rt>なに</rt></ruby>でも ありますよ」と <ruby>答<rt>こた</rt></ruby>えました。<br>とても <ruby>便利<rt>べんり</rt></ruby>な <ruby>所<rt>ところ</rt></ruby>です。<br><ruby>二人<rt>ふたり</rt></ruby>は もう 1<ruby>時間<rt>じかん</rt></ruby> <ruby>公園<rt>こうえん</rt></ruby>に います。</p>",
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
    "id": "STORY_L10_04",
    "level": 10,
    "title": "ワトソンさんの<ruby>家<rt>うち</rt></ruby>の<ruby>中<rt>なか</rt></ruby>",
    "schema_activation": [
      "あなたの <ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。",
      "あなたの <ruby>家<rt>うち</rt></ruby>は <ruby>広<rt>ひろ</rt></ruby>いですか。"
    ],
    "translation": "<p>Today, Watson is introducing his house. \"This is my house. Please come in.\" There is a living room first. There is a large television in the living room. Under the television, there are many DVDs. There is a sofa. On the sofa, there is a blue cushion. There is a table in front of the sofa. There is a newspaper and a cup on the table. Watson's wife is in the living room. She is reading a book. Watson's children are in the yard. They are playing with a dog. There is a large tree in the yard. Under the tree, there is a bicycle. Next, there is the kitchen. There is a large refrigerator in the kitchen. Inside the refrigerator, there is milk and beer. There are also eggs and vegetables. There is a window above the sink. There are small flowers next to the window. Next, there is Watson's room. There is a desk in the room. Inside the drawer of the desk, there is a passport and keys. There is a computer on the desk. Next to the computer, there is a family photo. There is a bed on the right side of the room. Under the bed, there is a small box. There are old toys inside the box. There is a bookshelf on the left side of the room. There are English books and Japanese books in the bookshelf. \"There are many things in my house,\" Watson said. Watson's house is very clean. Ana and Kim came to Watson's house. They came at 3:00. Kim asked, \"Is there a restroom nearby?\" Watson said, \"Yes, it is over there. Next to the stairs.\" There is a bathroom on the second floor too. Everyone will drink tea in the living room. Is there any cake? Yes, there is cake in the refrigerator. Everyone is very happy. Watson's house is very lively today.</p>",
    "story_html": "<p><ruby>今日<rt>きょう</rt></ruby>、ワトソンさんは<ruby>家<rt>うち</rt></ruby>を<ruby>紹介<rt>しょうかい</rt></ruby>しています。<br>「ここはわたしの<ruby>家<rt>うち</rt></ruby>です。どうぞ<ruby>入<rt>はい</rt></ruby>ってください。」<br>まず<ruby>居間<rt>いま</rt></ruby>があります。<ruby>居間<rt>いま</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きいテレビがあります。<br>テレビの<ruby>下<rt>した</rt></ruby>にDVDがたくさんあります。<br>ソファーがあります。ソファーの<ruby>上<rt>うえ</rt></ruby>に<ruby>青<rt>あお</rt></ruby>いクッションがあります。<br>ソファーの<ruby>前<rt>まえ</rt></ruby>にテーブルがあります。<br>テーブルの<ruby>上<rt>うえ</rt></ruby>に<ruby>新聞<rt>しんぶん</rt></ruby>とコップがあります。<br><ruby>居間<rt>いま</rt></ruby>にワトソンさんの<ruby>奥<rt>おく</rt></ruby>さんがいます。<ruby>奥<rt>おく</rt></ruby>さんは<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んでいます。<br>ワトソンさんの<ruby>子供<rt>こども</rt></ruby>は<ruby>庭<rt>にわ</rt></ruby>にいます。いぬと<ruby>遊<rt>あそ</rt></ruby>んでいます。<br><ruby>庭<rt>にわ</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きい<ruby>木<rt>き</rt></ruby>があります。<ruby>木<rt>き</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>自転車<rt>じてんしゃ</rt></ruby>があります。<br><ruby>次<rt>つぎ</rt></ruby>に<ruby>台所<rt>だいどころ</rt></ruby>があります。<ruby>台所<rt>だいどころ</rt></ruby>に<ruby>大<rt>おお</rt></ruby>きい<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>があります。<br><ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby>とビールがあります。<br><ruby>卵<rt>たまご</rt></ruby>や<ruby>野菜<rt>やさい</rt></ruby>もあります。<ruby>流<rt>なが</rt></ruby>し<ruby>台<rt>だい</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>窓<rt>まど</rt></ruby>があります。<br><ruby>窓<rt>まど</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>に<ruby>小<rt>ちい</rt></ruby>さい<ruby>花<rt>はな</rt></ruby>があります。<br><ruby>次<rt>つぎ</rt></ruby>にワトソンさんの<ruby>部屋<rt>へや</rt></ruby>があります。<ruby>部屋<rt>へや</rt></ruby>に<ruby>机<rt>つくえ</rt></ruby>があります。<br><ruby>机<rt>つくえ</rt></ruby>の<ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しの<ruby>中<rt>なか</rt></ruby>にパスポートと<ruby>鍵<rt>かぎ</rt></ruby>があります。<br><ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>にパソコンがあります。<br>パソコンの<ruby>隣<rt>となり</rt></ruby>に<ruby>家族<rt>かぞく</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>があります。<br><ruby>部屋<rt>へや</rt></ruby>の<ruby>右<rt>みぎ</rt></ruby>にベッドがあります。<br>ベッドの<ruby>下<rt>した</rt></ruby>に<ruby>小<rt>ちい</rt></ruby>さい<ruby>箱<rt>はこ</rt></ruby>があります。<br><ruby>箱<rt>ほこ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>古<rt>ふる</rt></ruby>いおもちゃがあります。<br><ruby>部屋<rt>へや</rt></ruby>の<ruby>左<rt>ひだり</rt></ruby>に<ruby>本棚<rt>ほんだな</rt></ruby>があります。<br><ruby>本棚<rt>ほんだな</rt></ruby>に<ruby>英語<rt>えいご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>と<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>があります。<br>「わたしの<ruby>家<rt>うち</rt></ruby>にはいろいろな<ruby>物<rt>もの</rt></ruby>がありますね」とワトソンさんは<ruby>言<rt>い</rt></ruby>いました。<br>ワトソンさんの<ruby>家<rt>うち</rt></ruby>はとてもきれいです。<br>アナさんとキムさんがワトソンさんの<ruby>家<rt>うち</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ました。<br>3<ruby>時<rt>じ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ました。<br>キムさんは「<ruby>近<rt>ちか</rt></ruby>くにお<ruby>手洗<rt>てあらい</rt></ruby>がありますか」と<ruby>聞<rt>き</rt></ruby>きました。<br>ワトソンさんは「はい、あそこにありますよ。<ruby>階段<rt>かいだん</rt></ruby>の<ruby>隣<rt>となり</rt></ruby>です」と<ruby>言<rt>い</rt></ruby>いました。<br>2<ruby>階<rt>かい</rt></ruby>にもお<ruby>手洗<rt>てあらい</rt></ruby>があります。<br>みんなで<ruby>居間<rt>いま</rt></ruby>でお<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みます。<br>ケーキがありますか。はい、<ruby>冷蔵庫<rt>れいぞうこ</rt></ruby>にケーキがあります。<br>みんなとても<ruby>嬉<rt>うれ</rt></ruby>しいです。<ruby>今日<rt>きょう</rt></ruby>のワトソンさんの<ruby>家<rt>うち</rt></ruby>はとてもにぎやかです。</p>",
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
