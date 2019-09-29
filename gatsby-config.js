module.exports = {
    siteMetadata: {
        title: 'Hello World.',
        author: 'Ayan Hedayati',
        tagline: 'This is my personal site created with Gatsby.js'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Ayan Hedayati`,
              short_name: `Ayan Hedayati`,
              start_url: `/`,
              background_color: `#111`,
              theme_color: `#111`,
              display: `minimal-ui`,
            },
          }
    ]
}