module.exports = {
    siteMetadata: {
        title: 'VPW Site',
        siteUrl: 'http://www.vpinworkshop.com',
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sass',
        'gatsby-plugin-web-font-loader',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaults: {
                    placeholder: 'blurred',
                },
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'VPin Workshop',
                short_name: 'VPW',
                start_url: '/',
                background_color: '#082c4c',
                theme_color: '#062037',
                display: 'browser',
                icon: `src/images/vpw-icon-solo.png`,
            },
        },
    ],
};
