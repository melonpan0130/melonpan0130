module.exports = {
  siteMetadata: {
    title: `Woon`,
    description: `내가 공부하려고 만든 블로그`,
    author: `@melonpan0130`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-generate-typings`,
      options: {
              dest: `./src/graphql-types.d.ts`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // TOC
    {
      resolve: `gatsby-remark-autolink-headers`,
      options: {
        className: `anchor-header`, // 이 class명으로 하이라이트 코드를 구현할 예정이므로 반드시 넣자.
        maintainCase: false, // 이 부분은 반드시 false로 하자. url이 대소문자를 구분하기 때문에 링크가 작동하지 않을 수 있다.
        removeAccents: true,
        elements: [`h2`, 'h3', `h4`], // 링크를 추가할 Header 종류 선택
      },
    },
  ],
}
