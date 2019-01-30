# ICAT Project website

This is the source code of the [icatproject.github.io](https://icatproject.github.io) GitHub Pages site. It uses [GatsbyJS](https://www.gatsbyjs.org/) to generate the site using React for the structure of the site and Markdown files for the site contents.

The `src` folder contains all the React code used to create the site. Look here if you need to edit the layout of the site or add new functionality

The `content` folder contains all the Markdown files and images used to fill in the site contents. If you need to edit site content or add a new page then look here.

The `static` folder contains other resources such as PDFs. These are copied automatically to the `public` folder, retaining any file structure.

To develop locally, [install GatsbyJS](https://www.gatsbyjs.org/tutorial/part-zero/) and clone this branch and then run `gatsby develop` in the resulting repository. This will build the site at `http://localhost:8000`

## Notes about creating/editing site content

- All top level folders of the `content` directory are converted into navbar headers and their children into dropdown items. See `navbar.js` and `dropdown.js` for more info on this
- When creating a new Markdown file, ensure to give it a frontmatter section with a title - and if it is a set of meeting minutes a date. The format is as shown below:
  ```
  ---
  title: My Title
  date: 2019-01-30
  ---
  ```
- To automatically give an image a caption, use the below format:
  ```
  [image title](image_url "Your caption here")
  ```
