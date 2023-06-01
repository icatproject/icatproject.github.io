const remark = require('remark');
const visit = require('unist-util-visit');

module.exports = {
  siteMetadata: {
    title: `ICAT Project`,
    description: `The ICAT software takes data from large scientific facilities (e.g particle accelerators) - and catalogues and indexes it so scientists can find the data they need.`,
    siteUrl: `https://icatproject.github.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.jsx`),
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 700,
              showCaptions: true,
              wrapperStyle: 'margin-left: 0 !important; margin-right: 0 !important;',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ICAT project website`,
        short_name: `ICAT project`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `browser`,
        icon: `src/images/favicon.ico`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `content`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: (node) => node.frontmatter.title,
            content: (node) => node.rawMarkdownBody,
            slug: (node) => node.fields.slug,
            excerpt: (node) => {
              const excerptLength = 55;
              let excerpt = '';
              const tree = remark().parse(node.rawMarkdownBody);
              visit(tree, 'text', (treeNode) => {
                excerpt += `${treeNode.value} `;
              });
              return `${excerpt.split(' ').slice(0, excerptLength).join(' ')} ...`;
            },
          },
        },
      },
    },
  ],
};
