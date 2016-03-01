


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
# global npm modules
npm intall grunt-cli -g

```

#### フォルダのテンプレートを作成

テンプレートを取得する

```sh
git clone https://github.com/MSakamaki/web-development.git -b template
cd web-development
npm install
```

以下のモジュールはインストール済み

 + `grunt` `load-grunt-tasks` `time-grunt` `load-grunt-configs` `chalk`


フォルダ構成

```sh
.
├── Gruntfile.js       # 開発タスク(grunt)
├── README.md
├── lib                # 開発タスク用サブ部品
│   └── util.js
├── package.json
└── public             # Webアプリケーション
    ├── css
    │   ├── main.css
    │   └── sub.css
    ├── favicon.ico
    ├── index.html
    └── js
        ├── main.js
        └── sub.js

```

#### 開発面補助

 + webpack
 + browsersync

今回は`browsersync`

`grunt server`で開発環境を立ち上げるのを目標に

```sh

npm i -D grunt-browser-sync

```

```sh
.
├── Gruntfile.js
├── README.md
├── config
│   └── browserSync.js    # <= 新しく追加
├── lib
│   └── util.js
├── package.json
└── public
    ├── css
    │   ├── main.css
    │   └── sub.css
    ├── favicon.ico
    ├── index.html
    └── js
        ├── main.js
        └── sub.js
```

 + [browserSync.js](https://github.com/MSakamaki/web-development/blob/master/config/browserSync.js)

 + gruntfile.js

```javascript
// 開発開始
grunt.registerTask('serve',
  csl.info('ライブリロード開発を行います'),
  [
    'browserSync:dev',
  ]);

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

 + [clean](https://github.com/MSakamaki/web-development/blob/master/config/clean.js)
 + [copy](https://github.com/MSakamaki/web-development/blob/master/config/copy.js)
 + [usemin](https://github.com/MSakamaki/web-development/blob/master/config/usemin.js)
 + [useminPrepare](https://github.com/MSakamaki/web-development/blob/master/config/useminPrepare.js)
 + [uglify](https://github.com/MSakamaki/web-development/blob/master/config/uglify.js)
 + [filerev](https://github.com/MSakamaki/web-development/blob/master/config/filerev.js)

 + gruntfile.js

```javascript
// ビルドタスク
grunt.registerTask('build', csl.info('ビルドを行い dist フォルダに配備します'), [
    'clean:build',
    'copy:build_index',
    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',
    'filerev:dist',
    'usemin'
  ]);

```


#### コードスタイルチェック

#### テスト

#### etc...
