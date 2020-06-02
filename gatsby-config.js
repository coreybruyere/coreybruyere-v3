const configure = require('./src/utils/siteConfig')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
}

const { spaceId, accessToken } = contentfulConfig

console.log(contentfulConfig)
console.log(`.env.${process.env.NODE_ENV}`)

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    siteUrl: configure.siteUrl,
    rssMetadata: {
      site_url: configure.siteUrl,
      feed_url: `${configure.siteUrl}/rss.xml`,
      title: configure.siteTitle,
      description: configure.siteDescription,
      image_url: `${configure.siteUrl}${configure.siteLogo}`,
      author: configure.author,
      copyright: configure.copyright,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: configure.siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: true,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: configure.siteTitle,
        short_name: configure.shortTitle,
        description: configure.siteDescription,
        start_url: '/',
        background_color: configure.backgroundColor,
        theme_color: configure.themeColor,
        display: 'minimal-ui',
        icon: `static${configure.siteLogo}`,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata
          ret.allMarkdownRemark = ref.query.allMarkdownRemark
          ret.generator = 'GatsbyJS GCN Starter'
          return ret
        },
        query: `
    {
      site {
        siteMetadata {
          rssMetadata {
            site_url
            feed_url
            title
            description
            image_url
            author
            copyright
          }
        }
      }
    }
  `,
        feeds: [
          {
            serialize(ctx) {
              const rssMetadata = ctx.query.site.siteMetadata.rssMetadata
              return ctx.query.allContentfulPost.edges.map(edge => ({
                date: edge.node.publishDate,
                title: edge.node.title,
                description: edge.node.body.childMarkdownRemark.excerpt,

                url: rssMetadata.site_url + '/' + edge.node.slug,
                guid: rssMetadata.site_url + '/' + edge.node.slug,
                custom_elements: [
                  {
                    'content:encoded': edge.node.body.childMarkdownRemark.html,
                  },
                ],
              }))
            },
            query: `
              {
            allContentfulPost(limit: 1000, sort: {fields: [publishDate], order: DESC}) {
               edges {
                 node {
                   title
                   slug
                   publishDate(formatString: "MMMM DD, YYYY")
                   body {
                     childMarkdownRemark {
                       html
                       excerpt(pruneLength: 80)
                     }
                   }
                 }
               }
             }
           }
      `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: configure.themeColor,
      },
    },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
