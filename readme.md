# Headless Chrome で Googleアカウントにログインするサンプル


```
npm install
```

## 設定
config.sample.jsをコピーしてconfig.jsを作る。
config.js内のGoogleアカウントを設定。


## Chromy版
```
node chromy_google_login.js
```

`https://myaccount.google.com/` が出力されればログイン成功している。

2017年6月時点のログイン画面でのみ確認してるので今後変更される可能性は高い。

## 動作確認環境
- node.js 8.1.2
- Chrome 59

## 使ったもの
- https://github.com/OnetapInc/chromy

## LICENSE
MIT
