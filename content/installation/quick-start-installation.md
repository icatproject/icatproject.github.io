---
title: Quick Start Installation
---

An installer has been created to get people started as quickly as
possible and then to provide a decent directory structure for more
complex deployments.

The installer is built using  [BitRock](http://bitrock.com)'s cross
platform installer InstallBuilder for which they have provided  a
license, at no cost, for the ICAT project.

Pick up the one for your architecture from:

[icat-3.0-linux-ia64-installer.run](/misc/installer/icat-3.0-linux-ia64-installer.run)

[icat-3.0-linux-x64-installer.run](/misc/installer/icat-3.0-linux-x64-installer.run)

[icat-3.0-windows-installer.exe](/misc/installer/icat-3.0-windows-installer.exe)

Each time major changes are made to the ICAT components a new set of
installers are created. Each of these installers has a number. Version 3
corresponds to the latest set of Glassfish components.

Currently you can install the authenticators of your choice, ICAT, and
then optionally IDS and TopCAT. In addition you can install some example
metadata into ICAT and upload three files so that TopCAT has some data
to browse and download.

To make it even easier a couple of option files are provided:
[options](/misc/installer/options) which gives you everything but with
only one authenticator (anon -- to give anonymous access) and
[fulloptions](/misc/installer/fulloptions) which gives everything --
however you should still login as anon to be able to see the data in
TopCAT. In both cases you should edit the first line to give the root
password for an installed mysql server. _Note that some newer
mysql/MariaDB installations allow the unix root user to log in as mysql
root without providing  a password. This can be avoided by setting the
plugin field to null in the user table of the mysql database._

You can then enter for linux:

    ./icat-3.0-linux-x64-installer.run --optionfile fulloptions

When the window appears just keep clicking on _"forward"_ as the values
have been filled for you. This will give you a very insecure
installation as no login is required but it will allow you to get
started.

There is currently a bug with unattended mode of installation -- please
don't use the _"--mode"_ option.

![bitrock](/installation/installersby_tiny.png)
