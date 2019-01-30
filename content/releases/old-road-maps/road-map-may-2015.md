---
title: Road Map – May 2015
---

# Road Map for the ICAT family

# _May 2015_

The purpose of this document is to indicate the planned ICAT family
developments. It tries to look one year ahead and will be updated three
times a year.

## General

August 2015

The Google Code repositories are being closed down by Google. On August
24th the repositories become read only. A backup of the svn repositories
will be made and the code moved to github. It is expected that many git
repositories will be needed as this is the unit for versioning and
release. The wikis and issues currently maintained with Google Code will
probably be migrated manually.

December 2015

Improved release procedures will be considered to encourage more
testing.

The documentation will be improved to include manual Installation,
 component overviews and "How To"s.

A list of facilities using ICAT will be added to the web site.

The web site will be reviewed -- preferably by a professional.

## ICAT Server

May 2015 (probably 4.5.0)

- Bug fixes -- main ones being:
  - Allow queries of the form "SELECT a.b.c FROM ..." This was not
    documented but used to work in ICAT 4.3 and is standard JPQL.
  - Provide better protection against queries that are getting too
    large a quantity of data back from the database.
  - Fix a number of errors with the import ensuring that new lines
    and quotes are handled properly and that anything exported can
    be reimported.
- Removal of Lucene support as the API is about to change

July 2015 (probably 4.6.0)

- Reintroduction of Lucene but with ad-hoc calls to support TopCAT2
- Bug fixes -- main ones being to address the behaviour of the update
  and delete rules

November 2015

- Support Wildfly
- Make Lucene index access more robust with multiple servers
- Modify the handling of authz rules to make the RDBMS do more work

## IDS

June 2015

- Provide documentation on icatproject web page to help readers
  understand at least what it is.

July 2015

- Provide some solutions to the issue of handling large downloads.
  There are currently four under development, at least one of which
  should be released by July

September 2015

- Ensure that multiple IDS deployments can share the same archive
  storage. This should work without modification for read only systems
  otherwise coordination is required. One IDS instance might able to
  use another to reduce access to archive storage

TopCAT

July  2015

- Shopping cart based
- Customisable
- Better support for facility hierarchy
- Improve searching via tailored ICAT search API
- "Responsive" implementation with AngularJS

## IJP

October 2015

- Make Platform LSF batch connector exists fully functional
- Replace GWT GUI with AngularJS In harmony with TopCAT
- Consider:
  - Treating datasets and datafiles as parameters
  - Workflows
  - Templates
  - Support autoreduction

## Python-icat

August 2015

Make able to use ICAT import/export
