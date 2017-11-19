This is a test version of the ICAT website which uses Github Pages. You can view the site [here](https://icatproject.github.io). To change the content of the site, you will generally just need to edit a `.md` file. For this purpose, files and directories starting with a `.` or `_` can be ignored.

## Site Map
- index.md
  - about.md
    - about/collaboration.md
    - about/clf.md
    - about/hzb.md
    - about/isis.md
    - about/octopus.md
  - support.md
    - support/faq.md
    - support/reporting_bugs.md
  - docs.md
  - apis.md
    - apis/
  - developers.md

## Setting up a local copy of the site
There are generic instructions for setting up a Github Pages site locally [here](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/).

### Quickstart (for Windows)
- Install [Git](https://git-for-windows.github.io/)
- Install [Ruby](https://rubyinstaller.org/). I installed Ruby 2.2.
- In Git Bash:
  - Install Bundler:
  ```Shell
  gem install bundler
  ```
  - Clone the git repository:
  ```Shell
  git clone https://github.com/icatproject/icatproject.github.io.git
  ```
  - Enter the directory:
  ```Shell
  cd icatproject.github.io
  ```
  - Install the dependencies:
  ```Shell
  bundle install
  ```
  - Run the site locally:
  ```Shell
  bundle exec jekyll serve
  ```
- Preview the site in your browser at `http://localhost:4000`.

If you get the error `Liquid Exception: SSL_connect returned=1...`, it is because the version of openssl in the Ruby Gem repository does not come with an approved CA bundle. There are links to solutions [here](https://github.com/arshad/Google-Form-Octopress/issues/1). If you are using Git Bash on Windows, the [steps](https://gist.github.com/fnichol/867550) are:
- Download the `cacert.pem` file from Curl [here](http://curl.haxx.se/ca/cacert.pem)
- Put it somewhere. I put it at `C:\Ruby22-x64\cacert.pem`.
- Create/edit the file at `~/.bashrc` to add:
  ```Shell
  export SSL_CERT_FILE=/c/Ruby22-x64/cacert.pem
  ```
  (note the change to the path). 
- In Git Bash:
  ```Shell
  source ~/.bashrc
  ```
- Proceed with 'Run the site locally' above.
