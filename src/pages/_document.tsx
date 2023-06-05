import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  var data = {
    /* defaults */
    site_name: 'local.ai',
    author: 'Model Management | Digest Verification | Inferencing Server',
    title: 'Local AI Model Management, Verification, and Inferencing',
  
    description:
      'Experiment with AI models locally with a native app designed to simplify the whole process.',
    image_url: 'https://imagedelivery.net/dCSlCQNYRsUOWJPw5n2BPQ/3930b2ea-a176-4046-a42e-58f1c4893700/1920',
    theme_color: '#0090ff',
    og_type: 'website',
  
  }
  return (
    <Html lang="en">
      <Head>
      <meta property="og:locale" content="en_US" />
          <meta property="og:type" content={data.og_type} key="og_type" />

          {/* discord large image embed */}
          <meta property="og:title" content={data.title} key="title" />
          <meta property="og:site_name" content={data.site_name} key="site_name" />
          <meta
            property="og:description"
            content={data.description}
            key="og_description"
          />
          <meta property="og:image" content={data.image_url} key="image" />
          <meta name="theme-color" content={'cyan'} key="theme-color" />
          <meta name="twitter:card" content="summary_large_image" key="misc-card" />
          <link
            type="application/json+oembed"
            href="/oEmbed.json"

          />
          </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
