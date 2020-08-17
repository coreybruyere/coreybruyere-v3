module.exports = {
  siteTitle: 'Corey Bruyere',
  siteTitleAlt: 'Corey Bruyere Portfolio and Blog', // This allows an alternative site title for SEO schema.
  publisher: 'Corey Bruyere', // Organization name used for SEO schema
  siteDescription: 'Personal Blog and Portfolio of Corey Bruyere',
  siteUrl: 'https://www.coreybruyere.com', // Site domain. Do not include a trailing slash! If you wish to use a path prefix you can read more about that here: https://www.gatsbyjs.org/docs/path-prefix/
  postsPerHomePage: 7, // Number of posts shown on the 1st page of of the index.js template (home page)
  postsPerPage: 6, // Number of posts shown on paginated pages
  author: 'Corey Bruyere', // Author for RSS author segment and SEO schema
  authorUrl: 'https://www.coreybruyere.com/about/', // URL used for author and publisher schema, can be a social profile or other personal site
  userTwitter: '@coreybruyere', // Change for Twitter Cards
  shortTitle: 'Corey Bruyere Personal Website', // Used for App manifest e.g. Mobile Home Screen
  shareImage: '/logos/share.jpg', // Open Graph Default Share Image. 1200x1200 is recommended
  shareImageWidth: 900, // Change to the width of your default share image
  shareImageHeight: 600, // Change to the height of your default share image
  siteLogo: '/favicon/logo.png', // Logo used for SEO, RSS, and App manifest
  backgroundColor: '#009688', // Used for Offline Manifest
  themeColor: '#ca5000', // Used for Offline Manifest
  copyright: `Copyright © ${new Date().getFullYear()} Corey Bruyere`, // Copyright string for the RSS feed
}
