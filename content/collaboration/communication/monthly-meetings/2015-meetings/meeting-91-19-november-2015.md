---
title: Meeting 91 – 19 November 2015
date: 2015-11-19
---

# Agenda

  - Actions from meeting 90 (Steve)
  - Component development
      - ICAT (Steve)
      - ICAT Manager
      - Python-icat (Rolf)
      - IDS (Steve)
          - FUSE (Alex)
          - Globus transfer (Frazer)
          - SmartClient (Steve)
          - WebDAV (Kevin)
      - TopCAT (Jody)
      - IJP (Brian R)
      - ICAT Dashboard (Alex)
      - Multi-container support (Steve)
      - Installation (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Steve, Tom, Frazer, Jody, Brian R, Kevin, Rolf, Peter, Jianguo

Apologies: Alex, Andy

Action 90.0 Make the software to restore files from the IDS to a local
filesystem/HPC cluster available to the ICAT community. Frazer reported
that emails had been exchanged.

Action 85.2 Provide an example ICAT facility page for ISIS in
icatproject.org. Tom has send information to Steve.

  - CLF are starting to use  the WebDav system but it is not yet in a
    state where it can be easily used by other facilities.
  - getSize calls in TopCAT 2 are now sent to ICAT for multiple files to
    improve performance. Jody has addressed a number of issues and is
    now working to make use of the ICAT Lucene indexing.
  - One of the IJP batch connectors was considering machines that were
    DOWN rather than OFFLINE to be ONLINE.
  - ICAT 4.6 Snapshot, which has not yet been made generally available,
    works with multiple containers (WildFly and Glassfish) apart from
    Message Driven Beans and more importantly there are problems with
    transaction handling in Hibernate which is the default JPA
    implementation for WildFly.
  - When building the Lucene index with the ICAT 4.6 Snapshot – large
    amounts of memory are needed.
  - ICAT 4.6 should be released soon.
  - Peter reported that he had been working on Puppet components for
    ICAT management. He was encouraged to share these on
Contrib.

# Actions

|      |                                                                                |          |
| ---- | ------------------------------------------------------------------------------ | -------- |
| ITEM | DESCRIPTION                                                                    | ASSIGNED |
| 91.0 | Add Puppet modules to contrib                                                  | Peter    |
| 89.1 | Provide feedback on icat.server 4.6.0 snapshot (relating to Lucene search API) | Jody     |
| 85.3 | Migrate ICAT Manager to the ICAT project GitHub                                | Andy     |
| 81.0 | Report bug in eclipselink                                                      | Steve    |
| 74.0 | Look into JDBC connector resilience with Wildfly                               | Steve    |
