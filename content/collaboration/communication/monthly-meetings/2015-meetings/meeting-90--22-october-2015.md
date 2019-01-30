---
title: Meeting 90 – 22 October 2015
date: 2015-10-22
---

# Agenda

  - Actions from meeting 89 (Steve)
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

Present: Steve, Wayne, Frazer, Jody, Brian R, Kevin, Rolf, Shelly,
Peter, Tom

Apologies: Andy

Action 89.0  Steve created an area on github for ICAT dashboard.

Action 87.5  Steve gave permission to Rolf to allow write access to ICAT
repository and Rolf has populated it.

  - This is Wayne’s last meeting before he leaves STFC.
  - Jody Salt was introduced who is taking over Wayne’s work on TopCAT.
  - Steve mentioned that it is not possible to define a startup sequence
    in Wildfly so the components will have to be able to wait until
    dependencies are available before starting up fully.
  - If the IDS starts up without an ICAT available then it needs to fail
    graciously and loop whilst waiting for the ICAT to be available.
  - Steve has fixed a few small IDS problems.
  - Diamond were having a problem with the IDS failing to restore a file
    but continuously trying – this needs fixing.
  - Globus and SmartClient downloading will be tested more as TopCAT V2
    gets more testing.
  - Tom explained the Diamond requirement to have the ability to restore
    files from an IDS to a local HPC cluster and asked if there was
    wider interest in this.
  - Shelly commented that SNS would be interested in this.
  - Kevin reported that the WebDAV client for CLF has been released for
    testing and he is awaiting feedback. It is on a public GitHub repo –
    not the ICAT one yet as it is still a bit CLF specific to be of
    wider use. It will be modified to make it work for ISIS shortly.
  - ICAT Dashboard development has started. The IDS will log using JMS
    so that the dashboard gets the data it needs. Steve is proposing to
    move ICAT call logging to JMS as well.
  - The ICAT installer now works first time since a fix in ICAT 4.5.1.
  - Steve has been having problems with JMS in Wildfly and has updated
    to a later version which has less problems. He hopes to have an ICAT
    running on Wildfly in about a week’s time.
  - Rolf has just reported and issue with TopCAT V2 following on from
    the conversation on the
icatgroup.

# Actions

|      |                                                                                                                   |          |
| ---- | ----------------------------------------------------------------------------------------------------------------- | -------- |
| ITEM | DESCRIPTION                                                                                                       | ASSIGNED |
| 90.0 | Make the software to restore files from the IDS to a local filesystem/HPC cluster available to the ICAT community | Frazer   |
| 89.1 | Provide feedback on icat.server 4.6.0 snapshot (relating to Lucene search API)                                    | Jody     |
| 88.0 | Discuss use of existing icat sessions in python-icat with Rolf.                                                   | Brian    |
| 85.2 | Provide an example ICAT facility page for ISIS in icatproject.org                                                 | Tom      |
| 85.3 | Migrate ICAT Manager to the ICAT project GitHub                                                                   | Andy     |
| 81.0 | Report bug in eclipselink                                                                                         | Steve    |
| 74.0 | Look into JDBC connector resilience with Wildfly                                                                  | Steve    |
