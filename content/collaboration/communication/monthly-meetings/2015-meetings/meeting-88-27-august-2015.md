---
title: Meeting 88 – 27 August 2015
date: 2015-08-27
---

# Agenda

  - Actions from meeting 87 (Steve)
  - Component development
      - ICAT (Steve)
      - ICAT Manager
      - Python-icat (Rolf)
      - IDS (Steve)
          - FUSE (Condie)
          - Globus transfer (Frazer)
          - SmartClient (Steve)
          - WebDAV (Kevin)
      - TopCAT (Wayne)
      - IJP (Brian R)
      - ICAT Dashboard (Alex)
      - Installation (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

# Notes

Present: Milan, Steve, Tom, Jianguo, Brian R, Wayne  
Apologies: Rolf, Shelley, Andy, Peter Parker, Frazer

Action 87.2 glassfish-setup.py and the instructions on the web have been
updated to make use of different symmetric encryption algorithms.

Action 87.3 a new organisation icatproject-contrib has been created to
hold the old googlecode contrib

Action 87.4 is being tracked in another meeting

Action 87.5 will be changed to “Provide an example ICAT facility page
for ISIS in icatproject.org”

  - Release 4.6 of icat.server is being prepared. A new restful call to
    obtain properties has been added to return everything useful
    that doesn’t need authentication, including info about
    authenticators which can be used by tools such as topcat. The ESCAPE
    keyword now works in JPQL queries. The lucene searching targetting
    topcat is under way.
  - Brian has started to use python-icat for some IJP job scripts. He
    needs to be able to use an existing ICAT sessionId and ensure that
    the client does not close the session on termination. He will
    discuss this with Rolf.
  - The ids.smartclient has needed a few changes to make it work well
    with topcat. This could now be released but will first be tested on
    OS X.
  - webdav for ids. Kevin is on leave but Tom reported that testing with
    very large file transfers gave session timeout problems .
  - The backend (for the “Angular topcat” is mostly done. There is still
    an issue that getStatus requires a sessionId and Wayne would like
    the option to not require it.
  - IJP needs uodating to work with latest ICAT and IDS.
  - For the icat dashboard, in the absence of Alex, Tom reported that
    feedback on the plans would be appreciated. Steve has already
    circulated a suggestion that the presentation layer should bve a
    separate component. The ids will need to produce some kind of record
    of what it has been doing.
  - Steve reported that he was obtaining a license for MireDot (free for
    open source projects) to generate documentation for the ids.server
    and for the restful interface  to the
icat.server.

# Actions

|      |                                                                   |                 |
| ---- | ----------------------------------------------------------------- | --------------- |
| ITEM | DESCRIPTION                                                       | ASSIGNED        |
| 88.0 | Discuss use of existing icat sessions in python-icat with Rolf.   | Brian           |
| 87.0 | Run DOI script for all recent releases.                           | Steve           |
| 87.1 | Test installation on OS X                                         | Steve           |
| 87.5 | Give permission to Rolf to allow write access to ICAT repositry   | Steve           |
| 85.2 | Provide an example ICAT facility page for ISIS in icatproject.org | Tom             |
| 85.3 | Migrate ICAT Manager to the ICAT project GitHub                   | Christophe/Andy |
| 81.0 | Report bug in eclipselink                                         | Steve           |
| 74.0 | Look into JDBC connector resilience with Wildfly                  | Steve           |
