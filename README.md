


## タスク構成

### タスクや必要な機能

 + 開発面補助
  + mock server
  + livereload
  + メタ言語による静的チェック
  + モジュール(JSライブラリ)管理
 + コード最適化
  + html,javascript,css 共通
    + minify
    + concat
    + revision
  + css
    + vendor prefix
  + その他静的リソース最適化
    + image
    + font
 + コードスタイルチェック(lint)
  + html, css, javascript, [framework]
 + テスト
  + unit
  + e2e
  + report
    + covorage
 + コード品質チェック
  + report
    + metrics
 + その他
  + dependency checker
  + CI/CD
  + 配置

### tutorial

#### タスク管理

 + grunt
 + gulp

今回は`grunt`

```sh
# gruntくむときに最初に入れとくもの
npm install --save-dev grunt load-grunt-tasks time-grunt load-grunt-configs chalk
# global npm modules
npm intall grunt -g

```

#### 開発面補助

 + webpack
 + browsersync

今回は`browsersync`

`grunt server`で開発環境を立ち上げる

 ```sh

 npm i -D grunt-browser-sync

```

#### コード最適化

`grunt build`でコードを最適化する

 + コード最適化
   + minifyする
   + 結合する
   + revisionを付ける

[ツール:grunt-usemin](https://github.com/yeoman/grunt-usemin)

```sh

npm i -D grunt-browser-sync
npm i -D grunt-contrib-clean
npm i -D grunt-contrib-concat
npm i -D grunt-contrib-copy
npm i -D grunt-contrib-cssmin
npm i -D grunt-contrib-uglify
npm i -D grunt-filerev
npm i -D grunt-usemin

```

#### コードスタイルチェック

#### テスト

#### etc...
