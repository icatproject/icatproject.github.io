---
title: Component Guidelines
---

# Introduction

These guidelines are for developers of components to encourage
uniformity -- especially as seen by the installer and the user.

## Java

- All java packages should be below org.icatproject
- All java components must be pure maven builds
- All java components should make use of the maven site plugin for
  documentation
- All java components must make use of the maven release mechanism to
  generate artifacts to be stored on repo.icatproject.org. This
  requires that the pom.xml is configured correctly.

## Installation

- Installation scripts should be in python compatible with versions
  2.4 to 2.7
- The normal installation mechanism is to download a file
  xxxxx-n.n.n-distro.zip, unpack it and run _setup.py install_ and
  uninstalled by _setup.py uninstall_. Any properties should have a
  suffix .example appended or be within a directory having a .example
  appended.
- the distribution should contain a file README.txt pointing to the
  top level of the documentation for that component on
  repo.icatproject.org
- setup.py may have options -- especially if the component does not
  really need an xxxxxx-setup.properties file
- setup.py may be interactive but this should be avoided where
  possible
- It should be possible to run setup.py install or setup.py uninstall
  multiple times without errors.
- in the case .war and .ear files containing a version number, install
  should remove the previous one first
- uninstall should reverse the install except that if two or more
  components make the same state change upon installation they should
  not reverse it when uninstalled.

## Documentation

- All components must make use of the maven site mechanism to deploy a
  user guide and installation manual as one or more html pages on
  repo.icatproject.org

## Testing

- Unit tests should be written by the developer to test as much as
  possible of the internals
- All components should be tested before release by someone other than
  the person making the last set of changes
- Testing should ensure that these guidelines have been followed, that
  the component can be installed and uninstalled as described in the
  installation manual and that it performs as described in the user
  guide.
- If the release notes describe bugs, reported by a user, which have
  been fixed there should normally be a corresponding system test.
