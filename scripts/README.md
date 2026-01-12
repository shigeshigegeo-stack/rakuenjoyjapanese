# Scripts Directory

このディレクトリには、プロジェクトの開発・運用に使用するスクリプトが格納されています。

## 構造

### `content/`
ストーリーの追加や生成に関連するスクリプトです。
- `add-new-stories.js`: ストーリーを新規追加します。
- `add-more-stories.js`: 追加のストーリーを生成・保存します。

### `maintenance/`
データの修正、移行、クリーニングなどの管理用スクリプトです。
- `clean-stories.js`: データクリーニングを行います。
- `check-titles.js`, `update-titles.js`: タイトルの確認と更新。
- `fix-quizzes.js`, `update-quizzes.js`: クイズデータの修正・更新。
- `migrate-*.js`: データ構造やレベルの移行スクリプト。
- `monitor-*.js` (もしあれば): 監視用。

## 実行方法

ルートディレクトリから実行することを想定しています。

```bash
# 例: ストーリーを追加
node scripts/content/add-new-stories.js

# 例: データチェック
node scripts/maintenance/check-titles.js
```
