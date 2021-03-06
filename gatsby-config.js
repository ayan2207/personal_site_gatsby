
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: 'Ayaan Hedayati',
        author: 'Ayan Hedayati',
        tagline: 'Hello World!'
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-source-stripe`,
            options: {
                objects: ["Sku"],
                secretKey: process.env.STRIPE_SECRET_KEY,
                downloadFiles: true,
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-stripe',
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