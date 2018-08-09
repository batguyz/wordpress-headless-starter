# wordpress-headless-starter

This starter is used as a foundation for building Gatsby sites using Wordpress as a Headless CMS

## Getting Started

### Install
`gatsby new wordpress-headless-starter https://github.com/lukethacoder/wordpress-headless-starter`

### Run
`cd wordpress-headless-starter`

`gatsby develop`

## Using your WordPress site

Edit the `gatsby-config.js` file and change the `baseURL` to your WordPress site *(URL without trailing slash or protocol)* 

```
plugins: [
  {
    resolve: 'gatsby-source-wordpress',
    options: {
      // The base url to your WP site.
      baseUrl: "url-to-your-wordpress.site",
      // WP.com sites set to true, WP.org set to false
      hostingWPCOM: false,
      // The protocol. This can be http or https
      protocol: 'http',
      // Use 'Advanced Custom Fields' Wordpress plugin
      useACF: false,
      auth: {},
      // Set to true to debug endpoints on 'gatsby build'
      verboseOutput: false,
    },
    // additional plugins go here
  },
],
```

Set `useACF` to `true` if needed and also adjust the `protocol` to either `http` or `https`

---

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/lukethacoder/wordpress-headless-starter)
