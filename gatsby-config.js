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
        name: "traffic",
        link: "/traffic",
        pic_url: "images/traffic.png",
        isSelected: true,
      },
      {
        name: "desert",
        link: "/desert",
        pic_url: "images/desert.png",
        isSelected: false,
      },
      {
        name: "spots",
        link: "/map",
        pic_url: "images/spot.png",
        isSelected: false,
      },
      {
        name: "bnb",
        link: "/bnb",
        pic_url: "images/bnb.png",
        isSelected: false,
      },
      {
        name: "restaurant",
        link: "/restaurant",
        pic_url: "images/restaurant.png",
        isSelected: false,
      },
      {
        name: "coffee",
        link: "/coffee",
        pic_url: "images/coffee.png",
        isSelected: false,
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "vienna-story.com",
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
