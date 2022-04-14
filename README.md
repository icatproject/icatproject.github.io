# ICAT Project website

[![Build Status](https://travis-ci.org/icatproject/icatproject.github.io.svg?branch=gatsbyjs)](https://travis-ci.org/icatproject/icatproject.github.io)

This is the source code of the [icatproject.github.io](https://icatproject.github.io) GitHub Pages site. It uses [GatsbyJS](https://www.gatsbyjs.org/) to generate the site using React for the structure of the site and Markdown files for the site contents.

The `src` folder contains all the React code used to create the site. Look here if you need to edit the layout of the site or add new functionality. See [developer notes](#developer-notes)

The `content` folder contains all the Markdown files and images used to fill in the site contents. If you need to edit site content or add a new page then look here. See [content notes](#content-notes)

The `static` folder contains other resources such as PDFs. These are copied automatically to the `public` folder, retaining any file structure.

To develop locally, [install GatsbyJS](https://www.gatsbyjs.org/tutorial/part-zero/) and clone this branch (and change into its directory) and then run `npm install` to install all the needed dependencies and then run `gatsby develop`. This will build the site at `http://localhost:8000`

To deploy manually, run `npm run deploy`. This will automatically build and publish the build to the `master` branch. However, this repository has `GitHUb Actions` set up so that when changes are detected on the `gatsbyjs` branch the site is deployed after it is built, so manual deployment would rarely be needed.

## Developer notes

The `src` directory contains all of the source code for the application. It contains three subfolders.

`src/components` contains any React components that in and of themselves are not standalone pages - they are instead used to construct the layout. There is no `index.js` file or `App.js` file, instead the "base" file is `src/components/layout.jsx`. This determines the overall structure of the site as all pages are built using `<Layout>`. It also pulls in all the other components in `src/components` to create the static areas of the site such as the header. So starting from `layout.jsx` should allow one to discover how the site is constructed. The [GatsbyJS tutorial](https://www.gatsbyjs.org/tutorial/) is a good resource to learn how to to develop, but most of the components are plain React. The only Gatsby-specific information to know is to use `GatsbyJS <Link>` components when navigating to a page internal to the site as this uses `react-router` underneath and allows for faster page navigation, and the usage of `StaticQuery` throughout the components.

`src/pages` contains standalone pages that are not generated from Markdown. For example, `404.jsx` is a special page that Gatsby looks for to navigate to when the user specifies a route that does not exist. Meanwhile `search.jsx` is a regular page at `/search`.

`src/templates` contains pages that take Markdown and generate pages in the website. Currently, every Markdown page is processed exactly the same through the `default.jsx` template, that merely extracts the title from the Markdown frontmatter and uses it to create a `<h1>` element and otherwise dumps the rest of the Markdown html into the DOM.

There are also some configuation files that may be of interest. `gatsby-config.js` contains the gatsby configuration - this is mostly used to specify plugins and modify the plugin settings. `gatsby-node.js` is where we process all the so called `nodes` - these are used to create pages. This is where we convert our Markdown content into Gatsby MarkdownRemark nodes (using `onCreateNode`), giving them a slug or URL path. Then `createPages` is used to convert MarkdownRemark nodes into html pages using our `default.jsx` template.

This project has `Prettier` and `ESLint` set up. See `.prettierrc` and `.eslintrc.json` for details. Use `npm run format` to format files according to `Prettier` and use `npm run lint` to lint files using `ESLint`. There are tutorials online for setting these up with any text editors you use for a better workflow. They will also run automatically on staged files before commit - any `ESLint` errors will cancel the commit.

## Content notes

- All top level folders of the `content` directory are converted into navbar headers and their children into dropdown items. See `navbar.js` and `dropdown.js` for more info on this
- When creating a new Markdown file, ensure to give it a frontmatter section with a title - and if it is a set of meeting minutes a date. The format is as shown below:
  ```
  ---
  title: My page title
  ---
  ```
  or
  ```
  ---
  title: My Meeting Minutes
  date: 2019-01-30
  ---
  ```
- To automatically give an image a caption, use the below format:
  ```
  [image title](image_url "Your caption here")
  ```
