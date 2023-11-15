## 開発環境


## 開発ツール
### pre-commmit
commit前にeslint,prettierが自動的に実行されます。
commit時にエラーと出た場合は、以下を参考に修正してください。

### eslint
js,ts,tsxなどのlinterです。  
定められたruleに従っていないコードを検出します。
キリがいいところやcommit前に以下のコマンドを実行してください  
出たエラーについては、エラー内容を読んで修正してください。
```bash
mpm run lint-fix
```

### prettier
js,ts,cssなどのformatter  
以下のコマンドをcommit前やキリがいいところで実行してください
```bash
npm run format
```