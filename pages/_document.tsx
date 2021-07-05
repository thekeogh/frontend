import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class Doc extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&amp;family=Fira+Mono:wght@400;700&amp;display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
