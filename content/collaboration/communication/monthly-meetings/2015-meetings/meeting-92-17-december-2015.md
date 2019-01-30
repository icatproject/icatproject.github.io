---
title: Meeting 92 – 17 December 2015
date: 2015-12-17
---

# Agenda

  - Actions from meeting 91 (Steve)
  - Report from steering group meeting \#3 (Tom/Andy)
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
  - icatproject.org (Steve)
  - Issues from ICAT production deployments (Any)
  - AOB (Any)

Present: Steve, Tom, Frazer, Jody, Brian R, Kevin, Rolf, Peter, Jianguo,
Alex and Chris P

Apologizes: Shelly.

Action 91.0 Add Puppet modules to contrib. Peter has added them to
github but still needs to put them into the ICAT organization area.

Action 89.1 Provide feedback on icat.server 4.6.0 snapshot (relating to
Lucene search API).  Jody explained how the search works well but there
are a few minor issues that require further communication with Steve.

Action 81.0 Steve has reported 3 bugs in eclipselink. Currently waiting
on feedback from the Eclipse team.

  - Steve has created a paper on some possible upcoming ICAT
    enhancements.
  - Steve brought forward the new request of adding a DOI attribute to
    the DatafileCollection entity – there was no objection.
  - Rolf has released a new version of python ICAT 0.10. The release
    includes some important improvements. Rolf would like to move to a
    major release 1.0 but this would require more user feedback.
  - Rolf is going to create and post a user survey on python ICAT in
    January to gather feedback.
  - Steve is putting in JMS calls for the IDS to allow the Dashboard to
    gather information on what the IDS is being used for. The JMS
    logging will be for all calls.
  - The TopCAT in development can now combine columns on browsing. You
    can also specify custom templates for cells and a custom JPQL
    expression for the combining of columns.
  - The Dashboard now has a full stack skeleton with some data being
    displayed in graphs. Development is being pushed to fill out the
    Skeleton for the first sprint review meeting at the end of January.
  - Tom reported on the recent ICAT steering group meeting. The main
    point from the meeting was the plan to co-locate the next
    face-to-face ICAT meeting with the NOBUGS conference being
    organised by ESS in Copenhagen in October.
  - Shelly is preparing specification/requirements for an alternative
    authorization
scheme.

# Actions

|      |                                                                                                  |          |
| ---- | ------------------------------------------------------------------------------------------------ | -------- |
| ITEM | DESCRIPTION                                                                                      | ASSIGNED |
| 92.0 | Provide feedback on the ICAT enhancements paper. Even if there is no feedback respond with such. | All      |
| 92.1 | Provide feedback on the idea of adding a DOI attribute to the DatafileCollection.                | All      |
| 92.2 | Provide information on LSF’s use and potential future use of ICAT components.                    | Jianguo  |
| 92.3 | Create user survey for Python ICAT.                                                              | Rolf     |
| 91.0 | Add Puppet modules to contrib                                                                    | Peter    |
| 85.3 | Migrate ICAT Manager to the ICAT project GitHub                                                  | Andy     |
| 74.0 | Look into JDBC connector resilience with Wildfly                                                 | Steve    |
