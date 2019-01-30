---
title: ICAT Component
---

# Installation of an ICAT component

The mechanism for installation of an ICAT project component has been
standardised so that all installations follow the same approach.

Each component is distributed in a single zip file (with the name ending
in "-distro.zip")

The zip file should be unpacked and will contain a README.txt file which
will reference both these instructions and instructions specific to the
component. Both sets of instructions should be read before continuing.
It is recommended to create an install directory and unzip each ICAT
component there. Each component will be unzipped into its own directory.
The install directory should be kept to facilitate upgrades.

The component specific instructions will list a set of prerequisites.
Ensure that these are satisfied before continuing further.

# The setup script

The installation command is setup. Some linux distributions have a setup
command so either place the current directory at the start of your PATH
or invoke the command as ./setup. The setup command will only work in
the unpacked distribution directory.

Some components make use of config files. These generally take the form
xxx-setup.properties and xxx.properties. If any configuration file is
not present in the current directory when you run any setup command it
will be copied from a file of the same name with a .example suffix, you
will be invited to edit it, and the command will terminate.

The setup command has a help flag. So you can enter:

    ./setup -h

This will list the options one of which will be -v (or --verbose).
Generally -v prints the commands that are being issued and -vv prints
the command output as well.

## Install

Change directory to the unpacked distribution and enter

    ./setup install

This will now out the installation. It will stop on some errors but will
generally try to continue so that as many problems as possible will be
found in each pass.

There is no need to uninstall before trying to install again.

It is fine to run install after a successful installation; the component
will simply be reinstalled.

## Uninstall

Change directory to the unpacked distribution and enter

    ./setup uninstall

This will uninstall the component. Any configuration files will be
removed. So if you simply want to install a new version of the component
then do not use uninstall on the old one as old configuration files will
be lost.

# Installing a new version of a component.

Unzip the new distribution into the install directory and allow the
unzip command to overwrite any existing files. Delete any old .war or
.jar files as the install script will otherwise complain that it does
not know which one to install and run:

    ./setup install

as before. Any old configuration files will be used. Though they may
need to be updated first if specified in the installation instructions
and release notes for that component.

# Installation on Windows

The setup scripts will also work on Windows (where it has been tested on
Windows 7 with Glassfish and MySQL). However please note:

- Create directories C:\\usr\\bin and C:\\usr\\share
- The Glassfish installer should be avoided -- simply unzip the .zip
  file. It is recommended to unzip into C:\\ -- do avoid a path with
  spaces for the moment.
- It is easier but not essential to include the Python directory
  (probably C:\\Python27) in your PATH.
- To install suds find a distribution (0.4 is the current one) unpack
  and move the suds directory to the site-packages directory (probably
  C:\\Python27\\Lib\\site-packages)
- Invoke python scripts (such as setup, testicat and asadmin by
  preceding them with python. So instead of `./setup install` type
  `python setup install`
- testicat and asadmin are by default installed under C:\\usr\\bin
