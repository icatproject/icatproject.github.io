---
title: Meeting 89 – 17 September 2015
date: 2015-09-17
---

# Agenda

  - Actions from meeting 88 (Steve)
  - Component development
      - ICAT (Steve)
      - ICAT Manager
      - Python-icat (Rolf)
      - IDS (Steve)
          - FUSE (Alex)
          - Globus transfer (Frazer)
          - SmartClient (Steve)
          - WebDAV (Kevin)
      - TopCAT (Wayne)
      - IJP (Brian R)
      - ICAT Dashboard (Alex)
      - Installation (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Milan, Steve, Tom, Jianguo, Brian M, Wayne, Alex, Andy, Rolf
and Chris P

Action 87.0 All of the DOI scripts have been run for recent releases.

Action 87.1 Testing on OS X is complete. During testing Steve found that
glassfish 4.0 doesn’t work with OS X which mean glassfish 4.2 would have
to be used. ICAT however, doesn’t work with 4.2 so Steve proposes to
wait for the WildFly configuation to be ready.

  - Steve has made available a ICAT 4.6 SNAPSHOT.  He is currently
    waiting for feedback from Wayne about the Lucene calls.
  - Steve has updated the authenticators to include the new
    getDescription calls. These are also available as SNAPSHOTS.
  - Steve has given Rolf a login to the repository but Rolf still
    requires an area.
  - Rolf had concerns that the ICAT might be leaning away from SOAP and
    as python-icat is a SOAP client this could mean having to change the
    code base. Steve commented on how ICAT will continue to have the
    option of using SOAP which answered Rolfs concerns.
  - Steve has released the ids.smartclient with .debian,  .rpm and .exe
    for windows. Steve is not far off from making a .pkg for OS X.
  - In Kevin’s absence Tom reported on webdav, informing the team that
    it will be out for testing within the next few weeks for CLF.
  - Wayne has released a V1.13 SNAPSHOT last week. This has added
    support for ICAT v4.5.
  - TopCat V2 is currently working with Https, globus and smartclient.
    There is currently an issue with Firefox and TopCat V2 that Wayne is
    currently investigating. There will be a Beta release of TopCat V2
    soon.
  - Alex reported on the requirements meeting with ISIS for ICAT
    dashboard. No new requirements were captured.
  - Steve will be producing an updated installer once Topcat 1.13.0 is
    no longer a SNAPSHOT.
  - Steve is currently working on the Wildfly container and all is going
    well so
far.

# Actions

|      |                                                                   |                 |
| ---- | ----------------------------------------------------------------- | --------------- |
| ITEM | DESCRIPTION                                                       | ASSIGNED        |
| 89.0 | Steve to create area on github for ICAT dashboard.                | Steve           |
| 89.1 | Provide feedback on icat.server 4.6.0 snapshot                    | Wayne           |
| 88.0 | Discuss use of existing icat sessions in python-icat with Rolf.   | Brian           |
| 87.5 | Give permission to Rolf to allow write access to ICAT repositry   | Steve           |
| 85.2 | Provide an example ICAT facility page for ISIS in icatproject.org | Tom             |
| 85.3 | Migrate ICAT Manager to the ICAT project GitHub                   | Christophe/Andy |
| 81.0 | Report bug in eclipselink                                         | Steve           |
| 74.0 | Look into JDBC connector resilience with Wildfly                  | Steve           |
