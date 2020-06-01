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
        name: "music",
        link: "/music",
        pic_url: "images/music.png",
        isSelected: true,
      },
      {
        name: "attraction",
        link: "/attraction",
        pic_url: "images/attraction.png",
        isSelected: false,
      },
      {
        name: "food",
        link: "/food",
        pic_url: "images/food.png",
        isSelected: false,
      },
      {
        name: "coffee",
        link: "/coffee",
        pic_url: "images/coffee.png",
        isSelected: false,
      },
      {
        name: "map",
        link: "/map",
        pic_url: "images/map.png",
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
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
