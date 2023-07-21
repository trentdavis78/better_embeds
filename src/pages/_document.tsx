import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
var data = {
    /* defaults */
    site_name: 'www.dopeoplestill/type-www-in-urls/?',
    author: 'you can add some additional info thats not the author here too',
    title: 'Some title I would try to keep to 40 characters or less',
  
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et justo justo. Pellentesque dignissim eros sed nisl mollis, eget iaculis urna tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut diam risus. Duis condimentum fermentum elementum. Aliquam varius arcu sit amet ligula auctor, in iaculis tortor feugiat. Vivamus luctus est in dolor accumsan congue.',
    image_url: 'https://picsum.photos/1920/1080',
    theme_color: '#0090ff',
    og_type: 'website',
  
  }
  return (
    <Html lang="en">
      <Head>
      <meta property="og:locale" content="en_US" />
          <meta property="og:type" content={data.og_type} key="og_type" />

          {/* discord large image embed */}
          <meta property="og:site_name" content={data.site_name} key="site_name" />
          <meta property="og:author" content={data.author} key="author" />
          <meta property="og:title" content={data.title} key="title" />
    
          <meta
            property="og:description"
            content={data.description}
            key="og_description"
          />
          <meta property="og:image" content={data.image_url} key="image" />
          <meta name="theme-color" content={data.theme_color} key="theme-color" />
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
