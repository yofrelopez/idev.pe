import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* English Metadata */}
        <meta name="title" content="Idev - We Develop Your Ideas" />

        <meta property="og:title" content="Idev - We Develop Your Ideas" />
        <meta property="og:description" content="At Idev, we turn your ideas into innovative digital solutions. If you can imagine it, we can create it." />
        <meta property="og:image" content="http://idev.pe/social_image_web.png" />
        <meta property="og:url" content="http://idev.pe" />
        <meta property="og:type" content="website" />



        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nombreDeUsuarioDeTwitter" />
        <meta name="twitter:title" content="Idev - We Develop Your Ideas" />
        <meta name="twitter:description" content="At Idev, we turn your ideas into innovative digital solutions. If you can imagine it, we can create it." />
        <meta name="twitter:image" content="http://idev.pe/social_image_web.png" />






      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
