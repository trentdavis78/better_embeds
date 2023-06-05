import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  var data = {
    /* defaults */
    site_name: 'NFTG.TV',
    author: 'Join The NFTGamerTV (NFTG) Community',
    title: 'NFT/De-Fi/Crypto News, Games, Reviews, Drop Schedules, Live Streams',
  
    description:
      'When you join the NFTG community, you are joining a sodality of NFT/crypto enthusiasts along with some of the most educated & experienced Play-to-Earn (P2E) gamers in the entire Gamerverse!"',
    image_url: '/images/og/hero_img.png',
    theme_color: '#01FFF5',
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
            href="https://nftg.tv/"

          />
          </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
