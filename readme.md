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

終了。

## Puppeteer版
```
node puppeteer_google_login.js
```

`https://myaccount.google.com/` が出力されればログイン成功している。

2017年8月時点のログイン画面でのみ確認してるので今後変更される可能性は高い。

2018年12月時点で動作確認。2段階認証でなければログインできる。

## 動作確認環境
- node.js 11.4
- Chrome 71

## 使ったもの
- https://github.com/OnetapInc/chromy
- https://github.com/GoogleChrome/puppeteer

## LICENSE
MIT
