# Better Discord Embeds
#### *"...don't be the dev with the ugly social embeds"* - Bob Kahn, inventor of the internet
 ####
 ####
#### 
#### _See  \_document.jsx in the src/pages folder for example usage:_

```sh
 const data = {
    /* defaults */
    site_name: 'www.dopeoplestill/type-www-in-urls/?'
    author: 'you can add some additional info thats not the author here too',
    title: 'Some title I would try to keep to 40 characters or less,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et justo justo. Pellentesque dignissim eros sed nisl mollis, eget iaculis urna tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut diam risus. Duis condimentum fermentum elementum. Aliquam varius arcu sit amet ligula auctor, in iaculis tortor feugiat. Vivamus luctus est in dolor accumsan congue.',
    image_url: 'https://picsum.photos/1920/1080',
    theme_color: '#0090ff',
    og_type: 'website',
  
  }
 
  ...
 
  <head>
    
    <meta property="og:locale" content="en_US" />
          <meta property="og:type" content={data.og_type} key="og_type" />

          {/* discord large image embed */}
          <meta property="og:title" content={data.title} key="title" />
          <meta property="og:site_name" content={data.site_name} key="site_name" />
          <meta
            property="og:description"
            content={data.description}
            key="og_description" />
          <meta property="og:image" content={data.image_url} key="image" />
          <meta name="theme-color" content={'cyan'} key="theme-color" />
          <meta name="twitter:card" content="summary_large_image" key="misc-card" />
          <link
            type="application/json+oembed"
            href="/oEmbed.json" />
  
  </head>
```
## License

Whatever the free one is, MIT I think... 
It's 100% free to use. 
Stop charging for the basic-ass building blocks of a website (y'all know who you are)! 

 
