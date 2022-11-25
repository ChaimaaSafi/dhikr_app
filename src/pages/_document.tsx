import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gulzar&display=swap"
          rel="stylesheet"
        />

        <meta name="description" content="todaydhikr app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-Alegreya">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
