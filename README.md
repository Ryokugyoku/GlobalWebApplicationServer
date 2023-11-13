# このプロジェクトの目的
Reactの勉強
その他技術の勉強

# GlobalWebApplicationServer
使用言語　C# ASP.NET React 

使用しているDB　
PostgreSql
設定用bash GlobalWebApplicationServer/Data/DBInstall.sh

# ファイル構成
## C#設定ファイル

### DB設定関連
1. Program.cs
1. appsettings.json

### クライアントサイドのURLルーティング関連
1. setupProxy.js
1. AppRoute.js

 # DBのマイグレーション手順 ※DBに対して自動的にテーブルを作成するための機能
1. Visual Studio ツール　> NuGetパッケージマネージャー > コンソール
1. add-migration initialcreate
1. Update-database

# React

## ReactとASP.NET
### 詰まった点
Reactの Props関係を利用するときgetStaticPropsや、getServersidePropsで呼び出す必要が関数があるが、Next.jsでしか対応していない
そのため、react-i18nextを活用してマルチ言語対応するのが困難な状態になっている。
根本的な問題：withTranslationからpropsに値が渡されない...

## ASP.NET&Reactが向いていると思われる要件
1. サーバが貧弱でサーバ再度の負担をできる限り抑えたい
1. 要件の中に今後ネイティブアプリケーションの実装予定がある　※PWAとの相性が良い
1. ハードウェアに作用する仕様が先を含めない

## ASP.NET & Reactが向いていないと思われる要件
1. ハードウェアに近い処理は厳しいところがある
1. 現段階では未調査だが、ハードウェアに直接作用するようなプログラムの実行は不可能に近いと思われる　※要調査後　更新
1. SpringBootと比較して、工数がかかりそう。　※慣れるまでに時間がかかりそう、公式ドキュメントが思ったより貧弱


## APIの追加方法
1. Controllersフォルダにコントローラークラスを設定する
1. ControllerBaseを継承する
1. [Route("/api/[controller]")]をクラス名の頭に記述する　※[controller]はクラス名のController.csを取り除いた名前に置き換わる
1. ユーザ再度から呼び出せるように setupProxy.jsにコントローラークラスに設定したパスを設定する　※この時点でReact再度ではマッピング情報が登録される

## Reactでのマルチ言語対応方法
1. .NETのリソースファイルをJson化
1.  React側の react-i18nextライブラリを利用してマルチ言語化

# 認証関係(ログイン関係)
ASP.NETのテンプレートとして提供される認証関係のものは、基本的なセキュリティ要件は満たせるため、特別な要求がない限り触る必要はなさそう
下手な自作暗号化よりかは強固なのは確認できた

# ASP.NET コントローラークラスの記述
## クライアントから引数をもらう方法
### HttpGet属性の時
1. メソッドに[HttpGet]という属性を付与する
1. 属性をつけたメソッドの引数に[From Query]の属性を持った引数を設定する
1. React.jsから引数を使ってアクセスしたいときはURLの後に「?変数名=入力値」を追加する形で引数を渡すことができるようになる

# JavaScript基礎
## 変数の宣言
### const 
再代入が禁止された変数で、nullの状態で宣言することはできない、宣言時に必ず値を代入する必要がある
NG 例
```
        const jaLang;
        const enLang;
```

### let
　ブロックスコープを持った変数、メソッド内に留めたいオブジェクトなどを利用する際に利用する。
  基本こちらの変数を利用することになる。※Var型だと
  
### var
　関数スコープを持った変数
　端的にいうと、C#と似たような変数の動き方になっている。そのため関数の外で宣言するとグローバル変数のようになってしまい管理が複雑化する?

# PWA
## Comming Soon ~

