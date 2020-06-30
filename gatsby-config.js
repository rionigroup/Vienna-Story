module.exports = {
  siteMetadata: {
    title: `Vienna Story`,
    description: `A front-end environment with Gatsby framework `,
    author: `@rickchang`,
    menuLinks: [
      {
        name: "home",
        link: "/",
        pic_url: "",
        isSelected: false,
      },
      {
        name: "culture",
        link: "/culture",
        pic_url: "images/culture.png",
        isSelected: true,
      },
      {
        name: "attraction",
        link: "/attraction",
        pic_url: "images/attraction.png",
        isSelected: false,
      },
      {
        name: "shopping",
        link: "/shopping",
        pic_url: "images/shopping.png",
        isSelected: false,
      },
      {
        name: "coffee",
        link: "/coffee",
        pic_url: "images/coffee.png",
        isSelected: false,
      },
      {
        name: "food",
        link: "/food",
        pic_url: "images/food.png",
        isSelected: false,
      },
      {
        name: "wellness",
        link: "/wellness",
        pic_url: "images/wellness.png",
        isSelected: false,
      }
    ],
  },
  plugins: [
    'gatsby-plugin-material-ui',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-169399630-2",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bebas Neue`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "stories-of-vienna.com",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        // add relative path to your layout component
        component: `${__dirname}/src/components/i18nLayout.js`,
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
