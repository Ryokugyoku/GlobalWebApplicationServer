// i18n.jsファイルでi18nextをインポート
import i18n from 'i18next'; // i18nextからi18nオブジェクトをデフォルトインポートする
// initReactI18nextをインポート
import { initReactI18next } from 'react-i18next';
// languageDetectorをインポート
import HttpBackend from 'i18next-http-backend'

// 各言語設定を行う
Promise.all([
    fetch('/api/resource?lang=en')
        .then(response => response.text()),
    fetch('/api/resource?lang=ja-JP')
        .then(response => response.text())
]).then(values => {
    const [enLang, jaLang] = values;
    //各言語設定を行う
    i18n
        .use(HttpBackend) // 現在の言語を取得する
        .use(initReactI18next) // i18nをreact-i18nextに渡す
        .init({
            // ingオプションは基本指定しなくても大丈夫 ブラウザで認識している言語に合わせられる？
            //lng: "ja", 
            fallbackLng: "en",
            resources: {
                ja: {
                    translation: jaLang,
                },
                en: {
                    translation: enLang
                },
            },
        });
});

export default i18n;
