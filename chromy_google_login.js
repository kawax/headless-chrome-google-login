const Chromy = require('chromy');
const fs = require('fs');

const config = require('./config');

//trueにすると途中段階のスクリーンショットを残す。
const screenshot = false;

//「次へ」ボタンのclass。後から変わりそう。
const next_class = 'snByac';

(async () => {

    //ローカルでテストする場合、visibleをtrueにすると動作してる様子が表示される。
    const chromy = new Chromy({visible: false});


    //ログイン画面もしくはログイン後に移動したいURLを指定
    await chromy.goto('https://accounts.google.com/');

    //ログイン画面にリダイレクトされる


    //メール
    await chromy.type('#identifierId', config.mail);

    if (screenshot) {
        fs.writeFileSync('screenshot/mail.png', await chromy.screenshot());
    }

    await chromy.click('span.' + next_class);

    await chromy.sleep(1000);

    if (screenshot) {
        fs.writeFileSync('screenshot/mail_click.png', await chromy.screenshot())
    }

    //パスワード
    await chromy.type('input[name=password]', config.password);
    await chromy.click('span.' + next_class);

    await chromy.sleep(5000);

    if (screenshot) {
        fs.writeFileSync('screenshot/pw_click.png', await chromy.screenshot())
    }

    //2段階認証やスマホログインを使ってるとここで必要になって止まる。


    //ここまで来ればログイン済みなので後はURLへ移動など必要な処理をする


    const result = await chromy.evaluate(() => {
        return document.URL
    });


    console.log(result);

    await chromy.close()
})();

