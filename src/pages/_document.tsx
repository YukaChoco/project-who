import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/icon.png' />
          <meta name='theme-color' content='#fff' />
          <meta property='og:url' content='https://project-who.vercel.app' />
          <meta property='og:title' content='Who!大学生のためのSNS管理ツール' />
          <meta
            property='og:description'
            content='大学生に向けたオンライン名刺交換アプリケーション「Who!」です。SNSのアカウントなどのプロフィール情報を、名刺で交換することができます。'
          />
          <meta property='og:site_name' content='Who!' />
          <meta property='og:image' content='/ogp.png' />
          <meta name='twitter:card' content='/ogp.png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
